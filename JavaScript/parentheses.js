// Generate Parentheses

/*
n = 1 => 1 ()
n = 2 => 2 ()(), 
n = 3 => 5 
n = 

   1	  2		   3		    4  
  (),   (()), 	((())),		(((())))
  		()(),   (()()),		(()()())
  				(())(),     ((()))()
  				()(()),     ()((()))
  				()()(),     ()()()()
  				  		    ((()()))
  				  		    (())(())
 n = 4 


if(x === 0) then (


if(x === n) then )

*/

function getParentheses(n) {
	var res = [];
	function bt(res, parens, open, closed, n){
		if(parens.length === n*2){
			res.push(parens);
			return;
		}

		if(open < n) {
			bt(res, parens + '(', open+1, closed, n);
		}

		if(closed < open) {
			bt(res, parens + ')', open, closed+1, n);
		}
	}

	bt(res, '', 0, 0, n);
	return res;
}


/*
res: []
parens: (())
open: 2
closed: 0
n: 3
*/

console.log(getParentheses(4));