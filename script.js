// Auto-scroll functionality
let scrollInterval = null;
let scrollSpeed = 3;
let adsViewed = 0;
let scrollSeconds = 0;
let scrollTimer = null;

// Anti-ban techniques
const antiBanConfig = {
    minPause: 2000,
    maxPause: 5000,
    minScroll: 50,
    maxScroll: 150,
    randomizeSpeed: true,
    simulateHuman: true
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startAutoScroll() {
    const container = document.getElementById('adContainer');
    const startBtn = document.getElementById('startScroll');
    const stopBtn = document.getElementById('stopScroll');
    
    startBtn.disabled = true;
    startBtn.classList.add('opacity-50');
    stopBtn.disabled = false;
    stopBtn.classList.remove('opacity-50');
    
    // Start stats tracking
    startStatsTracking();
    
    // Auto-scroll with anti-ban techniques
    function scrollStep() {
        if (!scrollInterval) return;
        
        // Random scroll distance (human-like)
        const scrollDistance = getRandomInt(
            antiBanConfig.minScroll,
            antiBanConfig.maxScroll
        );
        
        container.scrollTop += scrollDistance;
        
        // Track ads viewed
        const adFrames = container.querySelectorAll('.ad-frame');
        const containerRect = container.getBoundingClientRect();
        
        adFrames.forEach((frame, index) => {
            const frameRect = frame.getBoundingClientRect();
            if (frameRect.top >= containerRect.top && frameRect.bottom <= containerRect.bottom) {
                if (!frame.dataset.viewed) {
                    frame.dataset.viewed = 'true';
                    adsViewed++;
                    updateStats();
                }
            }
        });
        
        // Random pause (simulate human reading)
        const pauseTime = getRandomInt(
            antiBanConfig.minPause,
            antiBanConfig.maxPause
        );
        
        // Randomize speed occasionally
        if (antiBanConfig.randomizeSpeed && Math.random() > 0.7) {
            const speedVariation = getRandomInt(-1, 1);
            scrollSpeed = Math.max(1, Math.min(10, scrollSpeed + speedVariation));
            document.getElementById('scrollSpeed').value = scrollSpeed;
            document.getElementById('speedValue').textContent = scrollSpeed;
        }
        
        // Reset to top if at bottom
        if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
            container.scrollTop = 0;
            // Longer pause at reset
            setTimeout(scrollStep, pauseTime * 2);
        } else {
            setTimeout(scrollStep, pauseTime / scrollSpeed);
        }
    }
    
    scrollInterval = true;
    scrollStep();
}

function stopAutoScroll() {
    const startBtn = document.getElementById('startScroll');
    const stopBtn = document.getElementById('stopScroll');
    
    scrollInterval = null;
    startBtn.disabled = false;
    startBtn.classList.remove('opacity-50');
    stopBtn.disabled = true;
    stopBtn.classList.add('opacity-50');
    
    stopStatsTracking();
}

function updateScrollSpeed() {
    scrollSpeed = parseInt(document.getElementById('scrollSpeed').value);
    document.getElementById('speedValue').textContent = scrollSpeed;
}

// Stats tracking
function startStatsTracking() {
    scrollTimer = setInterval(() => {
        scrollSeconds++;
        updateStats();
    }, 1000);
}

function stopStatsTracking() {
    if (scrollTimer) {
        clearInterval(scrollTimer);
        scrollTimer = null;
    }
}

function updateStats() {
    document.getElementById('adsViewed').textContent = adsViewed;
    
    const minutes = Math.floor(scrollSeconds / 60);
    const seconds = scrollSeconds % 60;
    document.getElementById('scrollTime').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    // Estimated earnings (rough calculation)
    const estimatedEarnings = (adsViewed * 0.001).toFixed(4);
    document.getElementById('earnings').textContent = `~${estimatedEarnings}`;
}

// Music player functions
function playYouTube() {
    const url = document.getElementById('youtubeUrl').value;
    const player = document.getElementById('youtubePlayer');
    
    if (!url) {
        alert('Veuillez entrer une URL YouTube');
        return;
    }
    
    // Extract video ID
    const videoId = extractYouTubeId(url);
    if (videoId) {
        player.innerHTML = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    } else {
        alert('URL YouTube invalide');
    }
}

function extractYouTubeId(url) {
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function playSpotify() {
    const url = document.getElementById('spotifyUrl').value;
    const player = document.getElementById('spotifyPlayer');
    
    if (!url) {
        alert('Veuillez entrer une URL Spotify');
        return;
    }
    
    // Convert to embed URL
    const embedUrl = url.replace('open.spotify.com', 'open.spotify.com/embed');
    
    player.innerHTML = `
        <iframe 
            style="border-radius:12px" 
            src="${embedUrl}" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
    `;
}

// Quick play suggestions
function quickPlay(type) {
    const youtubePlayer = document.getElementById('youtubePlayer');
    const spotifyPlayer = document.getElementById('spotifyPlayer');
    
    const playlists = {
        lofi: {
            youtube: 'jfKfPfyJRdk',
            spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO'
        },
        chill: {
            youtube: '5qap5aO4i9A',
            spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4FP3ga4rT9r'
        },
        focus: {
            youtube: '4bQrCxM8rlk',
            spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWUU0IcXywaJR'
        },
        energy: {
            youtube: 'JGwWNGJdvx8',
            spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP'
        }
    };
    
    const playlist = playlists[type];
    
    // Auto-play YouTube
    youtubePlayer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${playlist.youtube}?autoplay=1&list=PLRhg7L4VRaqMfMxXeUJwf0mMqz3wzOeT" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    // Load Spotify
    spotifyPlayer.innerHTML = `
        <iframe 
            style="border-radius:12px" 
            src="${playlist.spotify}" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>
    `;
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('stopScroll').disabled = true;
    document.getElementById('stopScroll').classList.add('opacity-50');
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            if (scrollInterval) {
                stopAutoScroll();
            } else {
                startAutoScroll();
            }
        }
    });
});

// Anti-detection measures
// Randomize user agent hints
function addAntiDetection() {
    // Random mouse movements simulation
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Random scroll events
    setInterval(() => {
        if (scrollInterval && Math.random() > 0.8) {
            const container = document.getElementById('adContainer');
            const randomScroll = getRandomInt(-10, 10);
            container.scrollTop += randomScroll;
        }
    }, 3000);
}

addAntiDetection();
