/*const totalAmonunt = 290;
//const tip;
if(totalAmonunt < 50 || totalAmonunt > 300){
    console.log(`tip is 20%  total tip amount is ${(totalAmonunt/100) * 20}`)
}else{
    console.log(`tip is 15% . total tip amount is ${(totalAmonunt/100)*15}`)
}*/
const totalAmonunt = 20 ;
const tipValue = totalAmonunt <= 50 && totalAmonunt >= 300  ? (totalAmonunt/100)*20:
(20/100)*totalAmonunt;

console.log(`the bill value was ${totalAmonunt} and you tip value is ${tipValue} and the total value is ${totalAmonunt + tipValue}`)

