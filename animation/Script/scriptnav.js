const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
window.onscroll = function() {showNavbarOnScroll()};

        function showNavbarOnScroll() {
            const navbar = document.getElementById("navbar");
            if (window.scrollY > 50) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-100px";
            }
        }

        menuToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
        });