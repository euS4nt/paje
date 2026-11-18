window.initCountdown = function(){
  const target = new Date(window.WEDDING_CONFIG.couple.dateISO).getTime();
  const root = document.getElementById("countdown");
  if(!root) return;
  const update=()=>{
    const diff=target-Date.now();
    if(diff<=0){root.innerHTML='<p class="countdown-arrived">Hoje é o nosso grande dia! ♡</p>';clearInterval(timer);return;}
    const vals={days:Math.floor(diff/86400000),hours:Math.floor(diff%86400000/3600000),minutes:Math.floor(diff%3600000/60000),seconds:Math.floor(diff%60000/1000)};
    Object.entries(vals).forEach(([k,v])=>{const el=root.querySelector(`[data-${k}]`);if(el)el.textContent=String(v).padStart(2,"0");});
  };
  update(); const timer=setInterval(update,1000);
};