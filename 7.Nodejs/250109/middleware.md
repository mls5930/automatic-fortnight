## 각각의 검증의 역할

### 클라이언트

- 빈 값인가?
- radio, checkbox 필수 요소 체크했는가?

### 서버

1. 클라이언트 요청 객체 request에서 넘어온 쿠키값 확인

```js
const req {
    header : {
        cookie: "wnqudgus1234"
    },
    body : {}
}
```

2. DB에 `wnqudgus1234` 가 존재하는지 확인
3. 있으면? 통과 없으면? 로그인 페이지로 리다이렉트 요청

자...그러면, 우리가 서버를 배웠고, 검증을 하겠다고 했으니, 로그인 관련 미들웨어를 수업을 나가겠구나...
아닙니다....

### 주의(왜 서버에서 빈 값 체크를해요? 빈 값 체크는 클라이언트에서 한다면서요?)

middleware 디렉토리를 만들어서, 검증 역할만 책임지게 할겁니다.
근데, 로그인 검증에 대한 요소를 수업은 나중에 나갑니다.  
지금은, 우선 CRUD 위주를 학습하면서, middleware를 배울거기 때문에,
미들웨어의 파일안에 빈 값 체크를 하겠습니다.(서버.)