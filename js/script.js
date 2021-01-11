'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.prevImgs img'),
  baseImage = document.querySelector('.bigImg img');
images.forEach(img => {
    img.addEventListener('click', () => {
        baseImage.src = img.getAttribute('src');
    });
});
});
