function isPalindrome(value){
	str = String(value);
	len = str.length;
	for(let i=0;i<len/2;i++){
		if(str.charAt(i) != str.charAt(len-1-i)){
			return false;
		}
	}
	return true;
}
console.log(isPalindrome('shri'));
console.log(isPalindrome(9009));
console.log(isPalindrome('malayalam'));
console.log(isPalindrome(998));
flag=0;
biggestPalindrome = 0;
for(let i=999;i>=100;i--){
	// console.log("i = "+i);
	for(let j=999;j>=100;j--){
		// console.log("j = "+j);
		value = i*j;
		// console.log("i*j = "+value);
		if(isPalindrome(value)){
			if(value>biggestPalindrome){
				a=i;
				b=j;
				biggestPalindrome = value; 
		}
			}
	}
	// if(flag==1)
	// 	break;
}
console.log("a = "+a);
console.log("b = "+b);
console.log("a*b = "+biggestPalindrome);

