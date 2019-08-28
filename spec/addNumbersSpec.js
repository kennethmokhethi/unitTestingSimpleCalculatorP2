//Testing the functions for addintion of two and multiply numbers

describe("Addition operator",()=>{
  it("Summing up two numbers.test1",()=>{
    var num1=0;
    var num2=0;
    var sum=addTwoNumbers(num1,num2);
    expect(sum).toBe(0);

  });
   
  it("Summing up two numbers.test2",()=>{
    var num1=-1;
    var num2=-1;
    var sum=addTwoNumbers(num1,num2);
    expect(sum).toBe(-2);

  });

  it("Summing up two numbers.test3",()=>{
    var num1=4;
    var num2=5;
    var sum=addTwoNumbers(num1,num2);
    expect(sum).toBe(9);

  });
  
  it("Summing multiply numbers",()=>{
    var arr=[1,2,3,4];
    var sum=sumNumbers(arr);
    expect(sum).toBe(10);

  });

});

