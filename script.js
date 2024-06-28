// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);

    const previewElements = document.querySelectorAll('.preview-text');
    
    previewElements.forEach(previewElement => {
        const fullTextId = previewElement.getAttribute('data-full-text');
        const fullTextElement = document.getElementById(fullTextId);
        
        if (fullTextElement) {
            const fullText = fullTextElement.textContent;
            const previewText = fullText.trim().substring(0, 385) + '...';
            previewElement.textContent = previewText;
        }
    });
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.style.maxHeight = targetElement.scrollHeight + "px";
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 500); // Wait for the expansion animation to complete
            }
        });
    });
});
