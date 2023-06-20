let currentCircleIndex = -1;

function changeCircleColor(index) {
  const circles = document.querySelectorAll('.circles-wrapper .circle');
  const circle = circles[index];

  // 해당 원형 요소의 색상을 노란색으로 변경
  circle.style.backgroundColor = '#F7D37A';

  if (currentCircleIndex !== -1 && currentCircleIndex !== index) {
    // 이전 원형 요소의 색상을 원래대로 돌립니다.
    circles[currentCircleIndex].style.backgroundColor = '';
  }

  currentCircleIndex = index;
}