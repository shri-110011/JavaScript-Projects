//This program finds the sum of even valued fibonacci numbers which are less than 4000000
//Note here the fibonacci series starts from 1 i.e 1 2 3 5 8 ...

var fibo = new Array();
fibo[0]=1;
fibo[1]=2;
var sum = 0;
i=1;
while(fibo[i]<4000000){
  if(fibo[i]%2 == 0)
  	sum += fibo[i];
  i++;
  fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo[i-2]);
console.log(fibo[i-1]);
console.log(fibo[i]);
console.log(sum);

//1 2 3 5 8 13 21