class cCalculator{

 constructor(arr){
  this.arr=arr;
  this.length=arr.length;
  
 }


// function for summing up two numbers
addTwoNumbers()
{
    var sum=0
 sum=this.arr[0]+this.arr[1];
return sum;

}


// Sum up multiple numbers 
sumNumbers()
{
    var sum=0
    for(let i=0;i<this.length;i++)
    {
        sum+=this.arr[i];
    }

    return sum;
}


// function for multiplying two numbers
multiplyTwoNum()
{
    var product=1;
     product=this.arr[0]*this.arr[1];
    return product;
}


// functions that multipl multiple numbers together
multiplyMultNums()
{
  
    var product=1;
  for(let i=0;i<this.length;i++)
  {
      product=product*this.arr[i];
  }

  return product;

}

}