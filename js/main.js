(() => {
  const c=window.WEDDING_CONFIG;
  document.querySelectorAll("[data-bind]").forEach(el=>{
    const key=el.dataset.bind;
    const values={initials:c.couple.initials,monogram:c.couple.monogram,coupleNames:c.couple.names,dateShort:c.couple.dateShort};
    if(values[key]!==undefined)el.textContent=values[key];
  });
  const env=document.getElementById("envelope");
  env.addEventListener("click",window.openEnvelope);
  env.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();window.openEnvelope();}});
  document.querySelector(".intro-title").textContent=c.intro.title;
  document.querySelector(".intro-eyebrow").textContent=c.intro.eyebrow;
  document.querySelector(".intro-hint").lastChild.textContent=" "+c.intro.hint;
  window.showToast=(message)=>{const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),4200);};
  const sound=document.getElementById("soundToggle");
  let audio=null,playing=false;
  sound.addEventListener("click",async()=>{
    if(!c.musicUrl){window.showToast("Adicione um arquivo de áudio em WEDDING_CONFIG.musicUrl para habilitar a música.");return;}
    if(!audio){audio=new Audio(c.musicUrl);audio.loop=true;}
    try{if(playing){audio.pause();playing=false;}else{await audio.play();playing=true;}sound.setAttribute("aria-pressed",String(playing));sound.classList.toggle("active",playing);}
    catch{window.showToast("Não foi possível iniciar o áudio. Tente novamente.");}
  });
})();