var merge = function(nums1, m, nums2, n) {    
    while(n > 0) {
        var indexM = m-1;
        var indexN = n-1;
        var num1 = nums1[indexM];
        var num2 = nums2[indexN];
        var endPtr = (n + m)-1;

        if(num1 > num2){
            nums1[endPtr] = num1;
            m--;
        } else {
            nums1[endPtr] = num2;
            n--;
        }
    }
    console.log(nums1);
};
merge([0,0,3,0,0,0,0,0,0], 3, [-1,1,1,1,2,3], 6);