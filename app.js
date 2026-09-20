console.log("app.js is running");

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');


/* =========================================
   SHOW SELECTED SECTION
========================================= */

function showSection(id) {

    // Remove active state from all sections
    sections.forEach((section) => {
        section.classList.remove('active');
    });

    // Remove active state from all navigation buttons
    sectBtns.forEach((button) => {
        button.classList.remove('active-btn');
    });

    // Find matching section
    const section = document.getElementById(id);

    // Find matching navigation button
    const navButton = document.querySelector(
        `.control[data-id="${id}"]`
    );

    // Activate section
    if (section) {
        section.classList.add('active');
    }

    // Activate navigation button
    if (navButton) {
        navButton.classList.add('active-btn');
    }
}


/* =========================================
   PAGE TRANSITIONS
========================================= */

function PageTransitions() {

    // Navigation buttons
    sectBtns.forEach((btn) => {

        btn.addEventListener('click', function() {

            const id = this.dataset.id;

            // Show selected section
            showSection(id);

            // Store selected section in URL
            window.location.hash = id;
        });

    });


    /* -----------------------------------------
       OPEN CORRECT SECTION WHEN PAGE LOADS
    ----------------------------------------- */

    const startingSection = window.location.hash.substring(1);

    if (
        startingSection &&
        document.getElementById(startingSection)
    ) {
        showSection(startingSection);
    } else {
        showSection('home');
    }


    /* -----------------------------------------
       LIGHT / DARK MODE
    ----------------------------------------- */

    const themeBtn = document.querySelector('.theme-btn');

    if (themeBtn) {

        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
        });

    }
}

PageTransitions();


/* =========================================
   BROWSER BACK / FORWARD
========================================= */

window.addEventListener('hashchange', () => {

    const id = window.location.hash.substring(1);

    if (
        id &&
        document.getElementById(id)
    ) {
        showSection(id);
    } else {
        showSection('home');
    }

});


/* =========================================
   VIEW MY WORK BUTTON
========================================= */

const viewWorkBtn = document.querySelector('.view-work-btn');

if (viewWorkBtn) {

    viewWorkBtn.addEventListener('click', function(e) {

        e.preventDefault();

        // Open portfolio
        showSection('portfolio');

        // Update URL
        window.location.hash = 'portfolio';

    });

}


/* =========================================
   PORTFOLIO FILTERS
========================================= */

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {

    button.addEventListener('click', () => {

        // Remove active state from all filter buttons
        filterButtons.forEach((btn) => {
            btn.classList.remove('active-filter');
        });

        // Activate selected filter
        button.classList.add('active-filter');

        const filter = button.dataset.filter;

        // Filter project cards
        projectCards.forEach((card) => {

            const engine = card.dataset.engine;

            if (filter === 'all' || engine === filter) {

                // Let CSS restore the card's normal display value
                card.style.display = '';

            } else {

                card.style.display = 'none';

            }

        });

    });

});