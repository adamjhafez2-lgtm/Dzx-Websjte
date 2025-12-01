// ============================================
// COPY TO CLIPBOARD UTILITY
// Handles copying text with fallbacks and notifications
// ============================================

/**
 * Copy text to clipboard with notification
 * @param {string} text - Text to copy
 * @param {Toast} toast - Toast instance for notifications
 * @param {object} options - Additional options
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text, toast = null, options = {}) {
    const defaultOptions = {
        showNotification: true,
        notificationMessage: 'Copied to clipboard!',
        notificationType: 'success',
        fallbackSelector: 'body' // For fallback method
    };
    
    const config = { ...defaultOptions, ...options };
    
    try {
        // Try modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            console.log('📋 Copied to clipboard via modern API');
        } else {
            // Fallback for older browsers
            await copyUsingExecCommand(text, config.fallbackSelector);
            console.log('📋 Copied to clipboard via fallback method');
        }
        
        // Show success notification
        if (config.showNotification && toast) {
            toast.show({
                message: config.notificationMessage,
                type: config.notificationType,
                duration: 2000
            });
        }
        
        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('copy', {
            detail: { text, success: true }
        }));
        
        return true;
        
    } catch (error) {
        console.error('❌ Failed to copy text:', error);
        
        // Show error notification
        if (config.showNotification && toast) {
            toast.show({
                message: 'Failed to copy. Please try again.',
                type: 'error',
                duration: 3000
            });
        }
        
        // Dispatch error event
        window.dispatchEvent(new CustomEvent('copy', {
            detail: { text, success: false, error }
        }));
        
        return false;
    }
}

/**
 * Fallback method using execCommand
 */
function copyUsingExecCommand(text, selector) {
    return new Promise((resolve, reject) => {
        try {
            // Create temporary textarea
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.left = '-999999px';
            textarea.style.top = '-999999px';
            document.body.appendChild(textarea);
            
            // Select and copy
            textarea.select();
            textarea.setSelectionRange(0, 99999); // For mobile
            
            const successful = document.execCommand('copy');
            document.body.removeChild(textarea);
            
            if (successful) {
                resolve();
            } else {
                reject(new Error('execCommand failed'));
            }
        } catch (error) {
            reject(error);
        }
    });
}

/**
 * Copy specific element's text content
 */
export async function copyElementText(selector, toast = null) {
    const element = document.querySelector(selector);
    if (!element) {
        console.error(`Element not found: ${selector}`);
        return false;
    }
    
    const text = element.textContent || element.innerText;
    return copyToClipboard(text, toast);
}

/**
 * Copy input/textarea value
 */
export async function copyInputValue(selector, toast = null) {
    const input = document.querySelector(selector);
    if (!input) {
        console.error(`Input not found: ${selector}`);
        return false;
    }
    
    const text = input.value;
    return copyToClipboard(text, toast);
}

/**
 * Copy with custom formatting
 */
export async function copyWithFormatting(text, format = 'plain', toast = null) {
    let formattedText = text;
    
    switch (format) {
        case 'html':
            formattedText = text.replace(/\n/g, '<br>');
            break;
        case 'code':
            formattedText = `\`\`\`\n${text}\n\`\`\``;
            break;
        case 'markdown':
            formattedText = `\`\`\`${text}\`\`\``;
            break;
        // Add more formats as needed
    }
    
    return copyToClipboard(formattedText, toast);
}

/**
 * Copy multiple items as a list
 */
export async function copyList(items, separator = '\n', toast = null) {
    const text = items.join(separator);
    return copyToClipboard(text, toast, {
        notificationMessage: `Copied ${items.length} items to clipboard!`
    });
}