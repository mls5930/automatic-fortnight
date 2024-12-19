// 값과 값을 비교하는데, 크고 작거나 한것도 비교할 수 있지 않을까?
// 대소관계 비교 연산자

// or 조건 => 이거나 이거
console.log(1 > 2); // 1은 2보다 크다 => 아니오!(false)
console.log(1 < 2); // 1은 2보다 작다 => 예!(true)
console.log(1 >= 2); // ? 1은 이보다 크거나 or 같다 => 아니오!(false)
console.log(1 <= 2); // 1은 2보다 작거나 같다 => 예!(true)
console.log(2 >= 2); // 2는 2보다 크거나 같다 => 예!(true)
console.log(2 <= 2); // 2는 2보다 작거나 같다 => 예!(true)

// 우리의 목표는 데이터 값보다 위의 출력에서 나오는 반환값이
// 어떤 데이터 타입인지 알아야 합니다.
// true, false

// if문을 나갈것이기 때문에
// true
if(1 == 2) {
    console.log("아닙니다 ㅠ");
} else if(1 == 1) {
    console.log("맞습니다!!");
}
// else : 
// ㄴ 1. 첫 번째 if가 반드시 존재해야 함
// ㄴ 2. 첫 if가 true가 아닐 때 실행됩니다.
// else if
// ㄴ 1. 첫 번째 if가 반드시 존재해야 함.
// ㄴ 2. 첫 if가 true가 아닐때 다시 조건을 작성하여 실행될 수 있도록 함.


// ||(논리 OR)연산자 => 두 조건 중 하나라도 참이면 전체 조건을 참으로 평가합니다.
console.log(2 === 3 || 2 === 2); // true
// &&(논리 AND)연산자 => 두 조건 중 모두 참이어야 전체가 참이 되도록 평가합니다.
console.log(2 === 3 && 2 === 2); // false
console.log(2 < 3 || 2 === 3 || 2 >= 3 || 3 >= 3 || 5 < 10); // false
// 데이터 값과 타입을 제대로 명확하게 유추해낼 수 있다.
if(2 < 3 || 2 === 3 || 2 >= 3 || 3 >= 3 || 5 < 10) {
    console.log("네 됩니다.");
}

/*
    하나 더

    alert
    prompt
*/
// alert("나는 알럿창")
// 변수 a에는 프롬프트에 입력한 사용자의 정보가 할당된다.
let a = prompt("내 나이를 적어주세요");
// 그 담긴 사용자의 정보를 창을 띄워주어서 보여준다.
alert(a)