document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-transition', 'active');

    function transitionToPage(url) {
        document.body.classList.remove('active'); 
        setTimeout(() => {
            window.location.href = url;
        }, 500); 
    }

    const hamburgerMenu = document.getElementById('hamburger');
    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
    });

    document.querySelectorAll('.menu-options button').forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            transitionToPage(`${page}.html`); 
        });
    });
});
