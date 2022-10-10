function colorPicker() {
  let randomColor = "0123456789abcdef";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash = hash + randomColor[Math.floor(Math.random() * 16)];
  }
  return hash;
}

const btn = document.getElementById('button');

function changeColor() {
  document.body.style.backgroundColor = colorPicker();
}
btn.addEventListener("click",changeColor);