# welcome to Flights service 
## Project setup 
-clone the projext on your local 
-Execute 'npm install' on the same path as of your root directory 
-Create a `.env` file in the root directory and the following env variable 
 -`PORT=3000`
 -Inside the `src/config` create a new file `config.json` and then following piece of json
 ...
 {
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "flights_search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 }
 ...