# EPG Screen

This repository includes component EpgScreen. The component serves for TV schedule displaying 
for a day.

* EPG Screen is created using React, Redux and Immutable.
* All TV shows is displayed for some channels.
* A marker indicates current time and reloads in real time.
* Current TV shows are highlighted.
* You can focus on current time using `NOW` button.
* Application is scalable for landscape.
* There is no any serious Redux layer in the application structure
because of the application has only one container component.

**Note:** The application is a demonstration instance. It works correctly in case of a TV schedule
for the current day.

## Table of Contents

- [Installation](#instalation)
- [API demo](#api-demo)
- [Production mode](#production-mode)
- [Development mode](#development-mode)

## Installation

**Note:** Make sure git, NodeJs and NPM are installed

* Clone the current repository:
```bush
git clone https://github.com/serjilyashenko/epg-screen.git
```
* For installation of npm dependencies execute from project folder:
```bush
npm install
```

## API demo

For demonstration purposes application uses
[Norigin Mock-API](https://github.com/NoriginMedia/mock-api/tree/cloudberry).
It is a npm dependency of the application.
* API demo server needs to be started in separate terminal.
* Run the next script. It uses abilities of the
[Norigin Mock-API](https://github.com/NoriginMedia/mock-api/tree/cloudberry) repository.
It updates epg data to the state of
a current day and starts demo server on `localhost:1337`.
```bash
npm run start:mock-api
```
* Check `localhost:1337`.

## Production mode

The result of the production mode is `public` folder. It includes `index.html` and `bundle.js`.
The JS file is compressed.

* For project building in production mode execute the next command:
```sh
npm start
```

* The folder `public` can be used in any static server.
Or start `static-server` using the next command:
```bash
npm run static
```
* Check `localhost:8080`.

## Development mode

The development mode looks like production mode, but result `bundle.js` is not compressed.
Also a source-map will be generated if you use the development mode.

**Note:** Moreover you can run `dev server` for development mode build.

**Note:** For demonstration purposes `dev server` is recommended.

* Start `dev server` by the next command:
```bash
npm run dev-server
```

* Check `localhost:8081`.

* If you want to generate development mode build use next:
```bash
npm run dev
```

* The folder `public` can be used in any static server.
JS file will not be compressed and source map will be generated.
Or start `static-server` using the next command:
```bash
npm run static
```
* Check `localhost:8080`.
