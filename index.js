var Transform = require('readable-stream/transform');
var inherits = require('inherits');

inherits(Lump, Transform);


Lump.prototype._transform = function(chunk, enc, cb){
  this._buffers.push(chunk);
  this._bufferLen += chunk.length;

  if(this._bufferLen >= this._len){
    this.push(this.concat())
  }
  cb();
}


Lump.prototype._flush = function(cb){
  this.push(this.concat());
  cb(); 
}


Lump.prototype.concat = function(){
  var buffers = this._buffers;

  this.init();

  if(Buffer.isBuffer(buffers[0])) return Buffer.concat(buffers);
  return //object mode return val 
}


Lump.prototype.init= function(){
  this._buffers = [];
  this._bufferLen = 0;
}


function Lump (len){
  if(!(this instanceof Lump)) return new Lump(len); 
  this._len = len;
  this.init();
  Transform.call(this);
}


module.exports = Lump;
