# 🏋️ Landing Page - Jonathan Silva | Personal Trainer

Uma landing page profissional e moderna desenvolvida com **HTML5, CSS3 e JavaScript puro** para um Personal Trainer chamado Jonathan Silva.

---

## 📁 Estrutura do Projeto

```
paje/
├── index.html          # Estrutura HTML da página
├── css/
│   └── style.css       # Estilos CSS (responsivo + animações)
├── js/
│   └── script.js       # Lógica JavaScript (interatividade)
├── assets/             # Pasta para imagens e recursos
└── README.md           # Este arquivo
```

---

## 🎨 Características Principais

✅ **Design Moderno e Premium**
- Paleta de cores profissional (Preto, Cinza, Vermelho, Branco)
- Tipografia forte e impactante
- Espaçamento generoso e layout limpo

✅ **Responsividade 100%**
- Totalmente otimizado para desktop, tablet e mobile
- Menu hamburger funcional em dispositivos menores
- Cards e conteúdo se adaptam perfeitamente

✅ **Seções Estruturadas**
1. **Hero** - Chamada principal impactante
2. **Sobre** - Apresentação com estatísticas
3. **Treinamentos** - Tipos de treino disponíveis
4. **Benefícios** - Vantagens de treinar com Jonathan
5. **Depoimentos** - Avaliações de clientes
6. **Agendamento** - Formulário completo com validação
7. **CTA Final** - Última chamada para ação
8. **Footer** - Rodapé com links e redes sociais

✅ **Funcionalidades JavaScript**
- Menu mobile com hamburger animado
- Formulário com validação completa
- Formatação automática de telefone
- Mensagens de erro amigáveis
- Mensagem de sucesso ao agendar
- Links de WhatsApp funcional
- Animações com IntersectionObserver
- Scroll suave
- Header que reage ao scroll

✅ **Animações**
- Fade-in ao entrar nas seções
- Cards com hover e elevação
- Pulse no botão flutuante
- Bounce no indicador de scroll
- Transições suaves em todos os elementos

---

## 🚀 Como Usar

### 1. **Abrir a Página**
Simplesmente abra o arquivo `index.html` no seu navegador:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

Ou arraste o arquivo `index.html` para o navegador.

### 2. **Configurar WhatsApp**

Abra o arquivo `js/script.js` e procure pela linha:
```javascript
const WHATSAPP_NUMBER = "";
```

Substitua com o número de telefone (incluindo código do país):
```javascript
const WHATSAPP_NUMBER = "+5511999999999"; // Exemplo
// ou
const WHATSAPP_NUMBER = "5511999999999";  // Sem símbolo
```

### 3. **Configurar Instagram**

No mesmo arquivo `js/script.js`, procure por:
```javascript
const INSTAGRAM_URL = "";
```

Substitua com o perfil do Instagram:
```javascript
const INSTAGRAM_URL = "https://instagram.com/jonathansilva"; // Link completo
// ou
const INSTAGRAM_URL = "jonathansilva"; // Apenas usuário
```

### 4. **Customizar Conteúdo**

Abra `index.html` e edite:
- **Textos**: Mude os títulos, subtítulos e descrições
- **Imagens**: Substitua os placeholders na pasta `/assets/`
- **Cores**: Edite as variáveis CSS em `css/style.css`

---

## 📝 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Preto | `#000000` | Backgrounds alternados |
| Cinza Escuro | `#2B2B2B` | Backgrounds e cards |
| Vermelho | `#E10600` | Destaques, botões, títulos |
| Branco | `#FFFFFF` | Texto principal |

---

## 🎯 Seções da Landing Page

### 1️⃣ **Hero**
- Título impactante
- Subtítulo descritivo
- Dois botões de ação
- Imagem placeholder

### 2️⃣ **Sobre**
- Foto do profissional
- Descrição da experiência
- Estatísticas destacadas (+100 alunos, +5 anos, 100% resultados)

### 3️⃣ **Treinamentos**
- 4 cards com tipos de treino
- Ícones do Font Awesome
- Hover com elevação

### 4️⃣ **Benefícios**
- Grid de 8 benefícios
- Ícones circulares em vermelho
- Animações ao scroll

### 5️⃣ **Depoimentos**
- 3 cards de avaliações
- Estrelas de classificação
- Nomes dos clientes

### 6️⃣ **Agendamento** ⭐ (Seção Principal)
- Formulário com 7 campos
- Validação em tempo real
- Mensagens de erro amigáveis
- Mensagem de sucesso
- Botão grande e chamativo

### 7️⃣ **CTA Final**
- Título motivador
- Dois botões de ação
- Cores contrastantes

### 8️⃣ **Footer**
- Links de navegação
- Redes sociais
- Informações de contato

---

## 🔧 Validação do Formulário

O formulário valida:
✅ Nome (mínimo 3 caracteres)
✅ WhatsApp (formato correto)
✅ E-mail (formato válido)
✅ Objetivo (seleção obrigatória)
✅ Data (não pode ser no passado)
✅ Horário (obrigatório)

**Observação**: Os dados são salvos em `localStorage` para demonstração. Para um sistema real, conecte a uma API.

---

## 📱 Responsividade

A página é 100% responsiva:

| Device | Breakpoint |
|--------|-----------|
| Desktop | > 1024px |
| Tablet | 768px - 1024px |
| Mobile | < 768px |

Em mobile:
- Menu vira hamburger
- Cards ficam em 1 coluna
- Botões expandem para full-width
- WhatsApp flutuante permanece fixo

---

## 🎬 Animações Utilizadas

- **Fade In/Out**: Seções ao entrar na view
- **Slide**: Menu mobile
- **Bounce**: Indicador de scroll
- **Pulse**: Botão WhatsApp
- **Hover Scale**: Cards e botões
- **Elevation**: Efeito de sombra ao hover

---

## 🔐 Segurança & SEO

✅ Meta tags configuradas
✅ HTML semântico
✅ Acessibilidade (alt em imagens, labels em inputs)
✅ Links acessíveis
✅ Headings organizadas corretamente

---

## 📂 Personalizando a Página

### Adicionar Imagens

1. Salve as imagens na pasta `/assets/`
2. Edite o `index.html` e substitua os placeholders:

```html
<!-- De: -->
<div class="hero-image-placeholder">
    <i class="fas fa-dumbbell"></i>
</div>

<!-- Para: -->
<img src="assets/foto-jonathan.jpg" alt="Jonathan Silva - Personal Trainer">
```

### Mudar Cores

Edite as variáveis CSS em `css/style.css`:

```css
:root {
    --preto: #000000;
    --cinza-escuro: #2B2B2B;
    --vermelho: #E10600;
    --branco: #FFFFFF;
}
```

### Adicionar Novas Seções

1. Copie a estrutura de uma seção existente
2. Atualize a cor de fundo (preto ou cinza)
3. Adicione o link no menu
4. O CSS se adapta automaticamente

---

## 🌐 Font Awesome Icons

A página usa Font Awesome 6.4.0 CDN. Ícones utilizados:

- `fa-dumbbell` - Halteres
- `fa-user-tie` - Personal Training
- `fa-heart` - Hipertrofia
- `fa-fire` - Emagrecimento
- `fa-bolt` - Condicionamento
- `fa-check` - Benefícios
- `fa-star` - Avaliações
- `fa-calendar` - Data
- `fa-clock` - Horário
- `fa-envelope` - E-mail
- `fa-phone` - Telefone
- `fa-bars` - Menu
- `fa-times` - Fechar
- `fa-chevron-down` - Scroll
- `fa-whatsapp` - WhatsApp
- `fa-instagram` - Instagram

---

## 📊 Console & Debug

Abra o Console do Navegador (F12) para ver:
- Mensagens de inicialização
- Configurações ativas (WhatsApp, Instagram)
- Dados do agendamento (salvos em localStorage)

```javascript
// Verificar último agendamento salvo:
console.log(JSON.parse(localStorage.getItem('ultimoAgendamento')));
```

---

## 🚨 Troubleshooting

### WhatsApp não funciona
- ✅ Verifique se o número está configurado em `js/script.js`
- ✅ Certifique-se de incluir o código do país
- ✅ Use formato: `+5511999999999` ou `5511999999999`

### Instagram não funciona
- ✅ Verifique se a URL está configurada
- ✅ Use URL completa ou apenas o usuário

### Formulário não valida
- ✅ Abra o Console (F12) para ver mensagens de erro
- ✅ Verifique se todos os campos obrigatórios foram preenchidos

### Página não está responsiva
- ✅ Limpe o cache do navegador (Ctrl+Shift+Del)
- ✅ Redimensione a janela do navegador

---

## 📞 Suporte

Para dúvidas ou melhorias:
1. Verifique a documentação acima
2. Abra o Console do Navegador para debug
3. Valide o HTML/CSS em ferramentas online

---

## 📄 Licença

Este projeto é fornecido como template profissional para Personal Trainers. Sinta-se livre para customizar e usar comercialmente.

---

## ✨ Próximos Passos

Para tornar a página ainda mais funcional:

1. **Conectar a uma API** para salvar agendamentos
2. **Adicionar Google Analytics** para rastrear visitantes
3. **Implementar envio de e-mail** de confirmação
4. **Adicionar sistema de pagamento** (PagSeguro, Stripe)
5. **Integrar CRM** para gerenciar leads
6. **Adicionar chat ao vivo** para suporte

---

**Landing Page criada com ❤️ para Jonathan Silva - Personal Trainer**
