function myEqualFunction(num){
    if(num === 23){
        return "Equal1";
    }
     return "Not equal";
}
console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));

module.exports = myEqualFunction;



