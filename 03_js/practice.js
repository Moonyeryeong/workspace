// const no_1 = 1
// const no_2 = 2
// const no_3 = 3

// function add() {
//     return alert(no_1+no_2+no_3);
// }

// function sub() {
//     return alert(no_1-no_2);
// }

// function divide() {
//     return alert(no_1/no_2);
// }

// function mul() {
//     return alert(no_1*no_2);
// }
// add();
// sub();
// divide();
// mul();

// 오류있음 ---------------
// const value1 = 30;
// const value2 = 20;
// let code = '+';

// function calc(num1, num2, code) {
//     return `${num1} ${code} ${num2}`
// }
// const result = calc(value1, value2, code);
// console.log(result);
// -------------------------

// console.log("value :" + typeof(123))
// console.log(`value: ${typeof(true)}`)


// for문 while문 실습
// #13
for (var i = 2; i<10; i++) {
    console.log(i + '단')
    for (let j = 1; j<10; j++) {
        console.log(i + '*' + j + '=' + (i*j))
    }
}

// #14
var sum = 0
for(var n = 1; n<100; n++) {
    if(n%2 == 0 || n%3 == 0)
    sum = sum + n
}
console.log(sum)


// // #15
// var answer = Math.floor(Math.random()*10)+1;
// let guessValue = Number(prompt('Up and Down 게임을 시작합니다!'))

// while( ){
//     if (answer == guessValue) {
//         alert(answer+'!! 정답입니다!')
//     } else if (answer>guessValue) {
//         alert('UP')
//     } else if (answer<guessValue) {
//         alert('DOWN')
//     } else if (q)
// }

//답
let answer = Math.floor(Math.random() * 10 + 1);
        //or Math.floor(Math.random() * 11)  11미만의 숫자가 나오기때문에 10까지나옵니다.
        console.log(answer);
        //무한 반복을 이용하여 게임을 진행합니다.
        //꼭 무한 반복이 종료될 조건문을 넣어줘야합니다.
        while (1) {
            let guessValue = prompt("UP and DOWN 게임을 시작합니다!");
            if (guessValue == "q" || guessValue == "그만") {
                alert("포기하셨습니다.");
                break;
            } else if (Number(guessValue) === answer) {
                alert(`${answer}!! 정답입니다 >_<`);
                break;
            } else if (Number(guessValue) > answer) {
                alert("Down");
            } else if (Number(guessValue) < answer) {
                alert("Up");
            }
            //if문을 무한반복하면서 Down이 나오거나 Up이 나오게 되면 종료되지 않고 반복문을 계속실행합니다.
            //입력된값이 종료거나 정답을 맞추게 되면 break를 걸어서 무한반복문에서 빠져나오게 하면됩니다.
            //break: 반복문이나 조건문에서 break를 만나게 되면 해당 조건문이나 반복문이 즉시 종료됩니다.
        }






