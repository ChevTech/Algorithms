function getHummingWeight(num) {
	if(num < 0){
		return 0;
	}

	var hw = 0;
	while(num > 0) {
		var least_bit_set = num & 1;
		num = num >> 1;
		if(least_bit_set){
			hw++;
		}
	}

	return hw;
}

console.log(getHummingWeight(7));