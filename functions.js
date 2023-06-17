console.log('Hello World');

function actualMath(num0, num1) {
    console.log('in actualMath', num0, num1 );
    let answer = num0 * num1;
    return answer;
} //end actual math

function logger(params) {
    console.log('in logger');
} //end logger

function mathExample(){
    console.log('in mathExample');
    let anwser = 3*9;
    return anwser;
} //end math example

function returner(){
    console.log('in returner');
    return true;
}

logger();
returner();
console.log('running returner:', returner() );
console.log('running actualMath with 4 & 6', actualMath( 4, 6));
console.log('running actualMath with 4 & 6', actualMath( 2, 3));
console.log('running actualMath with 4 & 6', actualMath( .5, 200));