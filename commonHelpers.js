import{a as f,S as p}from"./assets/vendor-58e78301.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="42806027-cb009af69a31f8552609fdd7f",y=15;async function g(r,n){const o=`https://pixabay.com/api/?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=${y}`;try{return(await f.get(o)).data.hits}catch(s){return console.error("Error fetching images:",s),[]}}function L(r,n=!1){const o=document.querySelector(".gallery"),s=new p(".gallery a",{});n||(o.innerHTML=""),r.forEach(e=>{const t=document.createElement("div");t.classList.add("card");const a=document.createElement("a");a.href=e.largeImageURL,a.setAttribute("data-lightbox","gallery");const c=document.createElement("img");c.src=e.webformatURL,c.alt=e.tags;const l=document.createElement("span");l.textContent=`Likes: ${e.likes}`;const d=document.createElement("span");d.textContent=`Views: ${e.views}`;const u=document.createElement("span");u.textContent=`Comments: ${e.comments}`;const m=document.createElement("span");m.textContent=`Downloads: ${e.downloads}`,a.appendChild(c),t.appendChild(a),t.appendChild(l),t.appendChild(d),t.appendChild(u),t.appendChild(m),o.appendChild(t)}),s.refresh()}function i(r,n="error"){iziToast[n]({title:"",message:r,position:"topRight"})}function E(){const r=document.querySelector(".loader");r.textContent="Loading...",r.classList.remove("hidden")}function w(){document.querySelector(".loader").classList.add("hidden")}window.addEventListener("DOMContentLoaded",r=>{document.querySelector("form").addEventListener("submit",C)});async function C(r){r.preventDefault();const n=r.target.elements.query.value.trim();if(!n){i("Please enter a search query.","warning");return}E(),b();try{const o=await g(n);if(o.length===0){i("Sorry, there are no images matching your search query. Please try again.");return}L(o)}catch{i("An ","error")}finally{w()}}function b(){const r=document.querySelector(".gallery");r.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
