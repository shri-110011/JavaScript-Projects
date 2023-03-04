//2 3 4 5 6 7 8 9 10

//Number Constructor
function PrimeNumber(n, isPrime){
	this.n = n;
	this.isPrime = isPrime;
}
function PrimeFactor(factor, count){
	this.factor = factor;
	this.count = count;
}

function primegen(UL){
	if(UL<=1000000){
		num=2;
		i=0;
		arr = new Array();//arr[] will contain an array of objects of type PrimeNumber
		prime = new Array();
		while(num<=UL){
			arr[i] = new PrimeNumber(num, true);
			i++;
			num++;
		}
		for(j=0;j<i;j++){
			if(arr[j].isPrime == true){
				p=arr[j].n;
				prime.push(p);//Inserting the prime number sinto the prime array i.e. p[]
				for(k=p*p-2; k<i; k=k+p){
					arr[k].isPrime = false;
				}
			}
		}
		return prime;
	}
	else
		throw "Upper limit upto which you want the prime nos must not exceed 1000000"
}
function primegenCount(count){
	UL=1000000;
	if(count<=30000){
		num=2;
		i=0;
		counter=0;
		arr = new Array();//arr[] will contain an array of objects of type PrimeNumber
		prime = new Array();
		while(num<=UL){
			arr[i] = new PrimeNumber(num, true);
			i++;
			num++;
		}
		for(j=0;j<i;j++){
			if(arr[j].isPrime == true){
				p=arr[j].n;
				if(counter<count){
					prime.push(p);//Inserting the prime number sinto the prime array i.e. p[]
					counter++;
				}
				for(k=p*p-2; k<i; k=k+p){
					arr[k].isPrime = false;
				}
			}
		}
		return prime;
	}
	else
		throw "Number of prime numbers you want must not exceed 30000"
}

function primeFactorize(value){
	UL = value;
	if(UL<=1000000){
		num=2;
		i=0;
		a=value;
		arr = new Array();//arr[] will contain an array of objects of type PrimeNumber
		prime_factors = new Array();
		while(num<=UL){
			arr[i] = new PrimeNumber(num, true);
			i++;
			num++;
		}
		for(j=0;j<i;j++){
			if(arr[j].isPrime == true){
				p=arr[j].n;
				let c=0;
				let flag=0;
				while(a%p==0){
					a=a/p;
					flag=1;
					c++;
				}
				if(flag==1)
					prime_factors.push(new PrimeFactor(p, c));//Inserting the prime numbers into the prime array i.e. p[] only if it is a factor of the value
				if(a ==1 )
					break;
				for(k=p*p-2; k<i; k=k+p){
					arr[k].isPrime = false;
				}
			}
		}
		return prime_factors;
	}
	else
		throw "The value which you want to prime factorize can't exceed 1000000"
}

// num=2;
// i=0;//i is the index of the array arr[]
// arr = new Array();
// UL=100000;
// a=600851475143;

// //Code to create an array of objects
// while(num<=UL){
// 	arr[i] = new PrimeNumber(num, true);
// 	i++;
// 	num++;
// }
// //i is now equal to the number of objects in the array arr[]

// //Code to print the prime numbers in order using the Sieve of Eratosthenes algorithm
// for(j=0;j<i;j++){
// 	//console.log(arr[j]);
// 	if(arr[j].isPrime == true){
// 		p=arr[j].n;
		
// 		//Code to print the prime factors of a given number(a)
// 		while(a%p==0){
// 			a=a/p;
// 			console.log(p);
// 		}

// 		for(k=p*p-2; k<i; k=k+p){
// 			arr[k].isPrime = false;
// 		}
		
// 	}
// }

// // console.log(p);//This will give me last found prime number in the range 2 to UL

//------------------------------------
//Code to test the above functions
// var x = primeFactorize(100);
// console.log(x);

// var y = primegen(1000000);
// console.log(y);

// var z = primegenCount(5);
// console.log(z);
exports.primeFactorize = primeFactorize;
exports.primegenCount = primegenCount;
exports.primegen = primegen;
