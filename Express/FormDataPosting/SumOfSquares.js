function SumofSquares(arr){
  sum = 0;
  arr.forEach(function(value){
    sum += value**2;
  });
  return sum;
}
function SquareofSum(arr){
  sum = 0;
  arr.forEach(function(value){
    sum += value;
  });
  return sum**2;
}
function difference(arr){

  return SumofSquares(arr)-SquareofSum(arr);
}
arr = new Array();
for(i=1;i<=100;i++)
  arr.push(i);

console.log(difference(arr));