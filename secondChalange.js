const massOfMark = 75;
//mass in kg
const heightOfMark = 1.64;
//height in meter
const massOfJohn = 85;
const heightOfJohn = 1.76;

 const bmiOfMark = massOfMark/heightOfMark**2;
const bmiOfJohn = massOfJohn/(heightOfJohn * heightOfJohn)
if(bmiOfMark > bmiOfJohn){
    console.log(`marks's bmi(${bmiOfMark}) is higher than john (${bmiOfJohn})`)
}else{
    console.log(`john's bmi (${bmiOfJohn}) is higher than mark (${bmiOfMark}) `)
}