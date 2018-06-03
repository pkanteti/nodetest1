To start the server
	➜ Navigate to rootfolder ie., nodetest1 (located in Documents\projects\) ➜ npm start


To auto re-start the node server when changes are made to the project files
	➜ Navigate to rootfolder ie., nodetest1 (located in Documents\projects\) ➜ nodemon app.js


To start the mongodb server
	➜ Navigate to Mongodb bin folder (Documents\projects\mongodb-osx-x86_64-3.6.5\bin), then run below command
		➜ bin mongod --dbpath /Users/prudhvi/Documents/projects/nodetest1/data


To work with mongo db 
	➜ Navigate to Mongodb bin folder (Documents\projects\mongodb-osx-x86_64-3.6.5\bin), then run below command
		➜ bin mongo
		Once connection is established
			➜ use nodetest1 (db name in mongodb)
		Write data to db
			➜ db.usercollection.insert({ "username" : "testuser1", "email" : "testuser1@testdomain.com" })
		Write multiple to db
			➜ newstuff = [{ "username" : "testuser2", "email" : "testuser2@testdomain.com" }, { "username" : "testuser3", "email" : "testuser3@testdomain.com" }]
			➜ db.usercollection.insert(newstuff);
		Pretty print
			➜ db.usercollection.find().pretty()
