let imgBox = document.getElementById("ImgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let submitBtn = document.getElementById("btn");

function qrGenerator() {

    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");  // Adding the class dynamically
    }
    else {
        qrText.classList.add("error")
        setTimeout(() => {
            qrText.classList.remove("error")
        }, 1000);
    }


}

submitBtn.addEventListener('click', () => {
    qrGenerator()
})
