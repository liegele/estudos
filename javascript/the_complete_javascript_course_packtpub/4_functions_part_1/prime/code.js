//Final version

//Asking user for a whole number.

var number;
var primes = '';
var counter = 0;
var n = 2; 

do{
  number = prompt('Enter a whole number!');
  number = parseInt(number);  

  //isPrime(number);
}while(!Number.isInteger(number))


printPrimes(number);

function printPrimes(max){
  while(n < max){
               if(isPrime(n)){
      counter ++;
      primes += n + ' ';
    }
    n ++;
  }

  console.log('There are ' + counter + ' prime numbers smaller than ' + max + '.');

  if(counter > 0){
    console.log(primes);
  }
}


function isPrime(n){
  if(n <= 1){
    //console.log('Number ' + n + ' is not a prime!');
    return false;
  } else if(n == 2){
    //console.log('Number 2 is a prime!');
    return true;
  } else {
    var i = 2;
    while(i < n){
      if(n % i == 0){
        //console.log('Number ' + n + ' is not a prime! Because it can be divided by ' + i + '.');
        return false;
      }

      i++

      if(i == n){
        //console.log('Number ' + n + ' is prime!');
        return true;
      }

    }

  }

}