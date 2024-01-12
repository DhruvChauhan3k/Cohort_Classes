function g(a)
{
    console.log(a);
}
function sum(a,b)
{
    setTimeout(function()
    {
        g(a+b);
    },3000);
    
}
function take(a,b,fn)
{
    fn(a,b);
    console.log("Ans");
}
take(2,3,sum);