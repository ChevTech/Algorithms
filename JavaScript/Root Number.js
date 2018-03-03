console.log(root(7,3));

function root(x, n) {
  var root = find(x, n, 0, x/2);  
  return root;  
}

function find(x, n, L, R){
  if(x === 0) {
    return 0;
  }


  if(L > R){
    return -1;
  }  
  
  var m = (L+R)/2;
  var mPowerN = m^n;
  var lowerBound = mPowerN - 0.001;
  var upperBound = mPowerN + 0.001;
  
  if(upperBound < x){
    find(x, n, m, R);
  } else if(lowerBound > x){
    find(x, n, L, m);
  } else {
    return m;
  }  
}
