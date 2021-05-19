const SOME_KEY = "ANY_VALUE";

let johnProfile = {
    age: 35,
    name : 'john',
    sayHi : function(){
        console.log(this.name, "이 반갑다");
    },
    [SOME_KEY]: 'value',
}

console.log(johnProfile.age);


johnProfile.eat = ()=>{
    console.log(this.name,'이 먹다');
}
console.dir(johnProfile,3);