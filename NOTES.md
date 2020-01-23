database design:
https://dbdesigner.page.link/jdLLjRXkiM41KYk56

--- basic server

touch index.js
npm init > go through steps
npm i express knex helmet knex-cleaner sqlite3
"scripts": {
    "server": "nodemon index.js"
}, 
    > add to package.json

touch server.js


--- database

knex init
> setup knexfile.js
knex migrate:make [migration-name]
> write migration in file
knex migrate:latest
knex seed:make 00-cleanup
knex seed:make 01-recipes
knex seed:run