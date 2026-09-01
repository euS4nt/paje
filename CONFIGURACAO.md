# ⚙️ GUIA RÁPIDO DE CONFIGURAÇÃO

## 🔴 IMPORTANTE - Configure Antes de Usar

### 1. WhatsApp
Abra o arquivo: `js/script.js`

Procure pela linha 3:
```javascript
const WHATSAPP_NUMBER = "";
```

Substitua pelo número com código do país:
```javascript
const WHATSAPP_NUMBER = "+5511999999999";
```

**Exemplos:**
- Brasil: `+5511999999999` ou `5511999999999`
- Portugal: `+351912345678`
- EUA: `+14155552368`

---

### 2. Instagram
No mesmo arquivo `js/script.js`, procure pela linha 4:
```javascript
const INSTAGRAM_URL = "";
```

Substitua com seu perfil:
```javascript
// Opção 1 - URL completa:
const INSTAGRAM_URL = "https://instagram.com/jonathansilva";

// Opção 2 - Apenas usuário:
const INSTAGRAM_URL = "jonathansilva";
```

---

### 3. Testar a Página
1. Abra `index.html` no navegador
2. Teste o formulário de agendamento
3. Clique no botão WhatsApp flutuante
4. Clique no ícone do Instagram

---

## 📝 CUSTOMIZAÇÕES OPCIONAIS

### Trocar Paleta de Cores
Edite `css/style.css` linhas 3-7:
```css
:root {
    --preto: #000000;
    --cinza-escuro: #2B2B2B;
    --vermelho: #E10600;      /* Mude para sua cor */
    --branco: #FFFFFF;
}
```

### Adicionar Logo/Foto
1. Salve a imagem em `/assets/`
2. Edite o `index.html` e substitua os placeholders `hero-image-placeholder` e `about-image-placeholder`

### Mudar Textos
Edite diretamente no `index.html`:
- Títulos
- Descrições
- Nomes dos serviços
- Depoimentos

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] WhatsApp configurado em `js/script.js`
- [ ] Instagram configurado em `js/script.js`
- [ ] Textos personalizados no `index.html`
- [ ] Logo/Fotos adicionadas em `/assets/`
- [ ] Meta description no `index.html` atualizada
- [ ] Testado em desktop, tablet e mobile
- [ ] Formulário testado
- [ ] Links de WhatsApp e Instagram funcionando

---

## 🆘 DÚVIDAS FREQUENTES

**P: Onde salvo as imagens?**
R: Na pasta `/assets/`. Depois edite o `index.html`.

**P: Como mudo o nome?**
R: Edite `index.html`. O nome aparece no Header, Hero, Sobre e Footer.

**P: Posso usar em WordPress?**
R: Sim! Upload os arquivos e customize conforme necessário.

**P: Como envio para servidor?**
R: Upload os arquivos (index.html, css, js, assets) via FTP.

**P: Os dados do formulário são salvos?**
R: Atualmente salvam em localStorage. Para sistema real, conecte a uma API.

---

## 📞 CONTATO & SUPORTE

Consulte o `README.md` para documentação completa.

**Obrigado por usar esta landing page profissional! 🚀**
