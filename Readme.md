
# Colorlog.js
 
 Light-weight color logging for [NodeJS](http://nodejs.org), including a 
 streaming log reader.

## Installation

    $ npm install colorlog

## Example

Colorlog level defaults to DEBUG however here we can specify another level, for example WARNING, and just watch logs levels are >= from WARNING.

    var Colorlog = require('colorlog')
      , colorlog = new Colorlog('debug');

    colorlog.debug('debug message');
    colorlog.info('info message');
    colorlog.error('failed to something');


 Also possible to use `%s` much like `console.log()` to pass arguments:

     colorlog.info('hello from user %s.', user.email);

## Screenshot

![colorlog screenshot](https://img.skitch.com/20111117-1cmfnnd985ewys6kcy994hk6sj.jpg)

## Colorlog Levels

  - 0 EMERGENCY
  - 1 ALERT
  - 2 CRITICAL
  - 3 ERROR
  - 4 WARNING
  - 5 NOTICE
  - 6 INFO
  - 7 DEBUG


## License 

(The MIT License)

Copyright (c) 2011 Andriy Bazyuta &lt;andriy.bazyuta@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
