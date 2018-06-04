# Project Description 
Basic node application that retrieves data to/from mongodb.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
"NodeJs": "v8.11.2"
"express": "~4.16.0"
"mongodb": "^3.0.5"
"jade": "~1.11.0" or "pug": "^2.0.3"
"monk": "^6.0.6"
"nodemon" : "1.17.5"
```
### Reference Links
* https://closebrace.com/tutorials/2017-03-02/the-dead-simple-step-by-step-guide-for-front-end-developers-to-getting-up-and-running-with-nodejs-express-and-mongodb
* https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/?_ga=2.106960139.829613724.1527998495-663949213.1527998495
* https://closebrace.com/cheatsheetthanks
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2 (Raw: https://gist.githubusercontent.com/PurpleBooth/109311bb0361f32d87a2/raw/8254b53ab8dcb18afc64287aaddd9e5b6059f880/README-Template.md )

## Scripts required for running the app

### To start the server

Navigate to rootfolder ie., nodetest1 (located in Documents\projects\)
```
npm start
```

### Auto refresh/start the server or listen to the changes

To auto re-start the node server when changes are made to the project files
```
nodemon app.js
```

### Work with Mongodb

To start the mongodb server, Navigate to Mongodb bin folder (Documents\projects\mongodb-osx-x86_64-3.6.5\bin), then run below command

```
mongod --dbpath /Users/prudhvi/Documents/projects/nodetest1/data
```

To work with mongo db, Navigate to Mongodb bin folder (Documents\projects\mongodb-osx-x86_64-3.6.5\bin), then run below command

```
bin mongo
```
		
Once connection is established, create the db. If the db does not exist, a new db with that name will be created

```
use nodetest1

```
		
Write data to db

```
db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })
```

Write multiple records to db

```
* ** newstuff = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
* ** db.usercollection.insert(newstuff);
```

Pretty print

```
db.usercollection.find().pretty()
```

## Links to access the app (localhost)

* http://localhost:3000/
* http://localhost:3000/helloworld
* http://localhost:3000/userlist
* http://localhost:3000/adduser

## Links to access the app (Heroku - Local)
* http://localhost:5000/userlist
* http://localhost:5000/newuser

## Links to access the app (Heroku - Remote)
* https://nodetest1-kpk.herokuapp.com/userlist
* https://nodetest1-kpk.herokuapp.com/newuser

## Authors

* **Prudhvi Kanteti** - *Initial work* - [Nodetest1 App](https://github.com/pkanteti/nodetest1)

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE.md](LICENSE.md) file for details