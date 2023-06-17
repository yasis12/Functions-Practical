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


// rest of unit 4 videos

console.log('------ Unit 4 weeks 1-4 review ------');
const seatsInCar = 5;
let passengers = [];
let tankFull = true;

function enoughSeats (){
    console.log( 'in enoughSeats ');
    // check if seatsInCar >= numbers of passengers
    if (seatsInCar >= passengers.length){
        return true;
    } // end enough seats
    else{
        return false;
    } //end not enough seats
} 

function getInCar( NameOfPassenger ) {
    console.log('in getInCar', NameOfPassenger);
    //push this new passenger into our passengers array
    passengers.push (NameOfPassenger);
    return passengers;
} //end getInCar

function readyForRoadTrip () {
    if (enoughSeats() && tankFull ){
        return true;
    } else {
        return false;
    }
}

getInCar ('Raf')
getInCar ('dEv')
getInCar ('Emma')
getInCar ('mav')

console.log('enough seats?', enoughSeats ());
console.log( 'are we ready for the raod trip?', readyForRoadTrip());