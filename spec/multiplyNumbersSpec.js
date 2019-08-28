// multiple numbers spec
describe("multiple numbers",()=>{
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