/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	
	if (n == 1) {
		return "1";
	} else {
		let str = countAndSay(n-1);
		let result = "";
		for(let i = 0; i < str.length; i++) {
			if(i > 0 && str[i] === str[i - 1]) {
				continue;
			}
			
			let counter = i;
			let num = 1;
			
			
			while(str[counter] === str[counter + 1]) {
				counter++;
				num++;
			}
			
			result += num;
			result += str[counter];
		}
		
		return result;
	}
};    