# Tour of heroes using Prisma API


## Setting up your MongoDb
1. Make sure you have a running MongoDb Server  

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/yosiasz/tour-of-heroes-prisma
   cd tour-of-heroes-prisma
   ```


1. Client:
    Install the npm packages

   ```bash
   npm install
   ng serve --open
   ```
2. Server
    ```bash
        cd .\src\server\
        npm i
        Modify docker-compose.yml so that uri points to your MongoDB Server connection string.
                uri: mongodb://prisma:prisma@your.mongodb.server.ip
        docker-compose up -d
        prisma deploy
        node .\prisma\seed.js
        node .\server.js
   ```
    
3. Go to localhost:4200

## Technologies
- https://www.npmjs.com/package/mongodb
- https://expressjs.com/
- https://www.npmjs.com/package/prisma