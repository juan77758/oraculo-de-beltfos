document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation
  const header = document.querySelector('.main-header');
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // 2. FAQ Accordion
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const content = item.querySelector('.accordion-content');
    
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      accordionItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-content').style.maxHeight = null;
      });
      
      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // 3. Simulated Chat Animation
  const chatMessages = document.getElementById('chatMessages');
  
  const messagesData = [
    {
      sender: 'bot',
      type: 'text',
      content: '🔮 Bienvenido al Oráculo de Beltfos. Iniciando análisis predictivo de la jornada...'
    },
    {
      sender: 'user',
      type: 'text',
      content: 'Hola Oráculo, ¿cuál es la predicción recomendada para hoy?'
    },
    {
      sender: 'bot',
      type: 'text',
      content: 'Buscando ventajas matemáticas en base de datos de 24 ligas...'
    },
    {
      sender: 'bot',
      type: 'text',
      content: 'Encontrada 1 oportunidad con Valor Esperado positivo (+EV). Analizando lineups y cuotas...'
    },
    {
      sender: 'bot',
      type: 'prediction',
      match: 'Real Madrid vs Borussia Dortmund',
      badge: 'Pick del Día',
      bet: 'Real Madrid Ganador & Ambos Anotan',
      odds: 'Momio: 2.30 (Pinnacle)',
      confidence: 'Alta (92% de éxito en simulaciones)',
      roi: '+18.4% (ROI Histórico del modelo)',
      analysis: 'Borussia Dortmund presenta baja del defensor central por lesión. Real Madrid promedia 2.6 goles de local. Las cuotas de Pinnacle se movieron de 2.15 a 2.30, indicando valor matemático.'
    },
    {
      sender: 'user',
      type: 'text',
      content: '¡Excelente análisis! ¿Dónde puedo recibir estas señales a diario?'
    },
    {
      sender: 'bot',
      type: 'text',
      content: 'Publico de forma 100% gratuita cada mañana a las 7:00 AM. Únete a mi canal de Telegram oficial para no perderte ningún pick.'
    },
    {
      sender: 'bot',
      type: 'text',
      content: '👉 <a href="https://t.me/beltfospro" target="_blank" style="color:#ff007f; font-weight:700; text-decoration:underline;">Probar el Oráculo</a>'
    }
  ];

  let currentMsgIndex = 0;

  const appendTypingIndicator = () => {
    const indicator = document.createElement('div');
    indicator.className = 'chat-bubble bot typing-container';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = `
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const removeTypingIndicator = () => {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
      indicator.remove();
    }
  };

  const createTextBubble = (sender, text) => {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text;
    return bubble;
  };

  const createPredictionBubble = (data) => {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble-prediction bot';
    bubble.innerHTML = `
      <div class="pred-match">
        ${data.match} <span class="pred-badge">${data.badge}</span>
      </div>
      <div class="pred-bet">${data.bet}</div>
      <div class="pred-odds">${data.odds}</div>
      <div class="pred-stat-row">
        <span class="pred-stat-lbl">Confianza:</span>
        <span class="pred-stat-val text-emerald">${data.confidence}</span>
      </div>
      <div class="pred-stat-row">
        <span class="pred-stat-lbl">ROI Modelo:</span>
        <span class="pred-stat-val text-fuchsia">${data.roi}</span>
      </div>
      <div class="pred-analysis">
        <strong>Razonamiento:</strong> ${data.analysis}
      </div>
    `;
    return bubble;
  };

  const displayNextMessage = () => {
    if (currentMsgIndex >= messagesData.length) {
      // Loop the conversation after 12 seconds
      setTimeout(() => {
        chatMessages.innerHTML = '';
        currentMsgIndex = 0;
        displayNextMessage();
      }, 12000);
      return;
    }

    const nextMsg = messagesData[currentMsgIndex];
    currentMsgIndex++;

    if (nextMsg.sender === 'bot') {
      appendTypingIndicator();
      
      // Typing delay simulation
      const typingTime = nextMsg.type === 'prediction' ? 2500 : 1500;
      setTimeout(() => {
        removeTypingIndicator();
        let bubble;
        if (nextMsg.type === 'prediction') {
          bubble = createPredictionBubble(nextMsg);
        } else {
          bubble = createTextBubble('bot', nextMsg.content);
        }
        chatMessages.appendChild(bubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Schedule next message
        setTimeout(displayNextMessage, 1500);
      }, typingTime);
    } else {
      // User message
      setTimeout(() => {
        const bubble = createTextBubble('user', nextMsg.content);
        chatMessages.appendChild(bubble);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Schedule next message
        setTimeout(displayNextMessage, 1000);
      }, 1000);
    }
  };

  // Clear placeholder and start chat sequence
  setTimeout(() => {
    chatMessages.innerHTML = '';
    displayNextMessage();
  }, 1000);
});
