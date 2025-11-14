(() => {
  const viewerImg = document.getElementById('viewer-img');
  const currentPhotoSpan = document.getElementById('current-photo');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  const totalPhotos = 15;
  let currentPhoto = 1;

  function updatePhoto(photoNum) {
    currentPhoto = photoNum;
    viewerImg.src = `images/${photoNum}.jpg`;
    viewerImg.alt = `Photo ${photoNum}`;
    currentPhotoSpan.textContent = photoNum;
  }

  function nextPhoto() {
    if (currentPhoto < totalPhotos) {
      updatePhoto(currentPhoto + 1);
    }
  }

  function prevPhoto() {
    if (currentPhoto > 1) {
      updatePhoto(currentPhoto - 1);
    }
  }

  prevBtn.addEventListener('click', prevPhoto);
  nextBtn.addEventListener('click', nextPhoto);

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  });
})();
