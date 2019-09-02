//Testing the functions for addintion of two and multiply numbers
describe("Class:Addition operator,two arguments", () => {
  it("Summing up two numbers.test1", () => {
    var sum = objCalculator.sumNumbers(0,0);
    expect(sum).toBe(0);
  });

  it("Summing up two numbers.test2", () => {
    var sum = objCalculator.sumNumbers(-1,-1);
    expect(sum).toBe(-2);
  });

  it("Summing up two numbers.test3", () => {
    var sum = objCalculator.sumNumbers(4,5);
    expect(sum).toBe(9);
  });

  it("Summing multiply numbers", () => {
    var sum = objCalculator.sumNumbers(1,2,3,4);
    expect(sum).toBe(10);
  });

  it("multiple two numbers", () => {
    var product = objCalculator.multiplyMultNums(1,2);
    expect(product).toBe(2);
  });

  it("multiply multiple numbers", () => {
    var product = objCalculator.multiplyMultNums(1,2,3,4);
    expect(product).toBe(24);
  });
   
it("should return the last number",()=>{
let lastN=objCalculator.last();
expect(lastN).toBe(24); //from multiple spec that starts at line 40
});

it("Should set the slot",()=>{
 let setSlot=objCalculator.set_slot(objCalculator.lastNumber);
 expect(setSlot).toEqual([24]); //from multiple spec that starts at line 40
 });

it("Should return the slot by index",()=>{
let slot=objCalculator.get_slot(0);
expect(slot).toBe(24);
});

});
