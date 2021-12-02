# NodeJS-REST-API
 A simple pure NodeJS REST API with basic CRUD functions.
 
## How to use?
- Clone the project
- Run the below command in terminal.
- ```sh node app.js```
- Test the routes using [Postman](https://www.postman.com/)

## Routes
| Route | Method | Function |
| ------ | ------ | ------ |
| /api/todos | GET | Fetch all the ToDos |
| /api/todos/:id | GET | Fetch the ToDo with id |
| /api/todos/ | POST | Add a new ToDo with input as JSON |
| /api/todos/:id | PATCH | Update the ToDo with id |
| /api/todos/:id | DELETE | Delete the ToDo with id |
