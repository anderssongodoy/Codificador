// DEFINIR VARIABLES DEL HTML A JAVASCRIPT
const textcontainer = document.querySelector('.text-container');
const resultImg = document.querySelector(".area-result img");
const resultTitle = document.getElementById("title");
const resultText = document.getElementById("result-text");

// FUNCION PARA ENCRIPTAR
const encryptText = (text) => {
    let encryptedText = text.replace(/e/g, "enter");
    encryptedText = encryptedText.replace(/i/g, "imes");
    encryptedText = encryptedText.replace(/a/g, "ai");
    encryptedText = encryptedText.replace(/o/g, "ober");
    encryptedText = encryptedText.replace(/u/g, "ufat");
    return encryptedText;
}

// FUNCION PARA DESENCRIPTAR
const decryptText = (text) => {
    let decryptedText = text.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/ober/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");
    return decryptedText;
}

// DEFINIR VARIABLES PARA EL RESULTADO
const inputTextarea = document.querySelector(".first-textarea");
const resultArea = document.querySelector(".area-result .text-container");

// AÑADIR FUNCION AL BOTON ENCRIPTAR
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

// AÑADIR FUNCION AL BOTON DESCENCRIPTAR
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

// DEFINIR EL BOTON PARA COPIAR
const copyBtn = document.getElementById('copy-btn');

// AÑADIR FUNCION AL BOTON
copyBtn.addEventListener('click', () => {
    const resultArea1 = document.querySelector(".area-result .text-container .text");
    const resultText1 = resultArea1.textContent;
    navigator.clipboard.writeText(resultText1);
    swal("Texto copiado al portapapeles");
});