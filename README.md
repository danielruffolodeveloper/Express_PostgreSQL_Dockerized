# Express - Postgress Dockerized Example App
- An example app highlighting how to use Express.js with Postgress to build a easy REST Api for your applications.
- The solution is a simple app enabling to create a note with a title and content element
- The solution also goes into detail about Docker and how it can be used to make your development environment set up very easy
- This repo is functionality complete and is intended for demonstraition purposes, more can be done to make this secure for production such as managing secrets for database credentials and protecting attacks from occuring in the runtime

# Getting started

To get the Node + Postgres server running locally using docker-compose:

- Clone this repo
- run `docker-compose build` to build the images defined 
- run `docker-compose run notebook npm run migrate` to run the sequelize sync
- run `docker-compose up` to start the Postgres and node containers
- navigate to `localhost:3000` to hit the base route of the application

To create a note, Use a tool such as Insomnia or Postman to make a PUT request to:
- `http://localhost:3000/notes` with a JSON body containing title and content properties

To retrieve all notes, Use a tool such as Insomnia or Postman or a bowser to make a GET request to:
- `http://localhost:3000/notes/all` and you will recieve a JSON response containing a array of objects

To retrieve a note by id, Use a tool such as Insomnia or Postman or a bowser to make a GET request to:
- `http://localhost:3000/notes/:id` and you will recieve a JSON response containing a array of objects specific to the id you passed

To Delete a note, Use a tool such as Insomnia or Postman or a bowser to make a DELETE request to:
- `http://localhost:3000/notes/:id` and you will delete the record associated with the id, status 200 will indicate successful delete of a note

## Dependencies
- [npm](https://www.npmjs.com/) - package manager for installing dependencies
- [node](https://nodejs.org/en/) - JavaScript runtime
- [expressjs](https://github.com/expressjs/express) - Web application framework 
- [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres
- [Postgres](https://www.postgresql.org/) - Relational database used for storing and serving data in a relational manner
- [Docker](https://www.docker.com/) - Containerization for local environment



