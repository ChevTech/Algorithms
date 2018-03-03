var time = '12:45:54PM';
debugger;

var timeArray = time.split('');
    var timeMarker = timeArray.slice(8).join('');
    var timeOnly = timeArray.slice(0,8);
    var timeOnlyString = timeOnly.join('');
    var hourOnly = Number(timeArray.slice(0,2).join(''));
    var minutesOnly = Number(timeArray.slice(3,5).join(''));
    var secondsOnly = Number(timeArray.slice(6,8).join(''));
    
    if (timeMarker === 'AM' && timeOnlyString === '12:00:00') {
        console.log('00:00:00');
    } else if (timeMarker === 'AM' && hourOnly === 12 && minutesOnly < 60 && secondsOnly < 60) {
        var newHours = 12-Number(timeOnly.slice(0,2).join(''));
        console.log('0'+newHours+timeOnly.slice(2, 8).join(''));
    } else if (timeMarker === 'AM') {
        console.log(timeOnlyString);
    } else if (timeMarker === 'PM' && timeOnlyString === '12:00:00') {
        console.log(timeOnlyString);
    } else {
        var newHours = Number(timeOnly.slice(0,2).join(''))+12;
        console.log(newHours+timeOnly.slice(2, 8).join(''));
}