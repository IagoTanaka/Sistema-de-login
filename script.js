document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    // Criar elemento para mensagens de alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert';
    loginForm.parentNode.insertBefore(alertDiv, loginForm.nextSibling);
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Verificar se o usuário é o nome e a senha é a data de aniversário
        if (username.toLowerCase() === 'tanaka lindo' && password === '02 de agosto') {
            showAlert('Login realizado com sucesso!', 'success');
        } else {
            showAlert('Usuário ou senha incorretos. Tente novamente.', 'error');
        }
    });
    
    function showAlert(message, type) {
        alertDiv.textContent = message;
        alertDiv.className = `alert ${type}`;
        alertDiv.style.display = 'block';
        
        // Esconder o alerta após 5 segundos
        setTimeout(() => {
            alertDiv.style.display = 'none';
        }, 5000);
    }
});
