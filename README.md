# Movie Search App

This README contains the details of the movie search app and its core features. 

## About & Features

* The Movie Search App retrieves data from [The Movie DB](https://developers.themoviedb.org/3/movies/get-popular-movies)
* The movies retrieved are 1-page long and listed accordingly in the components. 
* You can list the movies in the "/popular-movies" path and type in the search bar and list the ones you are looking for. 

## Technical Details
* The app is created with Ember JS and its offsprings. The installation and other necessary details to run the project is outlined below. 

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/mehmeteyupoglu/movie-search-app` this repository
* `cd movie-search-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
