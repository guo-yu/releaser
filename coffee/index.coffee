#               __                         
#    ________  / /__  ____ _________  _____
#   / ___/ _ \/ / _ \/ __ `/ ___/ _ \/ ___/
#  / /  /  __/ /  __/ /_/ (__  )  __/ /    
# /_/   \___/_/\___/\__,_/____/\___/_/     
#
# @brief: a quick and smart version number maker
# @author: [turingou](http://guoyu.me)                                        
_ = require("underscore")


makeFromRaw = (params) ->
	
	# 只针对十进制适用：
	self = (if params then params else this)
	v = _.values(new String(params.number))
	if v.length < 3
		v = [0, 0].concat(v)
		v.shift()  if v.length > 3
	v.join self.divider
	# var first = 0,
	#     middle = 0,
	#     last = 0;
	# first = (self.raw / (self.step * self.step)) >= 1 ? parseInt(self.raw / (self.step * self.step)) : 0;
	# middle = (self.raw / self.step) >= 1 ? parseInt(self.raw / self.step) : 0;
	# last = (self.raw / self.step) >= 1 ? self.raw % self.step : self.raw;
	# return [first,middle,last].join(self.divider);


makeFromString = (params) ->

	self = (if params then params else this)
	v = params.version.split self.divider
	res = 0
	pow = Math.pow 10, v.length - 1
	for ver in v
		res += parseInt(ver) * pow
		pow /= 10
	res

Version = (params) ->
	@created = new Date()
	@divider = (if params and params.divider then params.divider else ".")
	@step = (if params and params.step then params.step else 10)
	if params? and params.number?
		@number = params.number
		@version = makeFromRaw(this)
	else if params? and params.version? and typeof params.version is 'string'
		@version = params.version
		@number = makeFromString this
	else
		@number = 0
		@version = makeFromRaw(this)
	




# update version
Version::up = ->
	@number++
	@version = makeFromRaw(this)
	@version

module.exports = Version