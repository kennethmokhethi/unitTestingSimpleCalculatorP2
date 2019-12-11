class cCalculator {
  constructor() {
    this.arr = [];
    this.arrSlot = [];
    this.lastNumber = 0;
  }

  // Sum up multiple numbers
  add() {
    var sum = 0;
    // Extracting the number in the string
    if (typeof arguments[0] == "string") {
      if (arguments[0].match(/\d+/)) {
        let slot_num = arguments[0].match(/\d+/);
        slot_num = Number(slot_num);
        sum = this.get_slot(slot_num) + arguments[1];
        return sum;
      }
    }
    if (arguments[0] == "LAST") {
      sum = arguments[1] + this.last();
      return sum;
    }
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    this.lastNumber = sum;
    return sum;
  }

  // functions that multipl multiple numbers together
  multiply() {
    var product = 1;
    if (typeof arguments[0] == "string") {
      if (arguments[0].match(/\d+/)) {
        let slot_num = arguments[0].match(/\d+/);
        slot_num = Number(slot_num);
        product = this.get_slot(slot_num) * arguments[1];
        return product;
      }
    }

    if (arguments[0] == "LAST") {
      product = arguments[1] * this.last();
      return product;
    }
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
    this.arrSlot[x] = this.last();
  }

  //return the slot
  get_slot(x) {
    let value_inside_array_indexed = this.arrSlot[x];
    return value_inside_array_indexed;
  }
}

let calculator_instance = new cCalculator();
module.exports = calculator_instance;
