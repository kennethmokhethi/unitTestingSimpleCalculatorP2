class cCalculator {
  constructor() {
    this.arr = [];
    this.lastNumber = 0;
  }

  // Sum up multiple numbers
  sumNumbers() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    this.lastNumber = sum;
    return sum;
  }

  // functions that multipl multiple numbers together
  multiplyMultNums() {
    var product = 1;
    for (let i = 0; i < arguments.length; i++) {
      product = product * arguments[i];
    }
    this.lastNumber = product;
    return product;
  }

  //returns the last number
  last() {
    return this.lastNumber;
  }

  //setting the slot memory
  set_slot(x) {
    // let count=0;
    this.arr.push(x);
    // count++;
    return this.arr;
  }

  //return the slot
  get_slot(x) {
    return this.arr[x];
  }
}

let objCalculator = new cCalculator();
module.exports = objCalculator;
