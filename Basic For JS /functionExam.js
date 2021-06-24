function fastFunction(arr,data,done){
    setTimeout(function(){
        const result = data * 2;
        done(undefined,result,done);
    },1000);
}

function slowFunction(err,data,done){
    setTimeout(function(){
        done(undefined,result,done);
    },3000);
}

function runTask(data){
    fastFunction((err,data2)=>{
        console.log(data3);
    })
}