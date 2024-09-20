document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('page-transition', 'active');

    function transitionToPage(url) {
        document.body.classList.remove('active'); 
        setTimeout(() => {
            window.location.href = url;
        }, 500); 
    }

    document.getElementById('hamburger').addEventListener('click', function() {
        const menu = document.querySelector('hamburger');
        menu.classList.toggle('active');
    });

    document.querySelectorAll('.menu-options button').forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            transitionToPage(`${page}.html`); 
        });
    });
});
