// ===== ПЕРЕКЛЮЧЕНИЕ ТЕМЫ =====
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeButton(isDark);
}

function updateThemeButton(isDark) {
    const btn = document.getElementById('themeToggle');
    btn.innerText = isDark ? '☀️' : '🌙';
    btn.title = isDark ? 'Включить светлую тему' : 'Включить тёмную тему';
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';

    if (isDark) {
        document.body.classList.add('dark-theme');
    }

    updateThemeButton(isDark);
}

// ===== ЗАПУСК =====
initTheme();
