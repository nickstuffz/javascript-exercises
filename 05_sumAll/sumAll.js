const sumAll = function(a,b) {
    let lo;
    let hi;
    let sum;
    
    if (!(Number.isInteger(a)) || !(Number.isInteger(b))) {
        return "ERROR"
    }
    else if (a<0 || b<0) {
        return "ERROR"
    }
    else if (a<b) {
        lo = a;
        hi = b;
    }
    else if (a>b) {
        lo = b;
        hi = a;
    }
    else if (a=b) {
        return a;
    }
    else {return "missed case"}

    console.log(lo)
    sum = lo;
    while (lo<hi) {
        sum = sum + (lo +1);
        lo++;
    }
return sum;
}


// Do not edit below this line
module.exports = sumAll;
