Project 2: The Nervous System (Backend API)
Overview
A RESTful API built with Node.js and Express. Handles application logic, validates input, and communicates state via JSON and HTTP status codes.

API Endpoints

Method	Endpoint	Description	Status Code
GET	/api/tasks	Retrieve all tasks	200 OK
GET	/api/tasks/:id	Retrieve single task	200 OK / 404 Not Found
POST	/api/tasks	Create a new task	201 Created / 400 Bad Request
PUT	/api/tasks/:id	Update a task	200 OK / 404
DELETE	/api/tasks/:id	Delete a task	204 No Content / 404

Core Concepts

1. RESTful Naming: Resources are Nouns, Methods are Verbs.
2. The Gatekeeper Rule: Syntactic & Semantic validation on POST/PUT routes.
3. JSON: The Neurotransmitter of the system.