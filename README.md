# Bookmark'd App

## Overview

Bookmark'd is a simple web application that allows users to add and manage bookmarks for helpful websites in their coding journey. Users can add the title and URL of the website, and then access these bookmarks later. This project was built as part of a coding bootcamp assignment to practice building a full-stack CRUD application using Express.js for the backend and React.js for the frontend.

## Features

- View a list of all bookmarks
- Click on a bookmark to visit the linked website
- Add a new bookmark with a title and URL
- Delete existing bookmarks

## Backend

The backend API is deployed and accessible at https://group-be-dev.onrender.com/

It was built using Express.js and MongoDB for data storage.

## Frontend

The frontend of the Bookmark'd app is deployed and accessible at insert_frontend_deployed_site_link_here. It was built using React.js and communicates with the backend API to fetch and manage bookmarks.

## Screenshots





## Wireframe

### Model

- **Bookmark Model**: Represents a bookmark with properties for title and URL.

### View

#### Header

- **Title**: "BOOKMARKS"

#### Add Bookmark Form

- **Input Field 1**: Website Address (e.g., google.com)
- **Input Field 2**: URL (e.g., [https://www.google.com](https://www.google.com/))
- **Button**: "ADD"

#### Bookmarked Websites Section

- Bookmark Cards

  : Displayed below the form

  - **Title**: Name of the website
  - **Clickable**: Clicking on the title takes you to the linked website

### Controller

- Express Routes:
  - **GET /bookmarks**: Retrieve all bookmarks from the backend.
  - **POST /bookmarks**: Create a new bookmark.
  - **DELETE /bookmarks/:id**: Delete a bookmark by its ID.
  - **PUT /bookmarks/:id**: Update a bookmark by its ID.

  ![Model-View-Controller Diagram](<M-V-C diagram.png>)



## Getting Started

To run this project locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open [http://localhost:3000](http://localhost:3000/) in your browser to view the app.

## Technologies Used

- Frontend: React.js, React Router
- Backend: Express.js, MongoDB
- Deployment: Render (backend), --url-- (frontend)

## Credits

This project was created by Tim Rodriguez, Mackenzie Wicker, Yuliya Buiko, Roman Larionov as part of the General Assembly Software Engineer Immersive bootcamp curriculum.





