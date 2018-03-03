const getBestPrice = function(prices) {
	debugger;
	let buy;
	let profit = 0;
	let maxProfit = 0;
	let lowestBuy;
	let highestSell;

	for (let index = 0; index < prices.length-1; index++){
		for (let index2 = index+1; index2 < prices.length; index2++){
			buy = prices[index];
			sell = prices[index2];
			profit = -buy+sell;
			if (profit>maxProfit) {
				maxProfit = profit;
			}
		}
	}

	return maxProfit;
}

console.log(getBestPrice([5,6,7,8,9,10]));