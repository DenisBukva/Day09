function myForLoop1(){
    var evenNumbers = "0";
    
    for ( var i = 2; i <= 8; i += 2 ){
        evenNumbers = evenNumbers + ", " + i ; 
    }
    return evenNumbers;
}
function myForLoop2(){
    var evenInverseNumbers = "8"
    for(i = 6; i >= 0; i -= 2){
        evenInverseNumbers = evenInverseNumbers + ", " + i;
    }
    return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};