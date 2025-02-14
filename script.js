const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () => {
            body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
            themeToggle.textContent = body.dataset.theme === 'light' ? '🌞' : '🌓';
        });

        function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/`;
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

let userUUID = getCookie('userUUID');

if (!userUUID) {
    userUUID = generateUUID();
    setCookie('userUUID', userUUID, 365);
}

let visitCount = localStorage.getItem('visitCount') || 0;

visitCount++;
localStorage.setItem('visitCount', visitCount);

document.getElementById('visit-counter').textContent = `Visits: ${visitCount}`;

