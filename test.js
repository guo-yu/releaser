var version = require('./index'),
    should = require('should');

describe('makeVersionString', function() {
    it('should return a version string', function() {
        var v1 = new version(),
            v2 = new version({raw: 100}),
            v3 = new version({divider: '-'});
        v1.version.should.equal('0.0.0');
        v2.version.should.equal('1.0.0');
        v3.version.should.equal('0-0-0');
    });
});

describe('updateVersion', function() {
    it('should return a updated version string', function() {
        var v1 = new version();
        v1.up();
        v1.version.should.equal('0.0.1');
        v1.up();
        v1.version.should.equal('0.0.2');
    });
});