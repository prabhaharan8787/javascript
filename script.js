let x=document.getElementById("p1");
x.style.fontSize="40px";



function add()
{
   let f=x.textContent;
  let  n=parseInt(f)+1;
    if(n>0)
    {
        x.style.color="green";
    }
    x.textContent=n;
}
function sub()
{
   let f=x.textContent;
  let  n=parseInt(f)-1;
    if(n<0)
    {
        x.style.color="red";
    }
    x.textContent=n;
}
function rest()
{

   x.textContent=0;
    if(x==0)
    {
        a.style.color="black";
    }
  
}