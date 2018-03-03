var S = 'SOSSPSSQSSOR';

var numMsgs = S.length/3;
var exS = numMsgs * 2;
var exO = numMsgs * 1;
var seenS = 0;
var seenO = 0;
var expChar = 'S';

for(var i=0; i < S.length; i++){
    if(S[i] === 'S' && expChar === 'S'){
        seenS++;
    } 

    console.log(S[i] === 'O');
    if(S[i] === 'O' && expChar === 'O'){
        console.log('here');
        seenO++;
    }
    
    if(i%3 === 0) {
        expChar = 'S';
    } else {
        if(expChar === 'S') {
            expChar = 'O';
        } else {
            expChar = 'S';
        }
    }

    console.log(expChar);
}
console.log(seenS, seenO, exS, exO);
var alt = (exS + exO) - (seenS + seenO);
console.log(alt);