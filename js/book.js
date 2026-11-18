(() => {
  const cfg = window.WEDDING_CONFIG;
  const root = document.getElementById("bookPages");
  const isMobile = () => window.matchMedia("(max-width: 760px)").matches;
  let page = 0;
  const total = 12;
  const photo = (index, cls="") => {
    const p = cfg.photos[index % cfg.photos.length];
    return `<button class="photo-frame ${cls}" data-photo="${index % cfg.photos.length}" aria-label="Ampliar fotografia: ${p.caption}"><img src="${p.src}" alt="${p.alt}" loading="lazy"><span>${p.caption}</span></button>`;
  };
  const pages = [
    () => `<article class="page cover-page"><div class="cover-ornament">✳</div><p class="eyebrow">O começo de uma vida inteira</p>${photo(0,"cover-photo")}<p class="script cover-names">${cfg.couple.names}</p><p class="cover-date">${cfg.couple.dateLong}</p><div class="cover-rule"></div><span class="cover-small">NOSSO CASAMENTO · CONVITE</span></article>`,
    () => `<article class="page letter-page"><span class="page-number">01</span><p class="eyebrow">Com carinho, para você</p><h2>Uma carta <em>para você</em></h2><div class="letter-copy"><p>Existem momentos que se tornam eternos, e pessoas que fazem parte de cada capítulo da nossa história.</p><p>Agora chegou a hora de escrevermos juntos um dos capítulos mais especiais de nossas vidas.</p><p>Será uma alegria ter você ao nosso lado nesse dia tão importante.</p></div><p class="script signature">${cfg.couple.firstName1} & ${cfg.couple.firstName2}</p><span class="corner-flower">✿</span></article>`,
    () => `<article class="page story-page"><span class="page-number">02</span><p class="eyebrow">Capítulos da nossa história</p><h2>Foi assim que <em>começou</em></h2><div class="timeline">${cfg.story.map((s,i)=>`<div class="timeline-item"><span class="timeline-date">${s.date}</span><div><h3>${s.title}</h3><p>${s.text}</p></div></div>`).join("")}</div><div class="story-stamp">A NOSSA<br>HISTÓRIA</div></article>`,
    () => `<article class="page gallery-page"><span class="page-number">03</span><p class="eyebrow">Fragmentos de felicidade</p><h2>Nossos <em>momentos</em></h2><div class="gallery-grid">${photo(1,"gallery-tall")}${photo(2,"")}${photo(3,"")}</div><p class="small-note">Cada lembrança é uma parte bonita de quem somos.</p></article>`,
    () => `<article class="page date-page"><span class="page-number">04</span><p class="eyebrow">Reserve este dia</p><div class="date-flower">✳</div><h2>O grande <em>dia</em></h2><p class="date-weekday">${cfg.couple.weekday}</p><p class="date-number">${cfg.couple.dateLong}</p><div class="countdown" id="countdown"><div><strong data-days>--</strong><span>dias</span></div><i>:</i><div><strong data-hours>--</strong><span>horas</span></div><i>:</i><div><strong data-minutes>--</strong><span>min</span></div><i>:</i><div><strong data-seconds>--</strong><span>seg</span></div></div><p class="date-time">Cerimônia às <strong>${cfg.couple.ceremonyTime}</strong></p></article>`,
    () => `<article class="page venue-page"><span class="page-number">05</span>${photo(2,"venue-photo")}<div class="venue-copy"><p class="eyebrow">Onde diremos sim</p><h2>A <em>cerimônia</em></h2><h3>${cfg.ceremony.venue}</h3><p>${cfg.ceremony.description}</p><p class="venue-address">${cfg.ceremony.address}<br>${cfg.ceremony.time}</p><a class="outline-link" href="${cfg.ceremony.mapUrl}" target="_blank" rel="noopener">Como chegar ↗</a></div></article>`,
    () => `<article class="page celebration-page"><span class="page-number">06</span><p class="eyebrow">E a festa continua...</p><div class="celebration-art">✧<span>♡</span>✧</div><h2>Vamos <em>celebrar!</em></h2><p class="celebration-venue">${cfg.reception.venue}</p><p>${cfg.reception.description}</p><div class="celebration-time">${cfg.reception.time}</div>${photo(3,"celebration-photo")}</article>`,
    () => `<article class="page dress-page"><span class="page-number">07</span><p class="eyebrow">Uma ocasião especial</p><h2>Como <em>vestir-se</em></h2><div class="dress-illustration"><div class="dress-swatch"></div><div class="dress-swatch"></div><div class="dress-swatch"></div><span>elegância<br>sem esforço</span></div><h3>${cfg.dressCode.title}</h3><p>${cfg.dressCode.description}</p><p class="dress-note">${cfg.dressCode.note}</p></article>`,
    () => `<article class="page gifts-page"><span class="page-number">08</span><p class="eyebrow">Seu carinho já é um presente</p><h2>Um mimo para <em>nossa história</em></h2><div class="gift-list">${cfg.gifts.map(g=>`<div class="gift-card"><span class="gift-icon">${g.icon}</span><div><h3>${g.name}</h3><p>${g.description}</p><strong>${g.value || ""}</strong></div><a href="${g.url}" target="_blank" rel="noopener" aria-label="Presentear: ${g.name}">↗</a></div>`).join("")}</div><p class="small-note">Escolha com o coração. Cada gesto fará parte das nossas memórias.</p></article>`,
    () => `<article class="page rsvp-page"><span class="page-number">09</span><p class="eyebrow">Sua presença é nosso maior presente</p><h2>Você vem <em>celebrar?</em></h2><p class="rsvp-deadline">Confirme até ${cfg.rsvp.deadline.replace("Até ","")}</p><form id="rsvpForm" class="rsvp-form"><label>Seu nome completo<input name="name" required placeholder="Como podemos te chamar?"></label><label>WhatsApp<input name="phone" inputmode="tel" placeholder="(00) 00000-0000"></label><label>Quantas pessoas?<select name="guests"><option value="1">Somente eu</option><option value="2">2 pessoas</option><option value="3">3 pessoas</option><option value="4">4 pessoas</option><option value="5">5 pessoas</option></select></label><fieldset><legend>Você poderá estar com a gente?</legend><label class="radio-label"><input type="radio" name="attendance" value="Sim, estarei presente" checked> Sim, estarei presente</label><label class="radio-label"><input type="radio" name="attendance" value="Não poderei comparecer"> Não poderei comparecer</label></fieldset><label>Uma mensagem (opcional)<textarea name="message" rows="2" placeholder="Deixe um carinho para os noivos..."></textarea></label><button class="solid-button" type="submit">Enviar confirmação ↗</button></form></article>`,
    () => `<article class="page people-page"><span class="page-number">10</span><p class="eyebrow">Com amor e gratidão</p><h2>Pessoas <em>especiais</em></h2><div class="people-photo">${photo(1)}</div><div class="people-list">${cfg.people.map(p=>`<div><span>✧</span><h3>${p.name}</h3><p>${p.text}</p></div>`).join("")}</div></article>`,
    () => `<article class="page closing-page">${photo(0,"closing-photo")}<div class="closing-overlay"><p class="eyebrow">Até lá, com amor</p><h2>Mal podemos <em>esperar.</em></h2><p>${cfg.closing}</p><p class="script closing-names">${cfg.couple.names}</p><span>${cfg.couple.dateLong}</span><div class="closing-flower">✿</div></div></article>`
  ];

  function render() {
    const mobile = isMobile();
    const visible = mobile ? [page] : [page, Math.min(page+1,total-1)];
    root.innerHTML = visible.map((n,i)=>`<div class="page-wrap ${i===0?"left-page":"right-page"}" data-index="${n}">${pages[n]()}</div>`).join("");
    document.getElementById("pageCounter").textContent = `${String(page+1).padStart(2,"0")} / ${total}`;
    document.getElementById("progressFill").style.width = `${((page+1)/total)*100}%`;
    document.getElementById("prevPage").disabled = page===0;
    document.getElementById("prevText").disabled = page===0;
    document.getElementById("nextPage").disabled = page >= total-(mobile?1:2);
    document.getElementById("nextText").disabled = page >= total-(mobile?1:2);
    document.getElementById("nextPage").style.visibility = page >= total-(mobile?1:2) ? "hidden" : "visible";
    document.getElementById("prevPage").style.visibility = page===0 ? "hidden" : "visible";
    if(window.initCountdown) window.initCountdown();
    if(window.initGallery) window.initGallery();
    if(window.initRSVP) window.initRSVP();
  }
  function next(){ if(page < total-(isMobile()?1:2)){ page += isMobile()?1:2; render(); } }
  function prev(){ if(page>0){ page=Math.max(0,page-(isMobile()?1:2)); render(); } }
  document.getElementById("nextPage").addEventListener("click",next);
  document.getElementById("nextText").addEventListener("click",next);
  document.getElementById("prevPage").addEventListener("click",prev);
  document.getElementById("prevText").addEventListener("click",prev);
  document.addEventListener("keydown",e=>{ if(!document.getElementById("experience").classList.contains("is-open"))return; if(e.key==="ArrowRight")next(); if(e.key==="ArrowLeft")prev(); if(e.key==="Escape")document.getElementById("lightbox").classList.remove("is-open"); });
  let startX=0;
  root.addEventListener("touchstart",e=>{startX=e.changedTouches[0].screenX;},{passive:true});
  root.addEventListener("touchend",e=>{const dx=e.changedTouches[0].screenX-startX;if(Math.abs(dx)>55){dx<0?next():prev();}},{passive:true});
  window.addEventListener("resize",()=>render());
  window.openWeddingBook=()=>{page=0;render();};
})();