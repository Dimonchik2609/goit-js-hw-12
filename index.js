import{a as b,S as v,i as a}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function p(t,r){const{data:{hits:i,totalHits:n}}=await b.get("https://pixabay.com/api/",{params:{key:"51039483-d1ef6922b01cd3fd853d7df89",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return{hits:i,totalHits:n}}const s={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},S=new v(".gallery a",{});async function m(t){const r=t.map(({webformatURL:i,largeImageURL:n,tags:e,likes:o,views:c,comments:L,downloads:w})=>`<li class='gallery-item'>
         <a href='${n}'>
         <img src='${i}' alt='${e}' width='360'
         />
         </a>
      <ul class='info-list'>
      
      <li class='info-item'>
         <span>Likes</span>
         <span>${o}</span>
        </li>

        <li class='info-item'>
          <span>views</span>
         <span>${c}</span>
         </li>

         <li class='info-item'>
          <span>comments</span>
         <span>${L}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${w}</span>
         </li>
       </ul>
      </li>`).join("");s.gallery.insertAdjacentHTML("beforeend",r),S.refresh()}function f(){s.loader.classList.add("hide")}function g(){s.loader.classList.remove("hide")}function B(){s.gallery.innerHTML=""}function h(){s.loadBtn.classList.remove("hide")}function d(){s.loadBtn.classList.add("hide")}f();let l=1,u=null;const y=15;s.form.addEventListener("submit",$);async function $(t){if(t.preventDefault(),u=t.currentTarget.elements.search.value.trim(),l=1,u===""){a.warning({message:"The input is empty",position:"topRight"}),s.form.reset();return}g(),B();try{const{hits:i,totalHits:n}=await p(u,l);if(i.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),d();return}m(i);const e=Math.ceil(n/y);a.success({message:`Images with ${u} are found`,position:"topRight",color:"green"}),l>=e?d():h()}catch(i){a.warning({message:`${i}`,position:"topRight"})}finally{s.form.reset(),f()}}s.loadBtn.addEventListener("click",q);async function q(){g(),l++;try{const{hits:t,totalHits:r}=await p(u,l),i=Math.ceil(r/y);m(t),l>=i?(a.warning({message:"We are sorry, but you have reached the end of search results.",position:"topRight",color:"red"}),d()):h();const n=document.querySelector(".gallery-item");n&&M(n)}catch(t){a.warning({message:`${t}`,position:"topRight"})}finally{f()}}function M(t){const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
