// 호이스팅

a();

// 함수 선언식
function b() {
    console.log("hello");
}

// 함수 표현식
const a = function () {
    console.log("hello!");
}
// 함수표현식
// const a = () => {
//     console.log("hello");
// }

// 평가는 내 코드의 선언 부분을 모조리 파악한다.=> 호출은 파악하지 않는다.
// 실행 => 함수의 호출, 선언된 변수에 개발자가 넣은 값; => 위에서 봤을땐 1이라는 값

// 함수도 값이다. => 파일을 만들어서 예제를 한 번 해볼겁니다.
