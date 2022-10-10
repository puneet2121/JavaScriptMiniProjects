document.addEventListener('click',updateTask)

function updateTask() {
  let task = document.querySelector('.input').value
  document.getElementById('item_input').innerText = task || document.getElementById('ii').innerText
  document.querySelector('.input').value = ''
}
