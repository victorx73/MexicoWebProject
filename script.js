
// Menu mobile para index.html e páginas similares
const mobileMenu = document.getElementById('mobile-menu');
const openMenuBtn = document.getElementById('menu-button');
const closeMenuBtn = document.getElementById('close-menu');

if (mobileMenu && openMenuBtn && closeMenuBtn) {
    openMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
    });
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
    });
    // Fecha o menu ao clicar fora do painel
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
}

