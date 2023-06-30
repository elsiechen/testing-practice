function Calculator(a, b) {
    this.add = () => a + b;
    this.subtract = () => a - b;
    this.divide = () => {
      if(b === 0) throw Error('Second number can not be zero');
      return a / b;
    };
    this.multiply = () => a * b;
  }

  export { Calculator }