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
  export { analyzeArray };