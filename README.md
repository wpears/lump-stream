Like [block-stream](https://github.com/isaacs/block-stream), but when you don't really care about exact bytelength.

Provides a Transform stream based on [readable-stream](https://github.com/iojs/readable-stream).

Instantiate like so:

    var lump = lumpStream(1024) //The lumpstream will collect input and emit ~1kb chunks

Doesn't pad or slice to your provided bytelength. Let a lump be a lump.

If given an object stream, it will treat the numerical argument as a length value and collect the objects in array until that value is reached or the stream ends.
