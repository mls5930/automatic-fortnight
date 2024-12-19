// 함수를 선언해볼게요
// 더하기 함수 => 매개변수로 숫자 2개를 받을겁니다.
// 그 숫자 2개를 더해서 반환을 할겁니다.

// 더하기 함수
function add(num1,num2) {
    let num3 = num1 + num2
    return num3;
}

let result = add; // 함수 그 자체(add)를 참조한다. => 함수 그 자체를 가져온다.
let result2 = result(3,4);
console.log(result2);

// 함수도 값이다. => 변수에 하나의 값(원시타입 => 숫자형, 문자형) 이번에는 함수를 할당함.
// 함수를 할당한 해당 변수(위에서 볼때, 변수 result)가 add 함수의 역할을 할 수 있다.
// => 함수도 값이다. => 인수로 또 다른 함수를 매개변수에 전달할 수 있지 않을까?
