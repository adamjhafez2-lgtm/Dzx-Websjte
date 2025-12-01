// ============================================
// FEATURES PAGE COMPONENT
// Edit this file to modify the features page
// ============================================

import { APP_CONFIG } from '../config/constants.js';
import { FEATURE_CATEGORIES } from '../config/constants.js';
import FeatureCard from '../components/FeatureCard.js';

const FeaturesPage = {
    async render() {
        // Convert feature categories to feature card format
        const allFeatures = [];
        
        // Combat Features
        FEATURE_CATEGORIES.combat.forEach(feature => {
            allFeatures.push({
                title: feature,
                category: 'Combat',
                icon: this.getIconForFeature(feature, 'combat'),
                description: this.getDescriptionForFeature(feature)
            });
        });
        
        // Visual Features
        FEATURE_CATEGORIES.visual.forEach(feature => {
            allFeatures.push({
                title: feature,
                category: 'Visual',
                icon: this.getIconForFeature(feature, 'visual'),
                description: this.getDescriptionForFeature(feature)
            });
        });
        
        // Movement Features
        FEATURE_CATEGORIES.movement.forEach(feature => {
            allFeatures.push({
                title: feature,
                category: 'Movement',
                icon: this.getIconForFeature(feature, 'movement'),
                description: this.getDescriptionForFeature(feature)
            });
        });
        
        // Advanced Features
        FEATURE_CATEGORIES.advanced.forEach(feature => {
            allFeatures.push({
                title: feature,
                category: 'Advanced',
                icon: this.getIconForFeature(feature, 'advanced'),
                description: this.getDescriptionForFeature(feature)
            });
        });
        
        // Player Features
        FEATURE_CATEGORIES.player.forEach(feature => {
            allFeatures.push({
                title: feature,
                category: 'Player',
                icon: this.getIconForFeature(feature, 'player'),
                description: this.getDescriptionForFeature(feature)
            });
        });
        
        return `
            <div class="features-page">
                <!-- Header -->
                <section class="page-header scale-in">
                    <h1 class="page-title">Complete Feature List</h1>
                    <p class="page-description">
                        ${APP_CONFIG.APP_NAME} includes over 100 advanced features for competitive advantage. 
                        Everything you need in one script.
                    </p>
                    
                    <!-- Stats -->
                    <div class="feature-stats">
                        <div class="stat">
                            <div class="stat-number">${allFeatures.length}+</div>
                            <div class="stat-label">Total Features</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">${Object.keys(FEATURE_CATEGORIES).length}</div>
                            <div class="stat-label">Categories</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">Updated</div>
                        </div>
                    </div>
                </section>
                
                <!-- Search & Filter -->
                <section class="features-controls slide-in-left">
                    <div class="search-box">
                        <i class="fas fa-search"></i>
                        <input type="text" 
                               id="feature-search" 
                               placeholder="Search features...">
                    </div>
                    
                    <div class="filter-buttons">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" data-filter="combat">
                            <i class="fas fa-crosshairs"></i> Combat
                        </button>
                        <button class="filter-btn" data-filter="visual">
                            <i class="fas fa-eye"></i> Visual
                        </button>
                        <button class="filter-btn" data-filter="movement">
                            <i class="fas fa-running"></i> Movement
                        </button>
                        <button class="filter-btn" data-filter="advanced">
                            <i class="fas fa-cogs"></i> Advanced
                        </button>
                        <button class="filter-btn" data-filter="player">
                            <i class="fas fa-user"></i> Player
                        </button>
                    </div>
                </section>
                
                <!-- Features Grid -->
                <section class="features-grid-section">
                    ${this.renderFeatureCategory('Combat Features', 'fas fa-crosshairs', 'combat', 'slide-in-left')}
                    ${this.renderFeatureCategory('Visual & ESP Features', 'fas fa-eye', 'visual', 'slide-in-right')}
                    ${this.renderFeatureCategory('Movement & Utility', 'fas fa-running', 'movement', 'slide-in-left')}
                    ${this.renderFeatureCategory('Advanced & Protection', 'fas fa-cogs', 'advanced', 'slide-in-right')}
                    ${this.renderFeatureCategory('Player Inspection', 'fas fa-search', 'player', 'slide-in-left')}
                </section>
                
                <!-- Premium Features -->
                <section class="premium-features scale-in">
                    <div class="premium-header">
                        <h2>
                            <i class="fas fa-crown"></i>
                            Premium Features
                        </h2>
                        <p>Exclusive features available to premium users</p>
                    </div>
                    
                    <div class="premium-grid">
                        <div class="premium-card">
                            <div class="premium-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <h3>Priority Support</h3>
                            <p>Get help first with premium support tickets</p>
                        </div>
                        
                        <div class="premium-card">
                            <div class="premium-icon">
                                <i class="fas fa-bolt"></i>
                            </div>
                            <h3>Early Access</h3>
                            <p>Try new features before anyone else</p>
                        </div>
                        
                        <div class="premium-card">
                            <div class="premium-icon">
                                <i class="fas fa-star"></i>
                            </div>
                            <h3>Exclusive Scripts</h3>
                            <p>Access to premium-only scripts</p>
                        </div>
                        
                        <div class="premium-card">
                            <div class="premium-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3>Private Community</h3>
                            <p>Join the exclusive premium Discord</p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    },
    
    renderFeatureCategory(title, icon, category, animationClass) {
        const features = FEATURE_CATEGORIES[category] || [];
        
        return `
            <div class="feature-category ${animationClass}" data-category="${category}">
                <div class="category-header">
                    <h2 class="category-title">
                        <i class="${icon}"></i>
                        ${title}
                    </h2>
                    <span class="feature-count">${features.length} features</span>
                </div>
                
                <div class="features-list">
                    ${features.map(feature => `
                        <div class="feature-item" data-feature="${feature.toLowerCase()}">
                            <div class="feature-icon">
                                <i class="${this.getIconForFeature(feature, category)}"></i>
                            </div>
                            <span class="feature-name">${feature}</span>
                            <button class="feature-info-btn" data-feature="${feature}">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },
    
    getIconForFeature(feature, category) {
        const iconMap = {
            // Combat icons
            'aimbot': 'fas fa-crosshairs',
            'shoot': 'fas fa-bullseye',
            'target': 'fas fa-crosshairs',
            'hitbox': 'fas fa-expand',
            'fov': 'fas fa-arrows-alt',
            'smooth': 'fas fa-sliders-h',
            'team': 'fas fa-users',
            
            // Visual icons
            'esp': 'fas fa-cube',
            'health': 'fas fa-heart',
            'name': 'fas fa-text-height',
            'distance': 'fas fa-ruler',
            'color': 'fas fa-palette',
            'tracer': 'fas fa-project-diagram',
            'chams': 'fas fa-ghost',
            'xray': 'fas fa-x-ray',
            'wallhack': 'fas fa-border-all',
            
            // Movement icons
            'fly': 'fas fa-feather',
            'noclip': 'fas fa-ghost',
            'speed': 'fas fa-walking',
            'jump': 'fas fa-arrow-up',
            'bunny': 'fas fa-rabbit',
            'walk': 'fas fa-walking',
            'tp': 'fas fa-location-arrow',
            'teleport': 'fas fa-user-friends',
            
            // Advanced icons
            'anti': 'fas fa-shield-alt',
            'kick': 'fas fa-ban',
            'kill': 'fas fa-power-off',
            'lag': 'fas fa-network-wired',
            'fake': 'fas fa-clock',
            'desync': 'fas fa-random',
            'bright': 'fas fa-sun',
            'server': 'fas fa-exchange-alt',
            'rage': 'fas fa-user-secret',
            
            // Player icons
            'inspector': 'fas fa-user-circle',
            'inventory': 'fas fa-suitcase',
            'health': 'fas fa-heartbeat',
            'tool': 'fas fa-cube',
            'team': 'fas fa-users',
            'details': 'fas fa-id-card'
        };
        
        // Find matching icon
        const featureLower = feature.toLowerCase();
        for (const [key, icon] of Object.entries(iconMap)) {
            if (featureLower.includes(key)) {
                return icon;
            }
        }
        
        // Default icons by category
        const defaultIcons = {
            combat: 'fas fa-crosshairs',
            visual: 'fas fa-eye',
            movement: 'fas fa-running',
            advanced: 'fas fa-cogs',
            player: 'fas fa-user'
        };
        
        return defaultIcons[category] || 'fas fa-star';
    },
    
    getDescriptionForFeature(feature) {
        const descriptions = {
            'Advanced Aimbot': 'Precision aiming with multiple modes and smooth controls',
            'Player Box ESP': 'Visual boxes around players showing health and distance',
            'Fly Mode': 'Free movement through the air with customizable speed',
            'Anti-Cheat Bypass': 'Advanced systems to avoid detection',
            'Player Inspector': 'Detailed information about other players'
        };
        
        return descriptions[feature] || 'Advanced feature for competitive advantage';
    },
    
    async init(appState) {
        console.log('Features page initialized');
        
        // Initialize search functionality
        const searchInput = document.getElementById('feature-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterFeatures(e.target.value.toLowerCase());
            });
        }
        
        // Initialize filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter features
                const filter = button.dataset.filter;
                this.filterByCategory(filter);
            });
        });
        
        // Initialize feature info buttons
        const infoButtons = document.querySelectorAll('.feature-info-btn');
        infoButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const feature = button.dataset.feature;
                this.showFeatureInfo(feature, appState);
            });
        });
        
        // Initialize feature items
        const featureItems = document.querySelectorAll('.feature-item');
        featureItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (!e.target.closest('.feature-info-btn')) {
                    const feature = item.dataset.feature;
                    this.toggleFeature(feature, item, appState);
                }
            });
        });
    },
    
    filterFeatures(searchTerm) {
        const featureItems = document.querySelectorAll('.feature-item');
        const categories = document.querySelectorAll('.feature-category');
        
        let hasVisibleFeatures = false;
        
        categories.forEach(category => {
            let categoryHasVisible = false;
            const items = category.querySelectorAll('.feature-item');
            
            items.forEach(item => {
                const featureName = item.querySelector('.feature-name').textContent.toLowerCase();
                if (featureName.includes(searchTerm)) {
                    item.style.display = 'flex';
                    categoryHasVisible = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Show/hide category based on visible features
            category.style.display = categoryHasVisible ? 'block' : 'none';
            if (categoryHasVisible) hasVisibleFeatures = true;
        });
        
        // Show message if no features found
        this.showNoResultsMessage(!hasVisibleFeatures && searchTerm.length > 0);
    },
    
    filterByCategory(category) {
        const categories = document.querySelectorAll('.feature-category');
        
        categories.forEach(cat => {
            if (category === 'all' || cat.dataset.category === category) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        });
    },
    
    showNoResultsMessage(show) {
        let message = document.getElementById('no-results-message');
        
        if (show && !message) {
            message = document.createElement('div');
            message.id = 'no-results-message';
            message.className = 'no-results fade-in';
            message.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>No features found</h3>
                <p>Try a different search term</p>
            `;
            
            const gridSection = document.querySelector('.features-grid-section');
            gridSection.appendChild(message);
        } else if (!show && message) {
            message.remove();
        }
    },
    
    showFeatureInfo(featureName, appState) {
        // In a real implementation, show a modal with feature details
        const info = this.getDescriptionForFeature(featureName);
        
        if (appState && appState.toast) {
            appState.toast.show({
                message: `<strong>${featureName}:</strong> ${info}`,
                type: 'info',
                duration: 4000,
                html: true
            });
        }
    },
    
    toggleFeature(featureName, element, appState) {
        // Toggle active state
        element.classList.toggle('active');
        const isActive = element.classList.contains('active');
        
        // Visual feedback
        if (isActive) {
            element.style.borderColor = '#10B981';
            element.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
        } else {
            element.style.borderColor = '';
            element.style.backgroundColor = '';
        }
        
        // Show notification
        if (appState && appState.toast) {
            appState.toast.show({
                message: `${featureName} ${isActive ? 'enabled' : 'disabled'}`,
                type: isActive ? 'success' : 'info',
                duration: 2000
            });
        }
        
        // Track feature toggle
        window.dispatchEvent(new CustomEvent('feature_toggled', {
            detail: {
                feature: featureName,
                active: isActive
            }
        }));
    }
};

export default FeaturesPage;