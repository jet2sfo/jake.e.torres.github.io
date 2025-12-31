const resumeUpload = document.getElementById('resume-upload');
const resumeViewer = document.getElementById('resume-viewer');

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

resumeUpload?.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  resumeViewer.innerHTML = '';

  const embed = document.createElement('embed');
  embed.src = url;
  embed.type = 'application/pdf';
  resumeViewer.appendChild(embed);
});

['exp1', 'exp2', 'exp3'].forEach((id) => attachUpload(`${id}-upload`, `${id}-preview`));
