// ============================================
// APPLICATION CONSTANTS
// EDIT THESE VALUES FOR CUSTOMIZATION
// ============================================

export const APP_CONFIG = {
    // App Info
    APP_NAME: 'DZX Universal',
    APP_VERSION: '2.1.4',
    APP_TAGLINE: 'DOMINATE WITH PRECISION',
    
    // URLs - CHANGE THESE TO YOUR LINKS
    DISCORD_INVITE_URL: 'https://discord.gg/Gf4UEgXy3d',
    GITHUB_REPO_URL: 'https://github.com/DZXDOZZ/DZXDOZZ',
    GUNSLOL_URL: 'https://guns.lol/dzxdoz',
    SCRIPT_URL: 'https://raw.githubusercontent.com/DZXDOZZ/DZXDOZZ/main/DZX.Lua',
    
    // Download Links - ADD YOUR DOWNLOAD LINKS HERE
    DOWNLOAD_LINKS: {
        windows: 'https://your-domain.com/download/dzx-windows.zip',
        mac: 'https://your-domain.com/download/dzx-mac.zip',
        universal: 'https://your-domain.com/download/dzx-universal.zip'
    },
    
    // Analytics IDs - ADD YOUR ANALYTICS HERE
    ANALYTICS: {
        google: 'UA-XXXXX-Y', // Replace with your Google Analytics ID
        discord: 'Gf4UEgXy3d' // Your Discord server ID
    },
    
    // Feature Flags
    FEATURES: {
        enableAnalytics: true,
        enableNotifications: true,
        enableAutoUpdates: true,
        enableOfflineMode: false
    },
    
    // API Endpoints - ADD YOUR API ENDPOINTS HERE
    API: {
        versionCheck: 'https://api.your-domain.com/version',
        stats: 'https://api.your-domain.com/stats',
        downloadCount: 'https://api.your-domain.com/downloads'
    }
};

// ============================================
// SCRIPT CONTENT
// EDIT THIS WITH YOUR ACTUAL SCRIPT
// ============================================

export const SCRIPT_CONTENT = `-- DZX Universal v${APP_CONFIG.APP_VERSION}
-- Advanced ESP, Aimbot, and 100+ Features

loadstring(game:HttpGet("${APP_CONFIG.SCRIPT_URL}"))()

-- Features Include:
-- • Advanced ESP with Health Bars & Distance
-- • Multiple Aimbot Modes (Legit/Rage/Soft Aim)
-- • Auto Shoot & Target Lock
-- • Player Inspection & Inventory Viewer
-- • Fly, NoClip, Silent Flight
-- • Speed Hack & Super Jump
-- • Hitbox Expander & Wallhacks
-- • Anti-Cheat Bypass & Kill Switch
-- • Server Hop & Click TP
-- • And 90+ more features...

-- GUI Controls:
-- • Right Shift: Open/Close GUI
-- • Insert: Toggle Menu
-- • F5: Re-execute Script

-- Note: Use responsibly and only in allowed environments.`;

// ============================================
// STATISTICS DATA
// UPDATE THESE NUMBERS REGULARLY
// ============================================

export const STATS_DATA = {
    downloads: '100K+',
    uptime: '99.9%',
    features: '100+',
    usersOnline: '2.4K',
    discordMembers: '52,431',
    discordOnline: '12,844',
    discordChannels: '45'
};

// ============================================
// FEATURE CATEGORIES
// ADD/REMOVE FEATURES AS NEEDED
// ============================================

export const FEATURE_CATEGORIES = {
    combat: [
        'Advanced Aimbot',
        'Soft Aim Assistance',
        'Auto Shoot',
        'Target Lock System',
        'Hitbox Expander',
        'Customizable FOV',
        'Aim Smoothness Control',
        'Team Check'
    ],
    visual: [
        'Player Box ESP',
        'Health Bars',
        'Name Tags',
        'Distance Display',
        'Team Colors',
        'Equipped Items',
        'Tracers',
        'Hitbox Visualization',
        'Chams',
        'X-Ray Vision',
        'Wallhacks'
    ],
    movement: [
        'Fly Mode',
        'Silent Flight',
        'NoClip',
        'Speed Hack',
        'Super Jump',
        'Bunny Hop',
        'WalkSpeed Control',
        'Extreme Fly',
        'Click TP',
        'Teleport to Players'
    ],
    advanced: [
        'Anti-Cheat Bypass',
        'Anti-Kick Protection',
        'Kill Switch',
        'Lag Switch',
        'Fake Lag',
        'Anti-Aim',
        'Desync',
        'Full Bright',
        'Server Hop',
        'Rage Mode'
    ],
    player: [
        'Player Inspector',
        'Inventory Viewer',
        'Health Monitoring',
        'Tool Stats',
        'Team Information',
        'Player Details'
    ]
};

// ============================================
// COMMUNITY LINKS
// ADD MORE SOCIAL LINKS HERE
// ============================================

export const COMMUNITY_LINKS = {
    discord: APP_CONFIG.DISCORD_INVITE_URL,
    github: APP_CONFIG.GITHUB_REPO_URL,
    youtube: 'https://youtube.com/@dzxuniversal',
    twitter: 'https://twitter.com/dzxuniversal',
    reddit: 'https://reddit.com/r/dzxuniversal'
};