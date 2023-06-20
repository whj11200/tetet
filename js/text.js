document.onselectstart = function() {
  return false;
}

// 텍스트 복사 방지
document.oncopy = function() {
  return false;
}

// 텍스트 붙여넣기 방지
document.onpaste = function() {
  return false;
}

// 우클릭 메뉴 비활성화
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});