// Drawer menu interatividade
const drawer = document.getElementById('drawer-menu');
const openBtn = document.querySelector('button .material-symbols-outlined');
const closeBtn = document.getElementById('close-drawer');
const menuBtn = document.querySelector('header button');

function openDrawer() {
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('open');
}
function closeDrawer() {
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('open');
}
menuBtn.addEventListener('click', openDrawer);
closeBtn.addEventListener('click', closeDrawer);
drawer.addEventListener('click', function(e) {
    if (e.target === drawer) closeDrawer();
});

