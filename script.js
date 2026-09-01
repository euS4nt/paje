// ========== CONFIGURAÇÕES ========== 

const WHATSAPP_NUMBER = ""; // Deixar em branco para que o usuário configure depois
const INSTAGRAM_URL = ""; // Deixar em branco para que o usuário configure depois

// ========== ELEMENTOS DO DOM ========== 

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link:not(.instagram-link)');
const header = document.querySelector('.header');
const whatsappFloat = document.getElementById('whatsapp-float');
const heroWhatsapp = document.getElementById('hero-whatsapp');
const ctaWhatsapp = document.getElementById('cta-whatsapp');
const navInstagram = document.getElementById('nav-instagram');

// ========== MENU HAMBURGER ========== 

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ========== HEADER COM SCROLL ========== 

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========== WHATSAPP ========== 

function getWhatsappLink() {
    if (!WHATSAPP_NUMBER) {
        return 'https://wa.me/';
    }
    const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
    const mensagem = encodeURIComponent('Olá! Gostaria de agendar um treino personalizado.');
    return `https://wa.me/${cleanNumber}?text=${mensagem}`;
}

function getInstagramLink() {
    if (!INSTAGRAM_URL) {
        return '#';
    }
    return INSTAGRAM_URL.startsWith('http') ? INSTAGRAM_URL : `https://instagram.com/${INSTAGRAM_URL}`;
}

// Botão flutuante WhatsApp
whatsappFloat.addEventListener('click', (e) => {
    e.preventDefault();
    if (WHATSAPP_NUMBER) {
        window.open(getWhatsappLink(), '_blank');
    } else {
        alert('Número de WhatsApp não configurado. Configure o número na variável WHATSAPP_NUMBER no arquivo script.js');
    }
});

// Botão de WhatsApp no Hero
heroWhatsapp.addEventListener('click', (e) => {
    e.preventDefault();
    if (WHATSAPP_NUMBER) {
        window.open(getWhatsappLink(), '_blank');
    } else {
        alert('Número de WhatsApp não configurado. Configure o número na variável WHATSAPP_NUMBER no arquivo script.js');
    }
});

// Botão de WhatsApp na seção CTA
ctaWhatsapp.addEventListener('click', (e) => {
    e.preventDefault();
    if (WHATSAPP_NUMBER) {
        window.open(getWhatsappLink(), '_blank');
    } else {
        alert('Número de WhatsApp não configurado. Configure o número na variável WHATSAPP_NUMBER no arquivo script.js');
    }
});

// Links do Instagram
navInstagram.addEventListener('click', (e) => {
    e.preventDefault();
    if (INSTAGRAM_URL) {
        window.open(getInstagramLink(), '_blank');
    } else {
        alert('URL do Instagram não configurada. Configure a URL na variável INSTAGRAM_URL no arquivo script.js');
    }
});

// ========== INTERSECTION OBSERVER PARA ANIMAÇÕES ========== 

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os cards e seções
document.querySelectorAll('.card, .benefit-item, .testimonial-card').forEach(element => {
    observer.observe(element);
});

// ========== INICIALIZAÇÃO ========== 

document.addEventListener('DOMContentLoaded', () => {
    console.log('Jonathan Silva - Landing Page Carregada');
    console.log('Configurar WhatsApp:', WHATSAPP_NUMBER || 'não configurado');
    console.log('Configurar Instagram:', INSTAGRAM_URL || 'não configurado');
});

// ========== SCROLL SUAVE ========== 

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
