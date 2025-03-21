## 저번 시간에는 뭐했을까??

데이터 베이스

데이터를 영구적으로 저장하는 공간.

const boardList = [{}];

### **서버 실행 전후의 차이**

- **서버 실행 전**: 새로고침이나 페이지 이동 시 데이터가 초기화.
- **서버 실행 후**: 데이터가 유지.

서버를 통해 데이터를 메모리에 유지할 수 있지만, 서버가 종료되면 데이터가 사라지는 문제가 있습니다.  
이를 해결하기 위해 **데이터베이스**를 사용합니다.

### **데이터베이스의 필요성**

- 데이터를 영구적으로 저장하기 위해 별도의 공간이 필요합니다.
- **데이터베이스**는 서버가 종료되어도 데이터를 보존할 수 있습니다.

## 저번 시간의 핵심

데이터베이스를 배우는 가장 큰 이유는 데이터를 **영구적으로 저장**하고 보존하는 것도 있지만,  
이를 필요에 따라 **효율적으로 관리**하기 위해서입니다.

1. **데이터를 안전하게 저장**: 서버가 종료되더라도 데이터가 유지됩니다.
2. **대량의 데이터 관리**: 데이터를 체계적으로 저장하고 검색할 수 있습니다.
3. **비동기 통신과 연결**: 서버에서 데이터베이스와 연결해 클라이언트 요청에 따라 데이터를 주고받을 수 있습니다.

이를 위해 이번 시간에는 **MySQL 설치 및 기본 SQL 명령어 사용**을 통해  
데이터베이스의 기본 구조와 동작 방식을 익히는 데 중점을 둡니다.  
이 과정은 향후 서버와 데이터베이스 간의 통신을 구현할 때 반드시 필요한 기초 작업입니다.

그 후, 비동기 통신을 이용하여 데이터베이스에 접근하여 내가 원하는 값을  
내가 원하는 요청 URL을 통해서 화면에 띄울 수 있다.

## 저번 시간의 목표

1. **MySQL 설치 및 환경 설정**: 데이터베이스를 사용하기 위한 준비를 마칩니다.
2. **SQL 기초 학습**: 데이터를 정의(DDL), 조작(DML), 제어(DCL)하는 기본적인 SQL 명령어를 익힙니다.
3. **실습을 통한 적용**: 실제 데이터베이스를 생성하고 데이터를 입력, 조회, 수정, 삭제하는 과정을 실습합니다.

## 저번 시간의 목차

1. **DBMS의 개념**

   - 데이터베이스와 DBMS의 차이점.
   - 데이터베이스의 역할과 필요성.

2. **MySQL 설치 및 설정**

   - MySQL 다운로드 및 설치.
   - 데이터베이스 환경 설정.

3. **SQL 기본 개념**

   - SQL의 구조와 종류.
   - DDL (데이터 정의어): CREATE, ALTER, DROP.
   - DML (데이터 조작어): SELECT, INSERT, UPDATE, DELETE.
   - DCL (데이터 제어어): GRANT, REVOKE.

4. **실습**

있었습니다.  
어제 너무 고생하셨씁니다.  
교강사는 매우매우 흡족하고 감동했다.

## 이번 시간에는 뭐할까?

`express을 활용한 게시판 구현`

근데 이제 데이터베이스를 곁들인.

이번 시간에는 데이터베이스 연결을 통해 데이터를 저장하고,  
각 디렉토리의 역할에 맞는 구조를 만드는 방법을 배웁니다.  

- **DB 연결**: 데이터베이스와 Express 서버를 연결하여 데이터를 주고받는 기본 흐름을 이해합니다.  
- **구조화된 디렉토리 설계**: `repository`, `services`, `controllers`로 역할을 나누어 유지보수와 확장성을 높입니다.  
- **SQL문 작성**: JavaScript에서 SQL문을 작성하고 결과값을 리턴받아 클라이언트에 전달하는 과정을 다룹니다.  

### **이번 시간의 핵심**  

1. **Express와 데이터베이스의 연결 이해**  
   - 연결풀(Pool)을 생성하고, 이를 통해 서버와 DB 간 효율적인 통신이 가능하도록 설정합니다.  
   
2. **SQL 작성과 결과 처리**  
   - JavaScript에서 SQL문을 작성하고 실행하여 데이터를 CRUD(Create, Read)하는 과정을 실습합니다.  

3. **게시판의 핵심 기능 구현**  
   - 클라이언트 요청(Request)을 받아 데이터를 DB에 저장(Create)하고, DB에서 데이터를 불러오는(Read) 기본 기능을 구현합니다.  

### **이번 시간의 목차**  

1. **DB 연결 및 설정**  
   - MySQL 설치 및 초기 설정  
   - Node.js에서 `mysql2` 패키지를 사용한 연결풀 생성  

2. **SQL문 작성 및 데이터 처리**  
   - INSERT와 SELECT 문 작성  

3. **게시판 구현: Create, Read**  
   - 새로운 게시글 작성 기능 구현(Create)  
   - 작성된 게시글 목록 조회 기능 구현(Read)  