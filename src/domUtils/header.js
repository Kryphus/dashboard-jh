import depedLogo from '../assets/deped-logo.png';

export async function renderHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
        <a href="#"><img src="${depedLogo}" alt="Deped Logo"></a>
        <div>
            <h1>Division of Davao del Sur</h1>
            <h2>Department of Education</h2>
        </div>
    `;
    return header;
}