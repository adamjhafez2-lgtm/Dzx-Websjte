// ============================================
// NAVIGATION COMPONENT
// Handles navigation between pages
// ============================================

import { BUTTON_CONFIG } from '../config/buttonConfig.js';
import { APP_CONFIG } from '../config/constants.js';

export default class Navigation {
    constructor(container) {
        this.container = container;
        this.activePage = 'home';
        this.navItems = [
            { id: 'home', label: 'Home', icon: BUTTON_CONFIG.icons.home },
            { id: 'script', label: 'Script', icon: BUTTON_CONFIG.icons.script },
            { id: 'features', label: 'Features', icon: BUTTON_CONFIG.icons.features },
            { id: 'community', label: 'Community', icon: BUTTON_CONFIG.icons.community }
        ];
        
        this.render();
        this.setupEventListeners();
    }
    
    render() {
        this.container.innerHTML = `
            <nav class="nav-container">
                <div class="nav-menu">
                    ${this.navItems.map(item => `
                        <a href="#${item.id}" 
                           class="nav-link ${this.activePage === item.id ? 'active' : ''}" 
                           data-page="${item.id}"
                           title="${BUTTON_CONFIG.tooltips[item.id] || item.label}">
                            <i class="${item.icon}"></i>
                            <span>${item.label}</span>
                            ${this.activePage === item.id ? '<div class="nav-pill"></div>' : ''}
                        </a>
                    `).join('')}
                </div>
            </nav>
        `;
    }
    
    setupEventListeners() {
        this.container.addEventListener('click', (e) => {
            const navLink = e.target.closest('.nav-link');
            if (navLink) {
                e.preventDefault();
                const page = navLink.dataset.page;
                this.setActivePage(page);
                
                // Dispatch custom event for page change
                window.dispatchEvent(new CustomEvent('pagechange', {
                    detail: { page }
                }));
            }
        });
    }
    
    setActivePage(page) {
        if (this.activePage === page) return;
        
        this.activePage = page;
        this.render();
        
        // Update URL hash without triggering navigation
        if (window.location.hash !== `#${page}`) {
            history.replaceState(null, '', `#${page}`);
        }
        
        console.log(`Navigation: Changed to ${page} page`);
    }
    
    getActivePage() {
        return this.activePage;
    }
    
    // Add a new navigation item dynamically
    addItem(id, label, icon) {
        this.navItems.push({ id, label, icon });
        this.render();
    }
    
    // Remove a navigation item
    removeItem(id) {
        this.navItems = this.navItems.filter(item => item.id !== id);
        this.render();
    }
    
    // Update navigation item
    updateItem(id, updates) {
        this.navItems = this.navItems.map(item => 
            item.id === id ? { ...item, ...updates } : item
        );
        this.render();
    }
}