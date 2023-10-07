# DVDRENTAL REST API

This is a simply REST API i've been created due my homework on week 8 independen study at Rakamin Academy.
The entire application is builded using `node.js`, `express` and `postgresql` as a database, and this application is currently running only on local server.
to use this application, you need to install the package first using the following command below on the terminal:

## Install

    npm install

## Run the app

    npm run start
    localhost:9000/dvd/

## Seeding the database

    npm run seed

## Database Migrations

    db-migrate up
    db-migrate down

# Features

The feature of this REST API is described below.

## Get list of Films

`GET /films/`

    http://localhost:9000/dvd/films

## Get a specific Films by ID

`GET /films/id`

     http://localhost:9000/dvd/film/1

## Get a specific Films by Category

`GET /films/category`

     http://localhost:9000/dvd/film/action

## Create a new Films

`POST /film/`

    http://localhost:9000/dvd/film

## Update a specific Film

`PUT /film/id`

    http://localhost:9000/dvd/film/1

## Delete a specific Film

`DELETE /film/id`

    http://localhost:9000/dvd/film/1

## Get list of categories

`GET /category/`

    http://localhost:9000/dvd/category

## Get a specific category by ID

`GET /category/id`

     http://localhost:9000/dvd/category/1

## Create a new category

`POST /category/`

    http://localhost:9000/dvd/category/

## Update a specific category

`PUT /category/id`

    http://localhost:9000/dvd/category/1

## Delete a specific category

`DELETE /category/id`

    http://localhost:9000/dvd/category/1

## Authors

- [**Gilang Fatahilah**](https://instagram.com/gilanqf)
