const dolphin1stScore = 80;
const dolphin2ndScore = 108;
const dolphin3rdScore = 89;

const karlos1stScore = 88;
const karlos2ndScore = 91;
const karlos3rdScore = 110;
 
const averageScoreDolphin = (dolphin1stScore + dolphin2ndScore + dolphin3rdScore )/3;

const averageScoreKarlos = (karlos1stScore + karlos2ndScore + karlos3rdScore)/ 3;

console.log(`average score of dolphin is ${averageScoreDolphin}`);
console.log(`average score of karlos is ${averageScoreKarlos}`);

if(averageScoreDolphin > averageScoreKarlos && averageScoreDolphin >= 100){
    console.log(`dolphin is winner 🏆 their by the lead of ${averageScoreDolphin - averageScoreKarlos} score`)
}else if(averageScoreKarlos>averageScoreDolphin && averageScoreKarlos >= 100){
    console.log(`karlos is winner 🏆 by the lead of ${averageScoreKarlos - averageScoreDolphin}`)
}else if(averageScoreDolphin === averageScoreKarlos && averageScoreKarlos >= 100 && averageScoreDolphin >= 100){
    console.log(`both win the trophy  🏆 🏆: 
    dolphin score : ${averageScoreDolphin}
    karlos score :${averageScoreKarlos}`)
}else{
    console.log(`no one win trophy 😥`)
}