//Testing the functions for addintion of two and multiply numbers

describe("Class:Addition operator,two arguments",()=>{
    fit("Summing up two numbers.test1",()=>{
      var arr=[0,0];
      const objCalculator= new cCalculator(arr);
      var sum=objCalculator.addTwoNumbers();
      expect(sum).toBe(0);
  
    });
     
    fit("Summing up two numbers.test2",()=>{
      
      var arr=[-1,-1];
      const objCalculator= new cCalculator(arr);
      var sum=objCalculator.addTwoNumbers();
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
  
    it("multiple two numbers",()=>{
        var num1=1;
        var num2=2;
        var product=multiplyTwoNum(num1,num2);
        expect(product).toBe(2);
  
     });
     it("multiply multiple numbers",()=>{
         var arr=[1,2,3,4];
         var product=multiplyMultNums(arr);
         expect(product).toBe(24);
     })
  
  });
  