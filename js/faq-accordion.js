// FAQ Accordion functionality for Kelpie Web Services

document.addEventListener('DOMContentLoaded', function() {
    const faqSection = document.querySelector('.py-20.lg\\:py-28.bg-white');

    if (!faqSection) return;

    // Find all FAQ items (each one is a div with mb-12 pb-12 border-b)
    const faqItems = faqSection.querySelectorAll('.mb-12.pb-12.border-b');

    if (faqItems.length === 0) return;

    // Transform each FAQ item into an accordion
    faqItems.forEach((item, index) => {
        const heading = item.querySelector('h2');
        const content = item.querySelectorAll('p, ul');

        if (!heading) return;

        // Create accordion structure
        const accordionItem = document.createElement('div');
        accordionItem.className = 'bg-white rounded-lg border border-gray-200 mb-4';

        // Create button
        const button = document.createElement('button');
        button.className = 'accordion-button w-full text-left px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-deep-teal focus:ring-offset-2 rounded-lg';
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('data-faq', index + 1);

        const buttonText = document.createElement('span');
        buttonText.className = 'text-lg font-bold text-slate pr-8';
        buttonText.textContent = heading.textContent;

        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        arrow.setAttribute('class', 'accordion-arrow w-6 h-6 text-deep-teal flex-shrink-0');
        arrow.setAttribute('fill', 'none');
        arrow.setAttribute('stroke', 'currentColor');
        arrow.setAttribute('viewBox', '0 0 24 24');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>';

        button.appendChild(buttonText);
        button.appendChild(arrow);

        // Create content container
        const contentDiv = document.createElement('div');
        contentDiv.className = 'accordion-content';
        contentDiv.setAttribute('data-faq-content', index + 1);
        contentDiv.style.maxHeight = '0';
        contentDiv.style.overflow = 'hidden';
        contentDiv.style.transition = 'max-height 0.3s ease-out';

        const contentInner = document.createElement('div');
        contentInner.className = 'px-6 py-6 text-slate leading-relaxed space-y-4';

        // Move all content into the accordion
        content.forEach(element => {
            contentInner.appendChild(element.cloneNode(true));
        });

        contentDiv.appendChild(contentInner);

        accordionItem.appendChild(button);
        accordionItem.appendChild(contentDiv);

        // Replace original item with accordion item
        item.parentNode.replaceChild(accordionItem, item);
    });

    // Add accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqNumber = this.getAttribute('data-faq');
            const content = document.querySelector(`[data-faq-content="${faqNumber}"]`);
            const arrow = this.querySelector('.accordion-arrow');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all accordions
            document.querySelectorAll('.accordion-button').forEach(btn => {
                const btnContent = document.querySelector(`[data-faq-content="${btn.getAttribute('data-faq')}"]`);
                const btnArrow = btn.querySelector('.accordion-arrow');

                btn.setAttribute('aria-expanded', 'false');
                if (btnContent) {
                    btnContent.style.maxHeight = '0';
                }
                if (btnArrow) {
                    btnArrow.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle clicked accordion
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    // Add some extra space
                    setTimeout(() => {
                        content.style.maxHeight = (content.scrollHeight + 100) + 'px';
                    }, 300);
                }
                if (arrow) {
                    arrow.style.transform = 'rotate(180deg)';
                }
            }
        });

        // Keyboard support
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Wrap all accordions in a container with styling
    const accordionContainer = document.createElement('div');
    accordionContainer.className = 'max-w-6xl mx-auto bg-off-white rounded-lg shadow-sm p-8 lg:p-12';

    const allAccordions = faqSection.querySelectorAll('.bg-white.rounded-lg.border');
    const parentContainer = allAccordions[0]?.parentElement;

    if (parentContainer) {
        // Create a wrapper for all accordions
        allAccordions.forEach(accordion => {
            accordionContainer.appendChild(accordion);
        });

        // Clear and re-add
        while (parentContainer.firstChild) {
            parentContainer.removeChild(parentContainer.firstChild);
        }
        parentContainer.appendChild(accordionContainer);
    }
});
