const del = require('del');
const { getConfig } = require('@elderjs/elderjs');

const { distDir } = getConfig();

console.log(' Clearing out public folder.');
del.sync(`${distDir}*`);

// this file is optional, but is included in the template
// to prevent inconsistencies and hard to debug problems.