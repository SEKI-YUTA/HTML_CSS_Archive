let colorPanel = document.getElementById("colorPanel"); //色表示
let colorHex = document.getElementById("color-hex"); //16進数入力
let colorPic = document.getElementById("color-pic"); //カラーピッカー
let colorNumber = "";

colorPanel.style.backgroundColor = "#000000";
colorHex.addEventListener("change", () => {
    colorPanel.style.backgroundColor = colorHex.value;
    colorPic.value = colorHex.value;
});
colorPic.addEventListener("change", () => {
    colorPanel.style.backgroundColor = colorPic.value;
    colorHex.value = colorPic.value;
});