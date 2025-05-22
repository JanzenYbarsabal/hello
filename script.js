document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const revealBtn = document.getElementById('revealBtn');
    const choices = document.getElementById('choices');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    let noButtonClicks = 0;

    const confessionText = `Dear Yvanna-roseann Apostol... 🌸

        Every time I see your smile, bumibilis yung tibok ng puso ko... 🌺
        Alam mo ba kung ano yung nagustohan ko sayo? Yun yung mga magaganda mong ngiti... ✨
        I really like you dati pa kung alam mo lang.. Everytime na i aaproach kita sobra yung kaba ko...🐱
        kaya I made this program to confess my feelings for you... Again, I really like you...
        Don't worry, I will respect your answer... 💖`;

    revealBtn.addEventListener('click', () => {
        revealBtn.style.display = 'none';
        typeWriter(confessionText, 0);
        addFloatingHearts();
    });

    function addFloatingHearts() {
        const container = document.querySelector('.container');
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.position = 'absolute';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '100%';
                heart.style.transform = 'scale(0.5)';
                heart.style.opacity = '0.8';
                container.appendChild(heart);
                
                const animation = heart.animate([
                    { transform: 'translateY(0) scale(0.5)', opacity: 0.8 },
                    { transform: 'translateY(-500px) scale(0.2)', opacity: 0 }
                ], {
                    duration: 3000,
                    easing: 'ease-out'
                });
                
                animation.onfinish = () => heart.remove();
            }, i * 300);
        }
    }

    function typeWriter(text, i) {
        if (i < text.length) {
            message.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1), 50);
            if (i === text.length - 1) {
                setTimeout(() => {
                    choices.classList.remove('hidden');
                }, 1000);
            }
        }
    }

    yesBtn.addEventListener('click', () => {
        message.innerHTML = "🌸 You've made me the happiest person in the world! 🌸";
        choices.style.display = 'none';
        celebrateYes();
        createKittenParade();
    });

    function createKittenParade() {
        const container = document.querySelector('.container');
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const cat = document.createElement('div');
                cat.className = 'cat';
                cat.style.position = 'absolute';
                cat.style.bottom = '0';
                cat.style.left = '-100px';
                container.appendChild(cat);
                
                const animation = cat.animate([
                    { transform: 'translateX(0)' },
                    { transform: `translateX(${window.innerWidth + 200}px)` }
                ], {
                    duration: 6000,
                    easing: 'linear'
                });
                
                animation.onfinish = () => cat.remove();
            }, i * 1000);
        }
    }

    noBtn.addEventListener('click', () => {
        message.innerHTML = `It's okay, I completely understand and respect your decision... 🌸<br>
            Thank you for being honest, and please know that if you need something, sabihin mo lang at tutulungan kita as far as I can... 💖`;
        choices.style.display = 'none';
        addGentleFlowers();
    });

    function addGentleFlowers() {
        const container = document.querySelector('.container');
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const flower = document.createElement('div');
                flower.classList.add('flower');
                flower.style.position = 'absolute';
                flower.style.left = Math.random() * 100 + '%';
                flower.style.top = '100%';
                flower.style.transform = 'scale(0.6)';
                flower.style.opacity = '0.6';
                container.appendChild(flower);
                
                const animation = flower.animate([
                    { transform: 'translateY(0) scale(0.6) rotate(0deg)', opacity: 0.6 },
                    { transform: 'translateY(-300px) scale(0.3) rotate(180deg)', opacity: 0 }
                ], {
                    duration: 4000,
                    easing: 'ease-out'
                });
                
                animation.onfinish = () => flower.remove();
            }, i * 500);
        }
    }

    noBtn.addEventListener('mouseover', (e) => {
        noButtonClicks++;
        if (noButtonClicks < 5) {
            const x = Math.random() * (window.innerWidth - 100);
            const y = Math.random() * (window.innerHeight - 40);
            noBtn.style.position = 'fixed';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        } else {
            noBtn.style.position = 'static';
            noBtn.innerHTML = "Please? 🥺";
        }
    });

    function celebrateYes() {
        const container = document.querySelector('.container');
        for (let i = 0; i < 50; i++) {
            createHeart(container);
            if (i % 5 === 0) {
                createFlower(container);
            }
        }
    }

    function createHeart(container) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.opacity = Math.random();
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    function createFlower(container) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}); 