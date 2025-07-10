
import { renderDashboardPage } from '../pages/dashboardPage.js';
import { renderDistrict1 } from '../pages/districts/district1.js';
import { renderDistrict3 } from '../pages/districts/district3.js';
import { renderDistrict2 } from '../pages/districts/district2.js';
import { logout } from '../pages/logout.js';



export function handleNavigation() {
    const navLinks = document.querySelectorAll('#sidebar a');
    const mainTag = document.querySelector('main');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(link => link.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');

            const page = link.textContent.trim().toUpperCase();
            mainTag.innerHTML = ''; 
            mainTag.className = '';

            switch (page) {
                case 'HOME':
                    renderDashboardPage(mainTag);
                    break;
                case 'DISTRICT 1':
                    renderDistrict1(mainTag);
                    break;
                case 'DISTRICT 2':
                    renderDistrict2(mainTag);
                    break;
                case 'DISTRICT 3':
                    renderDistrict3(mainTag);
                    break;
                case 'LOGOUT':
                    logout(mainTag);
                    break;
                default:
                    renderDashboardPage(mainTag);
            }
        });
    });

    const toggleButton = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', () => {
            sidebar.classList.toggle('close');
            toggleButton.classList.toggle('rotate');
        });
    }
}






