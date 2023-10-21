const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start, stop){
  let modifiedFood = [];
  for(let item=start; item<stop - 1; item++){
    modifiedFood.push(foods[item]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced(){
  foods.splice(2, 0, "noodles", "icecream");
  return foods;
}

// Progression 3:
function isEven(number){
  if (number % 2 == 0){
    return true
  } else{
    return false
  }
}

function isPrime(number){
  if (number===1){
    return false
  } else if(number===2){
    return true
  } else {
    for (let x = 2; x < number; x++){
      if (number % x === 0){
        return false;
      }
    }
    return true;
  }
}

function checkNumber(numberArray, operation){
  modifiedNumArray = numberArray.filter(operation);
  return modifiedNumArray;
}

// Progression 4:
function reject(numberArray){
  let nonPrimeNumArray = [];
  numberArray.forEach(number => {
      if (isPrime(number)){
        return 0
      } else {
        nonPrimeNumArray.push(number)
      }
  })
  return nonPrimeNumArray;
}

function nonPrime(numberArray){
  answer = reject(numberArray);
  return answer;
}

// Progression 5:
let isEvenUsingLambda = number => number % 2 == 0;

// Progression 6:
function squareNum(number){
  return number * number;
}

function findSquareOfNumbers(myArray){
  let squareNumArray = myArray.map(squareNum);
  return squareNumArray;
}

// Progression 7:
function multiply(myArray){
  return myArray.reduce((mult, number) => {
    return mult * number;
  },1);
}

function sumOfSquares(myArray){
  return myArray.map(squareNum).reduce((sum, number) => {
    return sum + number;
  },0);
};


