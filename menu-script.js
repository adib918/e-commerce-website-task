const open_btn = document.getElementById('open-menu');
const exit_btn = document.getElementById('exit-menu');
const menu = document.getElementById('menu');

open_btn.addEventListener('mousedown', () => {
    menu.style.right = "0px";
});

exit_btn.addEventListener('mousedown', () => {
    menu.style.right = "-100%";
});