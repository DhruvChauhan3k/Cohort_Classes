function cap()
{
    return new Promise(function(resolve)
    {
        setTimeout(function()
        {
            console.log("First");
            resolve("Second"); 
        },3000);
    });
}
async function First()
{
  let a= await cap();
  console.log("out")
  console.log(a);
}


First();
console.log("Ans");