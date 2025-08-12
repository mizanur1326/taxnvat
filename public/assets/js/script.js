// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: sanitizeInput(formData.get('name')),
            email: sanitizeInput(formData.get('email')),
            phone: sanitizeInput(formData.get('phone')),
            service: sanitizeInput(formData.get('service')),
            message: sanitizeInput(formData.get('message'))
        };
        
        // Basic validation
        if (!data.name || !data.email || !data.service || !data.message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        // Additional security validation
        if (!isValidInput(data.name) || !isValidInput(data.message)) {
            showNotification('Invalid characters detected in form submission.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Phone validation (if provided)
        if (data.phone && !isValidPhone(data.phone)) {
            showNotification('Please enter a valid phone number.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Thank you for your message! We will get back to you within 24 hours.', 'success');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Security utility functions
function sanitizeInput(input) {
    if (!input) return '';
    return input.toString()
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim()
        .substring(0, 1000); // Limit length
}

function isValidInput(input) {
    if (!input) return true;
    // Check for suspicious patterns
    const suspiciousPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i,
        /data:text\/html/i,
        /vbscript:/i
    ];
    return !suspiciousPatterns.some(pattern => pattern.test(input));
}

function isValidPhone(phone) {
    // Allow common phone number formats
    const phoneRegex = /^[\+]?[\d\s\-\(\)\.]{10,}$/;
    return phoneRegex.test(phone);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Notification system
function showNotification(message, type = 'info') {
    // Sanitize message to prevent XSS
    const sanitizedMessage = escapeHtml(message);
    
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    // Create elements safely without innerHTML
    const content = document.createElement('div');
    content.className = 'notification-content';
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'notification-message';
    messageSpan.textContent = message; // Use textContent instead of innerHTML
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'notification-close';
    closeBtn.textContent = '×';
    closeBtn.setAttribute('aria-label', 'Close notification');
    
    content.appendChild(messageSpan);
    content.appendChild(closeBtn);
    notification.appendChild(content);
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
        border-radius: 8px;
        padding: 15px 20px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        font-family: 'Inter', sans-serif;
    `;
    
    // Add animation styles to document if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                padding: 0;
                color: inherit;
                opacity: 0.7;
            }
            .notification-close:hover {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Close button functionality
    // closeBtn already defined above
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .team-member, .testimonial, .stat');
    animateElements.forEach(el => observer.observe(el));
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '') + (element.textContent.includes('%') ? '%' : '');
            clearInterval(timer);
        } else {
            const currentText = element.textContent;
            const suffix = currentText.includes('+') ? '+' : (currentText.includes('%') ? '%' : '');
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Animate counters when they come into view
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''), 10);
            
            // Validate number to prevent issues
            if (isNaN(number) || number < 0 || number > 10000) {
                return;
            }
            statNumber.textContent = '0' + (text.includes('+') ? '+' : '') + (text.includes('%') ? '%' : '');
            animateCounter(statNumber, number);
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => statObserver.observe(stat));
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    if (!btn.type || btn.type !== 'submit') {
        btn.addEventListener('click', function(e) {
            if (this.href && (this.href.startsWith('#') || this.href.startsWith(window.location.origin + '#'))) {
                // It's an anchor link, handle normally
                return;
            }
            
            // Add loading state for other buttons
            const originalText = this.textContent;
            this.style.position = 'relative';
            this.style.color = 'transparent';
            
            // Create spinner
            const spinner = document.createElement('div');
            spinner.setAttribute('aria-label', 'Loading');
            spinner.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 20px;
                height: 20px;
                border: 2px solid currentColor;
                border-top: 2px solid transparent;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            `;
            
            // Add spinner animation if not exists
            if (!document.querySelector('#spinner-styles')) {
                const style = document.createElement('style');
                style.id = 'spinner-styles';
                style.textContent = `
                    @keyframes spin {
                        0% { transform: translate(-50%, -50%) rotate(0deg); }
                        100% { transform: translate(-50%, -50%) rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            this.appendChild(spinner);
            
            // Remove loading state after 1 second
            setTimeout(() => {
                if (this.contains(spinner)) {
                    this.style.color = '';
                    this.removeChild(spinner);
                }
            }, 1000);
        });
    }
});

// Add scroll-to-top functionality
const scrollToTop = document.createElement('button');
scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTop.className = 'scroll-to-top';
scrollToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #c9a96e;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(201, 169, 110, 0.3);
    transition: all 0.3s ease;
    z-index: 1000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
`;

document.body.appendChild(scrollToTop);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTop.style.opacity = '1';
        scrollToTop.style.visibility = 'visible';
        scrollToTop.style.transform = 'translateY(0)';
    } else {
        scrollToTop.style.opacity = '0';
        scrollToTop.style.visibility = 'hidden';
        scrollToTop.style.transform = 'translateY(20px)';
    }
});

// Scroll to top functionality
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTop.addEventListener('mouseenter', () => {
    scrollToTop.style.backgroundColor = '#b8956a';
    scrollToTop.style.transform = 'translateY(-2px) scale(1.1)';
});

scrollToTop.addEventListener('mouseleave', () => {
    scrollToTop.style.backgroundColor = '#c9a96e';
    scrollToTop.style.transform = 'translateY(0) scale(1)';
});