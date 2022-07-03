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

<br />

## 🌟 적용 기술 및 구현 기능

### 적용 기술

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">

<br />

## 🌟 구현 페이지

<br />

### 메인 화면

## <img width="80%" alt='메인 화면' src='public/readme/대시보드.gif'>

-

### 제품 리스트 화면

## <img width="80%" alt='제품리스트' src='public/readme/제품리스트.gif'>

-

### 상세 제품조회 화면

## <img width="80%" alt='제품상세' src='public/readme/제품상세.gif'>

## <img width="80%" alt='캐러셀' src='public/readme/캐러셀.gif'>

-

### 회원정보 관리 화면

## <img width="80%" alt='회원 정보' src='public/readme/사용자 정보.gif'>

-

### 회원가입

## <img width="80%" alt='회원가입' src='public/readme/회원가입.gif'>

-

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
