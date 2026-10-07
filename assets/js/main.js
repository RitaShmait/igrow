(() => {
  'use strict';

  const portfolio = [
    ['FlamingoB', 'assets/img/portfolio/flamingob.webp', 'Hospitality', 'https://www.instagram.com/flamingob__'], ['Prime Computers', 'assets/img/portfolio/primecomputers.jpg', 'Retail', 'https://www.instagram.com/primecomputers.lb'], ['Stoked the Gym', 'assets/img/portfolio/stoked.webp', 'Fitness', 'https://www.instagram.com/stoked_the_gym'], ['Zaher Al Sayegh Engineering', 'assets/img/portfolio/zaher.webp', 'Engineering', 'https://www.instagram.com/zaheralsayegh.engineering'], ['Karam Jdoudna', 'assets/img/portfolio/karamjdoudnalogo.webp', 'Food & beverage', 'https://www.instagram.com/karamjdoudna/'], ['Amaraleen Chalet', 'assets/img/portfolio/amaraleen.webp', 'Hospitality', 'https://www.instagram.com/amaraleen.chalet'], ['Atlal', 'assets/img/portfolio/atlal.webp', 'Hospitality', 'https://www.instagram.com/atlal.venue.chalet'], ['Dr Carpet', 'assets/img/portfolio/dr_carpet_logo.webp', 'Home & living', 'https://www.instagram.com/dr.carpet.lb/'], ['Baisour Roastery', 'assets/img/portfolio/bissour_roastery.webp', 'Food & beverage', 'https://www.instagram.com/baisour_roastery'], ['Dr. Ibrahim Haddad', 'assets/img/portfolio/dr_ibrahim_haddad.webp', 'Healthcare', 'https://www.instagram.com/dr.ibrahimhaddad/'], ['Esperanza', 'assets/img/portfolio/esperanza.webp', 'Beauty', 'https://www.instagram.com/esperanza.beauty.lb'], ['Royal Carpet', 'assets/img/portfolio/royal_carpet.webp', 'Home & living', 'https://www.instagram.com/royal_carpet.leb'], ['Sheavera', 'assets/img/portfolio/Sheavera.webp', 'Beauty', 'https://www.instagram.com/sheavera.lb'], ['Brandless', 'assets/img/portfolio/brandlesslogo.webp', 'Branding', 'https://www.instagram.com/brand_less.lb/'], ['Soulist', 'assets/img/portfolio/soulistlogo.webp', 'Hospitality', 'https://www.instagram.com/soulist.bungalows/'], ['Elysium', 'assets/img/portfolio/Elysiumlogo.webp', 'Weddings', 'https://www.instagram.com/elysium.wedding.boutique/'], ['Food Master', 'assets/img/portfolio/foodmasterlogo.webp', 'Food & beverage', 'https://www.instagram.com/foodmaster.lb/'], ['Loaded & More', 'assets/img/portfolio/loadedlogo.webp', 'Food & beverage', 'https://www.instagram.com/loadedandmore/'], ['TRTE', 'assets/img/portfolio/TRTELogo.webp', 'Engineering', 'https://www.instagram.com/therobtecengineer/'], ['Azalya', 'assets/img/portfolio/azalyalogo.webp', 'Food & beverage', 'https://www.instagram.com/azalyacoffeeshop/'], ['Yalla Notlob', 'assets/img/portfolio/yallanotloblogo.webp', 'Apps', 'https://www.instagram.com/yallanotlob/']
  ];
  const team = [['Rita Shmait', 'Founder', 'assets/img/team/rita.webp'], ['Karim Jaafar', 'Editor', 'assets/img/team/karim_jaafar.webp'], ['Karim Okaily', 'Photographer', 'assets/img/team/karim_okaily.webp'], ['Siraj Alazrouni', 'Designer', 'assets/img/team/siraj_alazrouni.webp']];
  const imagePath = path => path.replace(/\.(png|jpe?g)$/i, '.webp');

  const portfolioGrid = document.querySelector('#portfolio-grid');
  if (portfolioGrid.dataset.rendered === 'true') return;
  portfolioGrid.replaceChildren();
  portfolioGrid.dataset.rendered = 'true';
  portfolioGrid.innerHTML = portfolio.map(([name, image, category, link], i) => `<a class="portfolio-card reveal" href="${link}" target="_blank" rel="noreferrer" style="animation-delay:${Math.min(i * 35, 500)}ms"><img src="${imagePath(image)}" alt="${name} project" loading="lazy" decoding="async"><div class="portfolio-overlay"><h3>${name}</h3><p>${category}</p></div></a>`).join('');
  document.querySelector('#team-grid').innerHTML = team.map(([name, role, image]) => `<article class="team-card reveal"><img src="${imagePath(image)}" alt="${name}" loading="lazy" decoding="async"><h3>${name}</h3><p>${role}</p></article>`).join('');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  menuButton.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', open);
    mobileMenu.setAttribute('aria-hidden', !open);
    document.body.classList.toggle('menu-open', open);
  });
  mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); mobileMenu.setAttribute('aria-hidden', 'true'); document.body.classList.remove('menu-open');
  }));

  const parallaxItems = document.querySelectorAll('[data-parallax]');
  let ticking = false;
  const moveOrbs = () => { parallaxItems.forEach(item => { item.style.transform = `translate3d(0, ${window.scrollY * Number(item.dataset.parallax)}px, 0)`; }); ticking = false; };
  window.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(moveOrbs); ticking = true; } }, { passive: true });
})();
