const $mailAddress = document.getElementById('adress');
const $resButton = document.getElementById('res-button');
const $menu = document.getElementById('menu');

$resButton.addEventListener('click',() => {
  $menu.classList.toggle('show');
})

function copy() {
  $mailAddress.select();
  document.execCommand('Copy');
  console.log('copy!');
}

