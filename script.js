// ============================================
// DZX Universal - Main JavaScript Entry Point
// Import all components and initialize app
// ============================================

import { APP_CONFIG } from './config/constants.js';
import { BUTTON_CONFIG } from './config/buttonConfig.js';
import Navigation from './components/Navigation.js';
import Toast from './components/Toast.js';
import { initAnimations, observePageAnimations } from './utils/animations.js';
import { setupEventHandlers } from './utils/eventHandlers.js';
import { copyToClipboard } from './utils/copyToClipboard.js';
import HomePage from './pages/HomePage.js';
import ScriptPage from './pages/ScriptPage.js';
import FeaturesPage from './pages/FeaturesPage.js';
import CommunityPage from './pages/CommunityPage.js';

// ============================================
// APPLICATION STATE
// ============================================

const AppState = {
    currentPage: 'home',
    previousPage: null,
    toast: null,
    navigation: null,
    isAnimating: false
};

// ============================================
// DOM ELEMENT REFERENCES
// ============================================

const DOM = {
    navigationContainer: document.getElementById('navigation-container'),
    pageContainer: document.getElementById('page-container'),
    footerContainer: document.getElementById('footer-container'),
    toastContainer: document.getElementById('toast-container')
};

// ============================================
// PAGE MANAGEMENT
// ============================================

const Pages = {
    home: HomePage,
    script: ScriptPage,
    features: FeaturesPage,
    community: CommunityPage
};

// ============================================
// INITIALIZATION FUNCTION
// ============================================

async function initializeApp() {
    console.log('🚀 Initializing DZX Universal Website...');
    
    try {
        // 1. Initialize Toast System
        AppState.toast = new Toast(DOM.toastContainer);
        console.log('✅ Toast system initialized');
        
        // 2. Initialize Navigation
        AppState.navigation = new Navigation(DOM.navigationContainer);
        console.log('✅ Navigation initialized');
        
        // 3. Load initial page from URL hash
        await loadInitialPage();
        
        // 4. Initialize animations
        initAnimations();
        console.log('✅ Animations initialized');
        
        // 5. Setup global event handlers
        setupEventHandlers(AppState);
        console.log('✅ Event handlers setup');
        
        // 6. Show welcome message
        setTimeout(() => {
            AppState.toast.show({
                message: 'Welcome to DZX Universal v2.1.4',
                type: 'info',
                duration: 3000
            });
        }, 1000);
        
        console.log('🎉 Website initialization complete!');
        
    } catch (error) {
        console.error('❌ Initialization error:', error);
        showErrorPage();
    }
}

// ============================================
// PAGE LOADING FUNCTIONS
// ============================================

async function loadInitialPage() {
    const hash = window.location.hash.substring(1);
    const validPages = ['home', 'script', 'features', 'community'];
    const page = validPages.includes(hash) ? hash : 'home';
    
    AppState.currentPage = page;
    window.location.hash = page;
    
    await loadPage(page);
    AppState.navigation.setActivePage(page);
}

async function loadPage(pageName) {
    if (AppState.isAnimating || !Pages[pageName]) {
        console.warn(`⚠️ Cannot load page: ${pageName}`);
        return;
    }
    
    try {
        AppState.isAnimating = true;
        
        // Store previous page
        AppState.previousPage = AppState.currentPage;
        AppState.currentPage = pageName;
        
        // Show loading state
        DOM.pageContainer.classList.add('loading');
        
        // Get page component
        const PageComponent = Pages[pageName];
        
        // Clear container and render new page
        DOM.pageContainer.innerHTML = '';
        
        // Create page element
        const pageElement = document.createElement('div');
        pageElement.id = pageName;
        pageElement.className = 'page active';
        
        // Render page content
        pageElement.innerHTML = await PageComponent.render();
        
        // Add to DOM
        DOM.pageContainer.appendChild(pageElement);
        
        // Initialize page-specific functionality
        if (typeof PageComponent.init === 'function') {
            await PageComponent.init(AppState);
        }
        
        // Update browser history
        history.pushState({ page: pageName }, '', `#${pageName}`);
        
        // Log page change
        console.log(`📄 Loaded page: ${pageName}`);
        
        // Show page change notification
        if (AppState.previousPage && AppState.previousPage !== pageName) {
            AppState.toast.show({
                message: `Navigated to ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}`,
                type: 'info',
                duration: 1500
            });
        }
        
        // Initialize animations for new page
        setTimeout(() => {
            observePageAnimations(pageElement);
            DOM.pageContainer.classList.remove('loading');
            AppState.isAnimating = false;
        }, 100);
        
    } catch (error) {
        console.error(`❌ Error loading page ${pageName}:`, error);
        AppState.toast.show({
            message: 'Failed to load page. Please try again.',
            type: 'error',
            duration: 3000
        });
        AppState.isAnimating = false;
    }
}

// ============================================
// ERROR HANDLING
// ============================================

function showErrorPage() {
    DOM.pageContainer.innerHTML = `
        <div class="error-page">
            <div class="error-icon">⚠️</div>
            <h1>Something went wrong</h1>
            <p>Failed to load the page. Please try refreshing.</p>
            <button onclick="location.reload()" class="btn btn-primary">
                <i class="fas fa-redo"></i> Refresh Page
            </button>
        </div>
    `;
}

// ============================================
// GLOBAL EVENT LISTENERS
// ============================================

// Handle browser back/forward
window.addEventListener('popstate', async (event) => {
    if (event.state && event.state.page) {
        await loadPage(event.state.page);
        AppState.navigation.setActivePage(event.state.page);
    }
});

// Handle hash changes
window.addEventListener('hashchange', async () => {
    const hash = window.location.hash.substring(1);
    const validPages = ['home', 'script', 'features', 'community'];
    
    if (validPages.includes(hash) && hash !== AppState.currentPage) {
        await loadPage(hash);
        AppState.navigation.setActivePage(hash);
    }
});

// Handle clicks on navigation links
document.addEventListener('click', async (event) => {
    const navLink = event.target.closest('.nav-link');
    if (navLink && !event.defaultPrevented) {
        event.preventDefault();
        const page = navLink.dataset.page;
        
        if (page && page !== AppState.currentPage) {
            await loadPage(page);
            AppState.navigation.setActivePage(page);
        }
    }
});

// Handle copy events
document.addEventListener('click', async (event) => {
    const copyButton = event.target.closest('[data-copy]');
    if (copyButton) {
        event.preventDefault();
        const textToCopy = copyButton.dataset.copy;
        
        if (textToCopy) {
            const success = await copyToClipboard(textToCopy, AppState.toast);
            
            if (success) {
                // Visual feedback
                copyButton.classList.add('copied');
                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                
                setTimeout(() => {
                    copyButton.classList.remove('copied');
                    copyButton.innerHTML = BUTTON_CONFIG.copyScript;
                }, 2000);
            }
        }
    }
});

// Handle download events
document.addEventListener('click', async (event) => {
    const downloadButton = event.target.closest('[data-download]');
    if (downloadButton) {
        event.preventDefault();
        
        AppState.toast.show({
            message: BUTTON_CONFIG.downloadMessage,
            type: 'info',
            duration: 3000
        });
        
        // Simulate download - REPLACE WITH ACTUAL DOWNLOAD LOGIC
        console.log('📥 Download triggered:', downloadButton.dataset.download);
        
        // Example: Track download analytics
        // await trackDownload(downloadButton.dataset.download);
    }
});

// ============================================
// EXPORT FOR MODULE USAGE
// ============================================

export {
    AppState,
    DOM,
    Pages,
    loadPage,
    initializeApp
};

// ============================================
// START THE APPLICATION
// ============================================

// Start app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}