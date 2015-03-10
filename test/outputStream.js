var Writable = require('readable-stream/writable');
var inherits = require('inherits');

inherits(LogStream, Writable);

LogStream.prototype._write = function(chunk, enc, cb){
  console.log("\nGOT CHUNK WITH LENGTH: %d\n", chunk.length);
  console.log("\nCHUNK TYPE: %s", Buffer.isBuffer(chunk) || typeof chunk);
  console.log(chunk);
  cb();
}

function LogStream(){
  if(!(this instanceof LogStream)) return new LogStream();
  Writable.call(this);
}
