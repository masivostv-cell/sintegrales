(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const navPanel = document.querySelector('.nav-panel');
  const navLinks = document.querySelectorAll('.nav-panel a');

  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const setMenu = (open) => {
    menuButton.classList.toggle('active', open);
    navPanel.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  menuButton.addEventListener('click', () => setMenu(!navPanel.classList.contains('open')));
  navLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' });

  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

  const filterButtons = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;

      serviceCards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.classList.toggle('hidden', !matches);
      });
    });
  });

  const form = document.querySelector('#quote-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const eventType = data.get('eventType')?.trim();
    const city = data.get('city')?.trim() || 'Por definir';
    const date = data.get('date')?.trim() || 'Por definir';
    const message = data.get('message')?.trim();

    const text = [
      'Hola JA Soluciones, quiero solicitar una propuesta para mi evento.',
      '',
      `Nombre / empresa: ${name}`,
      `Tipo de evento: ${eventType}`,
      `Ciudad: ${city}`,
      `Fecha estimada: ${date}`,
      `Necesidades: ${message}`
    ].join('\n');

    window.open(`https://wa.me/573132666395?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
