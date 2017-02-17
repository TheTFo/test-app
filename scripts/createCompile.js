var fs = require('fs');
var dir = './.compiled';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}