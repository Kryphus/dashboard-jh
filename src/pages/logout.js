

export async function logout(mainTag) {
  const test = document.createElement('div');
  test.textContent = 'logout-page';
  console.log('Rendering logout page');
  mainTag.appendChild(test);
}
