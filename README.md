# Watto's Spaceship Emporium

A simple application with support for:

* gulp
* sass
* sourcemaps
* browser-sync
* autoprefixer
* minification


## Installation

#### Node
Make sure Node and `npm` are installed on your machine. Install it via the [Node homepage](https://nodejs.org/en/) or using `homebrew` on OSX:

```
brew install node
```

Installing Node will also install `npm`.


#### Clone the repository

```
git clone https://github.com/fidelhech/watto-spaceships.git && cd watto-spaceships
```

#### Install dependencies

```
npm install
```


## File Structure

```
/
|-- css
|   |
|   |-- maps
|   |   |
|   |   |--styles.css.map
|   |-- styles.css
|   |
|-- img
|   |  
|-- js
|   |
|   |--maps
|   app.js
|   |
|-- src
|   |
|   |-- js
|   |   |
|   |   app.js
|   |   |
|   |-- sass
|   |   |
|   |   |-- styles.sass
|   |
|   |-- templates
|   |
|-- views
|   |
|   |--listings.html
|   |--single.html
|   |
|- gulpfile.js
|- index.html
|- package.json
```

All code is written in the `src` folder and then piped into `css, js` folders.

### Gulp

Using the power of node streams gulp makes things simple like never before. Automate and enhance development's workflow.

### Sass

This project encourages Sass use. Keep your Sass files modular inside `src/sass` ([more info on partials here](http://sass-lang.com/guide)).

```
// styles.sass

```

## Development

The first time you start a project, you will need to create your `css, js` folders in order for Browser-sync to successfully serve your project's files.

Run

```
gulp init
```

then

```
gulp dev
```

`gulp init` creates your `css, js` directories and `gulp dev` will start a [Browser-sync](https://browsersync.io/) server and will reload on all Sass and JS file changes.

*Note: only run `gulp init` the first time you start a project. You will need to initialize it yourself.*


## Production


##Author

Fidel Hechavarria
