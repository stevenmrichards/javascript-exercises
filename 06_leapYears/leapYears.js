const leapYears = function(year) {
    const divFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const is400 = year % 400 === 0;
    if (divFour && (!isCentury || is400)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
