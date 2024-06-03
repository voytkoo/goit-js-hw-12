import{a as b,S as w,i as S}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const q="https://pixabay.com/api/",E="44067524-7b37ef940db212c179aad5861";async function f(r,t=1,o=15){try{return(await b.get(q,{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}})).data}catch(s){throw console.error("Error fetching images:",s),new Error("Failed to fetch images")}}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),m=document.querySelector(".btn");let v=new w(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const t=r.map(o=>`<li class="gallery-item">
  <a class="gallery-link" href="${o.largeImageURL}">
    <img
      class="gallery-image"
      src="${o.webformatURL}"
      alt="${o.tags}"
    />
  </a>
<ul class='info'>
      <li class="info-image><strong class="info-comment">Likes</strong> ${o.likes}</li>
      <li class="info-image><strong class="info-comment">Views</strong> ${o.views}</li>
      <li class="info-image><strong class="info-comment">Comments</strong> ${o.comments}</li>
      <li class="info-image><strong class="info-comment">Downloads</strong> ${o.downloads}</li>
      </ul>
</li>`).join("");u.insertAdjacentHTML("beforeend",t)}function a(r){S.error({title:"Error",message:r})}function $(){u.innerHTML=""}function g(){d.style.display="block"}function h(){d.style.display="none"}function P(){m.style.display="block"}function p(){m.style.display="none"}function L(){v.refresh()}const A=document.querySelector(".form-search"),I=document.querySelector('.form-search input[name="query"]'),O=document.querySelector(".btn");let c="",i=1;A.addEventListener("submit",D);O.addEventListener("click",M);async function D(r){if(r.preventDefault(),c=I.value.trim(),!c){a("Please enter a search term");return}$(),p(),g(),i=1;try{const t=await f(c,i);t.hits.length===0?a("Sorry, there are no images matching your search query. Please try again!"):(y(t.hits),P(),L())}catch(t){a("An error occured while fetching images"),console.error(t)}finally{h()}}async function M(){i+=1,g();try{const r=await f(c,i);y(r.hits),i*15>=r.totalHits&&(p(),a("We're sorry, but you've reached the end of search results.")),L()}catch(r){a("An error occurred while fetching images"),console.error(r)}finally{h()}}
//# sourceMappingURL=commonHelpers.js.map
