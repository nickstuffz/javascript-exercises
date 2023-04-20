const palindromes = function (str) {
    let string = str.replace(/[\W|_|\s]/g,'').toLowerCase()
    // console.log(string)
    let array = string.split('');
    // console.log(array);
    let r_array = array.reverse();
    // console.log(r_array);
    let r_string = r_array.join('');
    // console.log(r_string);
    return string === r_string;
    };
    
// Do not edit below this line
module.exports = palindromes;
