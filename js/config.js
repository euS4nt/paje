/* Personalize este arquivo para criar um novo convite. */
window.WEDDING_CONFIG = {
  couple: {
    firstName1: "Ana", firstName2: "Miguel",
    initials: "A & M", monogram: "A",
    names: "Ana & Miguel",
    dateISO: "2027-10-24T16:00:00",
    dateLong: "24 de outubro de 2027",
    dateShort: "24 · 10 · 2027",
    weekday: "Domingo",
    ceremonyTime: "16h00"
  },
  intro: { eyebrow: "Um convite especial", title: "Uma história, um sim, infinitas memórias.", hint: "Toque no envelope para abrir" },
  story: [
    { date: "2019", title: "Onde tudo começou", text: "Um encontro despretensioso, um sorriso inesperado e a sensação bonita de que algo especial estava começando." },
    { date: "2020", title: "Nosso primeiro capítulo", text: "Entre conversas longas e planos compartilhados, descobrimos que a vida fica mais leve quando caminhamos lado a lado." },
    { date: "2025", title: "A pergunta mais especial", text: "Em um dia que ficará para sempre na memória, escolhemos continuar escrevendo essa história juntos." }
  ],
  photos: [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85", alt: "Casal celebrando o amor", caption: "O nosso lugar favorito é lado a lado." },
    { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85", alt: "Noivos em um momento especial", caption: "Pequenos instantes, grandes memórias." },
    { src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85", alt: "Detalhes de casamento", caption: "Tudo fica mais bonito quando é compartilhado." },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85", alt: "Celebração de casamento", caption: "Um dia para guardar no coração." }
  ],
  ceremony: {
    venue: "Casa das Oliveiras", address: "Estrada das Flores, 120 — São Paulo, SP",
    time: "16h00", description: "Será uma cerimônia ao ar livre, cercada de natureza e das pessoas que amamos.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Casa+das+Oliveiras+Sao+Paulo"
  },
  reception: {
    venue: "No mesmo espaço", time: "Logo após a cerimônia",
    description: "Depois do sim, queremos brindar, dançar e celebrar com você."
  },
  dressCode: {
    title: "Passeio completo", description: "Queremos que você se sinta elegante e confortável para celebrar com a gente.",
    note: "Se possível, evite branco e tons muito próximos, reservados à noiva."
  },
  gifts: [
    { icon: "✧", name: "Uma noite especial", description: "Um jantar inesquecível durante a nossa lua de mel.", value: "R$ 150", url: "https://example.com/presente-1" },
    { icon: "⌂", name: "Nosso novo lar", description: "Um carinho para compor o cantinho que construiremos juntos.", value: "R$ 250", url: "https://example.com/presente-2" },
    { icon: "♡", name: "A viagem dos sonhos", description: "Ajude a criar memórias em nossa primeira aventura a dois.", value: "R$ 300", url: "https://example.com/presente-3" }
  ],
  people: [
    { name: "Nossos familiares", text: "Nos ensinaram sobre amor, cuidado e parceria." },
    { name: "Nossos padrinhos", text: "Amigos que escolheram caminhar ao nosso lado em tantos capítulos." }
  ],
  rsvp: { whatsapp: "5511999999999", deadline: "Até 10 de outubro de 2027" },
  closing: "Obrigado por fazer parte da nossa história. Mal podemos esperar para viver esse momento com você.",
  musicUrl: "" // Opcional: informe a URL de um arquivo de áudio próprio. A reprodução exige toque do visitante.
};