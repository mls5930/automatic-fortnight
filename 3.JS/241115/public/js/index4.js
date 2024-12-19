// 반복문

// 계속 반복된다. 어떤 기준으로? 우리가 설정한 조건에 의해서 블록 안에 작성된
// 코드가 계속 반복된다.

// 반복문이 왜 나왔지?

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(선언식; 조건문; 연산식;) {
//     코드 실행;
// }
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 0 ~ 20까지 / 짝수값만 찍어보세요.
// 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// 초과, 이상 <=20

// for(let i = 0; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// 2중 포문으로 2단부터 9단까지 찍어보세요
// 리뷰 한 번 해볼게용

// 2단부터 9단까지 찍는데요.
// 2 X 1 = 2 .... 2 X 9 = 18
// 3 X 1 = 3 .... 3 X 9 = 27
//             // false

for(let i = 2; i <= 9; i++) {
    // 이 블록의 코드가 다 실행되지 않으면, for문은 종료되지 않는다.
                  // false 
    for(let j = 1; j < 10; j++) {
        // i === 9
        // 이 블록의 코드가 다 실행되지 않으면, for문은 종료되지 않는다.
        console.log(i + " " + "X" + " " + j + " " + "=" + " " + i * j);
    }
    console.log(" ");   
}

for(let i = 2; i <= 9; i++) {
    let dan = ""
    // 이 블록의 코드가 다 실행되지 않으면, for문은 종료되지 않는다.
                  // false 
    for(let j = 1; j < 10; j++) {
        // i === 9
        // 이 블록의 코드가 다 실행되지 않으면, for문은 종료되지 않는다.
        if(j === 9){
            dan = dan + (i + " " + "X" + " " + j + " " + "=" + " " + i * j)
        } else {
            dan = dan + (i + " " + "X" + " " + j + " " + "=" + " " + i * j + ", ")
        }
    }
    console.log(dan);
}