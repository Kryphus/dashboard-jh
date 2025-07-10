import { renderDashboardPage } from './dashboardPage.js';
import { renderHeader } from '../domUtils/header.js';

export const renderNav = () => {
    const bodyTag = document.querySelector('body');
    bodyTag.classList.remove('login-page');
    bodyTag.textContent = "";

    renderHeader();
    const sidebar = document.createElement('nav');
    sidebar.id = 'sidebar';
    sidebar.innerHTML = `
        <ul>
            <li>
                <span class="logo">titleD2</span>
                <button id="toggle-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/>
                    </svg>
                </button>
            </li>
            <li class="active">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/>
                    </svg>
                    <span>Dashboard</span>
                </a>
            </li>
            <!-- District 1 -->
            <li class="district">
                <a href="#" class="district-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    <span>District 1</span>
                </a>
                <ul class="school-dropdown">
                    <li><a href="#" class="school-btn">School 1</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="school-btn">School 2</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="school-btn">School 3</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <!-- District 2 -->
            <li class="district">
                <a href="#" class="district-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    <span>District 2</span>
                </a>
                <ul class="school-dropdown">
                    <li><a href="#" class="school-btn">School 1</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="school-btn">School 2</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="school-btn">School 3</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <!-- District 3 -->
            <li class="district">
                <a href="#" class="district-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    <span>District 3</span>
                </a>
                <ul class="school-dropdown">
                    <li><a href="#" class="school-btn">School 1</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="school-btn">School 2</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                    <li><a href="#" class="school-btn">School 3</a>
                        <ul class="quarter-dropdown">
                            <li><a href="#">Quarter 1</a></li>
                            <li><a href="#">Quarter 2</a></li>
                            <li><a href="#">Quarter 3</a></li>
                            <li><a href="#">Quarter 4</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
                    </svg>
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </nav>`;

    const mainContent = document.createElement('main');

    const body = document.querySelector('body');
    body.appendChild(sidebar);
    body.appendChild(mainContent);

    renderDashboardPage(); 
    handleDropdownToggle();
};

function handleDropdownToggle() {
    const districtButtons = document.querySelectorAll('.district-btn');
    const schoolButtons = document.querySelectorAll('.school-btn');
    const mainTag = document.querySelector('main'); 

    districtButtons.forEach(district => {
        district.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = district.nextElementSibling; 
            dropdown.classList.toggle('show');
        });
    });

    schoolButtons.forEach(school => {
        school.addEventListener('click', (e) => {
            e.preventDefault();
            const quarterDropdown = school.nextElementSibling;  
            quarterDropdown.classList.toggle('show');
        });
    });

    const quarterLinks = document.querySelectorAll('.quarter-dropdown a');
    quarterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const schoolName = link.closest('.school-dropdown').previousElementSibling.textContent.trim();  
            const quarter = link.textContent.trim();

            renderQuarterData(mainTag, schoolName, quarter);
        });
    });
}

function renderQuarterData(mainTag, schoolName, quarter) {
    const content = document.createElement('div');
    content.textContent = `Displaying data for ${schoolName} - ${quarter}`;
    mainTag.innerHTML = ''; 
    mainTag.appendChild(content);
}
