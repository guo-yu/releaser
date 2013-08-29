// main ctrler

// make a version string
var make = function(params) {
    
};

// xxx@0.1.1-cooker-turing.png
var Version = function(params) {
    this.created = new Date();
    this.divider = params.devider ? params.devider: '.';
    this.step = 10;
    this.raw = params.raw ? params.raw: 0;
    this.version = make(this);
};

// make version string
Version.prototype.make = make;

// fetch detail
Version.prototype.detail = function() {
    return this;
}

// update version
Version.prototype.up = function() {
    var self = this;
    var add = function(one) {
        if (one <= self.step) {
            one = one + 1;
            return true;
        } else {
            return false;
        }
    };
    var update = function(v) {
        var list = v.split(self.divider),
            last = list.length - 1;
        var up = function(i) {
            if (!add(list[i])) {
                i--;
                up(i);
            }
        };
        up(last);
    };
    self.version = update(self.version);
}

module.exports = Version;