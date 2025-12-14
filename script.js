const projectForm = document.getElementById('project-form');
const projectsGrid = document.getElementById('projects-grid');
const resumeUpload = document.getElementById('resume-upload');
const resumeViewer = document.getElementById('resume-viewer');
const resumeDownload = document.getElementById('resume-download');
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

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

function pill(text) {
  const span = document.createElement('span');
  span.className = 'pill';
  span.textContent = text.trim();
  return span;
}

projectForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('project-title').value.trim();
  const summary = document.getElementById('project-summary').value.trim();
  const tags = document.getElementById('project-tags').value.split(',').filter(Boolean);
  const imageFile = document.getElementById('project-image').files?.[0];
  const videoFile = document.getElementById('project-video').files?.[0];

  const article = document.createElement('article');
  article.className = 'project-card';

  const media = document.createElement('div');
  media.className = 'media';

  if (imageFile) {
    media.appendChild(createMediaElement(imageFile));
  } else if (videoFile) {
    media.appendChild(createMediaElement(videoFile));
  } else {
    media.classList.add('placeholder');
    media.textContent = 'Upload an image or video to showcase';
  }

  const content = document.createElement('div');
  content.className = 'project-content';

  const heading = document.createElement('h3');
  heading.textContent = title || 'Untitled project';
  content.appendChild(heading);

  const desc = document.createElement('p');
  desc.textContent = summary || 'Project summary coming soon.';
  content.appendChild(desc);

  if (tags.length) {
    const tagRow = document.createElement('div');
    tagRow.className = 'tag-row';
    tags.forEach((tag) => tagRow.appendChild(pill(tag)));
    content.appendChild(tagRow);
  }

  article.appendChild(media);
  article.appendChild(content);
  projectsGrid.prepend(article);

  projectForm.reset();
});

resumeUpload?.addEventListener('change', (event) => {
  const file = event.target.files?.[0];
  if (!file) return;

  const url = URL.createObjectURL(file);
  resumeViewer.innerHTML = '';

  const embed = document.createElement('embed');
  embed.src = url;
  embed.type = 'application/pdf';
  resumeViewer.appendChild(embed);

  resumeDownload.href = url;
  resumeDownload.setAttribute('aria-disabled', 'false');
  resumeDownload.textContent = 'Download uploaded copy';
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  contactStatus.textContent = 'Thanks! Your message has been noted.';
  contactStatus.classList.remove('muted');
  contactStatus.style.color = 'var(--accent-strong)';
  contactForm.reset();
});
