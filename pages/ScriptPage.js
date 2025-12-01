// ============================================
// SCRIPT PAGE COMPONENT
// Edit this file to modify the script page
// ============================================

import { APP_CONFIG } from '../config/constants.js';
import { BUTTON_CONFIG } from '../config/buttonConfig.js';
import { SCRIPT_CONTENT } from '../config/constants.js';
import { FEATURE_CATEGORIES } from '../config/constants.js';
import FeatureCard from '../components/FeatureCard.js';

const ScriptPage = {
    async render() {
        const coreFeatures = [
            { title: 'Advanced ESP', icon: 'fas fa-eye', category: 'Visual' },
            { title: 'Smart Aimbot', icon: 'fas fa-crosshairs', category: 'Combat' },
            { title: 'Auto Shoot', icon: 'fas fa-robot', category: 'Combat' },
            { title: 'Player Inspector', icon: 'fas fa-user-circle', category: 'Utility' },
            { title: 'Fly / NoClip', icon: 'fas fa-feather', category: 'Movement' },
            { title: 'Speed Hack', icon: 'fas fa-walking', category: 'Movement' },
            { title: 'Anti-Cheat Bypass', icon: 'fas fa-shield-alt', category: 'Protection' },
            { title: 'Server Hop', icon: 'fas fa-exchange-alt', category: 'Utility' }
        ];
        
        return `
            <div class="script-page">
                <!-- Header -->
                <section class="page-header slide-in-left">
                    <div class="header-icon">
                        <i class="fas fa-terminal"></i>
                    </div>
                    <h1 class="page-title">${APP_CONFIG.APP_NAME} Script</h1>
                    <p class="page-description">
                        The most powerful all-in-one script with 100+ features. 
                        Advanced ESP, Aimbot, Movement, and Utility features.
                    </p>
                </section>
                
                <!-- Main Content -->
                <div class="script-container">
                    <!-- Left: Script Display -->
                    <div class="script-display slide-in-left">
                        <div class="code-window">
                            <!-- Code Window Header -->
                            <div class="code-header">
                                <div class="window-controls">
                                    <span class="control close"></span>
                                    <span class="control minimize"></span>
                                    <span class="control maximize"></span>
                                </div>
                                <div class="file-name">DZX_Universal.lua</div>
                                <div class="window-actions">
                                    <button class="action-btn" title="Format code">
                                        <i class="fas fa-code"></i>
                                    </button>
                                    <button class="action-btn" title="Save script">
                                        <i class="fas fa-save"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Code Content -->
                            <div class="code-content">
                                <pre><code class="language-lua">${SCRIPT_CONTENT}</code></pre>
                            </div>
                            
                            <!-- Copy Bar -->
                            <div class="code-actions">
                                <button class="btn btn-primary copy-btn" 
                                        data-copy="${SCRIPT_CONTENT}"
                                        data-copy-type="script">
                                    <i class="${BUTTON_CONFIG.icons.copy}"></i>
                                    ${BUTTON_CONFIG.texts.copyScript}
                                </button>
                                
                                <div class="script-info">
                                    <span class="info-item">
                                        <i class="fas fa-code"></i> Lua Script
                                    </span>
                                    <span class="info-item">
                                        <i class="fas fa-file-alt"></i> ${SCRIPT_CONTENT.split('\n').length} lines
                                    </span>
                                    <span class="info-item">
                                        <i class="fas fa-weight-hanging"></i> ${Math.round(SCRIPT_CONTENT.length / 1024 * 10) / 10} KB
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right: Features & Instructions -->
                    <div class="script-sidebar slide-in-right">
                        <!-- Core Features -->
                        <div class="sidebar-section">
                            <h3 class="section-title">
                                <i class="fas fa-star"></i>
                                Core Features
                            </h3>
                            <div class="features-list">
                                ${FeatureCard.createFeatureGrid(coreFeatures, {
                                    columns: 2,
                                    showDescription: false,
                                    interactive: false
                                })}
                            </div>
                        </div>
                        
                        <!-- How to Use -->
                        <div class="sidebar-section instructions">
                            <h3 class="section-title">
                                <i class="fas fa-book"></i>
                                How to Use
                            </h3>
                            <ol class="steps-list">
                                <li class="step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <strong>Copy the script</strong> above
                                    </div>
                                </li>
                                <li class="step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <strong>Open your executor</strong> (Synapse, Script-Ware, Krnl)
                                    </div>
                                </li>
                                <li class="step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <strong>Paste the script</strong> into the executor
                                    </div>
                                </li>
                                <li class="step">
                                    <div class="step-number">4</div>
                                    <div class="step-content">
                                        <strong>Click Execute</strong> to run the script
                                    </div>
                                </li>
                                <li class="step">
                                    <div class="step-number">5</div>
                                    <div class="step-content">
                                        <strong>Press Right Shift</strong> to open GUI
                                    </div>
                                </li>
                                <li class="step">
                                    <div class="step-number">6</div>
                                    <div class="step-content">
                                        <strong>Enjoy 100+ features!</strong>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        
                        <!-- Supported Executors -->
                        <div class="sidebar-section executors">
                            <h3 class="section-title">
                                <i class="fas fa-check-circle"></i>
                                Supported Executors
                            </h3>
                            <div class="executors-list">
                                <div class="executor-item">
                                    <i class="fas fa-bolt"></i>
                                    <span>Synapse X</span>
                                </div>
                                <div class="executor-item">
                                    <i class="fas fa-code"></i>
                                    <span>Script-Ware</span>
                                </div>
                                <div class="executor-item">
                                    <i class="fas fa-crown"></i>
                                    <span>Krnl</span>
                                </div>
                                <div class="executor-item">
                                    <i class="fas fa-rocket"></i>
                                    <span>Fluxus</span>
                                </div>
                                <div class="executor-item">
                                    <i class="fas fa-shield-alt"></i>
                                    <span>Comet</span>
                                </div>
                                <div class="executor-item">
                                    <i class="fas fa-star"></i>
                                    <span>Oxygen U</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Additional Info -->
                <section class="script-info-section fade-in">
                    <div class="info-cards">
                        <div class="info-card">
                            <i class="fas fa-sync-alt"></i>
                            <h4>Auto Updates</h4>
                            <p>Script automatically updates to the latest version</p>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-headset"></i>
                            <h4>24/7 Support</h4>
                            <p>Get help anytime in our Discord community</p>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-shield-alt"></i>
                            <h4>Undetectable</h4>
                            <p>Advanced anti-detection system</p>
                        </div>
                        <div class="info-card">
                            <i class="fas fa-bolt"></i>
                            <h4>Fast Execution</h4>
                            <p>Optimized for maximum performance</p>
                        </div>
                    </div>
                </section>
            </div>
        `;
    },
    
    async init(appState) {
        console.log('Script page initialized');
        
        // Initialize copy button
        const copyBtn = document.querySelector('.copy-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                const scriptContent = copyBtn.dataset.copy;
                
                if (appState.toast) {
                    appState.toast.show({
                        message: '📋 Script copied to clipboard!',
                        type: 'success',
                        duration: 3000
                    });
                }
                
                // Visual feedback
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyBtn.classList.add('btn-success');
                
                setTimeout(() => {
                    copyBtn.innerHTML = `<i class="${BUTTON_CONFIG.icons.copy}"></i> ${BUTTON_CONFIG.texts.copyScript}`;
                    copyBtn.classList.remove('btn-success');
                }, 2000);
                
                // Copy to clipboard
                try {
                    await navigator.clipboard.writeText(scriptContent);
                    console.log('Script copied to clipboard');
                    
                    // Track copy event
                    window.dispatchEvent(new CustomEvent('script_copied', {
                        detail: {
                            length: scriptContent.length,
                            lines: scriptContent.split('\n').length
                        }
                    }));
                    
                } catch (error) {
                    console.error('Failed to copy script:', error);
                    if (appState.toast) {
                        appState.toast.error('Failed to copy script. Please try again.');
                    }
                }
            });
        }
        
        // Initialize feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            FeatureCard.init(card, appState);
        });
        
        // Add syntax highlighting (optional)
        this.highlightCode();
    },
    
    highlightCode() {
        // Simple syntax highlighting for Lua
        const codeElement = document.querySelector('.code-content code');
        if (codeElement) {
            const code = codeElement.textContent;
            
            // Basic Lua syntax highlighting
            const highlighted = code
                .replace(/--.*$/gm, '<span class="comment">$&</span>') // Comments
                .replace(/\b(loadstring|game|HttpGet|wait|print|warn|error)\b/g, '<span class="function">$&</span>') // Functions
                .replace(/\b(true|false|nil)\b/g, '<span class="keyword">$&</span>') // Keywords
                .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>') // Strings
                .replace(/\b([0-9]+(\.[0-9]+)?)\b/g, '<span class="number">$&</span>'); // Numbers
                
            codeElement.innerHTML = highlighted;
        }
    }
};

export default ScriptPage;