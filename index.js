document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  hamburger.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }));

  // Search (demo only)
  document.querySelector('.search-form').addEventListener('submit', (e) => e.preventDefault());

  // Carousel controls
  const track = document.getElementById('carouselTrack');
  const step = () => track.querySelector('.product-card').offsetWidth + 22;
  document.getElementById('prevBtn').addEventListener('click', () => track.scrollBy({left: -step(), behavior:'smooth'}));
  document.getElementById('nextBtn').addEventListener('click', () => track.scrollBy({left: step(), behavior:'smooth'}));

  // Add to cart
  let cartCount = 0;
  const cartBadge = document.getElementById('cartBadge');
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      cartBadge.textContent = cartCount;
      const original = btn.textContent;
      btn.textContent = 'Adicionado ✓';
      btn.classList.add('added');
      setTimeout(() => { btn.textContent = original; btn.classList.remove('added'); }, 1200);
    });
  });

  // Newsletter (demo only)
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterMsg = document.getElementById('newsletterMsg');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterForm.style.display = 'none';
    newsletterMsg.classList.add('show');
  });

  // Live print status widget
  const parts = ['Miniatura Guardiã Élfica','Suporte Articulado','Vaso Geométrico Facetado','Engrenagem Modular','Case Personalizado'];
  let partIndex = 0;
  let progress = 0;
  let layerTotal = 240;
  const statusPart = document.getElementById('statusPart');
  const progressFill = document.getElementById('progressFill');
  const progressPct = document.getElementById('progressPct');
  const layerCount = document.getElementById('layerCount');
  const layerTotalEl = document.getElementById('layerTotal');

  function tick(){
    progress += 2;
    if (progress > 100){
      progress = 0;
      partIndex = (partIndex + 1) % parts.length;
      layerTotal = 180 + Math.floor(Math.random() * 140);
      statusPart.textContent = parts[partIndex];
      layerTotalEl.textContent = layerTotal;
    }
    progressFill.style.width = progress + '%';
    progressPct.textContent = progress;
    layerCount.textContent = Math.round((progress/100) * layerTotal);
  }
  layerTotalEl.textContent = layerTotal;
  setInterval(tick, 200);