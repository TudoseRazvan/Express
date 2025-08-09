// npm -- global command, comes with node
// npm --version

// local dependecy - use it only in this particular project
// npm install <package_name>

// global dependency - use it in any project
// npm install -g <package_name>

// package.json - manifest file (stores important info about project/package)
// npm init - creates package.json file
// npm init -y - creates package.json file with default values

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);