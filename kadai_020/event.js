const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
let element = document.getElementById('text');
element.textContent = 'ボタンをクリックしました';
});