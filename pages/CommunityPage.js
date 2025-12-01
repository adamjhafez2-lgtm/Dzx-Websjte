// ============================================
// COMMUNITY PAGE COMPONENT
// Edit this file to modify the community page
// ============================================

import { APP_CONFIG } from '../config/constants.js';
import { BUTTON_CONFIG } from '../config/buttonConfig.js';
import { COMMUNITY_LINKS } from '../config/constants.js';
import { STATS_DATA } from '../config/constants.js';

const CommunityPage = {
    async render() {
        return `
            <div class="community-page">
                <!-- Hero Section -->
                <section class="community-hero scale-in">
                    <div class="hero-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h1 class="hero-title">Join the Community</h1>
                    <p class="hero-description">
                        Connect with thousands of ${APP_CONFIG.APP_NAME} users. 
                        Share configs, get support, and stay updated with the latest features.
                    </p>
                    
                    <a href="${COMMUNITY_LINKS.discord}" 
                       target="_blank" 
                       class="btn btn-discord">
                        <i class="fab fa-discord"></i>
                        ${BUTTON_CONFIG.texts.joinDiscord}
                    </a>
                </section>
                
                <!-- Stats -->
                <section class="community-stats">
                    <div class="stats-grid">
                        <div class="stat-card fade-in">
                            <div class="stat-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number">${STATS_DATA.discordMembers}</div>
                                <div class="stat-label">Community Members</div>
                            </div>
                        </div>
                        
                        <div class="stat-card fade-in">
                            <div class="stat-icon">
                                <i class="fas fa-globe"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number">${STATS_DATA.discordOnline}</div>
                                <div class="stat-label">Online Now</div>
                            </div>
                        </div>
                        
                        <div class="stat-card fade-in">
                            <div class="stat-icon">
                                <i class="fas fa-hashtag"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number">${STATS_DATA.discordChannels}</div>
                                <div class="stat-label">Active Channels</div>
                            </div>
                        </div>
                        
                        <div class="stat-card fade-in">
                            <div class="stat-icon">
                                <i class="fas fa-headset"></i>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number">24/7</div>
                                <div class="stat-label">Live Support</div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Community Features -->
                <section class="community-features">
                    <div class="features-grid">
                        <!-- Support Feature -->
                        <div class="feature-card slide-in-left">
                            <div class="feature-header">
                                <h3>
                                    <i class="fas fa-headset"></i>
                                    Get Help Instantly
                                </h3>
                                <p class="feature-subtitle">
                                    Our dedicated support team and active community members are always ready to help you.
                                </p>
                            </div>
                            
                            <div class="feature-content">
                                <p>
                                    Need help with a feature? Having trouble with setup? 
                                    Our community is here to help 24/7. Get instant support 
                                    from experienced users and developers.
                                </p>
                                
                                <div class="online-users">
                                    <div class="users-title">Online Now:</div>
                                    <div class="users-avatars">
                                        <div class="user-avatar" style="background: #EF4444;">A</div>
                                        <div class="user-avatar" style="background: #3B82F6;">B</div>
                                        <div class="user-avatar" style="background: #10B981;">C</div>
                                        <div class="user-avatar" style="background: #F59E0B;">D</div>
                                        <div class="user-avatar more">+${parseInt(STATS_DATA.discordOnline) - 4}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="feature-actions">
                                <a href="${COMMUNITY_LINKS.discord}" 
                                   target="_blank" 
                                   class="btn btn-secondary">
                                    <i class="fas fa-question-circle"></i>
                                    Get Support
                                </a>
                            </div>
                        </div>
                        
                        <!-- Configs Feature -->
                        <div class="feature-card slide-in-right">
                            <div class="feature-header">
                                <h3>
                                    <i class="fas fa-sliders-h"></i>
                                    Exclusive Configs
                                </h3>
                                <p class="feature-subtitle">
                                    Access community-only configs and optimized settings.
                                </p>
                            </div>
                            
                            <div class="feature-content">
                                <p>
                                    Gain access to premium configurations, optimized settings, 
                                    and exclusive features shared only in our Discord server. 
                                    Learn from the best and improve your gameplay.
                                </p>
                                
                                <div class="config-benefits">
                                    <div class="benefit">
                                        <span class="benefit-icon">
                                            <i class="fas fa-check-circle" style="color: #10B981;"></i>
                                        </span>
                                        <span class="benefit-text">Daily script updates</span>
                                    </div>
                                    <div class="benefit">
                                        <span class="benefit-icon">
                                            <i class="fas fa-check-circle" style="color: #3B82F6;"></i>
                                        </span>
                                        <span class="benefit-text">Optimized config sharing</span>
                                    </div>
                                    <div class="benefit">
                                        <span class="benefit-icon">
                                            <i class="fas fa-check-circle" style="color: #8B5CF6;"></i>
                                        </span>
                                        <span class="benefit-text">Giveaways & Events</span>
                                    </div>
                                    <div class="benefit">
                                        <span class="benefit-icon">
                                            <i class="fas fa-check-circle" style="color: #F59E0B;"></i>
                                        </span>
                                        <span class="benefit-text">Tutorials & Guides</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="feature-actions">
                                <a href="${COMMUNITY_LINKS.discord}" 
                                   target="_blank" 
                                   class="btn btn-primary">
                                    <i class="fas fa-download"></i>
                                    Download Configs
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Discord Preview -->
                <section class="discord-preview fade-in">
                    <div class="preview-header">
                        <h2>
                            <i class="fab fa-discord"></i>
                            What's Happening in Discord
                        </h2>
                        <p>Join thousands of users in our active community</p>
                    </div>
                    
                    <div class="discord-widget">
                        <div class="widget-header">
                            <div class="server-icon">
                                <i class="fab fa-discord"></i>
                            </div>
                            <div class="server-info">
                                <h3 class="server-name">${APP_CONFIG.APP_NAME} Community</h3>
                                <div class="server-status">
                                    <span class="status-indicator online"></span>
                                    <span class="status-text">${STATS_DATA.discordOnline} Online</span>
                                    <span class="status-separator">•</span>
                                    <span class="status-text">${STATS_DATA.discordMembers} Members</span>
                                </div>
                            </div>
                            <a href="${COMMUNITY_LINKS.discord}" 
                               target="_blank" 
                               class="join-btn">
                                Join Server
                            </a>
                        </div>
                        
                        <div class="widget-channels">
                            <div class="channel-category">
                                <h4 class="category-title">
                                    <i class="fas fa-comment"></i>
                                    Support & Help
                                </h4>
                                <div class="channel-list">
                                    <div class="channel">
                                        <span class="channel-icon">💬</span>
                                        <span class="channel-name">general-chat</span>
                                    </div>
                                    <div class="channel">
                                        <span class="channel-icon">❓</span>
                                        <span class="channel-name">help-support</span>
                                    </div>
                                    <div class="channel">
                                        <span class="channel-icon">🐛</span>
                                        <span class="channel-name">bug-reports</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="channel-category">
                                <h4 class="category-title">
                                    <i class="fas fa-code"></i>
                                    Scripting
                                </h4>
                                <div class="channel-list">
                                    <div class="channel">
                                        <span class="channel-icon">💻</span>
                                        <span class="channel-name">script-releases</span>
                                    </div>
                                    <div class="channel">
                                        <span class="channel-icon">🤖</span>
                                        <span class="channel-name">config-sharing</span>
                                    </div>
                                    <div class="channel">
                                        <span class="channel-icon">🎮</span>
                                        <span class="channel-name">game-support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="widget-members">
                            <h4 class="members-title">
                                <i class="fas fa-users"></i>
                                Online Members
                            </h4>
                            <div class="members-list">
                                <div class="member">
                                    <span class="member-avatar" style="background: #EF4444;"></span>
                                    <span class="member-name">Admin_User</span>
                                    <span class="member-status owner">👑</span>
                                </div>
                                <div class="member">
                                    <span class="member-avatar" style="background: #3B82F6;"></span>
                                    <span class="member-name">Support_Staff</span>
                                    <span class="member-status admin">⭐</span>
                                </div>
                                <div class="member">
                                    <span class="member-avatar" style="background: #10B981;"></span>
                                    <span class="member-name">Pro_Player</span>
                                </div>
                                <div class="member">
                                    <span class="member-avatar" style="background: #F59E0B;"></span>
                                    <span class="member-name">Script_Dev</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <!-- Social Links -->
                <section class="social-links slide-in-left">
                    <h2 class="section-title">Join Us Everywhere</h2>
                    <p class="section-description">
                        Follow us on all platforms for updates, announcements, and more.
                    </p>
                    
                    <div class="social-grid">
                        <a href="${COMMUNITY_LINKS.discord}" 
                           target="_blank" 
                           class="social-card discord">
                            <div class="social-icon">
                                <i class="fab fa-discord"></i>
                            </div>
                            <div class="social-info">
                                <h3>Discord</h3>
                                <p>Join our community</p>
                            </div>
                            <div class="social-action">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </a>
                        
                        <a href="${COMMUNITY_LINKS.github}" 
                           target="_blank" 
                           class="social-card github">
                            <div class="social-icon">
                                <i class="fab fa-github"></i>
                            </div>
                            <div class="social-info">
                                <h3>GitHub</h3>
                                <p>View source code</p>
                            </div>
                            <div class="social-action">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </a>
                        
                        <a href="${COMMUNITY_LINKS.youtube}" 
                           target="_blank" 
                           class="social-card youtube">
                            <div class="social-icon">
                                <i class="fab fa-youtube"></i>
                            </div>
                            <div class="social-info">
                                <h3>YouTube</h3>
                                <p>Watch tutorials</p>
                            </div>
                            <div class="social-action">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </a>
                        
                        <a href="${COMMUNITY_LINKS.twitter}" 
                           target="_blank" 
                           class="social-card twitter">
                            <div class="social-icon">
                                <i class="fab fa-twitter"></i>
                            </div>
                            <div class="social-info">
                                <h3>Twitter</h3>
                                <p>Follow updates</p>
                            </div>
                            <div class="social-action">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </a>
                    </div>
                </section>
                
                <!-- FAQ Section -->
                <section class="faq-section slide-in-right">
                    <h2 class="section-title">Frequently Asked Questions</h2>
                    
                    <div class="faq-list">
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>How do I join the Discord server?</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                <p>Click the "Join Discord Server" button above. You'll be redirected to our Discord invite link. Make sure you have a Discord account!</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>Is the community free to join?</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                <p>Yes! Our Discord community is completely free to join. We offer free support, configs, and help to all members.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>How do I get support?</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                <p>Join our Discord and go to the #help-support channel. Our support team and community members will help you as soon as possible.</p>
                            </div>
                        </div>
                        
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>Are there rules in the community?</span>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                <p>Yes, we have community guidelines to ensure a positive environment. Please read the rules channel when you join.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
    },
    
    async init(appState) {
        console.log('Community page initialized');
        
        // Initialize Discord widget interactions
        this.initDiscordWidget();
        
        // Initialize FAQ accordion
        this.initFAQ();
        
        // Initialize social cards
        this.initSocialCards();
        
        // Track community page visit
        window.dispatchEvent(new CustomEvent('community_page_visited'));
    },
    
    initDiscordWidget() {
        const joinBtn = document.querySelector('.join-btn');
        if (joinBtn) {
            joinBtn.addEventListener('click', (e) => {
                // Track join button click
                window.dispatchEvent(new CustomEvent('discord_join_clicked'));
                console.log('Discord join button clicked');
            });
        }
        
        // Simulate channel clicks
        const channels = document.querySelectorAll('.channel');
        channels.forEach(channel => {
            channel.addEventListener('click', () => {
                const channelName = channel.querySelector('.channel-name').textContent;
                console.log(`Clicked channel: ${channelName}`);
                
                // Show notification
                if (window.toast) {
                    window.toast.info(`You would join ${channelName} channel`);
                }
            });
        });
    },
    
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            // Set initial state
            answer.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
            
            question.addEventListener('click', () => {
                const isOpen = answer.style.display === 'block';
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-answer').style.display = 'none';
                        otherItem.querySelector('.faq-question i').style.transform = 'rotate(0deg)';
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (isOpen) {
                    answer.style.display = 'none';
                    icon.style.transform = 'rotate(0deg)';
                    item.classList.remove('active');
                } else {
                    answer.style.display = 'block';
                    icon.style.transform = 'rotate(180deg)';
                    item.classList.add('active');
                    
                    // Track FAQ view
                    const questionText = question.querySelector('span').textContent;
                    window.dispatchEvent(new CustomEvent('faq_viewed', {
                        detail: { question: questionText }
                    }));
                }
            });
        });
        
        // Open first FAQ by default
        if (faqItems.length > 0) {
            const firstQuestion = faqItems[0].querySelector('.faq-question');
            firstQuestion.click();
        }
    },
    
    initSocialCards() {
        const socialCards = document.querySelectorAll('.social-card');
        
        socialCards.forEach(card => {
            card.addEventListener('click', (e) => {
                const platform = card.classList.contains('discord') ? 'Discord' :
                               card.classList.contains('github') ? 'GitHub' :
                               card.classList.contains('youtube') ? 'YouTube' : 'Twitter';
                
                // Track social link click
                window.dispatchEvent(new CustomEvent('social_link_clicked', {
                    detail: { platform }
                }));
                
                console.log(`Social link clicked: ${platform}`);
            });
        });
    }
};

export default CommunityPage;