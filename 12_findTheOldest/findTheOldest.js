const findTheOldest = function(array) {
    const ages = array.map((x) => {
        if (x.yearOfDeath === undefined) {
            const today = new Date();
            const year = today.getUTCFullYear();
            return year - x.yearOfBirth;
        }
        else {return x.yearOfDeath - x.yearOfBirth;}
    });
    const max = ages.reduce((a,b) => Math.max(a,b));
    const index = ages.indexOf(max);
    return array[index]

};



// Do not edit below this line
module.exports = findTheOldest;
