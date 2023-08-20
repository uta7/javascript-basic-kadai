const text = document.getElementById('text');
const btn = document.getElementById('btn');
const parent = document.getElementById('parent')

btn.addEventListener('click', () => {
    const newText = document.createElement('h2');
    newText.textContent = 'ボタンをクリックしました';
    setTimeout(() => {
        parent.appendChild(newText);
        text.style.display = 'none';
    }, 2000);
});