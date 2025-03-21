## 저번 시간에는 뭘했을까?

Class 객체

## 저번 시간의 핵심

- 함수형 프로그래밍 방식은 **맥락 중심**으로, 작업의 흐름을 중시합니다.
- 객체 지향적 프로그래밍 방식은 **분류 중심**으로, 데이터와 기능을 객체로 묶어 관리합니다.

`분류에서 맥락으로.`

분류: 처음부터 확실하게! 설계해서!  
맥락: 때에 따라서 의미가 달라지니까 그때 그때마다 코드를 작성해서 사용해.

=> 왜 분류에서 맥락으로 바꾸었을까?  
=> 객체 지향 프로그래밍은 데이터와 기능을 객체로 묶어 관리하는 `분류` 방식이 중요하다고 생각했습니다.

아 오늘 수업으로 객체 지향적 프로그래밍 방식을 이해했으니 절차 지향은 버리는구나! => 아닙니다.  
절차 지향 프로그래밍은 여전히 유용하며, 특정 상황에서는 더 적합할 수 있습니다.

아 그러면 `맥락`의 형식인 절차 지향적 프로그래밍이 짱인거니까  
우리가 평소에 사용하는 방식대로 코드를 작성해야겠구나! => 아닙니다.
절차 방식과 객체 방식을 극명하게 이해하고, 상황에 따라 절차 지향적 방법과 객체 지향적 방법을 적절히 선택하여 사용할 수 있는 것이 핵심입니다.

=> 즉 자바스크립트 특징인 프로토타입 언어의 특성을 극명하게 이해한다.(이해해야만 한다.)

## 저번 시간의 목차

- 메소드: 객체의 행동을 정의하는 함수
- this: 현재 객체를 참조하는 키워드
- 메서드의 종류: 다양한 메서드 유형 소개
- 메서드를 사용해보자: 메서드 사용 예제
- getter와 setter: 객체의 속성을 안전하게 접근하고 수정하는 방법
- 생성자 함수: 객체를 생성하는 함수
- NEW 키워드: 새로운 객체를 생성하는 방법
- 클래스와 생성자: 클래스의 개념과 생성자 함수의 관계

## 이번 시간에는 뭐할까?

자바스크립트의 프로토타입

## 이번 시간의 핵심

**`본질`과 `분류`**

- 특정한 사물을 만들기 위해 우리는 먼저 "추상화"를 합니다.
- 예: 파란 의자, 빨간 의자, 노란 의자 → 본질은 "의자(a chair)"입니다.
- 프로토타입은 객체 지향 프로그래밍에서 **본질적인 특성**을 다른 객체가 상속받도록 설계된 메커니즘입니다.

class chair {} => 추상화된 본질적인 물질(가상)

const blueChair = new chair();

- 자바스크립트의 프로토타입을 이해함으로써, 객체 생성과 상속 구조를 명확히 파악할 수 있습니다.(파악하여야 한다.)

## 이번 시간의 목차

- 함수형 프로그래밍
- 객체 지향 프로그래밍
- 프로토타입 기반 객체 생성
- 상속
- 생성자 함수와 클래스 => class
- this 바인딩