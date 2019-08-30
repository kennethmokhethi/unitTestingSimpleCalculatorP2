class cCalculator{

 constructor(){
  
  this.arr=[];
  this.lastNumber=0;
 }

// Sum up multiple numbers 
sumNumbers()
{
    var sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
  this.lastNumber=sum;
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
  this.lastNumber=product;
  return product;
}

//returns the last number
last(){
  return this.lastNumber;
}

//setting the slot memory
set_slot(x){
  this.arr[x]=this.lastNumber;
  return this.lastNumber;
}

//return the slot
get_slot(x){
  this.arr[x].lastNumber;
  return this.arr;

}

}

let objCalculator = new cCalculator();