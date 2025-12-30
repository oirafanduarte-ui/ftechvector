// --- Login técnicos para tecnicos.html ---
function loginTecnico() {
    var usuario = document.getElementById('user_tecnico');
    var senha = document.getElementById('senha_tecnico');
    var erro = document.getElementById('login-error');
    if (!usuario || !senha || !erro) return;
    var usuarioVal = usuario.value.trim();
    var senhaVal = senha.value;
    if(usuarioVal.toLowerCase() === 'admin' && senhaVal === 'vector@123') {
        erro.style.display = 'block';
        erro.textContent = 'Usuário e senha não permitidos!';
        return;
    }
    if(usuarioVal.toLowerCase() === 'ftech' && senhaVal === 'vector@123') {
        sessionStorage.setItem('tecnicoLogado', '1');
        document.getElementById('login-area').style.display = 'none';
        document.getElementById('tecnico-area').style.display = 'block';
        return;
    }
    erro.style.display = 'block';
    erro.textContent = 'Senha ou Usuário incorretos';
    return;
}

// Resetar login ao fechar o site
window.addEventListener('beforeunload', function() {
    sessionStorage.removeItem('tecnicoLogado');
});

// Se já logado na sessão, mostrar área técnica
document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('login-area') && document.getElementById('tecnico-area')) {
        if(sessionStorage.getItem('tecnicoLogado') === '1') {
            document.getElementById('login-area').style.display = 'none';
            document.getElementById('tecnico-area').style.display = 'block';
        } else {
            document.getElementById('login-area').style.display = 'block';
            document.getElementById('tecnico-area').style.display = 'none';
        }
    }
});
// Dark mode toggle seguro
const darkBtn = document.getElementById('darkmode-toggle');
const darkIcon = document.getElementById('darkmode-icon');
function setDarkMode(on) {
    document.body.classList.toggle('darkmode', on);
    if (darkIcon) darkIcon.textContent = on ? '☀️' : '🌙';
    localStorage.setItem('ftech-darkmode', on ? '1' : '0');
}
// Inicializa com preferência salva
setDarkMode(localStorage.getItem('ftech-darkmode') === '1');
if (darkBtn) {
    darkBtn.addEventListener('click', () => {
        setDarkMode(!document.body.classList.contains('darkmode'));
    });
}

// Interatividade simples para navegação
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('ativo'));
            this.classList.add('ativo');
        });
    });

    // Modal de vídeo
    // Modal de vídeo só se existir na página
    const modal = document.getElementById('modal-video');
    const modalPlayer = document.querySelector('.modal-player');
    const modalClose = document.querySelector('.modal-close');
    const modalBg = document.querySelector('.modal-bg');
    const modalTitle = document.querySelector('.modal-title');
    const thumbs = document.querySelectorAll('.video-thumb');

    if (modal && modalPlayer && modalClose && modalBg && modalTitle && thumbs.length > 0) {
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const videoId = this.getAttribute('data-video');
                // Busca o título do curso no elemento pai
                const title = this.parentElement.querySelector('p')?.textContent || this.parentElement.nextElementSibling?.textContent || '';
                modalPlayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allowfullscreen style="width:100%;height:100%;border-radius:10px;"></iframe>`;
                modalTitle.textContent = title;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });

        function closeModal() {
            modal.style.display = 'none';
            modalPlayer.innerHTML = '';
            modalTitle.textContent = '';
            document.body.style.overflow = '';
        }
        modalClose.addEventListener('click', closeModal);
        modalBg.addEventListener('click', closeModal);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });
    }
});