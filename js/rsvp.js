window.initRSVP = function(){
  const form=document.getElementById("rsvpForm");if(!form||form.dataset.ready)return;form.dataset.ready="true";
  form.addEventListener("submit",e=>{
    e.preventDefault();if(!form.reportValidity())return;
    const data=new FormData(form), c=window.WEDDING_CONFIG;
    const msg=[
      `Olá! Aqui é ${data.get("name")}.`,
      `Confirmação para o casamento de ${c.couple.names}: ${data.get("attendance")}.`,
      `Quantidade de pessoas: ${data.get("guests")}.`,
      data.get("phone")?`WhatsApp: ${data.get("phone")}.`:"",
      data.get("message")?`Mensagem: ${data.get("message")}`:""
    ].filter(Boolean).join("\n");
    const phone=c.rsvp.whatsapp.replace(/\D/g,"");
    if(!phone||phone==="5511999999999"){window.showToast("Personalize o número de WhatsApp no arquivo js/config.js antes de receber confirmações.");return;}
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
    window.showToast("Sua mensagem de confirmação está pronta no WhatsApp.");
  });
};