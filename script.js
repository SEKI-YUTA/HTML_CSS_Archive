const mailAddress = document.getElementById('adress')
function copy() {
  mailAddress.select();
  document.execCommand('Copy');
  console.log('copy!');
}