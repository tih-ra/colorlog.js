module.exports = function Color(color, text, endcolor) {
    return color + text + RESET + (('string' == typeof endcolor) ? endcolor : '');
};


var RESET = module.exports.RESET =  '\x1B[0m';

	
module.exports.UNDERLINE =  '\x1b[4m';
module.exports.EMERGENCY =  ['\x1b[48;5;52m', '\x1b[38;5;52m'];
module.exports.ALERT =  ['\x1b[48;5;53m', '\x1b[38;5;53m'];
module.exports.CRITICAL =  ['\x1b[48;5;196m', '\x1b[38;5;196m'];
module.exports.ERROR =  ['\x1b[48;5;197m', '\x1b[38;5;197m'];
module.exports.WARNING =  ['\x1b[48;5;202m', '\x1b[38;5;202m'];
module.exports.NOTICE =  ['\x1b[48;5;22m', '\x1b[38;5;22m'];
module.exports.INFO =  ['\x1b[48;5;25m', '\x1b[38;5;25m'];
module.exports.DEBUG =  ['\x1b[48;5;69m', '\x1b[38;5;69m'];

