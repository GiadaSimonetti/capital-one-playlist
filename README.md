# The Playlist

## Task description

**_Introduction_**

You have just been hired by the producer (=the interviewer =the product manager) of a new radio show.
You have been given the following catalogue of music:


| Title      | Artist         | Album  | Year |
| ------------- |:-------------:| -----:| ------:|
| One More Time | Alison Moyet | The Turn | 2007 |
| Taurus II | Mike Oldfield | 5 Miles Out | 2013 |
| F4 | Spooky Tooth | The Island Years | 2015 |
| Love Dance | The Cure | Disintegration | 2010 |
| The Children Of Rarn | T-Rex | T-Rex | 2014 |
| Another Day | Alison Moyet | The Turn | 2007 |
| Face-off | Spooky Tooth | The Island Years | 2015 |


The DJ is starting in an hour, and she needs to view a list of songs for a given year, in a browser.

**_Requirements_**

Each song in the list should contain the following information:
- Title
- Artist
- Album
- Year

As time is tight, the aim is to deliver the minimum viable product which un-blocks the DJ to play the songs.

Assume that you can give the DJ simple instructions on how to use the UI. You can use google or the interviewer for information as needed.

## Approach

I decided to create a React app and use jest and enzyme to test the components. I used snapshots to test the rendered jsx as a whole.


## Instructions

Prerequisites
node installed

- to run the web app

```sh
$ git clone https://github.com/GiadaSimonetti/capital-one-playlist
$ cd capital-one-playlist
$ npm install
$ npm start
```
Your browser should open on localhost:3000, if it doesn't go directly to localhost:3000.

![web app](./images/web-app.png?raw=true)
![web app](./images/web-app2.png?raw=true)

- to run the tests:

```sh
$ npm run test
$ a
$ u
```

- to see the test coverage:

```sh
$ npm run test -- --coverage
```

![test-coverage](./images/test-coverage.png?raw=true)
