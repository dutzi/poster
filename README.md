# Poster

![Poster Logo](assets/logo500x500.png)

## install

1. `$ npm install`
2. `$ bower install`

## run

`$ mongod --dbpath data/db`

`$ grunt serve`

## deploy

`$ grunt buildcontrol:heroku`

![Poster Slogan](assets/slogan.png)

## Printing

To override bootstrap's printing CSS rules I modified app.scss to use 'bootstrap-no-print.scss'. It's similar to 'bootstrap.scss' except I removed this line: `@import "bootstrap/print";`.
