class cCalculator{

 constructor(){
  
  this.lastA=0;
  this.lastM=0;
 }

// Sum up multiple numbers 
sumNumbers()
{
    var sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }

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

  return product;

}


last(){
 this.lastA=this.sumNumbers();
 this.lastM=this.multiplyMultNums();

}



}