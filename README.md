****Bookstore-Application****

The Bookstore-Application is a simple book management application that includes user authentication and CRUD operations for books. It is built using Node.js, Express, and MongoDB.


**Setup Instructions**

***Prerequisites***

Please ensure the following are installed:

- Node.js and npm

- MongoDB

- Git


***Clone the Repository***
```
git clone https://github.com/<your-username>/Bookstore-Application.git
cd Bookstore-Application
```
*Install Dependencies*
```
npm install
```
***Configure Environment Variables***

Create a .env file with the following details:
```
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```
***Start the Server***
```
npm start
```
Server will be accessible at http://localhost:3000

**API ENDPOINTS**

**Authentication**
```
POST /api/auth/register - Register a new user
``` 
```
{
  "username": "example",
  "password": "password123"
}
```
- POST /api/auth/login - Authenticate user and receive a JWT token
```
{
  "username": "example",
  "password": "password123"
}
```
**Books Management**

- GET /api/books - Retrieve a list of all books

- GET /api/books/:id - Retrieve details of a specific book

- POST /api/books - Add a new book
```
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2024
}
```
- PUT /api/books/:id - Update book information
```
{
  "title": "Updated Title",
  "author": "Updated Author"
}
```
- DELETE /api/books/:id - Delete a book from the database

**Assumptions and Enhancements**

- JWT is implemented for authentication and authorization.

- MongoDB is used for data persistence.

- API error handling ensures user-friendly error messages.

- Data validation is applied for secure inputs.

- Application design allows for easy future enhancements.
