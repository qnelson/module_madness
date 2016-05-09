var usd = require('./module2');
var randomNumber = require('./module1');

var balance = function() {
    return usd(randomNumber(100,1000000));
};

var words = function() {
    return("Account Balance: \n");
};

module.exports.balance = balance;
module.exports.words = words;
