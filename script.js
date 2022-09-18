const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click", ()=> {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Criando QR-CODE...";
    qrImg.src =` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", ()=>{
        wrapper.classList.add("active")
        generateBtn.innerText = "QR Code pronto";
    })
})

qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active"); 
    }
})