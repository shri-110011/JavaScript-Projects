
//Code to find LCM of 2 numbers
function LCM(n1, n2){
	max = n1>n2?n1:n2;
	while(1){
		if(max%n1 == 0 && max%n2 == 0){
			return max;
		}
		max++;
	}
}
//Code to find LCM of an Array of numbers
function LCMOfArray(arr){
	result = arr[0];
	for(i=1;i<arr.length;i++){
		result = LCM(result, arr[i]);
	}
	return result;
}
arr = new Array();
for(i=1;i<=20;i++){
	arr.push(i);
}
console.log(LCM(124,374));
console.log(LCMOfArray(arr));