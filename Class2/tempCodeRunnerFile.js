function cap()
{
    // return new Promise(function(resolve)
    // {
    //     setTimeout(function()
    //     {
    //         console.log("C");
    //         resolve("D"); 
    //     },3000);
    // });
    console.log("C")
}
async function First()
{
    console.log("B")
  let a= await cap();
  console.log("D");
}


First();
console.log("A");