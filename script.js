document.getElementById('generate-btn').addEventListener('click', generatePassword);
document.getElementById('copy-btn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = parseInt(document.getElementById('password-length').value);
    
    if (isNaN(length) || length < 6) {
        Toastify({
            text: "Por favor, insira um comprimento de senha válido.",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#FF0000"
        }).showToast();
        return;
    }

    let charset = "";
    if (document.getElementById('include-letters').checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById('include-uppercase').checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById('include-numbers').checked) {
        charset += "0123456789";
    }
    if (document.getElementById('include-symbols').checked) {
        charset += "!@#$%^&*()_+[]{}|;:,.<>?";
    }

    if (charset === "") {
        Toastify({
            text: "Por favor, selecione pelo menos uma opção de caractere.",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#FF0000"
        }).showToast();
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password-output').value = password;

    Toastify({
        text: "Senha gerada com sucesso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#4CAF50"
    }).showToast();
}

function copyPassword() {
    const passwordOutput = document.getElementById('password-output');
    passwordOutput.select();
    passwordOutput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');

    Toastify({
        text: "Senha copiada com sucesso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#2196F3" // Diferente do verde para evitar confusão
    }).showToast();
}

function updateLengthValue(value) {
    document.getElementById('length-value').textContent = value;
}
