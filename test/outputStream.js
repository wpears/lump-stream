var Writable = require('readable-stream/writable');
var inherits = require('inherits');

inherits(LogStream, Writable);

LogStream.prototype._write = function(chunk, enc, cb){
  console.log("\nSTREAM LABEL: %s", this._label);
  console.log("\nGOT CHUNK WITH LENGTH: %d", chunk.length);
  console.log("\nCHUNK TYPE: %s", Buffer.isBuffer(chunk) && "Buffer" || typeof chunk);
  console.log(chunk);
  console.log("\n");
  cb();
}

function LogStream(label){
  if(!(this instanceof LogStream)) return new LogStream(label);
  this._label = label;
  Writable.call(this);
}

module.exports = LogStream;
