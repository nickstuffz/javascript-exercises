const reverseString = function(string) {
    
    let length = string.length;
    const word_array = [];
        for (let i=1;i<=length;i++) {
            word_array[i-1] = string.slice(i-1,i)
        }
        reversedWord = word_array.reverse().join("")
    return reversedWord
    
    };
    
// Do not edit below this line
module.exports = reverseString;
