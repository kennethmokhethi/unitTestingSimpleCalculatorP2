class cCalculator{

 constructor(){
  
  this.arr=[];
 }

// Sum up multiple numbers 
sumNumbers()
{
    var sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
  this.arr.push(sum);
    return sum;
}

// functions that multipl multiple numbers together
multiplyMultNums()
{
  var product=1;
  for(let i=0;i<arguments.length;i++)
  {
      product=product*arguments[i];
  }
 //this.arr.push(product);
  return product;
}

}