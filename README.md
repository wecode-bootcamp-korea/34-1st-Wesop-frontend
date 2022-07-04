# Wesop Client Project

## 🌟 Wesop Project Front Family

- F.E<br />
  [서한샘](https://github.com/kor-sams-dev)
  [박수연](https://github.com/dduddu92)
  [홍희윤](https://github.com/namu2267/)
  [조예지](https://github.com/Dumibell)

<br />

## 🌟 What is Wesop Client Project?

- 기존의 Aesop 사이트를 클론 코딩하여 React Page로 변환해가며 React를 학습하는 것을 목표로 두고 있음.
- 외부 라이브러리를 최대한 활용하지 않고 기초 문법과 기초 태그만을 활용하여 기능을 구현함

<br />

## 🌟개발 인원 및 기간

- 개발기간<br />2022/06/20 ~ 2022/07/01
- 개발 인원<br />프론트엔드 4명, 백엔드 1명
- 1차 프로젝트 발표 자료<br />
  [PDF](public/readme/wesop%20%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.pdf)
  <br />
  [Keynote](public/readme/wesop%20%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.key)
  <br />

## 🌟 적용 기술 및 구현 기능

### 적용 기술

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">

<br />

## 🌟 구현 페이지

<br />

### 메인 화면

## <img width="80%" alt='메인 화면' src='public/readme/대시보드.gif'>

- fetch와 useState의 사용법을 숙지함
  - backend와 협의된 API를 통해 backend server에서 data를 받아와서 추천향수, 추천제품 리스트가 메인화면에 나오도록 구현
    <br />
- 컴포넌트를 분리하여 코드의 가독성과 재활용성을 높이는데 집중함
- map함수를 이용하여 많은 데이터를 일일이 적지 않아도 되도록함
- video태그를 이용하여 메인페이지에 동영상이 나오도록 구현
- sass문법 중 @mixin을 사용하여 디자인 코드의 재활용성, 가독성을 높임
  - 전체를 다 쓰는 믹스인외에도 지역적인 믹스인도 사용하여 코드가 최대한 깔끔해지도록 함
- Hover, transition을 이용하여 마우스를 올리면 버튼의 색상이 변하도록 구현
- theme 사용, props을 통해서 2개의 다른 디자인을 적용

### 제품 리스트 화면

## <img width="80%" alt='제품리스트' src='public/readme/제품리스트.gif'>

-

### 상세 제품조회 화면

## <img width="80%" alt='제품상세' src='public/readme/제품상세.gif'>

## <img width="80%" alt='캐러셀' src='public/readme/캐러셀.gif'>

- `API`를 활용해 각 제품에 해당하는 상세페이지 불러오기
- `useParams()`를 이용해 제품 클릭시마다 각 id에 해당하는 API 불러오기
- state와 map함수를 이용하여 사이즈 옵션 선택에 따라 이미지/가격이 변동되도록 구현.

  - 삼항연산자를 이용해 옵션이 하나밖에 없을 시 공백이 나오도록 구현
  - id값을 비교해 사이즈 옵션 선택시 각 옵션에 해당하는 이미지와 가격이 화면에 렌더링되도록 구현

- 여러 페이지에서 반복되는 슬라이더부분 컴포넌트로 관리
  - 이미지너비와 데이터가 담겨있는 배열의 길이를 활용해 아이템카드의 갯수에 따라 슬라이드가 이동하도록 구현.

### 회원정보 관리 화면

## <img width="80%" alt='회원 정보' src='public/readme/사용자 정보.gif'>

- API를 통해 받아온 개인정보(성, 이름, 이메일, 패스워드)가 회원정보화면에 나오도록 구현
- 편집버튼을 누르면 기본 정보가 사라지고 정보 수정이 가능한 상세페이지가 나오도록 기능 구현
- 컴포넌트를 분리하여 개인정보창과 패스워드창에 같은 컴포넌트를 적용할 수 있도록 함
- fetch함수와 REST API 중 PATCH 메소드를 이용한 회원정보 수정기능을 구현함

### 회원가입

## <img width="80%" alt='회원가입' src='public/readme/회원가입.gif'>

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

### 로그인

## <img width="80%" alt='로그인' src='public/readme/로그인.gif'>

- JWT와 로컬 스토리지를 활용하여 로그인 기능 구현

- placeholder 텍스트가 label로 애니메이션 되는 input창 구현(floating label input)

- 정규 표현식을 사용하여 이메일의 형식과 비밀번호 형식이 맞는지 확인.

- 삼항연산자를 이용하여 버튼 교체 기능 구현.

  1. 로그인 전에는 로그인을 위한 loginModal이 활성화되는 버튼이 네비게이션 메뉴에 구현.

  2. 로그인 성공 이후에는 로컬 스토리지에 저장된 사용자의 fullName을 불러와 사용자의 이름으로 된 버튼으로 교체 되게끔 구현. 해당 버튼은 useNavigate()를 이용해 사용자 개인 정보 페이지로 이동하게 구현.

- useRef()와 useEffect()를 이용하여 Modal창 외부 영역을 클릭하면 Modal창이 닫히게 하는 기능 구현.

### 네비게이션

## <img width="80%" alt='네비게이션' src='public/readme/네비게이션.gif'>

- 네비게이션 구성 조회 api를 활용하여 네비게이션 메뉴 및 각 메뉴의 서브 카테고리 구현에 필요한 데이터를 불러오도록 작업.

  1. 불러온 data를 state에 저장.

  2. 반복되는 코드를 Array.map()메서드를 활용해서 간결하게 구현(메뉴, 서브카테고리, 카테고리)

  3. 메뉴 탭이 바뀌는 것에 따라서 보여지는 내용이(서브 카테고리, 카테고리) 달라야 하므로 객체의 특정 값을 맵핑하는 방식을 통해 메뉴 탭을 구현

- 변하지 않는 데이터를 사용하여 메뉴 탭이 바뀔때마다 modal 창의 배경색과 이미지가 달라지도록 구현.

- Link tag를 활용하여 동적 라우팅 구성

### 장바구니

## <img width="80%" alt='장바구니' src='public/readme/장바구니.gif'>

-
