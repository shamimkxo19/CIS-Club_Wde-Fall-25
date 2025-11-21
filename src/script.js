// gallery.js

// 96 placeholder images
const galleryImages = Array.from({length: 96}, (_, i) => `https://picsum.photos/seed/${i+1}/400/300`);

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

function openModal(src) {
    modal.classList.remove('hidden');
    modalImg.src = src;
}

closeBtn.onclick = () => modal.classList.add('hidden');
window.onclick = (e) => { if(e.target === modal) modal.classList.add('hidden'); };