let currentColorIndex = -1;

function changeColor(index) {
  const buttons = document.querySelectorAll('#buttons button');
  const button = buttons[index];

  // 해당 버튼의 색상을 검은색으로 변경
  button.style.backgroundColor = 'black';
  button.style.borderColor = 'black';

  if (currentColorIndex !== -1 && currentColorIndex !== index) {
    // 이전 버튼의 색상을 원래대로 돌립니다.
    buttons[currentColorIndex].style.backgroundColor = 'rgb(143, 143, 143)';
    buttons[currentColorIndex].style.borderColor = 'rgb(143, 143, 143)';
  }

  currentColorIndex = index;
}