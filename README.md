# personal-notes-mgr-api

REST API for managing personal notes.

A complete RESTful API created using Node.js and Express. We have used MongoDB as the database and mongoose as the ORM library which makes it easier to interact with MongoDB.
Apart from this, we have used JSON Web Token (JWT) to add authentication. Using JWT, we can protect certain endpoints and ensure that user must be logged-in to access those.

Here are all the videos where we have created this API from scratch - [Youtube Playlist](https://www.youtube.com/playlist?list=PLWieu6NbbqTxb-mKf4J0_Pl3vmGWmOfmY)

## Setup and Installation

1. **Clone the repo from GitHub**
   ```sh
   git clone https://github.com/pairlearning/personal-notes-mgr-api.git
   cd personal-notes-mgr-api
   ```
2. **Install all npm dependencies**
   ```sh
   npm install
   ```
3. **Setup MongoDB**

   There are lots of options available to have a running MongoDB instance:
   - a typical way is to download the community edition from [here](https://www.mongodb.com/download-center/community) and install locally on the machine
   - another option is to spin-up an instance on the cloud. Here are step-by-step instruction for that - [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started)
   - another option is by running a mongodb docker container. If docker is installed, its simply a matter of running single command to spin-up a database instance:
     ```sh
     docker container run --name mongodb -d -p 27017:27017 mongo
     ```
4. **Update database URL in config.js file**
   
   once you have the DB URL, specify that in config.js file:
   ```js
   module.exports = {
    MONGODB: 'mongodb://localhost:27017/personalnotesmgr',
    ...
   };
   ```
5. **Run npm start the start the application**
   ```sh
   npm start
   ```
   this runs at port 3300 and hence all enpoints can be accessed starting from http://localhost:3300



