# Burger - Sequelized + Handle Bars + Node Express Project

## Overview

- Create MySQL, Node, Express, Handelbars. 

## Status 
- Application at the time to submit is incomplete. 
- MySQL model db is working, same for Node and Express
- Code has been layed out for most of the components
- Directory structure is finished:

ggarcia@ggarcia-lpwin7 MINGW64 ~/Documents/Coding_BootCamp/GitHub/burger (master)
$ ls -ltr
total 42
-rw-r--r-- 1 ggarcia 197121    31 May  6 21:55 README.md
-rw-r--r-- 1 ggarcia 197121     0 May  6 21:56 server.js
drwxr-xr-x 1 ggarcia 197121     0 May  6 21:57 node_modules/
-rw-r--r-- 1 ggarcia 197121   575 May  6 21:57 package.json
-rw-r--r-- 1 ggarcia 197121 23332 May  6 21:57 package-lock.json
drwxr-xr-x 1 ggarcia 197121     0 May  6 22:41 db/
drwxr-xr-x 1 ggarcia 197121     0 May  6 22:53 config/
drwxr-xr-x 1 ggarcia 197121     0 May  6 22:59 models/
drwxr-xr-x 1 ggarcia 197121     0 May  6 23:10 controllers/
drwxr-xr-x 1 ggarcia 197121     0 May  6 23:27 views/


Pending tasks
- Sequelized routes to work and test DB operations
- GUI to be completed

## Algorithm to apply

### Sequelized and backend
- Configure server.js to:
    - Require express, express-handlebars
    - 'Open' routes - burger controller
    - Listen to defined port 
        `var PORT = process.env.PORT || 4000;
        app.listen(PORT, function() {
            console.log("Listening on port:%s", PORT);
        });`



- Create `burgersController.js` under controllers directory: 
    - Write to define the following routes:
        - "/": redirect to a default page
        - "/burgers": get burger information based on an index
        - "/burgers/create": post route to insert burger information into db Model

### GUI 
- Create java script to hold the main application:
    - Navigation component
    - Main container
        - Include logic to make an ajax call to get the burger information from the db
        - Include logic to handle the
    - Footer


