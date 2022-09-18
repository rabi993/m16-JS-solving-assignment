function feetToMile (feet){
    var mile = feet*0.000189394;
    return mile;
}

var part=10000;
var result =feetToMile(part);
result = result.toFixed(4);
console.log(part,"feet =",  result," mile");

