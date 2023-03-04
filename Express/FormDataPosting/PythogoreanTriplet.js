function PythogoreanTriplet(a, b, c){
  this.a = a;
  this.b = b;
  this.c = c;
}
function GetPythogoreanTriplet(value){
  a = value/2;
  b = a**2 - 1;
  c = a**2 + 1;
  return new PythogoreanTriplet(value, b, c);
}
function Sum(obj){
  sum=0;
  for(x in obj){
    //console.log(obj[x]);
    sum += obj[x];
  }
  //console.log(obj);
  return sum;
}
function SpecificPythogoreanTriplet(sum){
  for(a=1;a<sum/3;a++){
    for(b=a+1;b<sum/2;b++){
      c=sum-(a+b);
      if(a**2+b**2 == c**2){
        return new PythogoreanTriplet(a, b, c);
      }
    }
  }
  return false;
}
// for(i=1;i<=1000;i++){
//   let obj =  GetPythogoreanTriplet(i);
//   //console.log(Sum(obj));
//   if(Sum(obj)==40){
//     console.log(obj);
//     break;
//   }
// }
//console.log(GetPythogoreanTriplet(8));
//console.log(Sum(GetPythogoreanTriplet(8)));
var x = SpecificPythogoreanTriplet(102);
console.log(x.a*x.b*x.c);