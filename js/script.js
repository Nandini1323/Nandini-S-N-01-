document.getElementById('menu-btn').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});

// script.js

const marqueeText = document.getElementById('marquee-text');
const searchTerms = [
    'Diamond necklaces and silver...',
    'Find the perfect gold earrings...',
    'Discover unique rings and pendants...',
    'Explore our collection of luxury watches...',
    'Get the latest fashion trends...'
];

let currentTermIndex = 0;
let currentTerm = '';
let currentTermLength = 0;

function typeText() {
    if (currentTermLength < searchTerms[currentTermIndex].length) {
        currentTerm += searchTerms[currentTermIndex][currentTermLength];
        marqueeText.textContent = currentTerm;
        currentTermLength++;
        setTimeout(typeText, 50);
    } else {
        setTimeout(function() {
            currentTermIndex = (currentTermIndex + 1) % searchTerms.length;
            currentTerm = '';
            currentTermLength = 0;
            typeText();
        }, 2000);
    }
}

typeText();