//Testing the functions for addintion of two and multiply numbers

describe("Class:Addition operator,two arguments",()=>{
    it("Summing up two numbers.test1",()=>{
      var arr=[0,0];
      const objCalculator= new cCalculator(arr);
      var sum=objCalculator.addTwoNumbers();
      expect(sum).toBe(0);
  
    });
     
    it("Summing up two numbers.test2",()=>{
      
      var arr=[-1,-1];
      const objCalculator= new cCalculator(arr);
      var sum=objCalculator.addTwoNumbers();
      expect(sum).toBe(-2);
  
    });
  
    it("Summing up two numbers.test3",()=>{
      
      var arr=[4,5];
      const objCalculator= new cCalculator(arr);
      var sum=objCalculator.addTwoNumbers();
      expect(sum).toBe(9);
  
    });
    
    it("Summing multiply numbers",()=>{
      var arr=[1,2,3,4];
      const objCalculator= new cCalculator(arr);
      var sum=objCalculator.sumNumbers();
      expect(sum).toBe(10);
  
    });
  
    it("multiple two numbers",()=>{
      var arr=[1,2];
        
        const objCalculator= new cCalculator(arr);
        var product=objCalculator.multiplyTwoNum();
        expect(product).toBe(2);
  
     });
     it("multiply multiple numbers",()=>{
         var arr=[1,2,3,4];
         const objCalculator= new cCalculator(arr);

         var product=objCalculator.multiplyMultNums();
         expect(product).toBe(24);
     })
  
  });
  