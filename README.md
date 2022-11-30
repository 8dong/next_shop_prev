# Next Shop Project

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3001/" target="_blank">http://localhost:3001/</a> 접속

## 사용한 기술 스택

<pre>
typescript v4.9.3

next v13.0.5

react v18.2.0

react-redux v8.0.5

@reduxjs-toolkit 1.9.1

styled-components v5.3.6
</pre>

## 구현 명세

### 반응형 웹 구현

데스트탑 환경과 모바일 환경을 고려한 반응형 웹 사이트 제작

### 컴포넌트

모든 컴포넌트 styled-components 라이브러리를 사용하여 직접 CSS 작성

### 상태 관리

장바구니 데이터를 초기 Context API로 관리하였으나, 이를 Redux로 마이그레이션 진행<br />
실제 API 요청을 보낸다면 Redux 비동기 미들웨어로 수행하는 것이 적절하다고 판단하여 Redux로 마이그레이션 수행

### 상품 목록(/)

1. 상품 목록을 IntersectionObserver API 사용하여 Infinity Scroll로 구현

2. 상품은 5개씩 표시되며 이후 fetchProductItems API 요청을 보내 추가적으로 로드되도록 구현

3. 각 상품마다 장바구니 버튼 클릭시 추가/삭제 기능 구현

#### 장바구니(/cart)

1. 페이지 헤더 영역 장바구니 버튼 클릭시 장바구니 페이지로 이동

2. 초기 장바구니 존재하는 모든 상품을 구매 목록으로 선택되도록 구현

3. 상단 삭제 버튼 클릭시 선택된 상품 모두 장바구니에서 제거

4. 상단 모두 선택 버튼 클릭시 장바구니 내 모든 상품을 구매 목록으로 추가

5. 각 상품 좌측 하단 버튼을 통해 구매 목록 추가/삭제 버튼 구현

6. 각 상품 좌측 상단 버튼을 통해 장바구니 제거 버튼 구현

7. rate 타입의 쿠폰은 각 상품마다 가격 할인

8. amount 타입의 쿠폰은 최종 가격 할인

9. 각 상품의 availableCoupon 값이 false인 상품은 쿠폰 할인 제외
