## 저번 시간에는 뭐했을까?

**틱택토**

## 저번 시간의 핵심

- React 런타임 환경을 이해하기 위한 실습으로 **클래스형 컴포넌트 기반 Tic-Tac-Toe**를 구현한다.
- **React의 상태(state) 관리와 생명주기(lifecycle)를 활용**하여 UI가 어떻게 동작하는지 이해한다.
- **이전 수업에서 배운 생명주기 개념을 실전 적용**하여, React가 어떻게 UI를 최적화하는지 파악한다.
- 저번 실습을 통해 React의 상태 관리 방식과 생명주기가 UI에 미치는 영향을 명확히 이해한다.
  => 즉, 틱택토가 주가 되기는 하지만, 우리는 **리액트 런타임 환경**의 이해가 중점임!

## 저번 시간의 핵심 문장

`Tic-Tac-Toe를 통해 이 흐름을 직접 구현하며 React 런타임 환경을 익힌다.`

## 저번 시간의 목차

1. **Tic-Tac-Toe 프로젝트 개요**

   - 왜 Tic-Tac-Toe를 구현하는가?

2. **Tic-Tac-Toe 기본 설계**

   - **컴포넌트 분리** (Game, Board, Square)
   - **상태 관리 방식** (게임 흐름을 state로 관리)
   - **데이터 흐름** (부모-자식 간 props 전달 방식)

3. **Tic-Tac-Toe 구현하기**

   - `state`를 활용한 턴 전환
   - `onClick` 이벤트를 통한 상태 변경
   - 승패 판별 로직 구현

4. **생명주기와 상태 변화 흐름 파악**

   - `setState` 호출 → 리렌더링 과정
   - **React의 UI 업데이트 흐름 디버깅**
   - 불필요한 렌더링 방지 최적화 방법

## 이번 시간에는 뭐할까?

`Babel` 과 `Webpack`  

이전 시간에는 틱택토를 구현하면서, 리액트 런타임 환경에 대해서 어느 정도 이해됬다고 생각함.  
다음은, 그렇다면, React가 브라우저에서 실행되기까지의 과정은 어떻게 이루어질까?  
Node.js 런타임 환경에서 Babel과 Webpack이 어떤 역할을 하는지 알아보자.  

## 이번 시간의 핵심

Babel과 Webpack을 활용하여 React 환경을 구축하고,  
모듈 번들링 및 트랜스파일링 과정이 어떻게 이루어지는지 이해한다.

## 이번 시간의 목차

- Babel: 트랜스파일링 과정

   - Step 1. Babel의 개념과 필요성, 기본적인 설정 및 실행 과정
   - Step 2. 모듈 시스템 변환
   - Step 3. JSX 트랜스파일링(Transpiling)

- Webpack: 번들링 과정

   - Step 1. Webpack 기본 개념 및 필요성 이해
   - Step 2. Webpack을 활용한 CSS 번들링
   - Step 3. Webpack 설정 및 React 환경 구성

- Node.js 런타임 환경이요?? 뭔데요??