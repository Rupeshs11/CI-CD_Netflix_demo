// Netflix Clone - JavaScript

// Movie data with Unsplash images
const movies = {
    trending: [
        { id: 1, title: "The Dark Knight", img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=225&fit=crop", match: 98, rating: "16+", duration: "2h 32m" },
        { id: 2, title: "Inception", img: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=225&fit=crop", match: 95, rating: "13+", duration: "2h 28m" },
        { id: 3, title: "Interstellar", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=225&fit=crop", match: 97, rating: "13+", duration: "2h 49m" },
        { id: 4, title: "The Matrix", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop", match: 94, rating: "16+", duration: "2h 16m" },
        { id: 5, title: "Pulp Fiction", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=225&fit=crop", match: 92, rating: "18+", duration: "2h 34m" },
        { id: 6, title: "Fight Club", img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=225&fit=crop", match: 96, rating: "18+", duration: "2h 19m" }
    ],
    popular: [
        { id: 7, title: "Stranger Things", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=225&fit=crop", match: 99, rating: "16+", duration: "Series" },
        { id: 8, title: "Breaking Bad", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=225&fit=crop", match: 98, rating: "18+", duration: "Series" },
        { id: 9, title: "The Crown", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop", match: 91, rating: "16+", duration: "Series" },
        { id: 10, title: "Money Heist", img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=225&fit=crop", match: 95, rating: "18+", duration: "Series" },
        { id: 11, title: "Dark", img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=225&fit=crop", match: 93, rating: "16+", duration: "Series" },
        { id: 12, title: "Squid Game", img: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=225&fit=crop", match: 97, rating: "18+", duration: "Series" }
    ],
    originals: [
        { id: 13, title: "Wednesday", img: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=280&h=400&fit=crop" },
        { id: 14, title: "The Witcher", img: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=280&h=400&fit=crop" },
        { id: 15, title: "Ozark", img: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=280&h=400&fit=crop" },
        { id: 16, title: "You", img: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=280&h=400&fit=crop" },
        { id: 17, title: "Bridgerton", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=280&h=400&fit=crop" },
        { id: 18, title: "Lupin", img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=280&h=400&fit=crop" }
    ],
    action: [
        { id: 19, title: "John Wick", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=225&fit=crop", match: 96, rating: "18+", duration: "2h 1m" },
        { id: 20, title: "Mad Max", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&h=225&fit=crop", match: 94, rating: "16+", duration: "2h" },
        { id: 21, title: "Avengers", img: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=400&h=225&fit=crop", match: 93, rating: "13+", duration: "2h 23m" },
        { id: 22, title: "Mission Impossible", img: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=400&h=225&fit=crop", match: 91, rating: "13+", duration: "2h 27m" },
        { id: 23, title: "Fast & Furious", img: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400&h=225&fit=crop", match: 88, rating: "13+", duration: "2h 17m" },
        { id: 24, title: "Die Hard", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=225&fit=crop", match: 95, rating: "18+", duration: "2h 12m" }
    ]
};

// Create movie card HTML
function createCard(movie, index, isOriginal = false) {
    const rankHtml = !isOriginal && index < 10 ? `<div class="rank-number">${index + 1}</div>` : '';
    const infoHtml = !isOriginal ? `
        <div class="card-info">
            <span class="match">${movie.match}% Match</span>
            <span class="age-rating">${movie.rating}</span>
            <span class="duration">${movie.duration}</span>
        </div>` : '';
    
    return `
        <div class="content-card ${isOriginal ? 'original-card' : ''}" data-id="${movie.id}">
            ${rankHtml}
            <img src="${movie.img}" alt="${movie.title}" loading="lazy">
            <div class="card-overlay">
                <div class="card-buttons">
                    <button class="card-btn play-btn" title="Play">▶</button>
                    <button class="card-btn" title="Add to List">+</button>
                    <button class="card-btn" title="Like">👍</button>
                </div>
                ${infoHtml}
            </div>
        </div>
    `;
}

// Create content row
function createRow(title, movieList, containerId, isOriginal = false) {
    const container = document.getElementById(containerId);
    const sliderId = `${containerId}-slider`;
    
    container.innerHTML = `
        <h2 class="row-title">${title}</h2>
        <div class="row-container">
            <button class="scroll-btn scroll-left hidden" data-slider="${sliderId}">◀</button>
            <div class="content-slider ${isOriginal ? 'originals-slider' : ''}" id="${sliderId}">
                ${movieList.map((m, i) => createCard(m, i, isOriginal)).join('')}
            </div>
            <button class="scroll-btn scroll-right" data-slider="${sliderId}">▶</button>
        </div>
    `;
}

// Initialize content rows
function initContent() {
    createRow('Trending Now', movies.trending, 'trending');
    createRow('Popular on Netflix', movies.popular, 'popular');
    createRow('Netflix Originals', movies.originals, 'originals', true);
    createRow('Action & Adventure', movies.action, 'action');
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Slider scroll functionality
function initSliders() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.scroll-btn');
        if (!btn) return;
        
        const sliderId = btn.dataset.slider;
        const slider = document.getElementById(sliderId);
        const scrollAmount = slider.clientWidth * 0.8;
        
        if (btn.classList.contains('scroll-left')) {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });

    // Update scroll button visibility
    document.querySelectorAll('.content-slider').forEach(slider => {
        slider.addEventListener('scroll', () => updateScrollButtons(slider));
    });
}

function updateScrollButtons(slider) {
    const container = slider.closest('.row-container');
    const leftBtn = container.querySelector('.scroll-left');
    const rightBtn = container.querySelector('.scroll-right');
    
    leftBtn.classList.toggle('hidden', slider.scrollLeft <= 10);
    rightBtn.classList.toggle('hidden', 
        slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10);
}

// Play button click handler
function initPlayButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-play') || e.target.closest('.play-btn')) {
            alert('🎬 Playing movie... (This is a demo)');
        }
        if (e.target.closest('.btn-info')) {
            alert('ℹ️ More Info... (This is a demo)');
        }
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initContent();
    initNavbar();
    initSliders();
    initPlayButtons();
    
    // Update scroll buttons initially
    setTimeout(() => {
        document.querySelectorAll('.content-slider').forEach(updateScrollButtons);
    }, 100);
});
