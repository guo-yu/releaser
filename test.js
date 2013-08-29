var version = require('./index'),
    should = require('should');

describe('makeVersionString', function() {
    it('should return a version string', function() {
        var v1 = new version(),
            v2 = new version({raw: 100}),
            v3 = new version({divider: '-'}),
            s1 = v1.ver(),
            s2 = v2.ver(),
            s3 = v3.ver();
        s1.should.equal('0.0.0');
        s2.should.equal('1.0.0');
        s3.should.equal('0-0-0');
    });
});

describe('updateVersion', function() {
    it('should return a updated version string', function() {
        var v1 = new version();
        v1.up();
        var s1 = v1.ver();
        s1.should.equal('0.0.1');
        v1.up();
        v1.ver().should.equal('0.0.2');
    });
});