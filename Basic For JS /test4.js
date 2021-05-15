let age = 22;

let message = (age < 3)? "아가야 반가워!" :
(age < 18) ? '안녕!' :
(age < 100) ? '환영합니다' :
'나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요';

console.log(message)