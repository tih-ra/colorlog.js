
/*!
 * Colorlog.js
 * Copyright(c) 2011 Andriy Bazyuta <andriy.bazyuta@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var EventEmitter = require('events').EventEmitter;
var Color = require('./colors')

var Colorlog = exports = module.exports = function Colorlog(level, stream){
	if ('string' == typeof level) level = exports[level.toUpperCase()];
  this.level = level || exports.DEBUG;
  this.stream = stream || process.stdout;
  if (this.stream.readable) this.read();
  
};

exports.version = "0.1.1"
exports.EMERGENCY = 0;
exports.ALERT = 1;
exports.CRITICAL = 2;
exports.ERROR = 3;
exports.WARNING = 4;
exports.NOTICE = 5;
exports.INFO = 6;
exports.DEBUG = 7;

Colorlog.prototype = {
  
  
  read: function(){
    var buf = ''
      , self = this
      , stream = this.stream;
    stream.setEncoding('ascii');
    stream.on('data', function(chunk){
      buf += chunk;
      if ('\n' != buf[buf.length - 1]) return;
      buf.split('\n').map(function(line){
        if (!line.length) return;
        try {
          var captures = line.match(/^\[([^\]]+)\] (\w+) (.*)/);
          var obj = {
              date: new Date(captures[1])
            , level: exports[captures[2]]
            , levelString: captures[2]
            , msg: captures[3] 
          };
          self.emit('line', obj);
        } catch (err) {
          // Ignore
        }
      });
      buf = '';
    });

    stream.on('end', function(){
      self.emit('end');
    });
  },
  

  log: function(levelStr, args) {
    if (exports[levelStr] <= this.level) {
      var i = 1;
      var msg = args[0].replace(/%s/g, function(){
        return  Color(Color.UNDERLINE, args[i++], Color[levelStr][1]);
      });
      this.stream.write(
          '\n' + Color(Color[levelStr][0], levelStr)
        + ' '  + Color(Color[levelStr][1], msg)
        + '\n'
      );
    }
  },

  emergency: function(msg){
    this.log('EMERGENCY', arguments);
  },


  alert: function(msg){
    this.log('ALERT', arguments);
  },


  critical: function(msg){
    this.log('CRITICAL', arguments);
  },


  error: function(msg){
    this.log('ERROR', arguments);
  },

  warning: function(msg){
    this.log('WARNING', arguments);
  },


  notice: function(msg){
    this.log('NOTICE', arguments);
  },


  info: function(msg){
    this.log('INFO', arguments);
  },


  debug: function(msg){
    this.log('DEBUG', arguments);
  }
};


Colorlog.prototype.__proto__ = EventEmitter.prototype;