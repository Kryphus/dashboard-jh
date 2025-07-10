export async function renderDistrict2(mainTag) {
  const test = document.createElement('div');
  test.textContent = 'd2-page';
  console.log('Rendering d2 page');
  mainTag.appendChild(test);
}