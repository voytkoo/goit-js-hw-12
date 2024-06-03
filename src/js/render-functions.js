// functions for displaying interface elements
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoad = document.querySelector('.btn')

let galleries = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250
    });

export function renderImage(images) {
  const markUp = images.map(image =>
    `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
<ul class='info'>
      <li class="info-image><strong class="info-comment">Likes</strong> ${image.likes}</li>
      <li class="info-image><strong class="info-comment">Views</strong> ${image.views}</li>
      <li class="info-image><strong class="info-comment">Comments</strong> ${image.comments}</li>
      <li class="info-image><strong class="info-comment">Downloads</strong> ${image.downloads}</li>
      </ul>
</li>`
  ).join("");
  gallery.insertAdjacentHTML('beforeend', markUp);
}


export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoad() {
  loader.style.display = 'block';
  
    // loader.classList.remove('hidden');
}
 
export function hideLoad() {
  loader.style.display = 'none';
  
    // loader.classList.add('hidden');
}
export function showBtnLoad() {
btnLoad.style.display = 'block';
}

export function hideBtnLoad() {
btnLoad.style.display = 'none';
}


export function refreshgalleries() {
    galleries.refresh();

}