const repeatString = function(word, amount) {
    if (amount < 0) {
        return 'ERROR';
    } else {
        return word.repeat(amount);
    }
};

// Do not edit below this line
module.exports = repeatString;
