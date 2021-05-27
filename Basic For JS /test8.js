const profile = {
    name :"이은별",
    city: "대전",
    getHobby : function(){
        return "Let's Coding";
    },
    sayHi: function(){
        console.log("hi");
    }
}
const {name,sayHi, ...rest} = profile;

const newObj = {
    k1 : 'v1',
    ...profile
}
console.log(newObj);