var Transform = require('readable-stream/transform');
var inherits = require('inherits');

var objMode = {objectMode: true};

inherits(Lump, Transform);


Lump.prototype._transform = function(chunk, enc, cb){
  console.log("CHUNK",chunk);

  this._buffers.push(chunk);
  this._bufferLen += this._objLength || chunk.length;

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
  console.log("FIRST BUFFER",buffers[0]);
  if(Buffer.isBuffer(buffers[0])) return Buffer.concat(buffers);
  return buffers;
}


Lump.prototype.init= function(){
  this._buffers = [];
  this._bufferLen = 0;
}



function Lump (len, obj){
  if(!(this instanceof Lump)) return new Lump(len, obj); 
  if(obj) this._objLength = 1;
  this._len = len;
  this.init();
  Transform.call(this, obj);
}


Lump.obj = function(len, obj){
  if(obj) obj.objectMode = true;
  else obj = objMode;
  return new Lump(len, obj); 
}


module.exports = Lump;
