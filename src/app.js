


// Gallery Pages JavaScript Code


// 96 placeholder images
const galleryImages = Array.from({length: 96}, (_, i) => `../asset/gallery_image/${i+1}.jpg`);

function loadGalleryPage(pageNumber) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = '';

    const startIndex = (pageNumber - 1) * 32;
    const imagesToShow = galleryImages.slice(startIndex, startIndex + 32);

    imagesToShow.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform duration-300';
        img.onclick = () => openModal(src);
        galleryContainer.appendChild(img);
    });
}

// Modal logic
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeModal');

// Open Modal
function openModal(src) {
    modal.classList.remove('hidden');
    modalImg.src = src;
    modalImg.style.transform = 'scale(1)';
    modalImg.style.cursor = 'zoom-in';
}

// Close Modal
closeBtn.onclick = () => modal.classList.add('hidden');

window.onclick = (e) => {
    if (e.target === modal) modal.classList.add('hidden');
};

// Zoom In / Out
modalImg.addEventListener('click', () => {

    // Detect small devices
    const isSmallDevice = window.innerWidth <= 640;  // <=640px = mobile
    const zoomLevel = isSmallDevice ? 1.2 : 2;       // 1.3x for small screens, 2x for others

    if (modalImg.style.transform === 'scale(1)') {
        modalImg.style.transform = `scale(${zoomLevel})`;
        modalImg.style.cursor = 'zoom-out';
    } else {
        modalImg.style.transform = 'scale(1)';
        modalImg.style.cursor = 'zoom-in';
    }
});


//Previous and nex buttons of gallery



// animated nav text

// Animated Typing
const el = document.getElementById('animated');
const words = ["Shamim", "Ahmed"]; 
let wordIndex = 0;                 
let index = 0;                     
let typing = true;                 
const typeSpeed = 250;
const eraseSpeed = 150;
const pause = 700;
const emptyPause = 500; // 👈 pause on empty before new word

function tick() {
  const currentWord = words[wordIndex];

  if (typing) {
    index++;
    if (index > currentWord.length) {
      typing = false;              
      setTimeout(tick, pause);     
      return;
    }
  } else {
    index--;
    if (index < 0) {               //  now allow it to go fully blank
      index = 0;
      el.textContent = "";         // show empty string
      setTimeout(() => {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length; 
        tick();
      }, emptyPause);
      return;
    }
  }

  el.textContent = currentWord.slice(0, index);
  setTimeout(tick, typing ? typeSpeed : eraseSpeed);
}

setTimeout(tick, pause);

