// Custom JavaScript for Bites POS

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive components
    initNavbarScrollEffect();
    initFormValidation();
    
    console.log('Bites POS JavaScript initialized');
});

// Navbar background effect on scroll
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        // Add shadow based on initial scroll position
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-sm');
        }
        
        // Add/remove shadow on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
            } else {
                navbar.classList.remove('shadow-sm');
            }
        });
    }
}

// // Basic form validation (additional to Bootstrap's native validation)
// function initFormValidation() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(event) {
//             if (!contactForm.checkValidity()) {
//                 // event.preventDefault();
//                 event.stopPropagation();
//             } else {
//                 // If the form is valid, we'd typically submit to a server
//                 // For demo purposes, let's just show a success message
//                 // event.preventDefault();
//                 showFormSuccess(contactForm);
//             }
            
//             contactForm.classList.add('was-validated');
//         });
//     }
// }

// Show form success message
function showFormSuccess(form) {
    // Create success alert
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success mt-4';
    successDiv.role = 'alert';
    successDiv.innerHTML = `
        <h4 class="alert-heading">Message Sent!</h4>
        <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
    `;
    
    // Clear the form and append success message
    form.innerHTML = '';
    form.appendChild(successDiv);
    
    // Scroll to the success message
    successDiv.scrollIntoView({ behavior: 'smooth' });
}

// Animate elements when they come into view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
