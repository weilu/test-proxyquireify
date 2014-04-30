var proxyquire = require('proxyquireify');
var fs = require('fs')

proxyquire.browserify()
.require(require.resolve('./test/index.js'), {entry: true})
.bundle()
.pipe(fs.createWriteStream(__dirname + '/test/bundle.js'));

