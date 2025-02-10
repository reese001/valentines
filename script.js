// Create initial hearts
for (let i = 0; i < 10; i++) {
    createHeart();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(heart);

    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

function addMoreHearts() {
    for (let i = 0; i < 5; i++) {
        createHeart();
    }
}

// Continuously create hearts
setInterval(createHeart, 2000);