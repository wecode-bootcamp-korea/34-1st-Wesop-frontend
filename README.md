# Wesop Client Project

## Wesop Project Front Family

- F.E<br>
  [서한샘](https://github.com/kor-sams-dev)
  [박수연](https://github.com/dduddu92)
  [홍희윤](https://github.com/namu2267/)
  [조예지](https://github.com/Dumibell)
  <br>

## What is Wesop Client Project?

- 기존의 Aesop 사이트를 클론 코딩하여 React Page로 변환해가며 React를 학습하는 것을 목표로 두고 있음.

### 개발 인원 및 기간

- 개발기간 : 2022/06/20 ~ 2022/07/01
- 개발 인원 : 프론트엔드 4명, 백엔드 1명

## 적용 기술 및 구현 기능

### 적용 기술

HTML, CSS, Javascript, SCSS, react-router-dom, react
<br />

### 구현 페이지

<br />

#### 메인 화면

-

#### 제품 리스트 화면

-

#### 상세 제품조회 화면

- `API`를 활용해 각 제품에 해당하는 상세페이지 불러오기
- `useParams()`를 이용해 제품 클릭시마다 각 id에 해당하는 API 불러오기
- state와 map함수를 이용하여 사이즈 옵션 선택에 따라 이미지/가격이 변동되도록 구현.

  - 삼항연산자를 이용해 옵션이 하나밖에 없을 시 공백이 나오도록 구현
  - id값을 비교해 사이즈 옵션 선택시 각 옵션에 해당하는 이미지와 가격이 화면에 렌더링되도록 구현

- 여러 페이지에서 반복되는 슬라이더부분 컴포넌트로 관리
  - 이미지너비와 데이터가 담겨있는 배열의 길이를 활용해 아이템카드의 갯수에 따라 슬라이드가 이동하도록 구현.

#### 회원정보 관리 화면

-

#### 회원가입

- state를 활용해 회원가입 버튼 클릭시 모달창이 열리도록 구현.
- `fetch()`함수를 통해 입력된 회원정보 서버로 보내기
  - 회원가입 성공시 출력되는 메시지와 state를 활용해 회원가입 완료 후 모달창이 닫히도록 구현.
- state를 활용해 input창의 value값 받아오기
- 각 input창에 텍스트 입력시 placeholder가 위로 가도록 구현
  - `transform`과 `transition`을 통해 텍스트가 이동하는 class 생성
  - 각 input창에 onChange 이벤트 발생시 class명 바꿔주는 state 활용.
  - 각 input에 이벤트가 따로 발생하도록 하기 위해 input창을 하나의 컴포넌트로 생성 후 상수데이터를 활용해 map() 함수를 돌리는 방식으로 구현.
- 유효성 검사
  1. 에러메시지 출력
  - 삼항연산자를 이용하여 아이디에는 '@'와 '.com'이 포함되어 있지 않을 경우, 패스워드와 패스워드 확인의 입력값이 다를 경우 에러메시지 출력.
  2. 회원가입 버튼 비활성화
  - 1번의 조건을 충족시키지 못하거나 input창 중 하나라도 공백일 경우 disabled속성을 활용해 버튼 비활성화 기능 구현.

#### 로그인

-

#### 네비게이션

-

#### 장바구니

-
