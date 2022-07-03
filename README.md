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

-

#### 회원정보 관리 화면

-

#### 회원가입

-

#### 로그인

- JWT와 로컬 스토리지를 활용하여 로그인 기능 구현

- placeholder 텍스트가 label로 애니메이션 되는 input창 구현(floating label input)

- 정규 표현식을 사용하여 이메일의 형식과 비밀번호 형식이 맞는지 확인.

- 삼항연산자를 이용하여 버튼 교체 기능 구현.

1. 로그인 전에는 로그인을 위한 loginModal이 활성화되는 버튼이 네비게이션 메뉴에 구현.

2. 로그인 성공 이후에는 로컬 스토리지에 저장된 사용자의 fullName을 불러와 사용자의 이름으로 된 버튼으로 교체 되게끔 구현. 해당 버튼은 useNavigate()를 이용해 사용자 개인 정보 페이지로 이동하게 구현.

- useRef()와 useEffect()를 이용하여 Modal창 외부 영역을 클릭하면 Modal창이 닫히게 하는 기능 구현.

#### 네비게이션

- 네비게이션 구성 조회 api를 활용하여 네비게이션 메뉴 및 각 메뉴의 서브 카테고리 구현에 필요한 데이터를 불러오도록 작업.

1. 불러온 data를 state에 저장.

2. 반복되는 코드를 Array.map()메서드를 활용해서 간결하게 구현(메뉴, 서브카테고리, 카테고리)

3. 메뉴 탭이 바뀌는 것에 따라서 보여지는 내용이(서브 카테고리, 카테고리) 달라야 하므로 객체의 특정 값을 맵핑하는 방식을 통해 메뉴 탭을 구현

- 변하지 않는 데이터를 사용하여 메뉴 탭이 바뀔때마다 modal 창의 배경색과 이미지가 달라지도록 구현.

- Link tag를 활용하여 동적 라우팅 구성

#### 장바구니

-
