# 실습

수업은 여기까지.
지금까지 Create, Read는 구현했습니당.  
이제 실습시간인데, 여러분들이 구현할 목차입니다.

## 목차

- 댓글 구현
    - Update
    - Delete

## 힌트

- 질문은 언제나 환영입니다.
- 자바스크립트 문자열 기능 replace 검색, parseInt 검색.
- parentNode 및 childNodes 검색.
- Delete기능 구현할 때 confirm 함수 사용하기(BOM 기능 중 하나).
- 이벤트는 몇 번이고 등록(addEventListener)해도 상관없음.
- 삭제할 때, 버튼을 만들거나, 텍스트 ❌를 이용해도 괜찮습니다.(단톡방 확인)
- 이벤트 종류 => `click`, `keyup`, `submit` 을 다양하게 사용하세요.

1. 수업 내용을 처음부터 끝까지 복기한다(이거 제대로 안되면 말짱 도루묵입니다.)
2. 검색하기 전, 내가 최대한 코드를 구현할 수 있는데까지 구현한다
=> ex) 함수를 미리 선언, 변수를 미리 선언해본다.
3. 교수님이 알려주신 검색 리스트를 차근차근 찾아본다.
4. 검색했을 때, 사용 방법외에 어떻게 활용하면 좋을까? 생각해본다.
5. 하나씩 구현해보는데, 차근차근 console.log 찍어가면서 값을 확인해봐가면서 구현해본다. => 안그러면 오타 났을때 내가 나의 오류를 찾을 수 없게됩니다.

6. 참고로 이벤트 등록은 제한이 없다고 했음.(새 함수를 만들어서 이벤트 등록 부분에 넣겠죠? 그럼
    해당 함수에게도 이벤트 객체 또 전달해줄 수 있겠죠?)
몇 번이고 말씀드렸지만, 삭제하고 수정하는데 필요한 `index`를 어떻게 찾을까를 기준으로 접근해주세요. => commentRowList0 => replace("commentRowList", "") => 인덱스만 나옴(이거 알려주면 안돼는데....)

## 심화

- CSS 꾸미기.
- 값 검증하기 => 빈 값
- 댓글 수 구현