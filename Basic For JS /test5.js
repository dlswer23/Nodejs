const obj = {
    k1 : 'value',
    k2 : 'value2',
    k3 : function(){
        console.log('A');
    }
}

const arr1 = ['a','b','c'];
console.log('-----');
for(let key in obj){
    console.log(key);
}
console.log('-----');
for(let idx in obj){
    console.log(idx);
}

console.log('-----');

for(let item of arr1){
    console.log(item);
}

