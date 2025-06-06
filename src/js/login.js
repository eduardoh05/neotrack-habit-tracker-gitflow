document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'admin' && pass === 'admin') {
        localStorage.setItem('logado', 'true');
        window.location.href = 'index.html';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
});

// Se já estiver logado, redireciona para index.html
if (localStorage.getItem('logado') === 'true') {
    window.location.href = 'index.html';
}