function longRunnungTeask(){
    console.log('오래 걸리는 작업 끝')
}
console.log('시작');
setImmediate(longRunnungTeask);
console.log('종료');