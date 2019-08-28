// functions that multipl multiple numbers together
function multiplyMultNums(arr)
{
  product=1
  for(let i=0;i<arr.length;i++)
  {
      product=product*arr[i];
  }

  return product;

}