try{
    console.log("Code.. ");
}catch(err){
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log('finally');
}