const nameArray = ['이은별','김예진','박나연'];

for(let name of nameArray){
    const mail = `${name}님 안녕하세요`; 
}

const[a,b,c,d] = nameArray;
console.log(a);
console.log(b);

const[a,b, ... arr] = nameArray;
console.log(a);
console.log(arr);