document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var emailError = document.getElementById('email-error');
    var senhaError = document.getElementById('senha-error');
    
    var isValid = true;

    // Limpa mensagens de erro
    emailError.textContent = '';
    senhaError.textContent = '';

    // Valida o email
    if (!email.checkValidity()) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        isValid = false;
    }

    // Valida a senha
    if (!senha.checkValidity()) {
        senhaError.textContent = 'Por favor, insira uma senha.';
        isValid = false;
    }

    // Se o formulário for válido, redireciona para o menu
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        window.location.href = 'menu\menu.html'; // Redireciona para a página do menu
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
