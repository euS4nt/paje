window.initGallery = function(){
  const box=document.getElementById("lightbox"), img=document.getElementById("lightboxImage"), cap=document.getElementById("lightboxCaption");
  document.querySelectorAll("[data-photo]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const p=window.WEDDING_CONFIG.photos[Number(btn.dataset.photo)];
      img.src=p.src;img.alt=p.alt;cap.textContent=p.caption;box.classList.add("is-open");box.setAttribute("aria-hidden","false");
    });
  });
};
document.getElementById("lightboxClose").addEventListener("click",()=>{const b=document.getElementById("lightbox");b.classList.remove("is-open");b.setAttribute("aria-hidden","true");});
document.getElementById("lightbox").addEventListener("click",e=>{if(e.target.id==="lightbox")e.currentTarget.classList.remove("is-open");});