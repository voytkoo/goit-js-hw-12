import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoad = document.querySelector('.btn');

let galleries = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function renderImage(images) {
    const markup = images.map(image =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
            </a>
            <ul class='info'>
                <li class="info-image"><strong class="info-comment">Likes</strong> ${image.likes}</li>
                <li class="info-image"><strong class="info-comment">Views</strong> ${image.views}</li>
                <li class="info-image"><strong class="info-comment">Comments</strong> ${image.comments}</li>
                <li class="info-image"><strong class="info-comment">Downloads</strong> ${image.downloads}</li>
            </ul>
        </li>`
    ).join("");
    gallery.insertAdjacentHTML('beforeend', markup); // додавання нових зображень
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
}

export function hideLoad() {
    loader.style.display = 'none';
}

export function showBtnLoad() {
    btnLoad.style.display = 'block';
}

export function hideBtnLoad() {
    btnLoad.style.display = 'none';
}

export function refreshGalleries() {
    galleries.refresh();
}

export function smoothScroll() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length > 0) {
        const cardHeight = galleryItems[0].getBoundingClientRect().height;
        window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });

    }
}