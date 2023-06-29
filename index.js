function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  // JavaScript string is immutable, but array is mutable
  // Use spllit('') to convert string to an array
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

export { capitalize,reverseString };