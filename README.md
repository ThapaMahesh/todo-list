# Developer test

Implementation of a simple To-Do list as a web application, using HTML5 on the frontend and any technology on the backend side. The application allows you to add, view and mark as done various tasks. For backend - write a simple API script in PHP, NodeJS or any other language. 

## Functionality 
The application displays a list of tasks to be performed. Tasks are divided into *done* and *to be done*.
  - Tasks *done* are crossed out and are marked in color (`#9eb2c0`) and the check box on the left is marked.
  - Tasks *to-do* are marked with a color (`#2e3641`) and an unchecked check box on the left. 
  - A field with the possibility of adding a new task is always displayed under the task list. The new task is always *to-do*.
  - After adding a new task, it is added above the field for adding a new task. A field with the option of adding a new task is always at the very bottom of the list.
  - You cannot add a task without entering the title (validation should be on the `frontend` and` backend` sides).
  - Each task can be deleted by clicking on the trash can icon.
  - You can change order of tasks by moving them with *drag & drop*.
  
## Frontend
Applications design:

![Application Layout](https://raw.githubusercontent.com/qunabu/junior-recruitment-task/master/assets/to-do-list.png) 

  - In `assets` folder is a `PSD` photoshop file with application design. 
  - Application should be written as `Single Page Application`, one HTML5 file with one main `CSS` file and one main `JavaScript` file. 
  - Communication between Frontend and Backend should be made in the background, without reloading the page, preferably using `AJAX`. 
  - Application style should be build with `CSS preprocessor`, preferably `SCSS`.  
  - Application logic should be divided with `Model-View-Controller` or `Model-View-Whatever` architecture.
  - Please do not use any JS libraries, or use them with minimal ammount. We prefer `Vanilla JS`.
  - Font that needs to be used is [Lato](https://www.google.com/fonts#UsePlace:use/Collection:Lato), by [Łukasz Dziedzic](http://www.lukaszdziedzic.eu/), in Normal and Bold versions. Please use this version - [Google Fonts](https://www.google.com/fonts#UsePlace:use/Collection:Lato).
  
## Backend [Optional]
  - API should be written according to the REST specification. All queries and responses are sent in JSON format, if there is no error, the response code is 200, if there is an error of 400 and an array with errors.
  - There will be no user service or authentication - each person has access to creating, reading, updating and deleting.
  - You can use https://todo-simple-api.herokuapp.com if You wish to skip `Backend` development.
  
## Misc
  - `Frontend` needs to be available in `to-do-list/frontend` for example `http://localhost/to-do-list/frontend`.
  - `Backend` needs to be available in `to-do-list/backend` for example `http://localhost/to-do-list/backend` (You can use https://todo-simple-api.herokuapp.com/).
  - The code should be **readable and described** by comments, JavaScript according to [documentationjs](https://github.com/documentationjs/documentation/blob/master/docs/GETTING_STARTED.md), PHP according to [phpdoc](https://www.phpdoc.org/docs/latest/getting-started/your-first-set-of-documentation.html) and other languages according to the selected specification.
  - We leave the application in the development version, we do not minify the files, we do not compress them, we do not combine them, etc.
  - Please attach instructions on how to run the application.
  
## Good luck

### Copyrights

Graphic design is a rewritten version of [To Do List (PSD)](https://www.behance.net/gallery/10852567/To-Do-List-(PSD) by [Marijan Petrovski](https://www.behance.net/psdchat).

The task is distributed under a license [MIT](https://opensource.org/licenses/MIT).
