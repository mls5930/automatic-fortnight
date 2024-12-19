// 객체 새로운 속성 추가하기

const Person = {
    name: "홍길동",
    age: 32
}

const clone = { ...Person, phone: "010-4170-9993" }

/*
    스프레드 연산자 ...은 배열 또는 객체의 요소나 속성을 개별적으로 분리해서
    다른 배열이나 객체로 확장할 수 있게 해주는 자바스크립트 문법입니다.
    ES6부터 나온 문법이며, 배열 복사, 추가, 합치기(병합) 등 다양한 상황에서 사용됩니다.
*/
