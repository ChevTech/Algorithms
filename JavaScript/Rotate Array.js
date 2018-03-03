const rotation = function(n, k, a) { 
	debugger;

    var oldIndex = 0;
    var oldValue = a[oldIndex];
    for( var i = 0; i < n; i++) {
        var newIndex = oldIndex;
        for( var j = 0; j < k; j++) {
            newIndex--;
            if(newIndex < 0) {
                newIndex = n-1;
            }
        }
        
        var temp = a[newIndex];
        a[newIndex] = oldValue;
        oldIndex = newIndex;
        oldValue = temp;
    }

    console.log(a.join(' '));
}

rotation(20,10,[41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]);