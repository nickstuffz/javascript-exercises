const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
	return array.reduce(add,0);
};

const multiply = function(array) {
  return array.reduce((acc, current) => acc*current);

};

const power = function(x,y) {
  return x**y;
	
};

const factorial = function(num) {
  if (num===0) {return 1};

  let total = num;
  while (num>1) {
    total = total*(num-1);
    num--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
