# Poster

![Poster Logo](assets/logo500x500.png)

## install

```bash
$ npm install
$ bower install
```

## run

```bash
$ mongod --dbpath data/db
$ grunt serve
```

## deploy

First, initialize a git repo in the "dist" folder:

```bash
$ mkdir dist
$ cd dist
$ git init
$ git add .
$ git commit -m "First commit"
```

Now create a Heroku remote:

```
$ heroku create
Enter your Heroku credentials.
Email: ...
Password (typing will be hidden): ...
Creating floating-ridge-2049... done, stack is cedar-14
https://floating-ridge-2049.herokuapp.com/ | https://git.heroku.com/floating-ridge-2049.git
Git remote heroku added
```

Now, whenever you want to build and deploy `$ grunt heroku` will do the job.
If you only want to deploy, type: `grunt buildcontrol:heroku`.

![Poster Slogan](assets/slogan.png)

## printing

To override bootstrap's printing CSS rules I modified app.scss to use 'bootstrap-no-print.scss'. It's similar to 'bootstrap.scss' except I removed this line: `@import "bootstrap/print";`.
