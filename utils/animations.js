// ============================================
// ANIMATION UTILITIES
// Handles scroll animations and transitions
// ============================================

/**
 * Initialize all animations on the page
 */
export function initAnimations() {
    // Initialize Intersection Observer for scroll animations
    const animationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Optional: Add data attribute for tracking
                    entry.target.setAttribute('data-animated', 'true');
                    
                    // Dispatch custom event
                    entry.target.dispatchEvent(new CustomEvent('animated', {
                        detail: { element: entry.target }
                    }));
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    // Observe all animatable elements
    document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right').forEach(el => {
        animationObserver.observe(el);
    });
    
    console.log('Animations initialized');
    
    return animationObserver;
}

/**
 * Observe animations for a specific page or container
 */
export function observePageAnimations(container) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add delay based on data attributes
                    const delay = entry.target.dataset.animationDelay || 0;
                    
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                        
                        // Chain animations if needed
                        if (entry.target.dataset.animationChain) {
                            const nextElement = document.querySelector(entry.target.dataset.animationChain);
                            if (nextElement) {
                                nextElement.classList.add('visible');
                            }
                        }
                    }, parseInt(delay));
                }
            });
        },
        {
            threshold: 0.05,
            rootMargin: '50px'
        }
    );
    
    // Observe elements within the container
    container.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
    
    return observer;
}

/**
 * Animate counter elements
 */
export function animateCounter(selector, duration = 2000) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        const target = parseInt(element.textContent);
        const suffix = element.textContent.replace(/[0-9]/g, '');
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start) + suffix;
            }
        }, 16);
    });
}

/**
 * Add staggered animation to a group of elements
 */
export function staggerAnimation(selector, staggerDelay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        element.style.transitionDelay = `${index * staggerDelay}ms`;
        element.classList.add('visible');
    });
}

/**
 * Create a typing animation effect
 */
export function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Parallax scrolling effect
 */
export function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('[data-parallax]');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallaxSpeed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

/**
 * Hover animation for cards
 */
export function initHoverAnimations() {
    const hoverCards = document.querySelectorAll('.feature-card, .stat-card');
    
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/**
 * Initialize all animations
 */
export function initAllAnimations() {
    initAnimations();
    initParallax();
    initHoverAnimations();
    
    // Animate counters if present
    if (document.querySelectorAll('[data-counter]').length > 0) {
        setTimeout(() => {
            animateCounter('[data-counter]');
        }, 1000);
    }
    
    // Add typing animation to elements with data-typewriter
    document.querySelectorAll('[data-typewriter]').forEach(element => {
        const text = element.dataset.typewriter;
        const speed = element.dataset.typewriterSpeed || 50;
        typeWriter(element, text, parseInt(speed));
    });
}

/**
 * Reset all animations
 */
export function resetAnimations() {
    document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right').forEach(el => {
        el.classList.remove('visible');
    });
}