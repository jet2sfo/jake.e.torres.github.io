
function createMediaElement(file) {
  const url = URL.createObjectURL(file);
  if (file.type.startsWith('video')) {
    const video = document.createElement('video');
    video.src = url;
    video.controls = true;
    video.muted = true;
    video.playsInline = true;
    return video;
  }
  const img = document.createElement('img');
  img.src = url;
  img.alt = file.name;
  return img;
}

function attachUpload(inputId, previewId) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);
  if (!input || !preview) return;

  input.addEventListener('change', (event) => {
    const files = Array.from(event.target.files || []);
    preview.innerHTML = '';

    if (!files.length) {
      preview.textContent = 'Add media';
      preview.classList.add('placeholder');
      return;
    }

    preview.classList.remove('placeholder');
    files.forEach((file) => {
      const mediaEl = createMediaElement(file);
      mediaEl.classList.add('thumb');
      preview.appendChild(mediaEl);
    });
  });
}


['exp1', 'exp2', 'exp3'].forEach((id) => attachUpload(`${id}-upload`, `${id}-preview`));

document.querySelectorAll('[data-slideshow]').forEach((slideshow) => {
  const slides = Array.from(slideshow.querySelectorAll('[data-slide-item]'));
  const controls = slideshow.querySelectorAll('[data-slide]');
  if (!slides.length) return;

  let index = 0;
  const updateSlides = () => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });
  };

  controls.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.slide === 'next' ? 1 : -1;
      index = (index + direction + slides.length) % slides.length;
      updateSlides();
    });
  });

  updateSlides();
});
