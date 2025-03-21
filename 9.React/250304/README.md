## 저번 수업은 뭐할까?

리액트 프로젝트 `누 룩` 초기 세팅

### 리액트 프로젝트 구조화

- React 프로젝트를 생성하고 폴더 구조를 이해.
- **react-router-dom**을 활용하여 페이지 간 이동을 설정.
- styled-components를 활용하여 공통 레이아웃을 설계.
- hooks를 활용한 사용자 입력 관리(`useInput` Hook) 컴포넌트 운용

### 위의 처음보는 키워드

- react-router-dom
- hooks

앞에서 설명할거임!

### 저번 수업의 핵심

- React 프로젝트를 체계적으로 구조화하고, 유지보수하기 쉬운 디렉토리 구성을 만든다.
- 라우팅을 통해 페이지 전환을 구현.
- Styled-Components를 이용한 디자인 시스템을 적용해 재사용 가능한 UI를 설계한다.
- 커스텀 훅(useInput)을 만들어 입력값을 효율적으로 관리하는 방법을 학습한다.

## 저번 수업의 목차

1. **React 프로젝트 초기 설정**

   - `create-react-app`으로 프로젝트 생성
   - 폴더 구조 및 역할 정리

2. **라우팅 적용 (`react-router-dom`)**

   - `BrowserRouter`, `Routes`, `Route`, `Outlet` 활용
   - `NavLink`를 사용하여 내비게이션 구성

3. **공통 레이아웃 설계 (`Header`, `Footer`, `BodyWrapper`)**

   - `styled-components`를 이용한 스타일 관리
   - `Layout` 컴포넌트에서 `Outlet`을 사용하여 공통 레이아웃 적용

4. **커스텀 훅(`useInput`) 실습**

   - `useState`를 활용한 사용자 입력값 관리
   - 재사용 가능한 `useInput` 훅을 만들고 `Form` 컴포넌트에 적용

### 결론

오늘 수업을 통해 **React 프로젝트의 구조화, 라우팅, 공통 레이아웃 설계, 커스텀 훅 활용법**을 익히며, 유지보수가 쉬운 프로젝트를 설계하는 방법을 실습.

`전역 상태가 왜 필요한지 간접 체험`

## 오늘 수업은 뭐할까?

렌더링 최적화 그리고 `전역 상태` 관리

## 오늘 수업의 핵심

지금까지는 `리액트한테 알려주어야만 한다. 근데 그게 정해져있는(state)`  
오늘은 **"React는 데이터(state)가 변하면 UI를 자동으로 업데이트하지만, 렌더링이 항상 최적화되는 것은 아님!"**

- 렌더링 최적화(불필요한 렌더링 방지)를 위해 `React.memo`, `useMemo`, `useCallback` 등의 최적화 도구를 활용.
- 전역 상태 관리의 필요성: `props drilling` 문제를 이해하고, 이를 해결하기 위한 `useContext`의 기본 개념을 학습.
- React는 선언적 UI 철학을 유지하면서도 성능을 고려한 최적화 방법을 개발자에게 제공.

**렌더링이 언제, 왜 발생하는지 이해하고 이를 제어하는 것이 중요하다.**

## 오늘 수업의 목차

1. **React 함수형 컴포넌트의 리렌더링 원리**
2. **최적화가 필요함?**
3. **React.memo로 컴포넌트 메모이제이션**
4. **useMemo로 연산 비용 최적화**
5. **useCallback으로 함수 재생성 방지**
6. **전역 상태 관리의 기초(useContext)**