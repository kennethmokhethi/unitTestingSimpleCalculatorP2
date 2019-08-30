//Testing the functions for addintion of two and multiply numbers
describe("Class:Addition operator,two arguments", () => {
  it("Summing up two numbers.test1", () => {
    
    // const objCalculator = new cCalculator();
    var sum = objCalculator.sumNumbers(0,0);
    expect(sum).toBe(0);
  });

  it("Summing up two numbers.test2", () => {
    
    // const objCalculator = new cCalculator();
    var sum = objCalculator.sumNumbers(-1,-1);
    expect(sum).toBe(-2);
  });

  it("Summing up two numbers.test3", () => {
    
    // const objCalculator = new cCalculator();
    var sum = objCalculator.sumNumbers(4,5);
    expect(sum).toBe(9);
  });

  it("Summing multiply numbers", () => {
    
    // const objCalculator = new cCalculator();
    var sum = objCalculator.sumNumbers(1,2,3,4);
    expect(sum).toBe(10);

  });

  it("multiple two numbers", () => {
    

    // const objCalculator = new cCalculator();
    var product = objCalculator.multiplyMultNums(1,2);
    expect(product).toBe(2);
  });

  it("multiply multiple numbers", () => {
    var product = objCalculator.multiplyMultNums(1,2,3,4);
    expect(product).toBe(24);
  });
   
it("should return the last number",()=>{
//  const objCalculator=new
let lastN=objCalculator.last();
expect(lastN).toBe(24); //from multiple spec that starts at line 40
});

it()



});
