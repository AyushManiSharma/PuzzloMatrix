# PuzzloMatrix
## Main Task

* An application for users to register an account and take quizzes on different code modules.
* Register an account by pressing the register button or by going to: /register
* Login by using the same credentials or by going to: /login
* after login, you will be presented with the categories available or go to: /category
* and then select a category like "JavaScript" : /quizzes/javascript


## Project Requirements 
* Use Node.js and Express.js to create a RESTful API.
* Use Handlebars.js as the template engine.
* Use MySQL and the Sequelize ORM for the database.
* Have both GET and POST routes for retrieving and adding new data.
* Use at least one new library, package, or technology that we haven’t discussed.
* Have a folder structure that meets the MVC paradigm.
* Include authentication (express-session and cookies).
* Protect API keys and sensitive information with environment variables.
* Be deployed using Heroku (with data).
* Have a polished UI.
* Be responsive.
* Be interactive (i.e., accept and respond to user input).
* Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
* Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Install and Run Instructions

* pull code into VS code
* run the server on localhost using npm start
* open the project on localhost:3001


## Final Work Review

### The following images demonstrates the application functionality:
![application starting page](/src/assets/image.png)
When the application is opened, this is the landing page shown. All of the pages scale with the size of the window.

![Login page](/src/assets/image-1.png)
When the "get started" button is clicked, you are brought to the login page. If you click register, it registers an account for with a username, email, and password.
![Alt text](/src/assets/image-3.png)

![Quiz categories](/src/assets/image-2.png)
Once logged in, the different categories of quizzes are shown. You can also press the log out button at the top right of the screen to log out of the account and return to the login screen.
