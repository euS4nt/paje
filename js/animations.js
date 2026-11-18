window.openEnvelope = function(){
  const intro=document.getElementById("intro"), exp=document.getElementById("experience");
  if(intro.classList.contains("opening"))return;
  intro.classList.add("opening");
  setTimeout(()=>{intro.classList.add("is-gone");exp.classList.add("is-open");exp.setAttribute("aria-hidden","false");window.openWeddingBook();},1450);
};