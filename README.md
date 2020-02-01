# hacker-news-feed-api

This project was built with Turbo 360. To learn more, click here: https://www.turbo360.co

## Instructions
After cloning into repo, cd to project root directory and install dependencies:

```
$ npm install
```

To run dev server, install Turbo CLI globally:

```
$ sudo npm install turbo-cli -g
```

Then run devserver from project root directory:

```
$ turbo devserver
```
Then to first populate the DB run:

```
$ curl -H 'Content-type: application/json' -X GET  http://localhost:3000/api/fetch
```
