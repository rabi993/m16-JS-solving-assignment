// var marks =["rabiul","masud","shariful","musfiqur","salahuddin","t2","milu"];

// var min = marks[0].length;
// for (var i=0; i<marks.length; i++){
//     var element =marks[i].length;
//     if(element<min){
//         min= element;
       
//     }
    
// }
// console.log('min value is:',min);

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
var tiny =["rabiul","masud","shariful","musfiqur","salahuddin","t2","milu"];
var result =tinyFriend(tiny);
console.log('min value is:',result);
