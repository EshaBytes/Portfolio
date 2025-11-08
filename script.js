    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const menuList = document.getElementById('menuList');
    menuBtn?.addEventListener('click', () => menuList.classList.toggle('open'));

    // Theme toggle
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    themeToggle?.addEventListener('click', () => {
      const curr = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', curr);
      localStorage.setItem('theme', curr);
    });

    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('show'))
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  