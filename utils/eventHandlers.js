// ============================================
// EVENT HANDLER UTILITIES
// Centralized event handling for the application
// ============================================

import { BUTTON_CONFIG } from '../config/buttonConfig.js';
import { copyToClipboard } from './copyToClipboard.js';

/**
 * Setup all global event handlers
 */
export function setupEventHandlers(appState) {
    setupButtonHandlers(appState);
    setupFormHandlers(appState);
    setupKeyboardShortcuts(appState);
    setupAnalyticsEvents(appState);
    
    console.log('Event handlers setup complete');
}

/**
 * Handle all button clicks
 */
function setupButtonHandlers(appState) {
    document.addEventListener('click', async (event) => {
        const button = event.target.closest('button, [role="button"], .btn');
        if (!button) return;
        
        // Prevent multiple rapid clicks
        if (button.dataset.processing === 'true') return;
        
        try {
            button.dataset.processing = 'true';
            
            // Handle based on button type or data attributes
            if (button.dataset.copy) {
                await handleCopyButton(button, appState);
            } else if (button.dataset.download) {
                await handleDownloadButton(button, appState);
            } else if (button.dataset.action) {
                await handleActionButton(button, appState);
            }
            
        } catch (error) {
            console.error('Button handler error:', error);
            appState.toast.error('An error occurred. Please try again.');
        } finally {
            setTimeout(() => {
                delete button.dataset.processing;
            }, 500);
        }
    });
}

/**
 * Handle copy buttons
 */
async function handleCopyButton(button, appState) {
    const textToCopy = button.dataset.copy || button.textContent;
    
    const success = await copyToClipboard(textToCopy, appState.toast, {
        notificationMessage: BUTTON_CONFIG.messages.copySuccess
    });
    
    if (success) {
        // Visual feedback
        const originalHTML = button.innerHTML;
        const originalBg = button.style.backgroundColor;
        
        button.innerHTML = `<i class="fas fa-check"></i> Copied!`;
        button.style.backgroundColor = '#10B981';
        button.classList.add('btn-success');
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.backgroundColor = originalBg;
            button.classList.remove('btn-success');
        }, 2000);
        
        // Track copy event
        trackEvent('copy', {
            element: 'button',
            content_type: button.dataset.copyType || 'text'
        });
    }
}

/**
 * Handle download buttons
 */
async function handleDownloadButton(button, appState) {
    const downloadType = button.dataset.download;
    
    // Show download notification
    appState.toast.show({
        message: BUTTON_CONFIG.messages.downloadStart,
        type: 'info',
        duration: 3000
    });
    
    // Simulate download delay
    setTimeout(() => {
        appState.toast.show({
            message: BUTTON_CONFIG.messages.downloadComplete,
            type: 'success',
            duration: 3000
        });
        
        // Track download event
        trackEvent('download', {
            type: downloadType,
            source: 'button'
        });
        
        console.log(`Download triggered: ${downloadType}`);
        
        // In production, trigger actual download:
        // window.location.href = getDownloadUrl(downloadType);
        
    }, 1500);
}

/**
 * Handle action buttons
 */
async function handleActionButton(button, appState) {
    const action = button.dataset.action;
    
    switch (action) {
        case 'share':
            await handleShareAction(button, appState);
            break;
            
        case 'save':
            await handleSaveAction(button, appState);
            break;
            
        case 'toggle':
            await handleToggleAction(button, appState);
            break;
            
        default:
            console.log(`Action not implemented: ${action}`);
    }
}

/**
 * Handle share actions
 */
async function handleShareAction(button, appState) {
    if (navigator.share) {
        try {
            await navigator.share({
                title: document.title,
                text: button.dataset.shareText || 'Check this out!',
                url: window.location.href
            });
            appState.toast.success('Shared successfully!');
        } catch (error) {
            if (error.name !== 'AbortError') {
                appState.toast.error('Failed to share.');
            }
        }
    } else {
        // Fallback: Copy URL to clipboard
        await copyToClipboard(window.location.href, appState.toast, {
            notificationMessage: 'Link copied to clipboard!'
        });
    }
}

/**
 * Setup form handlers
 */
function setupFormHandlers(appState) {
    document.addEventListener('submit', async (event) => {
        const form = event.target.closest('form');
        if (!form) return;
        
        event.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = form.querySelector('[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitButton.disabled = true;
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            appState.toast.success('Form submitted successfully!');
            form.reset();
            
            // Track form submission
            trackEvent('form_submit', {
                form_id: form.id || 'unknown',
                form_type: form.dataset.formType || 'general'
            });
            
        } catch (error) {
            appState.toast.error('Form submission failed. Please try again.');
            console.error('Form error:', error);
            
        } finally {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

/**
 * Setup keyboard shortcuts
 */
function setupKeyboardShortcuts(appState) {
    document.addEventListener('keydown', (event) => {
        // Ctrl/Cmd + C to copy page URL
        if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
            event.preventDefault();
            copyToClipboard(window.location.href, appState.toast, {
                notificationMessage: 'Page URL copied to clipboard!'
            });
        }
        
        // Escape to close modals or toasts
        if (event.key === 'Escape') {
            // Close any open modals
            const modals = document.querySelectorAll('.modal.open');
            modals.forEach(modal => modal.classList.remove('open'));
        }
        
        // Number keys for navigation (1-4)
        if (event.key >= '1' && event.key <= '4' && !event.ctrlKey && !event.metaKey) {
            const pages = ['home', 'script', 'features', 'community'];
            const pageIndex = parseInt(event.key) - 1;
            
            if (pages[pageIndex] && pages[pageIndex] !== appState.currentPage) {
                window.location.hash = pages[pageIndex];
                appState.toast.info(`Navigated to ${pages[pageIndex]}`);
            }
        }
    });
}

/**
 * Setup analytics events
 */
function setupAnalyticsEvents(appState) {
    // Track page views
    window.addEventListener('pagechange', (event) => {
        trackEvent('page_view', {
            page: event.detail.page,
            timestamp: new Date().toISOString()
        });
    });
    
    // Track copy events
    window.addEventListener('copy', (event) => {
        trackEvent('content_copied', {
            text_length: event.detail.text.length,
            success: event.detail.success
        });
    });
    
    // Track errors
    window.addEventListener('error', (event) => {
        trackEvent('error', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
        });
    });
}

/**
 * Track event for analytics
 */
function trackEvent(eventName, eventData = {}) {
    // Replace with your analytics implementation
    console.log(`📊 Event: ${eventName}`, eventData);
    
    // Example: Google Analytics
    // if (window.gtag) {
    //     gtag('event', eventName, eventData);
    // }
    
    // Example: Send to your API
    // fetch('/api/analytics', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ event: eventName, data: eventData })
    // });
}