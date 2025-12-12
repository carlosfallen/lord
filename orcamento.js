// FILE: orcamento.js
document.addEventListener('DOMContentLoaded', () => {
  let currentStep = 1;
  const totalSteps = 5;
  
  const state = {
    projectType: null,
    projectPrice: 0,
    maintenance: 0,
    aiSetup: 0,
    aiMonthly: 0,
    monthlyServices: [],
    content: {},
    products: {}
  };

  const steps = document.querySelectorAll('.step');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressFill = document.getElementById('progressFill');
  const currentStepEl = document.getElementById('currentStep');
  const summaryInitial = document.getElementById('summaryInitial');
  const summaryMonthly = document.getElementById('summaryMonthly');
  const summaryTotal = document.getElementById('summaryTotal');
  const summaryDetails = document.getElementById('summaryDetails');
  const requestQuoteBtn = document.getElementById('requestQuoteBtn');

  function showStep(step) {
    steps.forEach(s => s.classList.remove('active'));
    steps[step - 1].classList.add('active');
    
    currentStep = step;
    currentStepEl.textContent = step;
    progressFill.style.width = `${(step / totalSteps) * 100}%`;
    
    prevBtn.style.display = step === 1 ? 'none' : 'flex';
    nextBtn.querySelector('span').textContent = step === totalSteps ? 'Ver Orçamento' : 'Próximo';
    
    updateSummary();
  }

  function canProceed() {
    if (currentStep === 1) {
      return !!state.projectType;
    }
    
    if (currentStep === 2) {
      return document.querySelector('input[name="aiIntegration"]:checked') !== null;
    }
    
    return true;
  }

  nextBtn.addEventListener('click', () => {
    if (!canProceed()) {
      alert('Por favor, selecione uma opção antes de continuar.');
      return;
    }
    
    if (currentStep < totalSteps) {
      showStep(currentStep + 1);
    } else {
      requestQuoteBtn.style.display = 'flex';
      nextBtn.style.display = 'none';
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      showStep(currentStep - 1);
      requestQuoteBtn.style.display = 'none';
      nextBtn.style.display = 'flex';
    }
  });

  document.querySelectorAll('input[name="projectType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.projectType = e.target.value;
      state.projectPrice = parseFloat(e.target.dataset.price);
      state.maintenance = parseFloat(e.target.dataset.maintenance);
      updateSummary();
    });
  });

  document.querySelectorAll('input[name="aiIntegration"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const value = e.target.value;
      if (value === 'advanced') {
        state.aiSetup = 0;
        state.aiMonthly = 0;
      } else {
        state.aiSetup = parseFloat(e.target.dataset.setup) || 0;
        state.aiMonthly = parseFloat(e.target.dataset.monthly) || 0;
      }
      updateSummary();
    });
  });

  document.querySelectorAll('input[name="monthlyServices"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      state.monthlyServices = Array.from(
        document.querySelectorAll('input[name="monthlyServices"]:checked')
      ).map(cb => ({
        name: cb.value,
        price: parseFloat(cb.dataset.monthly)
      }));
      updateSummary();
    });
  });

  ['gravacao', 'edicao', 'artes', 'animacoes'].forEach(name => {
    const input = document.querySelector(`input[name="${name}"]`);
    if (input) {
      input.addEventListener('input', () => {
        const qty = parseInt(input.value) || 0;
        const price = parseFloat(input.dataset.price);
        state.content[name] = { qty, price, total: qty * price };
        updateSummary();
      });
    }
  });

  ['produtosSimples', 'produtosIntermediario', 'produtosCompleto'].forEach(name => {
    const input = document.querySelector(`input[name="${name}"]`);
    if (input) {
      input.addEventListener('input', () => {
        const qty = parseInt(input.value) || 0;
        const price = parseFloat(input.dataset.price);
        state.products[name] = { qty, price, total: qty * price };
        updateSummary();
      });
    }
  });

  function formatMoney(value) {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function updateSummary() {
    const contentTotal = Object.values(state.content).reduce((sum, item) => sum + (item.total || 0), 0);
    const productsTotal = Object.values(state.products).reduce((sum, item) => sum + (item.total || 0), 0);
    const servicesTotal = state.monthlyServices.reduce((sum, service) => sum + service.price, 0);
    
    const initialInvestment = state.projectPrice + state.aiSetup + productsTotal;
    const monthlyInvestment = state.maintenance + state.aiMonthly + servicesTotal + contentTotal;
    const totalFirstMonth = initialInvestment + monthlyInvestment;

    summaryInitial.textContent = `R$ ${formatMoney(initialInvestment)}`;
    summaryMonthly.textContent = `R$ ${formatMoney(monthlyInvestment)}`;
    summaryTotal.textContent = `R$ ${formatMoney(totalFirstMonth)}`;

    let detailsHTML = '<ul>';
    
    if (state.projectPrice > 0) {
      const projectNames = {
        'landing-motion': 'Landing Page High-End',
        'landing-vitrine': 'Landing + Vitrine',
        'landing-admin': 'Landing + Painel Admin',
        'ecommerce': 'E-commerce Completo'
      };
      detailsHTML += `<li><span>${projectNames[state.projectType]}</span><span>R$ ${formatMoney(state.projectPrice)}</span></li>`;
    }
    
    if (state.aiSetup > 0) {
      detailsHTML += `<li><span>Setup IA</span><span>R$ ${formatMoney(state.aiSetup)}</span></li>`;
    }
    
    if (productsTotal > 0) {
      detailsHTML += `<li><span>Cadastro de Produtos</span><span>R$ ${formatMoney(productsTotal)}</span></li>`;
    }
    
    if (state.maintenance > 0) {
      detailsHTML += `<li><span>Manutenção/mês</span><span>R$ ${formatMoney(state.maintenance)}</span></li>`;
    }
    
    if (state.aiMonthly > 0) {
      detailsHTML += `<li><span>IA/mês</span><span>R$ ${formatMoney(state.aiMonthly)}</span></li>`;
    }
    
    state.monthlyServices.forEach(service => {
      const labels = {
        'trafego': 'Tráfego Pago',
        'crm': 'CRM',
        'mkt': 'Marketing'
      };
      detailsHTML += `<li><span>${labels[service.name]}/mês</span><span>R$ ${formatMoney(service.price)}</span></li>`;
    });
    
    if (contentTotal > 0) {
      detailsHTML += `<li><span>Conteúdo/mês</span><span>R$ ${formatMoney(contentTotal)}</span></li>`;
    }
    
    detailsHTML += '</ul>';
    
    if (state.projectPrice > 0) {
      summaryDetails.innerHTML = detailsHTML;
    } else {
      summaryDetails.innerHTML = '<p class="summary-placeholder">Selecione as opções para ver o resumo</p>';
    }
  }

  requestQuoteBtn.addEventListener('click', () => {
    const projectNames = {
      'landing-motion': 'Landing Page High-End',
      'landing-vitrine': 'Landing + Vitrine',
      'landing-admin': 'Landing + Painel Admin',
      'ecommerce': 'E-commerce Completo'
    };

    let message = `*Calculei meu orçamento no site:*\n\n`;
    message += `📋 *Projeto:* ${projectNames[state.projectType] || 'Não selecionado'}\n`;
    message += `💰 *Investimento Inicial:* ${summaryInitial.textContent}\n`;
    message += `📅 *Investimento Mensal:* ${summaryMonthly.textContent}\n`;
    message += `💵 *Total 1º Mês:* ${summaryTotal.textContent}\n\n`;
    
    if (state.aiSetup > 0 || state.aiMonthly > 0) {
      message += `🤖 *Integração IA inclusa*\n`;
    }
    
    if (state.monthlyServices.length > 0) {
      message += `📊 *Serviços:* ${state.monthlyServices.map(s => s.name).join(', ')}\n`;
    }
    
    message += `\nGostaria de uma proposta personalizada!`;

    const whatsapp = '5500000000000';
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });

  showStep(1);
});