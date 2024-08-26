document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("text-input");
  const encryptButton = document.querySelector("form button:first-of-type");
  const decryptButton = document.querySelector("form button:last-of-type");
  const resultHeading = document.querySelector("section:last-of-type h2");
  const resultParagraph = document.querySelector("section:last-of-type p");
  const resultImage = document.querySelector("section:last-of-type img");

  function encrypt(text) {
    const encryptedText = text
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    return encryptedText;
  }

  function decrypt(text) {
    const decryptedText = text
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return decryptedText;
  }

  function updateResult(text) {
    if (text) {
      resultHeading.textContent = "Resultado:";
      resultParagraph.textContent = text;
      resultImage.style.display = "none";
    } else {
      resultHeading.textContent = "No se encontró ningún texto";
      resultParagraph.textContent =
        "Ingresá el texto que quieras encriptar o desencriptar";
      resultImage.style.display = "block";
    }
  }

  encryptButton.addEventListener("click", function (event) {
    event.preventDefault();
    const encryptedText = encrypt(textInput.value);
    updateResult(encryptedText);
  });

  decryptButton.addEventListener("click", function (event) {
    event.preventDefault();
    const decryptedText = decrypt(textInput.value);
    updateResult(decryptedText);
  });

  updateResult("");
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDarkMode);
}

window.onload = function () {
  const savedDarkMode = localStorage.getItem("dark-mode") === "true";
  if (savedDarkMode) {
    document.body.classList.add("dark-mode");
  }
};

