var fs = require('fs');
var path = require('path');

var lump = require('../index.js');
var outputStream = require('./outputStream.js');

var cons = path.join(__dirname, 'cons.txt');


fs.createReadStream(cons).pipe(lump(Math.pow(2,17))).pipe(outputStream("FIRST STREAM, 2^17 byte limit"));

fs.createReadStream(cons).pipe(lump(0)).pipe(outputStream("SECOND STREAM, 0 byte limit"));

var objLump = lump.obj(2);

objLump.pipe(outputStream("Object stream, 2 object limit",{objectMode:true}));

objLump.write({a:2})
objLump.write({b:4})
objLump.end({c:8})
