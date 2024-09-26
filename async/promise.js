// const onfullFillmemt=(result)=>{
//     console.log(result);
//     console.log(`set up table to eat`)
// }
// const onRejection=(error)=>{
//     console.log(error)
//     console.log('start cooking pasta');
// }
// const promise =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Bringing tacos");
//     },2000)
// })
// promise.then(onfullFillmemt)


async function maxi(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Hello"),4000)
    });
    let result=await promise;
    console.log(result)
}
maxi()
console.log("messi")