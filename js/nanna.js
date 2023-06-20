const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // 네비게이션 숨기기
    document.body.classList.remove('show-navigation');
  });
});

// 네비게이션 열기 버튼 클릭 이벤트 리스너 등록
const navOpenButton = document.querySelector('#navOpenButton');

navOpenButton.addEventListener('click', () => {
  // 네비게이션 보이기
  document.body.classList.add('show-navigation');
});