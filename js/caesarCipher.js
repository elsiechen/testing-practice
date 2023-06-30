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

  export { caesarCipher }
  