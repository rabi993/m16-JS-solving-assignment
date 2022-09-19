
function tinyFriend(tinyF){
    var min = tiny[0].length;
    for (var i=0; i<tiny.length; i++){
        var element =tiny[i].length;
        if(element<min){
        min= element;
       
        }
    
    }
    
    return min;
}
var tiny =["rabiul","masud","shariful","musfiqur","salahuddin","t2","milu","t2","rk"];
var result =tinyFriend(tiny);
console.log('minimum name length is:',result);

var minimumLength=[];
for (var i=0; i<tiny.length; i++){
    var element = tiny[i];
    if(tiny[i].length==result){
        minimumLength.push(element);
    }
}
console.log('Minimum name length list: ',minimumLength);

var unique=[];
for(var i=0; i<minimumLength.length; i++){
    var element = minimumLength[i];
    var index =unique.indexOf(element);
    if(index==-1){
        unique.push(element);
    }
}
console.log('unique name list: ',unique);