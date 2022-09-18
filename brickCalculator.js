function brickCalculator(brkPerFeet,kotoTola){
if(kotoTola < 11){
    totalBrick =kotoTola*15*brkPerFeet;
}
if(kotoTola < 21){
    totalBrick =(((kotoTola-10)*12*brkPerFeet)+(10*15*brkPerFeet));
}
else{
    totalBrick =(((kotoTola-20)*10*brkPerFeet)+(10*12*brkPerFeet)+(10*15*brkPerFeet));
}
return totalBrick;
}
var brickPerFeet=1000;
var kotoTolaBuilding = 21;
var result = brickCalculator(brickPerFeet , kotoTolaBuilding);

console.log("Total bricks = ",result," piece");