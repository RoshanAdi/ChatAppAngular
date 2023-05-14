
# Chatapp

#About#

A frontend for a simple chat application made with angular.
Backend made with Spring boot.
Three child components such as chat area, typing area and the list of online users area can be found.
A Websocket has been used as the transmission protocol. 

#Features and fuctionalities#

Uses can login upon providing a nickname.
Websocket connection is establishing once login page initiate.
public chats and private chats with active users.
Identity of the user based on the websocket session adress.


#Links#
Backend - https://github.com/RoshanAdi/chatAppSpringboot
Docker image - https://hub.docker.com/repositories/roshanadi
Live application - http://chatapp-frontend.s3-website.ap-south-1.amazonaws.com/



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
