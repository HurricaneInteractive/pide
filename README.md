# Pide
A mashup of technologies all trying to display spotify data in some way shape or spice

## Setup
- Clone the repo
- Run `npm install` or `yarn` to install the the packages
- Depending on which project you are working on, you may need to run this command in the `cumin, masala & paprika` folders.

## Commands
- `npm start`: Starts an express server (this is for the live environment)
- `npm run start:cumin`: Starts gulp watch for global styling & `ng serve` in the `cumin` folder

## Creating a command
- Go to the `package.json` file in the root of the project and add a entry into the `scripts` object
- Copy `start:cumin` as a reference
- `\"gulp\"`: Should stay the same. This compiles the global styling
- `\"cd cumin && ng serve\"`: Should be changed to `cd` into your working directory and (&&) run your build script.
- Add entry under "Commands" in README.md