const animal1 = {
    name : 'lion',
    run(){
        console.log('${this.name} 동물이 달렸다');
    },
    run2 : function(){
        console.log('run');
    }
}
animal1.run();