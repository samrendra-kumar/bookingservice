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
 -Once you've added your db config as listed above,go to the src folder and execute `npx sequelize db:`
 and then execute 
 `npx sequelize db:migrate`
 ...

 ##DB Design 
 -Airplane Table 
 -Flight 
 -Airport
 -City 

 ## Tables 

 ### City -> id ,name,created_at ,updated_at 
 ### Airport -> id,name,adress,city_id,created_at,updated_at 
 Relationship -> City has many airports and Airports belongs to a city (one to many )


