var Transform = require('readable-stream/transform');
var inherits = require('inherits');

inherits(Lump, Transform);


Lump.prototype._transform = function(chunk, enc, cb){
  var chunkLen;

  if(Buffer.isBuffer(chunk)){
    chunkLen = chunk.length;
  }else{
    chunkLen = 1;
  }

  this._buffers.push(chunk);
  this._bufferLen += chunkLen;

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
  return buffers;
}


Lump.prototype.init= function(){
  this._buffers = [];
  this._bufferLen = 0;
}



function Lump (len, obj){
  if(!(this instanceof Lump)) return new Lump(len, obj); 
  this._len = len;
  this.init();
  Transform.call(this, obj);
}


module.exports = Lump;
