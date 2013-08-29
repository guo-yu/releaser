//               __                         
//    ________  / /__  ____ _________  _____
//   / ___/ _ \/ / _ \/ __ `/ ___/ _ \/ ___/
//  / /  /  __/ /  __/ /_/ (__  )  __/ /    
// /_/   \___/_/\___/\__,_/____/\___/_/     
//
// @brief: a quick and smart version number maker
// @author: [turingou](http://guoyu.me)                                        

var _ = require('underscore');

var make = function(params) {
    // 只针对十进制适用：
    var self = params ? params : this;
    var v = _.values(new String(params.raw));
    if (v.length < 3) {
        v = [0,0].concat(v);
        if (v.length > 3) v.shift();  
    };
    return v.join(self.divider);
    // var first = 0,
    //     middle = 0,
    //     last = 0;
    // first = (self.raw / (self.step * self.step)) >= 1 ? parseInt(self.raw / (self.step * self.step)) : 0;
    // middle = (self.raw / self.step) >= 1 ? parseInt(self.raw / self.step) : 0;
    // last = (self.raw / self.step) >= 1 ? self.raw % self.step : self.raw;
    // return [first,middle,last].join(self.divider);
};

var Version = function(params) {
    this.created = new Date();
    this.divider = params && params.divider ? params.divider: '.';
    this.step = params && params.step ? params.step : 10;
    this.raw = params && params.raw ? params.raw: 0;
    this.version = make(this);
    return this;
};

// update version
Version.prototype.up = function() {
    this.raw++;
    this.version = make(this);
    return this.version;
};

module.exports = Version;