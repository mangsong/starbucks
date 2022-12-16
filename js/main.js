const searchEl = document.querySelector('.search'); //도큐먼트는 html이라고보면됨.
const searchInputEl = searchEl.querySelector('input'); //위에서 이미 찾은 서치안의 input 내용을 찾는거임

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () { //블러는 포커스가 해제된걸 의미한다
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//옆의 배지(이벤트)부분과 페이지상단으로이동하는 버튼의 애니메이션부분(나타나고 사라지고)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () { //스크롤 이벤트를 할때 많이 쓰는 메쏘드임.사용하지 않으면 스크롤을 내릴때마다 안에있는 함수들이 반복됨 _.throttle(함수,시간)으로 사용함
  if(window.scrollY > 400) {
    //배지숨기기
    //gsap.to(요소,지속시간, {옵션,옵션(객체데이터형태임)}) 자바스크립트 애니메이션 사용방법
    //badgeEl.style.display = 'none'; 자연스럽게 사라지지 않아서 사용하지 않는다.
    gsap.to(badgeEl, .6,{
      opacity: 0,
      display: 'none' //이요소를 사용하지 않으면 스크롤을 내려도 영역이 그대로 남아있으므로 꼭 사용한다.
    });
    //페이지상단이동버튼 보이기
    gsap.to(toTopEl,.2, {
      x: 0
    });
  }else {
    //배지보이기
    //badgeEl.style.display = 'block'; 자연스럽게 사라지지 않아서 사용하지 않는다.
    gsap.to(badgeEl, .6,{
      opacity: 1,
      display: 'block'
    });
    // 페이지상단이동버튼 숨기기
    gsap.to(toTopEl,.2, {
      x: 100
    });
  }
},300)); //300은 0.3초 일정시간동안 한번씩 사용되도록 제한을 건 메쏘드임

//페이지상단이동버튼 누르면 최상단으로 이동
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});



const fadeEls =document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl,index) { //반복처리함수(단수이름,index) 
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 몇초 뒤에 시작될지. 순차적으로 실행하기위해 (index+1) 0.7,1.4,2.1,2.7초 뒤 차례대로 시작된다.
    opacity: 1,
  });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper',{
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이의 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
  delay: 5000, //5초임
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지번호 요소 제어
  },
  navigation: {
    nextEl: '.promotion .swiper-next',
    prevEl: '.promotion .swiper-prev',
  }
});
new Swiper ('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    nextEl: '.awards .swiper-next',
    prevEl: '.awards .swiper-prev',
}
});

//보이거나 안보이거나//
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion //느낌표는 붙어있는 값을 반대로 만들어주세요라는 뜻임,지속적으로 반대값을 줄수있는 값임
  if (isHidePromotion) {
    //숨김처리!
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) { 
  gsap.to(
    selector, //선택자
    random(1.5,2.5), //애니미이션동작시간(최소시간,최대시간)이 쓰여져야한다.
    { 
      y: size, //y축으로 얼마나 움직이냐
      repeat: -1, // -1은 지속적으로 반복
      yoyo: true, //애니메이션이 한번 돌아와서 다시 시작한다.
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy'); 
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소로 지정
      triggerHook: .8, //내가 감시하고 있는 요소가 지정된 뷰포인트를 보고있다고 판단하면 아래의 요소들을 실행함
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

//년도를 바꿔주는 자바스크립트
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //이번년도 숫자가 객체로 들어감