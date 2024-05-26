import{S as l}from"./assets/vendor-870f0eb5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c="42806027-cb009af69a31f8552609fdd7f";async function d(n){const o=`https://pixabay.com/api/?key=${c}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const s=await(await fetch(o)).json();return s.hits.length===0?[]:s.hits.map(e=>({webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}))}catch(t){throw console.error("Error fetching images:",t),t}}function f(n){const o=document.getElementById("gallery"),t=new l(".gallery a"),s=n.map(e=>`
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
  `).join("");o.innerHTML=s,t.refresh()}function m(){iziToast.info({title:"Info",message:"No images found for your query. Please try again!"})}const u=document.getElementById("search-form"),p=document.getElementById("search-input");document.getElementById("gallery");const i=document.getElementById("loader");new l(".gallery a");u.addEventListener("submit",async n=>{n.preventDefault();const o=p.value.trim();if(!o){iziToast.error({title:"Помилка",message:"Будь ласка, введіть пошуковий запит."});return}i.style.display="block";try{const t=await d(o);t.length===0?m():f(t)}catch(t){console.error("Помилка отримання зображень:",t),iziToast.error({title:"Помилка",message:"Не вдалося отримати зображення. Будь ласка, спробуйте пізніше."})}finally{i.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
