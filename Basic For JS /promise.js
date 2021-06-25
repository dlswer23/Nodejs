function fastFuction(Data){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){ 
            const result = data*2;
            resolve(result);})
    },1000);
};


