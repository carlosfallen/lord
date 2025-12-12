// FILE: app.js
/* ============================================
   IMPÉRIO LORD - MAIN APP
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  initLoader();
  initCustomCursor();
  initNavigation();
  populateContent();
  initAnimations();
  initModals();
  
  // Inicializar links do WhatsApp após popular conteúdo
  setTimeout(() => {
    initWhatsAppLinks();
  }, 200);
  
  initLeadAnimation();
  initContactPopup();
  initClientsCarousel();
});

/* ============================================
   LOADER
   ============================================ */

function initLoader() {
  const loader = document.getElementById('loader');
  const progress = loader.querySelector('.loader-progress');
  
  document.body.classList.add('loading');
  
  gsap.to(progress, {
    width: '100%',
    duration: 1.5,
    ease: 'power2.inOut',
    onComplete: () => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          loader.style.display = 'none';
          document.body.classList.remove('loading');
          initHeroAnimation();
        }
      });
    }
  });
}

/* ============================================
   CUSTOM CURSOR
   ============================================ */

function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  
  if (!cursor || !follower) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animate() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(animate);
  }
  animate();
  
  const hoverElements = document.querySelectorAll('a, button, .service-card, .plan-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
  });
}

/* ============================================
   NAVIGATION
   ============================================ */

function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('active');
    });
    
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('active');
      });
    });
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const position = target.offsetTop - offset;
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   WHATSAPP HELPERS
   ============================================ */

const DEFAULT_WHATSAPP = '5594984361268';

function getSiteConfig() {
  return typeof SITE_CONFIG !== 'undefined' ? SITE_CONFIG : null;
}

function getWhatsappNumber() {
  const config = getSiteConfig();
  const number =
    (config && config.company && config.company.whatsapp) ||
    (config && config.cta && config.cta.primary && config.cta.primary.whatsapp) ||
    DEFAULT_WHATSAPP;
  return String(number).replace(/\D/g, '') || DEFAULT_WHATSAPP;
}

function buildWhatsAppUrl(message, customNumber) {
  const config = getSiteConfig();
  const text =
    message ||
    (config && config.cta && config.cta.primary && config.cta.primary.message) ||
    '';
  const number = (customNumber || getWhatsappNumber()).replace(/\D/g, '') || DEFAULT_WHATSAPP;
  const query = text ? `?text=${encodeURIComponent(text)}` : '';
  return `https://wa.me/${number}${query}`;
}

function openWhatsApp(message, customNumber) {
  const url = buildWhatsAppUrl(message, customNumber);
  console.log('Abrindo WhatsApp:', url);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ============================================
   POPULATE CONTENT FROM DATA
   ============================================ */

// FILE: app.js (atualizar a função populateContent)
function populateContent() {
  const heroStats = document.getElementById('hero-stats');
  if (heroStats && SITE_CONFIG.stats) {
    heroStats.innerHTML = SITE_CONFIG.stats.map(stat => `
      <div class="stat-item">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }
  
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroSubtitle && SITE_CONFIG.company) {
    heroSubtitle.textContent = SITE_CONFIG.company.description;
  }
  
  const benefitsGrid = document.getElementById('benefits-grid');
  if (benefitsGrid && SITE_CONFIG.benefits) {
    benefitsGrid.innerHTML = SITE_CONFIG.benefits.map(benefit => `
      <div class="benefit-card">
        <div class="benefit-icon">${benefit.icon}</div>
        <h3 class="benefit-title">${benefit.title}</h3>
        <p class="benefit-desc">${benefit.desc}</p>
      </div>
    `).join('');
  }
  
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid && SERVICES_DATA) {
    servicesGrid.innerHTML = SERVICES_DATA.map(service => `
      <div class="service-card" data-service="${service.id}">
        <div class="service-icon">${service.icon}</div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-short-desc">${service.shortDesc}</p>
        <svg class="service-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    `).join('');
  }
  
  // PLANOS - CORRIGIDO PARA USAR priceLabel
  const plansGrid = document.getElementById('plans-grid');
  if (plansGrid && PLANS_DATA.plans) {
    plansGrid.innerHTML = PLANS_DATA.plans.map(plan => `
      <div class="plan-card ${plan.highlighted ? 'highlighted' : ''}" data-plan="${plan.id}">
        ${plan.badge ? `<div class="plan-badge">${plan.badge}</div>` : ''}
        <div class="plan-header">
          <h3 class="plan-name">${plan.name}</h3>
          <div class="plan-price">
            ${plan.price 
              ? `${PLANS_DATA.currency}${plan.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}` 
              : `<span class="plan-price-label">${plan.priceLabel}</span>`}
          </div>
          <div class="plan-period">${plan.period}</div>
          <p class="plan-desc">${plan.description}</p>
        </div>
        <ul class="plan-features">
          ${plan.features.map(feature => `
            <li class="plan-feature ${!feature.included ? 'disabled' : ''}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                ${feature.included
                  ? '<path d="M20 6L9 17l-5-5"/>'
                  : '<path d="M18 6L6 18M6 6l12 12"/>'}
              </svg>
              <span>${feature.text}</span>
            </li>
          `).join('')}
        </ul>
        <button class="plan-cta" data-plan="${plan.id}">${plan.cta.text}</button>
      </div>
    `).join('');
    
    // Adicionar eventos de click nos botões dos planos
    plansGrid.querySelectorAll('.plan-cta').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const planId = btn.dataset.plan;
        const plan = PLANS_DATA.plans.find(p => p.id === planId);
        if (plan && plan.cta.whatsapp) {
          openWhatsApp(plan.cta.message, plan.cta.whatsapp);
        }
      });
    });
  }
  
  // CASES
  const casesGrid = document.getElementById('cases-grid');
  if (casesGrid && CASES_DATA) {
    casesGrid.innerHTML = CASES_DATA.map(caseItem => `
      <div class="case-card">
        <div class="case-image">
          <img src="${caseItem.thumbnail}" alt="${caseItem.client}" loading="lazy">
          <span class="case-category">${caseItem.category}</span>
        </div>
        <div class="case-content">
          <h3 class="case-client">${caseItem.client}</h3>
          <p class="case-problem">${caseItem.problem}</p>
          <div class="case-results">
            ${caseItem.results.map(result => `
              <span class="case-result-tag">${result}</span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
  
  // TESTIMONIALS
  const testimonialsSlider = document.getElementById('testimonials-slider');
  if (testimonialsSlider && TESTIMONIALS_DATA) {
    testimonialsSlider.innerHTML = TESTIMONIALS_DATA.map(testimonial => `
      <div class="testimonial-card">
        <p class="testimonial-text">${testimonial.text}</p>
        <div class="testimonial-author">
          <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar" loading="lazy">
          <div>
            <div class="testimonial-name">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  const processTimeline = document.getElementById('process-timeline');
  if (processTimeline && SITE_CONFIG.process) {
    processTimeline.innerHTML = SITE_CONFIG.process.map(step => `
      <div class="process-step">
        <div class="process-number">${step.step}</div>
        <h3 class="process-title">${step.title}</h3>
        <p class="process-desc">${step.desc}</p>
      </div>
    `).join('');
  }
  
  const aboutText = document.getElementById('about-text');
  const aboutMission = document.getElementById('about-mission');
  const aboutVision = document.getElementById('about-vision');
  const aboutValues = document.getElementById('about-values');
  
  if (SITE_CONFIG.about) {
    if (aboutText) aboutText.textContent = SITE_CONFIG.about.description;
    if (aboutMission) aboutMission.textContent = SITE_CONFIG.about.mission;
    if (aboutVision) aboutVision.textContent = SITE_CONFIG.about.vision;
    if (aboutValues) {
      aboutValues.innerHTML = SITE_CONFIG.about.values.map(value => `
        <span class="value-tag">${value}</span>
      `).join('');
    }
  }
  
  const footerTagline = document.getElementById('footer-tagline');
  const footerPhone = document.getElementById('footer-phone');
  const footerEmail = document.getElementById('footer-email');
  const footerAddress = document.getElementById('footer-address');
  const footerCnpj = document.getElementById('footer-cnpj');
  const currentYear = document.getElementById('current-year');
  
  if (SITE_CONFIG.company) {
    if (footerTagline) footerTagline.textContent = SITE_CONFIG.company.tagline;
    if (footerPhone) footerPhone.textContent = SITE_CONFIG.company.phone;
    if (footerEmail) footerEmail.textContent = SITE_CONFIG.company.email;
    if (footerAddress) footerAddress.textContent = SITE_CONFIG.company.address;
    if (footerCnpj) footerCnpj.textContent = `CNPJ: ${SITE_CONFIG.company.cnpj}`;
    if (currentYear) currentYear.textContent = new Date().getFullYear();
  }
  
  const footerSocial = document.getElementById('footer-social');
  if (footerSocial && SITE_CONFIG.social) {
    const socialIcons = {
      instagram: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
      facebook: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
      linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
      youtube: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
    };
    
    footerSocial.innerHTML = Object.entries(SITE_CONFIG.social).map(([key, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${key}">
        ${socialIcons[key] || ''}
      </a>
    `).join('');
  }
}

/* ============================================
   ANIMATIONS
   ============================================ */

function initHeroAnimation() {
  const tl = gsap.timeline();
  
  tl.to('.hero-badge', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  })
  .to('.hero-title .title-line', {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to('.hero-ctas', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4')
  .to('.hero-stats', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.4');
}

function initAnimations() {
  gsap.utils.toArray('.benefit-card').forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });
  
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.05,
      ease: 'power3.out'
    });
  });
  
  gsap.utils.toArray('.plan-card').forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  gsap.utils.toArray('.process-step').forEach((step, i) => {
    gsap.to(step, {
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });
  
  gsap.to('.about-content', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  gsap.to('.about-visual', {
    scrollTrigger: {
      trigger: '.about-visual',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
  });
  
  gsap.to('.cta-content', {
    scrollTrigger: {
      trigger: '.cta-content',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat) {
    ScrollTrigger.create({
      trigger: '.hero',
      start: 'bottom top',
      onEnter: () => whatsappFloat.classList.add('visible'),
      onLeaveBack: () => whatsappFloat.classList.remove('visible')
    });
  }
  
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.fromTo(header, 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out'
      }
    );
  });
}

/* ============================================
   MODALS
   ============================================ */

function initModals() {
  const modal = document.getElementById('service-modal');
  if (!modal) return;
  
  const modalOverlay = modal.querySelector('.modal-overlay');
  const modalClose = document.getElementById('modal-close');
  
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const serviceId = card.dataset.service;
      const service = SERVICES_DATA.find(s => s.id === serviceId);
      if (service) {
        openServiceModal(service);
      }
    });
  });
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
  
  function openServiceModal(service) {
    document.getElementById('modal-icon').textContent = service.icon;
    document.getElementById('modal-title').textContent = service.title;
    document.getElementById('modal-desc').textContent = service.fullDesc;
    
    document.getElementById('modal-deliverables').innerHTML = 
      service.deliverables.map(item => `<li>${item}</li>`).join('');
    
    document.getElementById('modal-benefits').innerHTML = 
      service.benefits.map(item => `<li>${item}</li>`).join('');
    
    const modalCta = document.getElementById('modal-cta');
    if (modalCta) {
      modalCta.onclick = (e) => {
        e.preventDefault();
        openWhatsApp(`Olá! Tenho interesse no serviço de ${service.title}.`);
      };
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ============================================
   WHATSAPP LINKS - VERSÃO CORRIGIDA
   ============================================ */

function initWhatsAppLinks() {
  console.log('Inicializando links do WhatsApp...');
  
  const whatsappButtons = [
    { id: 'nav-cta', message: 'Olá! Gostaria de saber mais sobre os serviços da Império Lord.' },
    { id: 'hero-cta-primary', message: null, isCalculator: true },
    { id: 'about-cta', message: 'Olá! Gostaria de conversar com a equipe da Império Lord.' },
    { id: 'final-cta-whatsapp', message: 'Olá! Gostaria de transformar minha empresa com a Império Lord.' },
    { id: 'final-cta-proposal', message: 'Olá! Gostaria de solicitar uma proposta personalizada.' },
    { id: 'plans-custom-cta', message: 'Olá! Gostaria de uma proposta personalizada.' },
    { id: 'whatsapp-float', message: 'Olá! Vim pelo site e gostaria de mais informações.' }
  ];
  
  whatsappButtons.forEach(({ id, message, isCalculator }) => {
    const el = document.getElementById(id);
    if (el) {
      console.log(`Configurando botão: ${id}`);
      
      if (isCalculator) {
        // Botão da calculadora
        el.href = 'orcamento.html';
        el.removeAttribute('target');
        el.removeAttribute('rel');
      } else {
        // Botões do WhatsApp
        const url = buildWhatsAppUrl(message);
        el.href = url;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
        
        // Adicionar evento de click também
        el.addEventListener('click', (e) => {
          e.preventDefault();
          console.log(`Clique no botão ${id}`);
          openWhatsApp(message);
        });
      }
      
      console.log(`✓ Botão ${id} configurado`);
    } else {
      console.warn(`✗ Botão ${id} não encontrado`);
    }
  });
  
  console.log('WhatsApp links inicializados');
}

/* ============================================
   PARALLAX EFFECTS
   ============================================ */

gsap.to('.hero-lines .line:nth-child(1)', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: 100
});

gsap.to('.hero-lines .line:nth-child(2)', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: 150
});

gsap.to('.hero-lines .line:nth-child(3)', {
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: 100
});

/* ============================================
   LEAD ANIMATION
   ============================================ */

function initLeadAnimation() {
  const leadAnimation = document.getElementById('lead-animation');
  if (!leadAnimation) return;

  const leads = [
    { icon: '👥', name: 'João Silva' },
    { icon: '💬', name: 'Maria Santos' },
    { icon: '🚀', name: 'Carlos Oliveira' }
  ];

  leads.forEach((lead, index) => {
    const leadEl = document.createElement('div');
    leadEl.className = 'lead-item';
    leadEl.innerHTML = `
      <span class="lead-icon">${lead.icon}</span>
      <span>${lead.name}</span>
    `;
    leadAnimation.appendChild(leadEl);
  });
}

/* ============================================
   CLIENTS CAROUSEL
   ============================================ */

function initClientsCarousel() {
  const clientDisplay = document.getElementById('client-display');
  if (!clientDisplay || !window.SITE_CONFIG || !window.SITE_CONFIG.clients) return;

  const clients = window.SITE_CONFIG.clients;
  let currentIndex = 0;

  function showNextClient() {
    clientDisplay.style.animation = 'none';
    clientDisplay.textContent = clients[currentIndex];
    void clientDisplay.offsetWidth;
    clientDisplay.style.animation = 'fadeInOut 3s ease-in-out';
    currentIndex = (currentIndex + 1) % clients.length;
  }

  showNextClient();
  setInterval(showNextClient, 3000);
}

/* ============================================
   CONTACT POPUP
   ============================================ */

function initContactPopup() {
  const popup = document.getElementById('contact-popup');
  if (!popup) return;
  
  const popupClose = document.getElementById('popup-close');
  const popupOverlay = popup.querySelector('.popup-overlay');
  const popupForm = document.getElementById('popup-form');

  let popupShown = false;

  setTimeout(() => {
    if (!popupShown) {
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
      popupShown = true;
    }
  }, 30000);

  function closePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (popupClose) {
    popupClose.addEventListener('click', closePopup);
  }
  
  if (popupOverlay) {
    popupOverlay.addEventListener('click', closePopup);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
      closePopup();
    }
  });

  if (popupForm) {
    popupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('popup-name').value;
      const phone = document.getElementById('popup-phone').value;

      const message = `Olá! Meu nome é ${name}. Vim pelo site e quero saber sobre o precinho especial!\n\nMeu contato: ${phone}`;
      openWhatsApp(message);

      closePopup();
      popupForm.reset();
    });
  }
}