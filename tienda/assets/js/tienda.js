(async function(){const l="543412280272",e=t=>String(t??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]);let c=[];try{c=(await(await fetch("/api/productos.php")).json()).productos||[]}catch{document.getElementById("shopGrid").innerHTML='<p style="color:var(--muted)">No se pudo cargar el cat\xE1logo. Prob\xE1 recargar la p\xE1gina.</p>';return}const s=Object.fromEntries(c.map(t=>[t.sku,t])),n=document.getElementById("shopGrid");n.innerHTML=c.map(t=>`
    <div class="product-card">
      <div class="product-img">
        <img src="${t.imagenes[0]}" alt="${e(t.nombre)}" loading="lazy">
        ${t.imagenes.length>1?`
          <div class="product-img-dots">
            ${t.imagenes.map((a,o)=>`<button class="img-dot${o===0?" active":""}" data-img-dot="${o}" aria-label="Foto ${o+1}"></button>`).join("")}
          </div>
        `:""}
      </div>
      <div class="product-body">
        <h3>${e(t.nombre)}</h3>
        <p>${e(t.descripcion)}</p>
        <a class="btn-cart-3d" data-contact="${t.sku}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.738-.945z"/></svg>
          <span class="button-text">Consultar por WhatsApp</span>
        </a>
      </div>
    </div>
  `).join(""),n.addEventListener("click",t=>{const a=t.target.closest("[data-img-dot]");if(a){const r=a.closest(".product-card"),g=r.querySelector("[data-contact]").dataset.contact,i=Number(a.dataset.imgDot);r.querySelector(".product-img img").src=s[g].imagenes[i],r.querySelectorAll(".img-dot").forEach((m,p)=>m.classList.toggle("active",p===i));return}const o=t.target.closest("[data-contact]");if(!o)return;const d=s[o.dataset.contact];if(!d)return;const u=encodeURIComponent(`Hola, quer\xEDa consultar por: ${d.nombre}`);o.href=`https://wa.me/${l}?text=${u}`})})();
