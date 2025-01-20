// 0100010 => 이진 데이터라고 표현.
// 이진 데이터 => 컴퓨터가 이해할 수 있는 0과 1만으로 구성된 데이터.

const str = "ABC";

/*
    00000100 01100001 100010110

    근데 문제가 있어요. 
    단순히 `ABC`라는 문자열만 전송하지 않습니다.

    예를 들어, 안녕하세요 교강사 주병현입니다. 여러분들 독감 조심하세요ㅠ
    
    위의 메시지는 약 32바이트입니다.

    32 * 8 => 256비트

    변환이 필요.

    자바스크립트 내에서 이진 데이터를 변환하는 건 알겠는데, 어떻게 변환하지?
    Node.js 런타임 환경에서 넣어주는 모듈 하나가 존재함. => Buffer모듈
    이진 데이터(0과 1)를 다루기 위한 도구

    Buffer.from() 다양한 형태의 데이터를 버퍼(Buffer)객체로 변환하는 기능
    버퍼는 바이너리 데이터를 저장하는 배열 같은 것.
*/

console.log(Buffer.from(str)); // <Buffer 41 42 43>

/*
    왜 어떻게? 41, 42, 43이라는 숫자가 나왔을까?

    ASCII 코드도 알아야합니다.

    ASCII(미국 표준 코드)는 문자 인코딩의 가장 기본적인 유형 중 하나입니다.
    각 문자는 고유의 숫자 코드에 매핑됩니다.

    A => 65
    B => 66
    C => 67

    65 => 10진수라고 해요. 
    
    1. 65(10진수)를 2진수로 변환합니다.

    67 / 2 = 33 나머지 1
    33 / 2 = 16 나머지 1
    16 / 2 = 8 나머지 0
    8 / 2 = 4 나머지 0
    4 / 2 = 2 나머지 0
    2 / 2 = 1 나머지 0
    1 / 2 = 0 나머지 1

    1000001 1000010 1000011
    7비트씩인데 1바이트를 채우기 위해 맨 앞자리 0을 추가

    01000001 01000010 01000011

    0100 0001 0100 0010 0100 0011

    너무 힘들다....

    2. 2진수를 16진수로 변환

    2진수 0100 10진수 4에 해당합니다

    2의 3승, 2의 2승, 2의 1승, 2의 0승

    0 * 2의 3승, 1 * 2의 2승, 0 * 2의 1승, 0 * 2의 0승

    0 × 8 + 1 × 4 + 0 × 2 + 0 × 1 = 

    위의 값을 다 더함
    
    0 + 4 + 0 + 0 = 4

    0 × 8 + 0 × 4 + 0 × 2 + 1 × 1 = 
    
    0 + 0 + 0 + 1 = 1

    41, 42, 43

    기본 인코딩 방식입니다.  
    UTF-8 인코딩이라고 함.
*/


