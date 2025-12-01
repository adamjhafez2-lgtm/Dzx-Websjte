// ============================================
// BUTTON CONFIGURATION
// EDIT BUTTON TEXTS AND MESSAGES HERE
// ============================================

export const BUTTON_CONFIG = {
    // Button Texts - CHANGE THESE LABELS
    texts: {
        download: 'Download Executor',
        copyScript: 'Copy Universal Script',
        joinDiscord: 'Join Discord Server',
        getScript: 'Get Universal Script',
        viewFeatures: 'View All Features',
        learnMore: 'Learn More',
        tryNow: 'Try Now',
        buyNow: 'Buy Now',
        subscribe: 'Subscribe',
        contact: 'Contact Support'
    },
    
    // Button Icons - CHANGE ICONS HERE
    icons: {
        download: 'fas fa-download',
        copy: 'far fa-copy',
        discord: 'fab fa-discord',
        code: 'fas fa-code',
        features: 'fas fa-list',
        home: 'fas fa-home',
        script: 'fas fa-terminal',
        community: 'fas fa-users'
    },
    
    // Toast Messages - CUSTOMIZE NOTIFICATIONS
    messages: {
        copySuccess: '✅ Script copied to clipboard!',
        copyError: '❌ Failed to copy. Please try again.',
        downloadStart: '📥 Download starting...',
        downloadComplete: '✅ Download complete!',
        downloadError: '❌ Download failed. Check your connection.',
        pageLoaded: 'Page loaded successfully',
        featureUnlocked: 'Feature unlocked!',
        updateAvailable: 'New update available!',
        connectionLost: 'Connection lost. Reconnecting...',
        connectionRestored: 'Connection restored!'
    },
    
    // Confirmation Messages
    confirmations: {
        delete: 'Are you sure you want to delete this?',
        reset: 'Reset all settings? This cannot be undone.',
        logout: 'Log out of your account?',
        download: 'Download this file?'
    },
    
    // Tooltip Texts
    tooltips: {
        download: 'Download DZX Universal Executor',
        copy: 'Copy script to clipboard',
        discord: 'Join our Discord community',
        features: 'View all available features',
        home: 'Return to homepage',
        script: 'Get the universal script',
        community: 'Join the community'
    }
};

// ============================================
// NOTIFICATION SETTINGS
// ============================================

export const NOTIFICATION_CONFIG = {
    // Notification Types
    types: {
        success: {
            icon: 'fas fa-check-circle',
            color: '#10B981',
            duration: 3000
        },
        error: {
            icon: 'fas fa-exclamation-circle',
            color: '#EF4444',
            duration: 5000
        },
        warning: {
            icon: 'fas fa-exclamation-triangle',
            color: '#F59E0B',
            duration: 4000
        },
        info: {
            icon: 'fas fa-info-circle',
            color: '#3B82F6',
            duration: 3000
        }
    },
    
    // Position
    position: 'top-right',
    
    // Animation
    animation: {
        in: 'slide-in-right',
        out: 'fade-out'
    },
    
    // Sounds (optional)
    sounds: {
        enabled: false,
        success: 'notification-success.mp3',
        error: 'notification-error.mp3'
    }
};