## 저번 시간에는 뭐했을까?

미들웨어

라우트 매개변수 => req, res 그리고 `next`.  
=> 요청이 다음 단계로 넘어가는 흐름을 `제어` 합니다.
=> 중간에 가로채서 인증, 데이터 검증, 로그 기록 등등...

## 저번 시간의 핵심

필요한 검증을 파악하고 처리할 수 있어야 한다.

미들웨어는 요청 데이터를 검증하거나 가공한 뒤, 라우터 또는 다음 미들웨어로 흐름을 전달합니다.
=> 미들웨어와 라우터의 연계를 이해한다.

미들웨어는 요청을 제어하거나 가공한 뒤, 라우터 또는 다음 미들웨어로 흐름을 전달한다.
=> 흐름을 제어할 수 있다.

next()를 통해 요청의 흐름을 제어하며, 필요한 경우 요청을 중단하거나 에러를 처리할 수 있다.
=> res.status(404).send("없는 아이디입니다.")

## 저번 시간의 목차

- 게시판 U
    - Update
- RESTful API
    - API?
    - REST?
    - 자원?
    - 합쳐서 RESTful API란?
- 미들웨어

## 이번 시간에는 뭐할까?

### 월별평가

제가 작성한 월별평가 요구 사항을 꼼꼼히 읽어주시고 구현해주세요.  
합격 요구 점수는 최소 60점 이상입니다.  
걱정하지 마세요.  
지금까지 성실히 공부에 임하셨다면 오늘내로 충분히 구현이 완료됩니다.  

제 예상엔, 빨리 구현하시는 분도 나오십니다.  
그럴 땐, 자유시간 보장해드립니다.  
단, 제가 OK사인 떨어지는 분들만 허락하겠습니다.  
여러분들이 남는 시간에 블로그를 쓰던, 유튜브를 보던, 시간은 자유입니다.

## 주의 사항

1. 될 수 있으면 `최대한` 자료를 참고하지 말아주세요.  

    - 저번 1차 월별 평가는 처음이었으니, 자료를 참고하는 것을 허락하였지만, 지금은 허락하지 않습니다.  
    - 이유는 여러분들이 얼마만큼 성실히 공부하셨나를 객관적으로 평가하는 날 입니다.  
    
2. 오늘`만` 질문하는 행동을 되도록 삼가해주세요.

    - 이유는 위와 같습니다. 학생분들끼리 나누는 질문도 되도록 삼가해주세요.  
    - 정 질문하고 싶다면, 많은 고민 후에 오시는 것을 간곡히 바랍니다.

3. 여러분들 코드에서 인공지능 냄새나면 호오오온나요 ㅎㅎ

    - 그럴 땐, 어쩔 수 없지만 인공지능의 힘을 빌리지 말고 저에게 질문하러 와주세요.  
    - 지금까지 여러분들이 스스로 해결해온 모습이 너무 자랑스럽습니다. 
    - 오늘도 본인의 힘으로 구현하고 평가받길 기대합니다.

이 점 참고해주시면 감사하겠습니다.
