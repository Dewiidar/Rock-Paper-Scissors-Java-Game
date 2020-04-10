# Rock-Paper-Scissors-Java-Game
Rock Paper Scissors Java Game

## Game play:
The game has two modes:
##### 1. Player (player 1) vs. Computer (player 2) 
- You should choose a move from the images on the left  - Then click “Play” button at the bottom of the page. 
- Results will appear and score will be counted.
##### 2. Computer vs. computer 
- Note: choices entered by user are ignored and backend generates random choices for player 1 and player 2

## Development notes:
- Frontend used: Angular
- Backend used: Java (SpringBoot with Gradle)

## Running app locally:
###### For SpringBoot, go to root directory and run: 
    ./gradlew bootRun
######For Angular, go to directory (src/main/webapp/angular-app/) and run: 
    ng serve

## Notes: 
#### Build Angular production version:
###### - In Angular project directory (src/main/webapp/angular-app/), we can use the following command to build a production version in the Tomcat server’s folder named static to be served within Java Spring Boot application:
    npm run build-prod
