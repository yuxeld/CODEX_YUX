const lines = [
    "Bir düş gibi geçtin, / İsli camlarda zaman...",
    "Rüzgâr anlattı seni, / Uzaklarda titreyen yıldızlara...",
    "Karanlık susarken içimizde, / Ay ışığı seni hatırlatır."
];

document.addEventListener('click', () => {
    const verseContainer = document.getElementById('verse-container');
    const p = document.createElement('p');
    p.textContent = lines[Math.floor(Math.random() * lines.length)];
    p.className = 'verse';
    verseContainer.appendChild(p);
    // Allow CSS transition to trigger
    requestAnimationFrame(() => {
        p.classList.add('show');
    });
});
