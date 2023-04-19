const repeatString = function(string, num) {
    if (num<0) {return "ERROR"}
    
    let multiString = ""
    while (num>0) {
        multiString += string;
        num--;
    }
    return multiString;
};

// Do not edit below this line
module.exports = repeatString;
