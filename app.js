console.log("app.js is running");
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');

function PageTransitions() {

    sectBtns.forEach((btn) => {

        btn.addEventListener('click', function() {

            // Remove active state from all navigation buttons
            sectBtns.forEach((button) => {
                button.classList.remove('active-btn');
            });

            // Make clicked button active
            this.classList.add('active-btn');

            // Remove active state from all sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            // Get the section ID from the clicked button
            const id = this.dataset.id;

            // Activate matching section
            const section = document.getElementById(id);

            if (section) {
                section.classList.add('active');
            }
        });
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });
    }
}

PageTransitions();

const viewWorkBtn = document.querySelector('.view-work-btn');

if (viewWorkBtn) {
    viewWorkBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active state from all sections
        sections.forEach((section) => {
            section.classList.remove('active');
        });

        // Remove active state from all nav buttons
        sectBtns.forEach((button) => {
            button.classList.remove('active-btn');
        });

        // Activate portfolio section
        const portfolioSection = document.getElementById('portfolio');

        if (portfolioSection) {
            portfolioSection.classList.add('active');
        }

        // Highlight portfolio nav icon
        const portfolioNav = document.querySelector(
            '.control[data-id="portfolio"]'
        );

        if (portfolioNav) {
            portfolioNav.classList.add('active-btn');
        }
    });
}



const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {

    button.addEventListener('click', () => {

        // Update active filter button
        filterButtons.forEach((btn) => {
            btn.classList.remove('active-filter');
        });

        button.classList.add('active-filter');

        const filter = button.dataset.filter;

        // Filter project cards
        projectCards.forEach((card) => {

            const engine = card.dataset.engine;

            if (filter === 'all' || engine === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }

        });

    });

});