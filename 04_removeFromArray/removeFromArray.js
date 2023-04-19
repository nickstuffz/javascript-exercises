const removeFromArray = function(array) {
    for (let i=0; i<array.length; i++) {
        console.log(i);
        for (let k=1; k<(arguments.length); k++) {
            if (array[i]===arguments[k]) {
                console.log("catch");
                array.splice(i,1);
                i--;

            }
        }
    }
return array;
}

// Do not edit below this line
module.exports = removeFromArray;
