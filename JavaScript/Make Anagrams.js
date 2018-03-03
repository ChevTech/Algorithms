var a = 'cde';
var b = 'abc';

var aList = a.split('').sort();
var bList = b.split('').sort();
debugger;
var deletes = 0;
while(aList.length && bList.length){
    if(aList[0] < bList[0]) {
        deletes++;
        aList.shift();
    } else if(aList[0] > bList[0]) {
        deletes++;
        bList.shift();
    } else {
        aList.shift();
        bList.shift();
    }        
}

while(aList.length){
    deletes++;
    aList.shift();
}

while(bList.length){
    deletes++;
    bList.shift();
}

console.log(deletes);