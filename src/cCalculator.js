class cCalculator{

 constructor(arr){
  this.arr=arr;
  this.length=arr.length;
  this.sum1=0
  this.sum2=1;
  this.product=1;

 }


// function for summing up two numbers
addTwoNumbers()
{
 this.sum1=this.arr[0]+this.arr[1];
return this.sum1;

}


// Sum up multiple numbers 
sumNumbers()
{

    for(let i=0;i<this.length;i++)
    {
        this.sum1+=this.arr[i];
    }

    return this.sum1;
}


// function for multiplying two numbers
multiplyTwoNum(a,b)
{
     this.product=this.arr[0]*this.arr[1];
    return this.product;
}


// functions that multipl multiple numbers together
multiplyMultNums()
{
  
  for(let i=0;i<this.length;i++)
  {
      this.product=this.product*this.arr[i];
  }

  return this.product;

}

}