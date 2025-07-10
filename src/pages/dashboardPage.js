import { renderHeader } from '../domUtils/header.js';

export async function renderDashboardPage(mainTag) {
  const header = await renderHeader();
  mainTag.appendChild(header);

  const test = document.createElement('div');
  test.textContent = 'dashboard-page';
  console.log('Rendering dashboard page');
  mainTag.appendChild(test);
}


