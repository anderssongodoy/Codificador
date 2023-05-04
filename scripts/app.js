
const textcontainer = document.querySelector('.text-container');
const resultImg = document.querySelector(".area-result img");
const resultTitle = document.getElementById("title");
const resultText = document.getElementById("result-text");

const encryptText = (text) => {
    let encryptedText = text.replace(/e/g, "enter");
    encryptedText = encryptedText.replace(/i/g, "imes");
    encryptedText = encryptedText.replace(/a/g, "ai");
    encryptedText = encryptedText.replace(/o/g, "ober");
    encryptedText = encryptedText.replace(/u/g, "ufat");
    return encryptedText;
}

const decryptText = (text) => {
    let decryptedText = text.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/ober/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");
    return decryptedText;
}

const inputTextarea = document.querySelector(".first-textarea");
const resultArea = document.querySelector(".area-result .text-container");

document.querySelector("#encrypt-btn").addEventListener("click", () => {
    const inputText = inputTextarea.value.toLowerCase();
    const encryptedText = encryptText(inputText);

    resultTitle.innerHTML = "Texto encriptado:"
    resultText.innerHTML = encryptedText
    resultImg.style.display = 'none';
    textcontainer.style.display = "flex";
    textcontainer.style.flexDirection = "column";
    textcontainer.style.alignItems = "center";
    textcontainer.style.justifyContent = "center";
    textcontainer.style.height = "100%";

    // mostrar el resultado
    resultArea.style.display = "block";
});

document.querySelector("#decrypt-btn").addEventListener("click", () => {
    const inputText = inputTextarea.value.toLowerCase();
    const decryptedText = decryptText(inputText);

    resultTitle.innerHTML = "Texto encriptado:"
    resultText.innerHTML = decryptedText
    resultImg.style.display = 'none';
    textcontainer.style.display = "flex";
    textcontainer.style.flexDirection = "column";
    textcontainer.style.alignItems = "center";
    textcontainer.style.justifyContent = "center";
    textcontainer.style.height = "100%";

    // mostrar el resultado
    resultArea.style.display = "block";
});


const copyBtn = document.getElementById('copy-btn');

copyBtn.addEventListener('click', () => {
    const resultArea = document.getElementById('result');
    const resultText = resultArea.textContent;
    navigator.clipboard.writeText(resultText);
    swal("Texto copiado al portapapeles");
});