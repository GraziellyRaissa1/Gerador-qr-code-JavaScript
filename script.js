const container =document.querySelector(".container"),
qrInput =document.querySelector(".forms input"),
generateBtn =document.querySelector(".forms button"),
qrImg = document.querySelector(".qr img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Gerando um Qr Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Gerar Qr Code"
     container.classList.add("active");
    });
   
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        container.classList.remove("active");
    }
});