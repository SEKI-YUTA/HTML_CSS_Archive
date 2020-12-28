const $mailAddress = document.getElementById('adress');
const $showButton = document.getElementById('show-button');
const $closeButton = document.getElementById('close-button');
const $menu = document.getElementById('menu');

$showButton.addEventListener('click',() => {
  $menu.classList.add('show');
})
$closeButton.addEventListener('click',() => {
  $menu.classList.remove('show');
})

function copy() {
  $mailAddress.select();
  document.execCommand('Copy');
  console.log('copy!');
}

