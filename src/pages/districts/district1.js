

export async function renderDistrict1(mainTag) {
  const test = document.createElement('div');
  test.textContent = 'd1-page';
  console.log('Rendering d1 page');
  mainTag.appendChild(test);
}
