# Mountain Trail Server

This is a skeleton server for the Mountain Trail store.
To use it:

        $ npm install
        $ node index.js

## Routes

The server handles the following routes:

1. Get Product by ID

        $ curl -i http://localhost:3000/api/products/10463

1. Get all Products

        $ curl -i http://localhost:3000/api/products

1. Get Product by (exact) Search

        $ curl -i http://localhost:3000/api/products?name=Meindl%20Borneo%202%20Lady

## Viewing the Database

The database is small, so you can either use the "Get all Products" API call,
or you can install an SQLite3 browser (eg http://sqlitebrowser.org/)

