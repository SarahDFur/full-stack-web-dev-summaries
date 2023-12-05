/* 
    npm - global command, comes with code
    npm --version
*/

/* IMPORTANT:
    local dependency - use it only in this particular project
    npm i <packageName>
*/

/*
    gloabal dependency - use it in any project
    npm install -g <packageName>
    sudo npm install -g <packageName> (mac)

    - use it in the computer terminal/ node.js terminal
*/

/*
    package.json - manifest file (stores important info about project/package)
    manual approach (create package.json in the root, create properties etc)
    npm init (step by step, press enter to skip)
    npm init -y (everything default)
*/

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

// makes it one (flat) array

/*
    npm install - in a project will scan the .json files and then install everything you don't have
*/

/*
    npm i nodemon --save-dev / -D
        (-D or --save-dev)
*/

/* UNINSTALLING PACKAGES:
    npm uninstall <packageName>
*/