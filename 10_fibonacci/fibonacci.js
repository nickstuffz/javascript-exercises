const fibonacci = function(n) {
    let nth = Number(n);
    if (nth <= 0) {return "OOPS"};
    const fib_array =[1,1];
    for (i=2;i<nth;i++) {
        fib_array[i] = fib_array[i-1]+fib_array[i-2];
    }
    return fib_array[nth-1];
};

// Do not edit below this line
module.exports = fibonacci;
