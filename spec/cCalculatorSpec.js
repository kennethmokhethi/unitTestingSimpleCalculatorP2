let calculator_instance = require("../src/cCalculator");
//Testing the functions for addintion of two and multiply numbers
describe("Class:Addition operator,two arguments", () => {
  it("Summing up two numbers.test1", () => {
    let sum = calculator_instance.add(3, 5);
    expect(sum).toBe(8);
  });

  it("Should return 60", () => {
    let sum = calculator_instance.multiply(30, 2);
    expect(sum).toBe(60);
  });

  it("Add multiple arguments.Should return 10", () => {
    let sum = calculator_instance.add(3, 5, 2);
    expect(sum).toBe(10);
  });

  describe("Should remember last slot", () => {
    it("Should return 3", () => {
      let sum = calculator_instance.add(1, 2);
      expect(sum).toBe(3);
    });

    it("Should return 3 as the last slot", () => {
      let lastSlot = calculator_instance.last();
      expect(lastSlot).toBe(3);
    });
  });

  describe("Use the last in other calculations", () => {
    it("Should return 15", () => {
      let res = calculator_instance.multiply("LAST", 5);
    });
  });

  describe("Memory slots", () => {
    it("Should return 3", () => {
      calculator_instance.add(1, 2);
      calculator_instance.set_slot(1);
      let value_in_slot = calculator_instance.get_slot(1);
      expect(value_in_slot).toBe(3);
    });

    it("Should return 30", () => {
      calculator_instance.add(10, 20);
      calculator_instance.set_slot(2);
      let value_in_slot = calculator_instance.get_slot(2);
      expect(value_in_slot).toBe(30);
    });

    it("Should return 300", () => {
      let sum = calculator_instance.add(100, 200);
      expect(sum).toBe(300);
    });

    it("Should return the value in slot one which is 3", () => {
      let slot1 = calculator_instance.get_slot(1);
      expect(slot1).toBe(3);
    });

    it("It should return the value in slot 2 which is 30", () => {
      let slot2 = calculator_instance.get_slot(2);
      expect(slot2).toBe(30);
    });

    it("Should return the last value which is 300", () => {
      expect(calculator_instance.last()).toBe(300);
    });
  });

  describe("Use memory slot and LAST as argument", () => {
    it("Should return 310", () => {
      let sum = calculator_instance.add("LAST", 10);
      expect(sum).toBe(310);
    });

    it("Should return 8", () => {
      let sum = calculator_instance.add("SLOT_1", 5);
      expect(sum).toBe(8);
    });

    it("Should return 60", () => {
      let sum = calculator_instance.multiply("SLOT_2", 2);
      expect(sum).toBe(60);
    });
  });
});
