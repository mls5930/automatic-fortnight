## HTTP의 상태 비저장(stateless) 특성

- state => 리액트에서도 자주 언급되는 단어입니다.

상태: 시스템, 프로그램, 또는 데이터의 `현재 상황이나 조건` 을 의미

현재 상황? => 내가 로그인했는가? 안했는가? 값

HTTP 프로토콜의 주요 특징 중 하나는 상태 비저장입니다. => stateless
상태가 없다는 것은 => 연결되지 않는다.  
이는 `각 요청`이 `독립적`으로 처리되며, 서버는 클라이언트(브라우저)의 `이전 요청`에 대한 `정보`를 기억하지 않는다. 

예를 들면

게시판 CRUD를 예로 들어봄.

```js
// 3-way-handshake
app.post('/board/write', (req, res) => {
    req.cookies
    const { user_id, writer, content } = req.body
    // id가 있다고 칩시다
    res.redirect(`/board/view/${id}`);
})
// 4-way-handshake

// 3-way-handshake
app.get('/board/view', (req, res) => {
    req.cookies
    console.log(req.body); // undefined
})
// 4-way-handshake
```

위처럼 undefined가 나옴. 이는 HTTP가 각 요청을 독립적으로 처리하기 때문 => 비연결성

## 왜? 위처럼 비연결성을 띌까?

### 서버 부하 감소

- 서버가 클라이언트의 상태를 기억하지 않음으로써 불필요한 메모리 사용을 줄이고, 대량의 요청을  
효율적으로 처리할 수 있도록 설계.  

서버를 열었다? => 메모리에 프로세스가 올려짐 => 요청과 응답이 많아지면, 결국 무거워집니다.  
만약 비연결성을 띄지 않는다면, 지속적인 연결은 결국 불필요한 메모리 때문에 무거워짐. => 서버부하 발생.  
=> 대량의 요청과 응답을 처리할 수 없음.
=> 이를 방지하기 위해서 각 요청과 응답은 독립적으로 처리됩니다.
=> 클라이언트에서 계속 값을 보내줘야 함(user_id)

### 상태 유지의 필요성

상태 정보를 클라이언트와 서버간에 지속적으로 전달하거나 저장하는 방법이 사용됨

- localstorage
- sessionstorage
- Cookie

## Cookie

`나를 지속적으로 알리고 검증하기 위해서`

- 로그인
- 장바구니

애초에 쿠키는 서버의 비연결성의 한계를 극복하기 위해서 고안된 방법이며, 요청을 보낼 때, 클라이언트는 브라우저의  
쿠키를 확인해서 요청 객체에 포함시켜 라우트(app.get, app.post)에 보낸다.

## 왜 요청을 보낼 때 자동으로? 요청 헤더에 포함시킴? 쿠키가 필요하지 않는 사람이 있을건데?

사용자가 요청을 보낼 때마다, 요청 헤더에 자동으로 포함시킴.
=> 이를 통해서 개발자는 클라이언트 상태를 지속적으로 추적 가능.
=> 추가적인 데이터 처리 없이 상태를 유지 가능.