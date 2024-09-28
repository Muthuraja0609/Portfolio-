function DarkMode() {
    const body = document.body;
    const full = document.querySelector('.full');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const modeIcon = document.getElementById('mode-icon');
    body.classList.toggle('dark-mode');
    full.classList.toggle('dark-mode');
    left.classList.toggle('dark-mode');
    right.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
}
