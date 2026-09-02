document.getElementById('year').textContent = new Date().getFullYear();

  // Security card collapsible
  const secToggle = document.getElementById('securityToggle');
  const secDetail = document.getElementById('securityDetail');
  secToggle.addEventListener('click', () => {
    const isOpen = secToggle.getAttribute('aria-expanded') === 'true';
    secToggle.setAttribute('aria-expanded', String(!isOpen));
    secDetail.classList.toggle('open', !isOpen);
  });

  // Login form
  const form = document.getElementById('loginForm');
  const input = document.getElementById('loginInput');
  const error = document.getElementById('loginError');
  const continueBtn = document.getElementById('continueBtn');
  const continueLabel = document.getElementById('continueLabel');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) {
      error.classList.add('show');
      input.focus();
      return;
    }
    error.classList.remove('show');
    continueBtn.disabled = true;
    continueLabel.textContent = 'Entrando...';
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 850);
  });

  input.addEventListener('input', () => error.classList.remove('show'));

  // Create account (demo only)
  document.getElementById('createAccountBtn').addEventListener('click', () => {
    input.focus();
    input.setAttribute('placeholder', 'Crie sua conta com um e-mail...');
  });

  // Google button (demo only)
  const googleBtn = document.getElementById('googleBtn');
  const googleLabel = document.getElementById('googleLabel');
  googleBtn.addEventListener('click', () => {
    googleBtn.disabled = true;
    googleLabel.textContent = 'Conectando...';
    setTimeout(() => { window.location.href = 'index.html'; }, 850);
  });