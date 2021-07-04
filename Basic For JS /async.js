const delay = (ms)=> new Promise((resolve)=>{
    setTimeout(resolve,ms);
})

async function fastFuction(data){
    delay(1000);
    return data * 2;
}

async function slowFunction(data){
    delay(3000);
    return data + 10;
}

async function runTask(){
    let result = fastFuction(10);
    result = slowFunction(result);
    console.log(result);
}