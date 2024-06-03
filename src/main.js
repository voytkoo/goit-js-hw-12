import { fetchImages } from "./js/pixabay-api";
import { renderImage, showError, clearGallery, showLoad, hideLoad, refreshgalleries, showBtnLoad, hideBtnLoad } from "./js/render-functions";
// import { moduleLightbox } from "./js/render-functions";


const form = document.querySelector('.form-search');
const formInput = document.querySelector('.form-search input[name="query"]');
const btnLoad = document.querySelector('.btn');
// let galleries = null;

let query = '';
let page = 1;

form.addEventListener('submit', handleSubmit);
btnLoad.addEventListener('click', loadMore);

async function handleSubmit(event) {
  event.preventDefault();

  query = formInput.value.trim();

  if (!query) {
    showError('Please enter a search term');
    return;
  }
  
  clearGallery();
  hideBtnLoad();
  showLoad();
  page = 1;
  try {
  const data = await fetchImages(query, page);
  if (data.hits.length === 0) {
    showError('Sorry, there are no images matching your search query. Please try again!');
  } else {
    renderImage(data.hits);
    showBtnLoad();
    refreshgalleries();
  }
    
} catch (error) {
      showError('An error occured while fetching images');
      console.error(error);
    } finally {
          hideLoad();
      }
}
    async function loadMore() {
    page += 1;
    showLoad();
    try {
        const data = await fetchImages(query, page);
        renderImage(data.hits);
        if (page * 15 >= data.totalHits) {
            hideBtnLoad();
            showError("We're sorry, but you've reached the end of search results.");
        }
        refreshGalleries();
    } catch (error) {
        showError('An error occurred while fetching images');
        console.error(error);
    } finally {
        hideLoad();
    }
}