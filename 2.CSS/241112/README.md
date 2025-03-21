# 저번 시간에는 뭘 했을까?

#### 목표

- CSS의 position 속성을 통해 HTML 요소를 문서에서 자유롭게 배치할 수 있다.
- 이미지를 우리 문서에서 위치 조정하여 배치를 했었죠?

#### 저번 시간 목차

1. 기존 개념 복습
2. position 속성이 필요한 이유
3. position 속성의 탄생 배경과 역사
4. position 속성의 종류
   - `relative`
   - `absolute`
   - `static`
   - `fixed`
5. 실습 - 클론코딩
    - visual => 여러분들이 할 실습
    - sidebar => 저랑 같이 한 실습(레이아웃 배치) => 머리 아팠을 겁니다.

# 이번 시간에는 뭘 할까?

- 가상 클래스 선택자

#### 이번 수업의 목표

- 가상 클래스 선택자를 활용하여 CSS로 특정 상태에서의 요소 스타일링을 적용할 수 있다.
=> 체크하였다라는 가상의 클래스를 제공해줍니다. => 가상의 클래스를 선택해서 우리가 스타일적인 요소 => CSS를 꾸밀 수 있다.

#### 이번 수업의 목차

- 가상 "클래스" 선택자
- 탭 효과 요소 꾸며보기(네이버 로그인, 일회용, QR코드 같은)

가상 클래스 선택자를 설명하기 전에,  
기존에 배운 개념을 복습하고 이를 바탕으로 왜 필요한지  
여러분들한테 설명을 좀 드리겠습니다.

### 기존 개념 복습

- 선택자: id, class, 태그 선택자 등 기존에 배운 선택자를 통해 요소 스타일링 => 꾸밀 수 있었다를 복습.
- CSS 박스 모델 개념 : 패딩과 마진을 사용하여 요소의 영역 설정 => 요소의 영역 구분을 알아보았다. 
- 레이아웃(HTML) 태그 배치 관련 속성 복습: float에서 flex로 넘어오며 요소를 자유롭게 배치한 방법.
- position 복습: relative, absolute 등 위치 설정을 통해 요소 배치 가능.

### 가상 클래스가 필요한 이유

- 기존 CSS 선택자만으로는 상태 변화에 따른 스타일 적용이 어려움.
- 가상 클래스를 사용하면 요소의 상태(예: 마우스 호버, 클릭, 클릭을 유지할 때)에 따른 스타일 변화를 구현 가능.

### 가상 클래스 선택자 설명

- 가상 클래스 선택자란: 요소의 특정 상태에 따라 스타일을 바꾸는 선택자.

### 탭 효과 요소 꾸며보기

- 가상 클래스 선택자 활용 실습: 탭 메뉴에 :checked => 라디오에서 체크 했을때 부여되는 효과 적용.