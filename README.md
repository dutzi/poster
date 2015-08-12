# ![Poster Logo](assets/logo500x500.png) Poster

Turn your Facebook comments into awesome posters, with one click.

## setup

```bash
$ npm install
$ bower install
$ mkdir data
$ mkdir data/db
```

## run

```bash
$ mongod --dbpath data/db
$ grunt serve
```

## deploy

First, initialize a Heroku git repo in the "dist" folder:

```bash
$ mkdir dist
$ cd dist
$ heroku login
$ heroku git:clone -a comment-poster
$ mv comment-poster/* ./
$ mv comment-poster/.git ./
$ rm -R comment-poster
```

(Heroku will checkout the content to "comment-poster", we want to move it to its containing folder)

Now, whenever you want to build and deploy `$ grunt heroku` will do the job.
If you only want to deploy, type: `grunt buildcontrol:heroku`.

![Poster Slogan](assets/slogan.png)

## printing

To override bootstrap's printing CSS rules I modified app.scss to use 'bootstrap-no-print.scss'. It's similar to 'bootstrap.scss' except I removed this line: `@import "bootstrap/print";`.
