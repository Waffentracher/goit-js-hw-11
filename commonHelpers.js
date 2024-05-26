import{S as i}from"./assets/vendor-870f0eb5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="42806027-cb009af69a31f8552609fdd7f";async function c(n){const o=`https://pixabay.com/api/?key=${l}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const s=await(await fetch(o)).json();return s.hits.length===0?[]:s.hits.map(e=>({webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}))}catch(r){throw console.error("Error fetching images:",r),r}}function d(n){const o=document.getElementById("gallery"),r=new i(".gallery a"),s=n.map(e=>`
    <div class="card">
      <a href="${e.largeImageURL}" title="${e.tags}" data-lightbox="gallery-item">
        <img src="${e.webformatURL}" alt="${e.tags}">
      </a>
      <div class="card-content">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </div>
  `).join("");o.innerHTML=s,r.refresh()}function f(){iziToast.info({title:"Info",message:"No images found for your query. Please try again!"})}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("search-form"),o=document.getElementById("search-input");document.getElementById("gallery");const r=document.getElementById("loader");new i(".gallery a"),n.addEventListener("submit",async s=>{s.preventDefault();const e=o.value.trim();if(!e){iziToast.error({title:"Помилка",message:"Будь ласка, введіть пошуковий запит."});return}r.style.display="block";try{const t=await c(e);t.length===0?f():d(t)}catch(t){console.error("Помилка отримання зображень:",t),iziToast.error({title:"Помилка",message:"Не вдалося отримати зображення. Будь ласка, спробуйте пізніше."})}finally{r.style.display="none"}})});
//# sourceMappingURL=commonHelpers.js.map
