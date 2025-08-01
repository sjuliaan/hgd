// Flower types with embedded SVG data
const flowerTypes = [
    // Pink flower
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="20" fill="%23f48fb1"/><circle cx="50" cy="20" r="15" fill="%23f8bbd0"/><circle cx="80" cy="50" r="15" fill="%23f8bbd0"/><circle cx="50" cy="80" r="15" fill="%23f8bbd0"/><circle cx="20" cy="50" r="15" fill="%23f8bbd0"/><circle cx="50" cy="50" r="10" fill="%23ffeb3b"/></svg>',
    // Purple flower
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="30" r="15" fill="%23ce93d8"/><circle cx="70" cy="50" r="15" fill="%23ce93d8"/><circle cx="50" cy="70" r="15" fill="%23ce93d8"/><circle cx="30" cy="50" r="15" fill="%23ce93d8"/><circle cx="50" cy="50" r="10" fill="%23ffeb3b"/></svg>',
    // Red flower
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="25" r="15" fill="%23ef9a9a"/><circle cx="75" cy="50" r="15" fill="%23ef9a9a"/><circle cx="50" cy="75" r="15" fill="%23ef9a9a"/><circle cx="25" cy="50" r="15" fill="%23ef9a9a"/><circle cx="50" cy="50" r="10" fill="%23ffeb3b"/></svg>',
    // Blue flower
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="25" r="12" fill="%2390caf9"/><circle cx="75" cy="50" r="12" fill="%2390caf9"/><circle cx="50" cy="75" r="12" fill="%2390caf9"/><circle cx="25" cy="50" r="12" fill="%2390caf9"/><circle cx="60" cy="35" r="12" fill="%2390caf9"/><circle cx="65" cy="65" r="12" fill="%2390caf9"/><circle cx="35" cy="65" r="12" fill="%2390caf9"/><circle cx="35" cy="35" r="12" fill="%2390caf9"/><circle cx="50" cy="50" r="15" fill="%23ffeb3b"/></svg>',
    // Yellow daisy
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="20" r="10" fill="%23fff59d"/><circle cx="80" cy="50" r="10" fill="%23fff59d"/><circle cx="50" cy="80" r="10" fill="%23fff59d"/><circle cx="20" cy="50" r="10" fill="%23fff59d"/><circle cx="65" cy="35" r="10" fill="%23fff59d"/><circle cx="65" cy="65" r="10" fill="%23fff59d"/><circle cx="35" cy="65" r="10" fill="%23fff59d"/><circle cx="35" cy="35" r="10" fill="%23fff59d"/><circle cx="50" cy="50" r="15" fill="%23ffb74d"/></svg>',
    // New: Orange flower
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="25" r="15" fill="%23ffab91"/><circle cx="75" cy="50" r="15" fill="%23ffab91"/><circle cx="50" cy="75" r="15" fill="%23ffab91"/><circle cx="25" cy="50" r="15" fill="%23ffab91"/><circle cx="50" cy="50" r="10" fill="%23ffd54f"/></svg>',
    // New: Pink tulip
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50,20 C30,40 30,70 50,90 C70,70 70,40 50,20" fill="%23f06292"/><rect x="48" y="70" width="4" height="25" fill="%2381c784"/><circle cx="50" cy="50" r="10" fill="%23fff176"/></svg>'
];

const flowerField = document.getElementById('flower-field');
const envelope = document.getElementById('envelope');
const envelopeOverlay = document.getElementById('envelope-overlay');
const letterContainer = document.getElementById('letter-container');
const closeLetterBtn = document.getElementById('close-letter');
const instructions = document.getElementById('instructions');

// Create flowers
const flowerCount = 600; // Adjust based on screen size
const flowers = [];

function createFlowers() {
    // Create one flower at the envelope position
    const envelopeLeft = 60; // % from left
    const envelopeTop = 65;  // % from top
    const flower = document.createElement('div');
    flower.className = 'flower';
    const size = 50 + Math.random() * 60;
    const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    const delay = Math.random() * 5;
    const zIndex = 20; // Ensure it's on top
    flower.style.left = `${envelopeLeft}%`;
    flower.style.top = `${envelopeTop}%`;
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    flower.style.backgroundImage = `url('${flowerType}')`;
    flower.style.setProperty('--delay', delay);
    flower.style.zIndex = zIndex;
    flowerField.appendChild(flower);
    flowers.push({ element: flower, left: envelopeLeft, top: envelopeTop });

    // Create the rest of the flowers randomly
    for (let i = 1; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const size = 50 + Math.random() * 60;
        const flowerType = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        const delay = Math.random() * 5;
        const zIndex = 2 + Math.floor(Math.random() * 19);
        flower.style.left = `${left}%`;
        flower.style.top = `${top}%`;
        flower.style.width = `${size}px`;
        flower.style.height = `${size}px`;
        flower.style.backgroundImage = `url('${flowerType}')`;
        flower.style.setProperty('--delay', delay);
        flower.style.zIndex = zIndex;
        flowerField.appendChild(flower);
        flowers.push({ element: flower, left, top });
    }
}

// Place the envelope in a fixed position
function placeEnvelope() {
    // Fixed position - centered slightly to the bottom right
    const left = 60; // % from left
    const top = 65;  // % from top
    
    // Make the envelope smaller
    envelope.style.width = '50px';
    envelope.style.height = '35px';
    envelope.style.left = `${left}%`;
    envelope.style.top = `${top}%`;
    envelope.classList.remove('hidden');
}

// Handle mouse interactions
let isMouseDown = false;
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate movement
    const deltaX = mouseX - lastMouseX;
    const deltaY = mouseY - lastMouseY;
    
    // Update last position
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    
    // Move flowers near the mouse
    flowers.forEach(flower => {
        const flowerRect = flower.element.getBoundingClientRect();
        const flowerCenterX = flowerRect.left + flowerRect.width / 2;
        const flowerCenterY = flowerRect.top + flowerRect.height / 2;
        
        // Calculate distance from mouse to flower
        const distance = Math.sqrt(
            Math.pow(mouseX - flowerCenterX, 2) + 
            Math.pow(mouseY - flowerCenterY, 2)
        );
        
        // Only move flowers within a certain radius
        const influenceRadius = 150;
        if (distance < influenceRadius) {
            // Calculate influence based on distance (closer = more influence)
            const influence = 1 - (distance / influenceRadius);
            
            // Update flower position
            flower.left += (deltaX * influence * 0.1);
            flower.top += (deltaY * influence * 0.1);
            
            // Keep flowers within bounds
            flower.left = Math.max(0, Math.min(100, flower.left));
            flower.top = Math.max(0, Math.min(100, flower.top));
            
            // Apply new position
            flower.element.style.left = `${flower.left}%`;
            flower.element.style.top = `${flower.top}%`;
        }
    });
});

// Handle envelope overlay click
envelopeOverlay.addEventListener('click', () => {
    letterContainer.classList.remove('hidden');
    instructions.classList.add('hidden');
});


// Initialize
window.addEventListener('load', () => {
    createFlowers();
    placeEnvelope();
});

// Add touch support for mobile devices
document.addEventListener('touchstart', (e) => {
    isMouseDown = true;
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
});

document.addEventListener('touchend', () => {
    isMouseDown = false;
});

document.addEventListener('touchmove', (e) => {
    if (!isMouseDown) return;
    
    const mouseX = e.touches[0].clientX;
    const mouseY = e.touches[0].clientY;
    
    // Calculate movement
    const deltaX = mouseX - lastMouseX;
    const deltaY = mouseY - lastMouseY;
    
    // Update last position
    lastMouseX = mouseX;
    lastMouseY = mouseY;
    
    // Move flowers near the touch point (same logic as mouse move)
    flowers.forEach(flower => {
        const flowerRect = flower.element.getBoundingClientRect();
        const flowerCenterX = flowerRect.left + flowerRect.width / 2;
        const flowerCenterY = flowerRect.top + flowerRect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(mouseX - flowerCenterX, 2) + 
            Math.pow(mouseY - flowerCenterY, 2)
        );
        
        const influenceRadius = 150;
        if (distance < influenceRadius) {
            const influence = 1 - (distance / influenceRadius);
            
            flower.left += (deltaX * influence * 0.1);
            flower.top += (deltaY * influence * 0.1);
            
            flower.left = Math.max(0, Math.min(100, flower.left));
            flower.top = Math.max(0, Math.min(100, flower.top));
            
            flower.element.style.left = `${flower.left}%`;
            flower.element.style.top = `${flower.top}%`;
        }
    });
    
    // Prevent default scrolling behavior
    e.preventDefault();
}, { passive: false });
