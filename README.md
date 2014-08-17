# ![logo](https://cdn1.iconfinder.com/data/icons/de-munich-icon-pack/32x32/old-versions.png) releaser ![npm](https://badge.fury.io/js/releaser.png)

a minimalism style version-maker

## How to install

````
$ npm install releaser
````

## Usage

### Sample code

````javascript
var releaser = require('releaser');

// init instcance
var version = new releaser({
    devider: '.'
});

// init from string
var versionNumber = new releaser({
    version: "0.1.4"
}).number;

// update version
var newVesion = version.up(); // up to 0.0.1

// version detail
console.log(version);

// details look like:
{
  created: [Date],
  number: 2,
  version: '0.0.1',
  divider: '.'
}
````

## Run unit-test (Mocha)

````
$ git clone https://github.com/turingou/releaser.git
$ cd releaser
$ npm install 
$ npm test
````