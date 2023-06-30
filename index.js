function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  // JavaScript string is immutable, but array is mutable
  // Use split('') to convert string to an array


  let array = string.split(''); 
  let length = array.length;
  let loopLength = length % 2 === 0? length / 2: (length-1) / 2;
  
  for(let i = 0; i < loopLength; i++) {
     let temp = array[i];
     array[i] = array[length - 1 - i];
     array[length - 1 - i] = temp;
  }
  // Use join('') to convert the array back to a string
  return array.join(''); 
}

function Calculator(a, b) {
  this.add = () => a + b;
  this.subtract = () => a - b;
  this.divide = () => {
    if(b === 0) throw Error('Second number can not be zero');
    return a / b;
  };
  this.multiply = () => a * b;
}

function caesarCipher(string, key) {
  // if key is not a positive number, throw error
  if(key < 0 || !Number.isInteger(key)) throw Error('Key should be a positive integer.');
   
  let array = [];
  for(let i = 0; i < string.length; i++) {
     // symbol or punctuation, leave it untouched
    if(string[i].toLowerCase() === string[i].toUpperCase()) {
      array.push(string[i]);
    } else { // characters, get shifted 
      let unitCode = string.charCodeAt(i); 
      // UpperCase is 65 to 90; LowerCase is 97 to 122
      let startValue = (unitCode >= 65 && unitCode <= 90)? 65: 97;
      let shiftedCode = (unitCode - startValue + key) % 26;
      let shiftedCharacter = String.fromCharCode(parseInt(shiftedCode) + startValue)
      array.push(shiftedCharacter);
    }
  }
  // use join() to convert array into string
  return array.join('');
}

function analyzeArray(array) {
  if(array.length === 0) throw Error('Please enter elements in the array.');
  if(!Array.isArray(array)) throw Error('Please enter an array.');
  
  const average = () => {
    return array.reduce((prev, curr) => prev + curr, 0) / array.length;
  };
  const min = () => {
    let value = array[0];
    for(let i = 0; i < array.length; i++) {
      if(typeof array[i] !== 'number') throw Error('Non-number detected! Please enter all numbers in the array.')
      if(value > array[i]) value = array[i];
    }
    return value;
  };
  const max = () => {
    let value = array[0];
    for(let i = 0; i < array.length; i++) {
      if(typeof array[i] !== 'number') throw Error('Non-number detected! Please enter all numbers in the array.')
      if(value < array[i]) value = array[i];
    }
    return value;
  };
  const length = () => array.length;
  return {  average: average(array),
            min: min(array),
            max: max(array),
            length: length(array) 
         }
  }
export { capitalize,reverseString, Calculator, caesarCipher, analyzeArray };