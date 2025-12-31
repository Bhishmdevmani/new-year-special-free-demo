// Continue Button Handler
document.getElementById('continueBtn').addEventListener('click', function() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('greetingPage').style.display = 'flex';
    triggerConfetti();
});

// Gift Box Animation
document.getElementById('giftBox').addEventListener('click', function() {
    this.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
        this.style.transform = 'rotateY(0deg)';
    }, 500);
});

// Confetti Animation
function triggerConfetti() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const confetti = [];
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create confetti particles
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 5 + 4,
            size: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((particle, index) => {
            particle.y += particle.vy;
            particle.x += particle.vx;
            particle.vy += 0.1;
            particle.life -= 0.01;
            
            ctx.globalAlpha = particle.life;
            ctx.fillStyle = particle.color;
            ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
            
            if (particle.life <= 0) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Resize canvas on window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Get URL parameter for custom name
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name') || 'ANUSHKA';
document.getElementById('userName').textContent = name.toUpperCase();
