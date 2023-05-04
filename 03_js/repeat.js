// for 문

for (var i = 0; i<10 ; i=i+2) {
    console.log(i);
}

for (var i = 0; i<10; i++) {
    console.log(2*i)
}

// while 문

// var i == 0;
// while (i < 10 ) {
//     console.log(3*i);
//     const result = 3+i
//     if (result ===9 )
//         break;
//     i++;
// }

// 짝수값만출력
for (var i = 0; i<=10; i++) {
    if (i%2===0) {
        console.log(i)
    }
}

// 1부터 10까지 더한 값을 출력하는 for 문 만들기
let sum=0;
 for ( var i = 1; i <= 10; i++) {
    sum = sum + i;
} 
console.log(sum); 

// while 사용해서 짝수값만 출력
var i = 0
while (n <= 10) {
    if (i %2 === 0) {
        console.log(i)
    }
    i ++;
}

// do - while 문
// 적어도 한번은 실행해야할 떄 
// do{
//     문법
// }
// while (조건식)
var i = 0
do{
    console.log(i);
    i++;
}
while (i<10)