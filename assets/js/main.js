
function TodoModel(){

	var todos = [];
	const xhr = new XMLHttpRequest();

	return {
		get: function(){
			return todos;
		},
		getAll: function(callback){
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos = JSON.parse(xhr.response).data;
					callback(todos);
				} else {
					return {'error': 'Error'};
				}
			};

			xhr.open('GET', 'https://todo-simple-api.herokuapp.com/todos?page=6');
			xhr.send();
		},
		add: function(text, callback){
			var data = encodeURI('title='+text+'&description='+text+'&isComplete='+false);
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos.append(JSON.parse(xhr.response).data);
					callback(todos);
				} else {
					return {'error': 'Error'};
				}
			};

			xhr.open('POST', 'https://todo-simple-api.herokuapp.com/todos');
			xhr.send(data);
		},
		remove: function(id, callback){
			var index = todos.findIndex(lst => lst.id == id);
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos.splice(index, 1);
					callback(todos);
				} else {
					return {'error': 'Error'};
				}
			};

			xhr.open('DELETE', 'https://todo-simple-api.herokuapp.com/todos/'+id);
			xhr.send();
		},
		taskStatus: function(id, isComplete, callback){
			var newStatus = !(isComplete === "true");
			var index = todos.findIndex(lst => lst.id == id);
			var data = encodeURI('title='+todos[index].title+'&description='+todos[index].description+'&isComplete='+newStatus);
			console.log(data);
			xhr.onload = function () {
				if (xhr.status >= 200 && xhr.status < 300) {
					todos[index].isComplete = newStatus;
					callback(todos);
				} else {
					return {'error': 'Error'};
				}
			};

			xhr.open('PUT', 'https://todo-simple-api.herokuapp.com/todos/'+id);
			xhr.send(data);
		}
	}

}



function TodoView(model){
	return {
		updateDOM: function(){
			var todo_list = model.get();
			var html = '';
			for (var i = 0; i < todo_list.length; i++) {
				var checked_class = "color-dark";
				var checked = '';
				if(todo_list[i].isComplete){
					checked_class = "color-light";
					checked = 'checked';
				}
				html = html + '<tr class="list ' + checked_class + '">' +
			  					'<td class="checkers">' +
			  						'<label class="custom-checkbox">' +
				  						'<input '+checked+' type="checkbox" name="">' +
				  						'<span class="checkmark" data-id="'+todo_list[i].id+'" data-status="'+todo_list[i].isComplete+'"></span>' +
			  						'</label>' +
			  					'</td>' +
			  					'<td>' + todo_list[i].title + '</td>' +
			  					'<td class="actions"><i class="pointer fas fa-trash-alt remove"></i></td>' +
			  				   '</tr>';
			}

			var referenceNode = document.querySelector('.title');

			var old_list = document.querySelectorAll('.list');

			old_list.forEach(el => el.remove());

			referenceNode.insertAdjacentHTML('afterend', html);
		}
	}
}


function TodoCtrl(view, model){

	// init load and display
	model.getAll(function(data){
		view.updateDOM();
	});

	
	document.addEventListener('click', function(e){
		
		// change status of the todo task	
		if(e.target && e.target.classList.contains('checkmark')){
			model.taskStatus(e.target.dataset.id, e.target.dataset.status, function(data){
				view.updateDOM();
			});
		}

		// remove todo task
		if(e.target && e.target.classList.contains('remove')){
			var id = e.target.parentNode.parentNode.querySelector('.checkmark').getAttribute('data-id');
			model.remove(id, function(data){
				view.updateDOM();
			});
		}

		// add new todo task but make sure the first check input is valid
		if(e.target && e.target.classList.contains('add-icon') && e.target.classList.contains('pointer')){
			var text = e.target.parentNode.parentNode.querySelector('input').value;
			
			model.add(text, function(data){
				view.updateDOM();
			});
		}

 	});

	document.addEventListener('keyup', function(e){
		
		// check if there is input
		if(e.target && e.target.classList.contains('todo-input')){
			var text = e.target.value;
			var root = e.target.parentNode.parentNode;
			root.querySelector('.add-btn').classList.remove('color-dark');
			root.querySelector('.add-btn').classList.add('color-light');
			root.querySelector('.add-icon').classList.remove('pointer');
			if(text != ""){
				root.querySelector('.add-btn').classList.remove('color-light');
				root.querySelector('.add-btn').classList.add('color-dark');
				root.querySelector('.add-icon').classList.add('pointer');
			}
		}
	});

}

const model = TodoModel(),
      view = TodoView(model),
      ctrl = TodoCtrl(view, model);