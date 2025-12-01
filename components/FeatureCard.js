// ============================================
// FEATURE CARD COMPONENT
// Reusable component for displaying features
// ============================================

export default class FeatureCard {
    constructor(feature, options = {}) {
        this.feature = feature;
        this.options = {
            icon: 'fas fa-star',
            showDescription: true,
            showIcon: true,
            interactive: true,
            animation: 'fade-in',
            ...options
        };
    }
    
    render() {
        const { icon, showDescription, showIcon, interactive, animation } = this.options;
        const { title, description, category } = this.feature;
        
        return `
            <div class="feature-card ${animation} ${interactive ? 'interactive' : ''}" 
                 data-category="${category || 'general'}"
                 data-feature="${title.toLowerCase().replace(/\s+/g, '-')}">
                
                ${showIcon ? `
                    <div class="feature-icon">
                        <i class="${icon}"></i>
                    </div>
                ` : ''}
                
                <div class="feature-content">
                    <h3 class="feature-title">${title}</h3>
                    
                    ${showDescription && description ? `
                        <p class="feature-description">${description}</p>
                    ` : ''}
                    
                    ${category ? `
                        <div class="feature-category">
                            <span class="category-badge">${category}</span>
                        </div>
                    ` : ''}
                </div>
                
                ${interactive ? `
                    <div class="feature-actions">
                        <button class="feature-action-btn" data-action="toggle" title="Toggle feature">
                            <i class="fas fa-power-off"></i>
                        </button>
                        <button class="feature-action-btn" data-action="info" title="More info">
                            <i class="fas fa-info-circle"></i>
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    // Initialize feature card with event listeners
    static init(element, appState) {
        if (!element) return;
        
        // Add click handler for interactive cards
        if (element.classList.contains('interactive')) {
            element.addEventListener('click', (e) => {
                if (!e.target.closest('.feature-action-btn')) {
                    // Card body click
                    element.classList.toggle('active');
                    
                    const featureName = element.dataset.feature;
                    const isActive = element.classList.contains('active');
                    
                    // Show notification
                    if (appState && appState.toast) {
                        appState.toast.show({
                            message: `${featureName} ${isActive ? 'enabled' : 'disabled'}`,
                            type: isActive ? 'success' : 'info',
                            duration: 2000
                        });
                    }
                    
                    // Track feature toggle
                    window.dispatchEvent(new CustomEvent('feature_toggle', {
                        detail: {
                            feature: featureName,
                            active: isActive,
                            element: element
                        }
                    }));
                }
            });
        }
        
        // Add hover effects
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-4px)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
        });
        
        // Initialize action buttons
        const actionButtons = element.querySelectorAll('.feature-action-btn');
        actionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = button.dataset.action;
                
                switch (action) {
                    case 'toggle':
                        element.classList.toggle('active');
                        break;
                        
                    case 'info':
                        FeatureCard.showFeatureInfo(element.dataset.feature, appState);
                        break;
                }
            });
        });
    }
    
    // Show feature information modal
    static showFeatureInfo(featureId, appState) {
        // In a real implementation, this would show a modal with detailed info
        console.log(`Showing info for feature: ${featureId}`);
        
        if (appState && appState.toast) {
            appState.toast.info(`Feature info: ${featureId}`);
        }
    }
    
    // Create multiple feature cards from an array
    static createFeatureGrid(features, options = {}) {
        const gridOptions = {
            columns: 3,
            gap: '1rem',
            ...options
        };
        
        const featureCards = features.map(feature => {
            const card = new FeatureCard(feature, options);
            return card.render();
        }).join('');
        
        return `
            <div class="feature-grid" style="
                grid-template-columns: repeat(${gridOptions.columns}, 1fr);
                gap: ${gridOptions.gap};
            ">
                ${featureCards}
            </div>
        `;
    }
}