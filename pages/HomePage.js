// ============================================
// HOME PAGE COMPONENT
// Edit this file to modify the homepage content
// ============================================

import { APP_CONFIG } from '../config/constants.js';
import { BUTTON_CONFIG } from '../config/buttonConfig.js';
import { STATS_DATA } from '../config/constants.js';

const HomePage = {
    async render() {
        return `
            <div class="home-page">
                <!-- Hero Section -->
                <section class="hero-section">
                    <div class="container">
                        <div class="version-badge">
                            ${APP_CONFIG.APP_NAME} v${APP_CONFIG.APP_VERSION} - Advanced ESP & Aimbot
                        </div>
                        
                        <h1 class="hero-title">
                            DOMINATE <br>
                            <span class="gradient-text">WITH PRECISION</span>
                        </h1>
                        
                        <p class="hero-description">
                            The most advanced Level 8 Roblox Executor with 100+ features. 
                            Undetectable, powerful, and designed for competitive advantage.
                        </p>
                        
                        <div class="hero-buttons">
                            <button class="btn btn-primary" data-download="executor">
                                <i class="${BUTTON_CONFIG.icons.download}"></i>
                                ${BUTTON_CONFIG.texts.download}
                            </button>
                            
                            <a href="#script" class="btn btn-secondary">
                                <i class="${BUTTON_CONFIG.icons.code}"></i>
                                ${BUTTON_CONFIG.texts.getScript}
                            </a>
                        </div>
                    </div>
                </section>
                
                <!-- Stats Section -->
                <section class="stats-section">
                    <div class="container">
                        <div class="stats-grid">
                            <div class="stat-item fade-in">
                                <div class="stat-number">${STATS_DATA.downloads}</div>
                                <div class="stat-label">Downloads</div>
                            </div>
                            <div class="stat-item fade-in">
                                <div class="stat-number">${STATS_DATA.uptime}</div>
                                <div class="stat-label">Uptime</div>
                            </div>
                            <div class="stat-item fade-in">
                                <div class="stat-number">${STATS_DATA.features}</div>
                                <div class="stat-label">Features</div>
                            </div>
                            <div class="stat-item fade-in">
                                <div class="stat-number">${STATS_DATA.usersOnline}</div>
                                <div class="stat-label">Users Online</div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Features Preview -->
                <section class="features-preview">
                    <div class="container">
                        <h2 class="section-title">Why Choose ${APP_CONFIG.APP_NAME}?</h2>
                        
                        <div class="features-grid">
                            <div class="feature-card fade-in">
                                <div class="feature-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <h3 class="feature-title">Anti-Cheat Bypass</h3>
                                <p class="feature-description">
                                    Advanced anti-detection system with metatable hooks and anti-kick protection.
                                </p>
                            </div>
                            
                            <div class="feature-card fade-in">
                                <div class="feature-icon">
                                    <i class="fas fa-crosshairs"></i>
                                </div>
                                <h3 class="feature-title">Advanced Aimbot</h3>
                                <p class="feature-description">
                                    Multiple aim modes with FOV control, smoothness adjustment, and auto-shoot functionality.
                                </p>
                            </div>
                            
                            <div class="feature-card fade-in">
                                <div class="feature-icon">
                                    <i class="fas fa-eye"></i>
                                </div>
                                <h3 class="feature-title">Complete ESP Suite</h3>
                                <p class="feature-description">
                                    Full player ESP with boxes, health bars, distance, names, and team colors.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    },
    
    async init(appState) {
        console.log('Home page initialized');
        
        // Add event listeners for home page buttons
        const downloadBtn = document.querySelector('[data-download="executor"]');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                appState.toast.show({
                    message: BUTTON_CONFIG.messages.downloadStart,
                    type: 'info'
                });
                
                // Track download event
                this.trackDownload();
            });
        }
        
        // Initialize any home page specific functionality
        this.initStatsAnimation();
    },
    
    trackDownload() {
        // Implement download tracking logic here
        console.log('Download tracked from homepage');
        // Example: Send to analytics
        // gtag('event', 'download', { 'event_category': 'homepage' });
    },
    
    initStatsAnimation() {
        // Animate stats counter if needed
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            if (stat.textContent.includes('+')) {
                this.animateValue(stat, 0, parseInt(stat.textContent), 2000);
            }
        });
    },
    
    animateValue(element, start, end, duration) {
        // Simple number animation
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + '+';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
};

export default HomePage;