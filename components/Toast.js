// ============================================
// TOAST NOTIFICATION COMPONENT
// Usage: 
// const toast = new Toast(containerElement);
// toast.show({ message: 'Hello!', type: 'success' });
// ============================================

import { NOTIFICATION_CONFIG } from '../config/buttonConfig.js';

export default class Toast {
    constructor(container, options = {}) {
        this.container = container;
        this.config = { ...NOTIFICATION_CONFIG, ...options };
        this.queue = [];
        this.isShowing = false;
        
        this.initStyles();
    }
    
    initStyles() {
        // Add CSS for toast if not already present
        if (!document.getElementById('toast-styles')) {
            const style = document.createElement('style');
            style.id = 'toast-styles';
            style.textContent = `
                .toast {
                    position: fixed;
                    z-index: 1000;
                    padding: 12px 16px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    max-width: 400px;
                    animation: toast-in 0.3s ease;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .toast.top-right {
                    top: 20px;
                    right: 20px;
                }
                
                .toast.top-left {
                    top: 20px;
                    left: 20px;
                }
                
                .toast.bottom-right {
                    bottom: 20px;
                    right: 20px;
                }
                
                .toast.bottom-left {
                    bottom: 20px;
                    left: 20px;
                }
                
                .toast-icon {
                    font-size: 20px;
                    flex-shrink: 0;
                }
                
                .toast-content {
                    flex-grow: 1;
                    font-size: 14px;
                    line-height: 1.4;
                }
                
                .toast-close {
                    background: none;
                    border: none;
                    color: inherit;
                    cursor: pointer;
                    opacity: 0.7;
                    padding: 4px;
                    font-size: 16px;
                }
                
                .toast-close:hover {
                    opacity: 1;
                }
                
                @keyframes toast-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes toast-out {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    show(options) {
        const toastOptions = {
            message: '',
            type: 'info',
            duration: this.config.types[options.type || 'info'].duration,
            position: this.config.position,
            ...options
        };
        
        this.queue.push(toastOptions);
        this.processQueue();
    }
    
    processQueue() {
        if (this.isShowing || this.queue.length === 0) return;
        
        this.isShowing = true;
        const options = this.queue.shift();
        this.createToast(options);
    }
    
    createToast(options) {
        const typeConfig = this.config.types[options.type] || this.config.types.info;
        
        const toast = document.createElement('div');
        toast.className = `toast ${options.position}`;
        toast.style.backgroundColor = `${typeConfig.color}15`;
        toast.style.color = '#ffffff';
        toast.style.borderColor = `${typeConfig.color}30`;
        
        toast.innerHTML = `
            <div class="toast-icon" style="color: ${typeConfig.color}">
                <i class="${typeConfig.icon}"></i>
            </div>
            <div class="toast-content">${options.message}</div>
            <button class="toast-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add to container
        this.container.appendChild(toast);
        
        // Setup close button
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => this.removeToast(toast));
        
        // Auto remove after duration
        setTimeout(() => {
            if (toast.parentNode) {
                this.removeToast(toast);
            }
        }, options.duration);
    }
    
    removeToast(toast) {
        toast.style.animation = 'toast-out 0.3s ease';
        
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
            this.isShowing = false;
            this.processQueue();
        }, 300);
    }
    
    // Helper methods for common toast types
    success(message, duration) {
        this.show({ message, type: 'success', duration });
    }
    
    error(message, duration) {
        this.show({ message, type: 'error', duration });
    }
    
    warning(message, duration) {
        this.show({ message, type: 'warning', duration });
    }
    
    info(message, duration) {
        this.show({ message, type: 'info', duration });
    }
    
    // Clear all toasts
    clear() {
        this.queue = [];
        this.container.innerHTML = '';
        this.isShowing = false;
    }
}