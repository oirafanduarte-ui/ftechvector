    // Dark mode toggle
    const darkBtn = document.getElementById('darkmode-toggle');
    const darkIcon = document.getElementById('darkmode-icon');
    function setDarkMode(on) {
        document.body.classList.toggle('darkmode', on);
        darkIcon.textContent = on ? '☀️' : '🌙';
        localStorage.setItem('ftech-darkmode', on ? '1' : '0');
    }
    // Inicializa com preferência salva
    setDarkMode(localStorage.getItem('ftech-darkmode') === '1');
    darkBtn.addEventListener('click', () => {
        setDarkMode(!document.body.classList.contains('darkmode'));
    });
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
    const modal = document.getElementById('modal-video');
    const modalPlayer = document.querySelector('.modal-player');
    const modalClose = document.querySelector('.modal-close');
    const modalBg = document.querySelector('.modal-bg');
    const modalTitle = document.querySelector('.modal-title');
    const thumbs = document.querySelectorAll('.video-thumb');

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
});