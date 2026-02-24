import{a as d,S as p,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="54777816-6525979b388f506499e8016c2";function h(i){return d.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".js-loader"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${s}" alt="${e}" loading="lazy" />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${n}</p>
          <p class="info-item"><b>Comments</b> ${f}</p>
          <p class="info-item"><b>Downloads</b> ${m}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function q(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const u=document.querySelector(".form");u.addEventListener("submit",P);function P(i){i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query.",position:"topRight"});return}S(),q(),h(r).then(s=>{const o=s.hits;if(!o||o.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map
