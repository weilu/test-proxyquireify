var proxyquire = require('proxyquireify')(require)
// var proxyquire = require('proxyquire') //proxyquire works
var stubs = {
  'crypto': {
    randomBytes: function(size){
      var buffer = new Buffer(size)
      buffer.fill(0)
      return buffer
    }
  }
}
var assert = require('assert')
var randomBytes = proxyquire('../', stubs).randomBytes

describe('randomBytes', function(){
  it('works', function(){
    assert.equal(randomBytes(1).toString('hex'), '00')
  })
})
