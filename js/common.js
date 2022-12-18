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

//년도를 바꿔주는 자바스크립트
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //이번년도 숫자가 객체로 들어감