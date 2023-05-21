// DEFINIR VARIABLES DEL HTML A JAVASCRIPT
const textcontainer = document.getElementById('text-container1');
const resultImg = document.querySelector(".area-result img");
const resultTitle = document.getElementById("title");
const resultText = document.getElementById("result-text");
// DEFINIR EL BOTON PARA COPIAR
const copyBtn = document.getElementById('copy-btn');
copyBtn.style.display = 'none';

textcontainer.style.bottom = "0";

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
const resultArea = document.querySelector(".area-result");

// AÑADIR FUNCION AL BOTON ENCRIPTAR
document.querySelector("#encrypt-btn").addEventListener("click", () => {
    const inputText = inputTextarea.value.toLowerCase();
    if (inputText.trim() === "" || !/^[a-zA-Z\s]*$/.test(inputText)) {
        return; // Si no hay texto ingresado o contiene caracteres especiales, no hacer nada
    }
    const encryptedText = encryptText(inputText);

    resultTitle.innerHTML = "Texto encriptado:"
    resultText.innerHTML = encryptedText
    resultImg.style.display = 'none';
    textcontainer.style.bottom = "";
    copyBtn.style.width = '80%';

    // mostrar el botón
    copyBtn.style.display = 'block';
});

// AÑADIR FUNCION AL BOTON DESCENCRIPTAR
document.querySelector("#decrypt-btn").addEventListener("click", () => {
    const inputText = inputTextarea.value.toLowerCase();
    if (inputText.trim() === "" || !/^[a-zA-Z\s]*$/.test(inputText)) {
        return; // Si no hay texto ingresado o contiene caracteres especiales, no hacer nada
    }
    const decryptedText = decryptText(inputText);

    resultTitle.innerHTML = "Texto encriptado:"
    resultText.innerHTML = decryptedText
    resultImg.style.display = 'none';

    // mostrar el resultado
    resultArea.style.display = "block";
});

// AÑADIR FUNCION AL BOTON
copyBtn.addEventListener('click', async () => {
    const resultArea1 = document.querySelector(".area-result .text-container .text");
    const resultText1 = resultArea1.textContent;
    navigator.clipboard.writeText(resultText1);
    Swal.fire({
        icon: 'success',
        title: 'Texto copiado al portapapeles',
        showConfirmButton: false,
        timer: 1500,
        position: 'center',
        toast: true,
        background: '#007BFF',
        iconColor: '#fff',
        customClass: {
            title: 'copy-alert-title',
        },
    });
});