# Movie and TV Show API Documentation

This documentation outlines the API routes for managing movies and TV shows using the Express framework and MongoDB.
# Installation
- Run `npm i` to install the necessary modules.
- Enter MongoDB Atlas URL in database/db.js to connect your database to the server.
- Run `node index.js` to start the server.
## Table of Contents

- [Movie Routes](#movie-routes)
  - [Get All Movies](#get-all-movies)
  - [Update Movie](#update-movie)
  - [Create Movie](#create-movie)
  - [Delete Movie](#delete-movie)

- [TV Show Routes](#tv-show-routes)
  - [Get All TV Shows](#get-all-tv-shows)
  - [Update TV Show](#update-tv-show)
  - [Create TV Show](#create-tv-show)
  - [Delete TV Show](#delete-tv-show)

---

## Movie Routes

### Get All Movies

Endpoint: `GET /movie/allMovies`

Retrieve a list of all movies.

**Response:**

- Status Code: 200 (OK)
- Response Body: Array of movie objects

### Update Movie

Endpoint: `PUT /movie/update/:movie_id`

Update the title of a movie by providing the movie ID.

**Request Body:**

- `title` (string): The new title of the movie.

**Response:**

- Status Code: 200 (OK)
- Response Body: Updated movie object

### Create Movie

Endpoint: `POST /movie/create`

Create a new movie.

**Request Body:**

- `title` (string): The title of the movie.
- Other movie details as needed.

**Response:**

- Status Code: 200 (OK)
- Response Body: Success message

### Delete Movie

Endpoint: `DELETE /movie/delete/:movie_id`

Delete a movie by providing the movie ID.

**Response:**

- Status Code: 200 (OK)
- Response Body: Deleted movie object

---

## TV Show Routes

### Get All TV Shows

Endpoint: `GET /tvShow/alltvShows`

Retrieve a list of all TV shows.

**Response:**

- Status Code: 200 (OK)
- Response Body: Array of TV show objects

### Update TV Show

Endpoint: `PUT /tvShow/update/:show_id`

Update the title of a TV show by providing the show ID.

**Request Body:**

- `title` (string): The new title of the TV show.

**Response:**

- Status Code: 200 (OK)
- Response Body: Updated TV show object

### Create TV Show

Endpoint: `POST /tvShow/create`

Create a new TV show.

**Request Body:**

- `title` (string): The title of the TV show.
- Other TV show details as needed.

**Response:**

- Status Code: 200 (OK)
- Response Body: Success message

### Delete TV Show

Endpoint: `DELETE /tvShow/delete/:show_id`

Delete a TV show by providing the show ID.

**Response:**

- Status Code: 200 (OK)
- Response Body: Deleted TV show object

---


