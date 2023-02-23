# CRUD System using React, Node.js, Express and SQL Database

## Introduction:
This project is a CRUD (Create, Read, Update, Delete) system built using React, Node.js, Express, and SQL database. The system allows users to perform CRUD operations on a list of items. The frontend of the system is built using React and the backend is built using Node.js and Express. The database used is SQL.

## Architecture:
The frontend is the view and is responsible for displaying the user interface. The backend is the controller and is responsible for handling requests from the frontend and communicating with the database. The database is the model and is responsible for storing the data.

## Functionality:
The system has the following functionality:

- **Create:** Users can create a new item by providing its name, description, and other relevant information. Once the item is created, its information is stored in the SQL database and is displayed on the list of items.
- **Read:** Users can view the list of items and click on an item to view its details. The details include the name, description, and other relevant information about the item.
- **Update:** Users can update the information of an item by clicking on the edit button and providing the new information. Once the information is updated, it is stored in the SQL database and is displayed on the list of items.
- **Delete:** Users can delete an item by clicking on the delete button. Once the item is deleted, it is removed from the SQL database and is no longer displayed on the list of items.

## Security:
The system has the following security measures:

- **Input validation:** All user inputs are validated to prevent SQL injection attacks and other types of attacks.
- **Authentication:** The system uses JSON Web Tokens (JWT) for authentication. Once a user logs in, a JWT is created and stored in local storage. This JWT is then sent with every request to the backend to authenticate the user.
- **Authorization:** The system uses role-based access control (RBAC) for authorization. There are two roles in the system: user and admin. Users can perform CRUD operations on their own items, while admins can perform CRUD operations on all items.

## Conclusion:
This CRUD system using React, Node.js, Express, and SQL database provides a scalable and secure solution for managing a list of items. The system can be easily extended to include additional functionality such as search, filtering, and sorting. The system can also be adapted to work with other types of databases, such as NoSQL databases.
