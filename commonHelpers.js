import{a as f,S as p}from"./assets/vendor-58e78301.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="42806027-cb009af69a31f8552609fdd7f",y=15;async function g(r){const n=`https://pixabay.com/api/?key=${h}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${y}`;try{return(await f.get(n)).data.hits}catch(a){return console.error("Error fetching images:",a),[]}}function L(r){const n=document.querySelector(".gallery"),a=new p(".gallery a",{});n.innerHTML="",r.forEach(o=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("a");t.href=o.largeImageURL,t.setAttribute("data-lightbox","gallery");const s=document.createElement("img");s.src=o.webformatURL,s.alt=o.tags;const i=document.createElement("span");i.textContent=`Likes: ${o.likes}`;const d=document.createElement("span");d.textContent=`Views: ${o.views}`;const u=document.createElement("span");u.textContent=`Comments: ${o.comments}`;const m=document.createElement("span");m.textContent=`Downloads: ${o.downloads}`,t.appendChild(s),e.appendChild(t),e.appendChild(i),e.appendChild(d),e.appendChild(u),e.appendChild(m),n.appendChild(e)}),a.refresh()}function E(){const r=document.querySelector(".loader");r.textContent="Loading...",r.classList.remove("hidden")}function w(){document.querySelector(".loader").classList.add("hidden")}let l="",c=!1;window.addEventListener("DOMContentLoaded",r=>{document.querySelector("form").addEventListener("submit",C)});async function C(r){if(r.preventDefault(),!c){if(c=!0,l=r.target.elements.query.value.trim(),!l){console.error("Please enter a search query."),c=!1;return}E(),b();try{const n=await g(l);n.length===0?console.warn("Sorry, there are no images matching your search query. Please try again."):L(n)}catch(n){console.error("Error processing search:",n)}finally{w(),c=!1}}}function b(){const r=document.querySelector(".gallery");r.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
