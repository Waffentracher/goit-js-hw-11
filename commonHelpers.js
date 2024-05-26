import{i as n,S as m}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u="https://pixabay.com/api/",h="43997901-59e2ef8a5969ad3162d77619c",f=r=>{const s=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${s}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})},p=r=>r.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:l,downloads:d})=>`
            <li class="item-list">
                <a href="${i}" class="item-list-link">
                    <img class="item-list-img" src="${s}" alt="${o}">
                </a>
                <div class='markup-info'>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Likes</h3>
                        <p class="item-list-text">${e}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Views</h3>
                        <p class="item-list-text">${t}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Comments</h3>
                        <p class="item-list-text">${l}</p>
                    </div>
                    <div class="item-list-info-text">
                        <h3 class="item-list-title">Downloads</h3>
                        <p class="item-list-text">${d}</p>
                    </div>
                </div>
            </li>`).join(""),a=document.querySelector(".gallery"),g=document.querySelector(".search-field"),y=document.querySelector(".form"),c=document.querySelector(".loader");function L(r){r.preventDefault();const s=g.value.trim();if(s===""){a.innerHTML="",r.target.reset(),n.error({title:"Error",message:"Illegal operation",position:"topRight",color:"#EF4040"});return}a.innerHTML="",c.classList.remove("is-hidden"),f(s).then(i=>{if(c.classList.add("is-hidden"),i.totalHits===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040"});return}a.innerHTML=p(i.hits),new m(".gallery a").refresh()}).catch(i=>console.log(i)).finally(()=>{r.target.reset(),c.classList.add("is-hidden")})}y.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
