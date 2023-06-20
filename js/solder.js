var slideWrap = document.querySelector('#slideWrap');
var slider = document.querySelector('#slider');
var slideNumber = document.querySelector('#slider').childElementCount;
var buttons = document.querySelectorAll('#icon76 button');

var slideHeight = slideWrap.clientHeight;
var currentPosition = 0;
var slideDuration = 1000; // 슬라이드 전환 시간 (밀리초)

function showSlide(slideIndex) {
  currentPosition = -slideIndex * slideHeight;
  slider.style.transition = `transform ${slideDuration / 1000}s`;
  slider.style.transform = `translateY(${currentPosition}px)`;
}

function handleButtonClick(slideIndex) {
  showSlide(slideIndex);
}

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    handleButtonClick(index);
  });
});