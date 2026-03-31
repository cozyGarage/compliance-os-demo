/* ═══════════════════════════════════════════
   ComplianceOS — Shared JavaScript
   ═══════════════════════════════════════════ */

/* ── Theme (run immediately to prevent FOUC) ── */
(function initTheme() {
  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', saved);
})();

const CURRENT_PATH = window.location.pathname;

function isActive(path) {
  if (path === '/' || path === '/index.html') {
    return CURRENT_PATH === '/' || CURRENT_PATH.endsWith('/index.html') || CURRENT_PATH.endsWith('/Compliance/');
  }
  return CURRENT_PATH.includes(path.replace('.html', ''));
}

function resolvePath(path) {
  const isSubdir = CURRENT_PATH.includes('/frameworks/');
  if (isSubdir && !path.startsWith('http')) {
    return '../' + path;
  }
  return path;
}

/* ── Theme Toggle ── */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  // Navbar icons
  const navSun = document.getElementById('nav-sun-icon');
  const navMoon = document.getElementById('nav-moon-icon');
  if (navSun) navSun.classList.toggle('hidden', !isDark);
  if (navMoon) navMoon.classList.toggle('hidden', isDark);
  // Dashboard icons
  const dbSun = document.getElementById('db-sun-icon');
  const dbMoon = document.getElementById('db-moon-icon');
  if (dbSun) dbSun.classList.toggle('hidden', !isDark);
  if (dbMoon) dbMoon.classList.toggle('hidden', isDark);
}

function updateActiveLangBtns() {
  const lang = (typeof getLocale === 'function') ? getLocale() : (localStorage.getItem('locale') || 'en');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.textContent.trim().toLowerCase();
    btn.classList.toggle('active', btnLang === lang);
  });
}

/* ── Navbar ── */
function renderNavbar() {
  const el = document.getElementById('navbar');
  if (!el) return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const T = (typeof t === 'function') ? t : (k) => k;
  const lang = (typeof getLocale === 'function') ? getLocale() : (localStorage.getItem('locale') || 'en');

  el.innerHTML = `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#0B1A2B]/95 backdrop-blur-sm border-b border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-[72px]">
          <!-- Logo -->
          <a href="${resolvePath('index.html')}" class="flex items-center gap-2">
            <svg class="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
            <span class="text-white font-bold text-xl">Compliance<span class="text-emerald-500">OS</span></span>
          </a>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-8">
            <a href="${resolvePath('index.html')}" class="nav-link text-sm font-medium ${isActive('/index.html') ? 'active text-emerald-400' : 'text-slate-300 hover:text-white'}">${T('nav_home')}</a>
            <a href="${resolvePath('features.html')}" class="nav-link text-sm font-medium ${isActive('/features') ? 'active text-emerald-400' : 'text-slate-300 hover:text-white'}">${T('nav_features')}</a>
            <div class="dropdown relative">
              <button class="nav-link text-sm font-medium ${CURRENT_PATH.includes('/frameworks/') ? 'active text-emerald-400' : 'text-slate-300 hover:text-white'} flex items-center gap-1">
                ${T('nav_frameworks')}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-[#112240] rounded-lg border border-white/10 shadow-xl p-2">
                <a href="${resolvePath('frameworks/csrd.html')}" class="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition">
                  <span class="font-medium">CSRD</span>
                  <span class="block text-xs text-slate-500 mt-0.5">${T('nav_frameworks_dropdown_csrd')}</span>
                </a>
                <a href="${resolvePath('frameworks/aifmd.html')}" class="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition">
                  <span class="font-medium">AIFMD</span>
                  <span class="block text-xs text-slate-500 mt-0.5">${T('nav_frameworks_dropdown_aifmd')}</span>
                </a>
                <a href="${resolvePath('frameworks/nis2.html')}" class="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition">
                  <span class="font-medium">NIS2</span>
                  <span class="block text-xs text-slate-500 mt-0.5">${T('nav_frameworks_dropdown_nis2')}</span>
                </a>
              </div>
            </div>
            <a href="${resolvePath('about.html')}" class="nav-link text-sm font-medium ${isActive('/about') ? 'active text-emerald-400' : 'text-slate-300 hover:text-white'}">${T('nav_about')}</a>
            <a href="${resolvePath('contact.html')}" class="nav-link text-sm font-medium ${isActive('/contact') ? 'active text-emerald-400' : 'text-slate-300 hover:text-white'}">${T('nav_contact')}</a>
          </div>

          <!-- Right Side -->
          <div class="hidden md:flex items-center gap-3">
            <!-- Language Switcher -->
            <div class="flex items-center gap-0.5 border border-white/15 rounded-lg p-1">
              <button onclick="setLocale('en')" class="lang-btn ${lang === 'en' ? 'active' : ''}">EN</button>
              <button onclick="setLocale('de')" class="lang-btn ${lang === 'de' ? 'active' : ''}">DE</button>
              <button onclick="setLocale('fr')" class="lang-btn ${lang === 'fr' ? 'active' : ''}">FR</button>
            </div>
            <!-- Theme Toggle -->
            <button id="nav-theme-toggle" class="theme-toggle-btn" aria-label="Toggle theme" onclick="toggleTheme()">
              <svg id="nav-sun-icon" class="w-5 h-5 ${isDark ? '' : 'hidden'}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              <svg id="nav-moon-icon" class="w-5 h-5 ${isDark ? 'hidden' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
            </button>
            <a href="${resolvePath('dashboard.html')}" class="text-sm font-medium text-slate-300 hover:text-white border border-white/20 rounded-lg px-4 py-2 hover:border-white/40 transition">${T('nav_dashboard')}</a>
            <a href="${resolvePath('signup.html')}" class="text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg px-4 py-2 transition pulse-glow">${T('nav_get_started')}</a>
          </div>

          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" class="md:hidden text-white p-2" aria-label="Toggle menu">
            <svg id="hamburger-icon" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg id="close-icon" class="w-6 h-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="mobile-menu md:hidden bg-[#0B1A2B] border-t border-white/10">
        <div class="px-4 py-4 space-y-2">
          <a href="${resolvePath('index.html')}" class="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">${T('nav_home')}</a>
          <a href="${resolvePath('features.html')}" class="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">${T('nav_features')}</a>
          <div class="pl-4 space-y-1">
            <p class="px-4 py-1 text-xs text-slate-500 uppercase tracking-wider">${T('nav_frameworks')}</p>
            <a href="${resolvePath('frameworks/csrd.html')}" class="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">CSRD</a>
            <a href="${resolvePath('frameworks/aifmd.html')}" class="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">AIFMD</a>
            <a href="${resolvePath('frameworks/nis2.html')}" class="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">NIS2</a>
          </div>
          <a href="${resolvePath('about.html')}" class="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">${T('nav_about')}</a>
          <a href="${resolvePath('contact.html')}" class="block px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">${T('nav_contact')}</a>
          <div class="pt-2 space-y-2 border-t border-white/10 mt-2">
            <a href="${resolvePath('dashboard.html')}" class="block px-4 py-2 text-slate-300 hover:text-white text-center border border-white/20 rounded-lg transition">${T('nav_dashboard')}</a>
            <a href="${resolvePath('signup.html')}" class="block px-4 py-2 text-white text-center bg-emerald-500 hover:bg-emerald-600 rounded-lg transition">${T('nav_get_started')}</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

/* ── Footer ── */
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  const T = (typeof t === 'function') ? t : (k) => k;

  el.innerHTML = `
    <footer class="bg-[#0B1A2B] border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="${resolvePath('index.html')}" class="flex items-center gap-2 mb-4">
              <svg class="w-7 h-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span class="text-white font-bold text-lg">Compliance<span class="text-emerald-500">OS</span></span>
            </a>
            <p class="text-slate-400 text-sm mb-6">${T('footer_tagline')}</p>
            <div class="flex gap-4">
              <a href="#" class="text-slate-400 hover:text-white transition" aria-label="LinkedIn">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="text-slate-400 hover:text-white transition" aria-label="Twitter">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">${T('footer_product')}</h4>
            <ul class="space-y-3">
              <li><a href="${resolvePath('features.html')}" class="text-slate-400 hover:text-white text-sm transition">${T('footer_features')}</a></li>
              <li><a href="${resolvePath('dashboard.html')}" class="text-slate-400 hover:text-white text-sm transition">${T('nav_dashboard')}</a></li>
              <li><a href="${resolvePath('signup.html')}" class="text-slate-400 hover:text-white text-sm transition">${T('footer_pricing')}</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white text-sm transition">${T('footer_documentation')}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">${T('footer_frameworks')}</h4>
            <ul class="space-y-3">
              <li><a href="${resolvePath('frameworks/csrd.html')}" class="text-slate-400 hover:text-white text-sm transition">CSRD</a></li>
              <li><a href="${resolvePath('frameworks/aifmd.html')}" class="text-slate-400 hover:text-white text-sm transition">AIFMD</a></li>
              <li><a href="${resolvePath('frameworks/nis2.html')}" class="text-slate-400 hover:text-white text-sm transition">NIS2</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white text-sm transition">${T('fw_gdpr')}</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white text-sm transition">${T('fw_csdd')}</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold text-sm uppercase tracking-wider mb-4">${T('footer_company')}</h4>
            <ul class="space-y-3">
              <li><a href="${resolvePath('about.html')}" class="text-slate-400 hover:text-white text-sm transition">${T('footer_about')}</a></li>
              <li><a href="${resolvePath('contact.html')}" class="text-slate-400 hover:text-white text-sm transition">${T('footer_contact')}</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white text-sm transition">${T('footer_privacy')}</a></li>
              <li><a href="#" class="text-slate-400 hover:text-white text-sm transition">${T('footer_terms')}</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">${T('footer_copyright')}</p>
          <p class="text-slate-500 text-sm">${T('footer_built')}</p>
        </div>
      </div>
    </footer>
  `;
}

/* ── CTA Banner ── */
function renderCTABanner(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const T = (typeof t === 'function') ? t : (k) => k;

  el.innerHTML = `
    <section class="bg-[#0B1A2B] border-t-2 border-emerald-500/30">
      <div class="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">${T('cta_headline')}</h2>
        <p class="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">${T('cta_subtext')}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="${resolvePath('signup.html')}" class="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition pulse-glow">${T('cta_primary')}</a>
          <a href="${resolvePath('contact.html')}" class="px-8 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-lg transition">${T('cta_secondary')}</a>
        </div>
      </div>
    </section>
  `;
}

/* ── Scroll Animations ── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-icon');
  const close = document.getElementById('close-icon');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
  });
}

/* ── Dropdown ── */
function initDropdown() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    let timeout;
    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.classList.add('active');
    });
    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => dropdown.classList.remove('active'), 200);
    });
    const btn = dropdown.querySelector('button');
    if (btn) {
      btn.addEventListener('click', (e) => {
        if (window.innerWidth < 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    }
  });
}

/* ── Counter Animation ── */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.counter, 10);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    el.textContent = prefix + current.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ── FAQ Accordion ── */
function initAccordion() {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      document.querySelectorAll('.accordion-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.accordion-content').classList.remove('open');
        }
      });
      item.classList.toggle('open');
      item.querySelector('.accordion-content').classList.toggle('open');
    });
  });
}

/* ── Form Handling ── */
function initForms() {
  document.querySelectorAll('form[data-ajax]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(input => {
        const errorEl = input.parentElement.querySelector('.error-msg');
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('border-red-500');
          if (errorEl) errorEl.classList.remove('hidden');
        } else {
          input.classList.remove('border-red-500');
          if (errorEl) errorEl.classList.add('hidden');
        }
      });
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        valid = false;
        emailInput.classList.add('border-red-500');
        const errorEl = emailInput.parentElement.querySelector('.error-msg');
        if (errorEl) { errorEl.textContent = 'Please enter a valid email'; errorEl.classList.remove('hidden'); }
      }
      if (!valid) return;
      showToast(form.dataset.successMsg || 'Submitted successfully!');
      form.reset();
    });
  });
}

/* ── Toast ── */
function showToast(message) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ════════════════════════════════════════════
   Dashboard Render Functions
   ════════════════════════════════════════════ */

function renderSidebar() {
  const T = t;
  const set = (id, text) => { const el = document.getElementById(id); if (el) el.querySelector('span') ? el.querySelector('span').textContent = text : (el.textContent = text); };

  const sbLabel = document.getElementById('sb-label-main');
  if (sbLabel) sbLabel.textContent = T('db_main');

  const sbLabelFw = document.getElementById('sb-label-frameworks');
  if (sbLabelFw) sbLabelFw.textContent = T('footer_frameworks');

  // Set sidebar link labels (each has an icon + <span>)
  const links = {
    'sb-dashboard':   T('db_dashboard'),
    'sb-studio':      T('db_studio'),
    'sb-frameworks':  T('db_frameworks'),
    'sb-data-sources':T('db_data_sources'),
    'sb-reports':     T('db_reports'),
    'sb-assessments': T('db_assessments'),
    'sb-settings':    T('db_settings'),
  };
  Object.entries(links).forEach(([id, label]) => {
    const el = document.getElementById(id);
    if (el) { const span = el.querySelector('span:not(#sb-ds-badge)'); if (span) span.textContent = label; }
  });

  // Framework links in sidebar
  const fwLinksEl = document.getElementById('sb-framework-links');
  if (fwLinksEl && window.MOCK) {
    fwLinksEl.innerHTML = MOCK.frameworks.map(fw => `
      <a href="${resolvePath('frameworks/' + fw.id + '.html')}" class="sidebar-link flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white border-l-2 border-transparent transition">
        <span class="w-5 h-5 shrink-0 flex items-center justify-center rounded text-xs font-bold bg-white/10 text-slate-300">${fw.initial}</span>
        <span>${T('fw_' + fw.id)}</span>
        <span class="ml-auto text-xs font-semibold" style="color:${fw.scoreColor}">${fw.score}%</span>
      </a>
    `).join('');
  }

  // Top bar strings
  const pageTitle = document.getElementById('db-page-title');
  if (pageTitle) pageTitle.textContent = T('db_title');
  const lastUpdated = document.getElementById('db-last-updated');
  if (lastUpdated) lastUpdated.textContent = T('db_last_updated');
  const searchInput = document.getElementById('db-search-input');
  if (searchInput) searchInput.placeholder = T('db_search');
  const upgradeLabel = document.getElementById('db-upgrade-label');
  if (upgradeLabel) upgradeLabel.textContent = T('db_upgrade');
  const notifPanelTitle = document.getElementById('notif-panel-title');
  if (notifPanelTitle) notifPanelTitle.textContent = T('db_notifications');
  const markReadBtn = document.getElementById('notif-mark-read');
  if (markReadBtn) markReadBtn.textContent = T('db_mark_all_read');
}

function renderDashboardStats() {
  if (!window.MOCK) return;
  const T = t;
  const s = MOCK.stats;

  // Score card
  const scoreEl = document.getElementById('stat-score');
  if (scoreEl) scoreEl.textContent = s.overallScore + '%';
  const scoreLabelEl = document.getElementById('stat-score-label');
  if (scoreLabelEl) scoreLabelEl.textContent = T('stat_good');
  const scoreTrendEl = document.getElementById('stat-score-trend');
  if (scoreTrendEl) scoreTrendEl.textContent = s.overallTrend + '% ' + T('stat_this_month');
  const statLabelScore = document.getElementById('stat-label-score');
  if (statLabelScore) statLabelScore.textContent = T('stat_overall_score');

  // Score ring (CSS conic-gradient)
  const ring = document.getElementById('score-ring');
  if (ring) {
    ring.style.background = `conic-gradient(#10B981 ${s.overallScore * 3.6}deg, rgba(255,255,255,0.08) 0deg)`;
  }

  // Frameworks card
  const fwLabel = document.getElementById('stat-label-fw');
  if (fwLabel) fwLabel.textContent = T('stat_active_frameworks');
  const fwCount = document.getElementById('stat-fw-count');
  if (fwCount) fwCount.textContent = s.activeFrameworks + '/' + s.totalFrameworks;
  const fwBadges = document.getElementById('stat-fw-badges');
  if (fwBadges) {
    fwBadges.innerHTML = MOCK.frameworks.map(fw =>
      `<span class="text-xs px-1.5 py-0.5 rounded font-medium ${fw.badgeBg} ${fw.badgeText}">${fw.id.toUpperCase()}</span>`
    ).join('');
  }

  // Tasks card
  const tasksLabel = document.getElementById('stat-label-tasks');
  if (tasksLabel) tasksLabel.textContent = T('stat_open_tasks');
  const tasksCount = document.getElementById('stat-tasks-count');
  if (tasksCount) tasksCount.textContent = s.openTasks;
  const tasksOverdue = document.getElementById('stat-tasks-overdue');
  if (tasksOverdue) tasksOverdue.textContent = s.overdueTasks + ' ' + T('stat_overdue');
  const tasksBar = document.getElementById('stat-tasks-bar');
  if (tasksBar) tasksBar.style.width = Math.round((s.overdueTasks / s.openTasks) * 100) + '%';

  // Reports card
  const reportsLabel = document.getElementById('stat-label-reports');
  if (reportsLabel) reportsLabel.textContent = T('stat_reports_due');
  const reportsCount = document.getElementById('stat-reports-count');
  if (reportsCount) reportsCount.textContent = s.reportsDue;
  const reportsNext = document.getElementById('stat-reports-next');
  if (reportsNext) reportsNext.textContent = s.nextReportName;
  const reportsDue = document.getElementById('stat-reports-due');
  if (reportsDue) reportsDue.textContent = T('stat_due_in') + ' ' + s.nextReportDays + ' ' + T('stat_days');
}

function renderFrameworkStatus() {
  if (!window.MOCK) return;
  const T = t;
  const list = document.getElementById('fw-status-list');
  if (!list) return;

  list.innerHTML = MOCK.frameworks.map(fw => {
    const statusKey = 'status_' + fw.status;
    return `
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full ${fw.dotColor}"></span>
            <span class="text-sm font-medium text-slate-700">${T('fw_' + fw.id)}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-medium text-slate-500">${fw.score}%</span>
            <span class="text-xs px-1.5 py-0.5 rounded font-medium ${fw.badgeBg} ${fw.badgeText}">${T(statusKey)}</span>
          </div>
        </div>
        <div class="h-1.5 bg-slate-100 rounded-full">
          <div class="h-1.5 rounded-full transition-all" style="width:${fw.score}%; background:${fw.scoreColor}"></div>
        </div>
      </div>
    `;
  }).join('');

  const chartTitle = document.getElementById('chart-fw-status-title');
  if (chartTitle) chartTitle.textContent = T('chart_framework_status');
  const availableLabel = document.getElementById('fw-available-label');
  if (availableLabel) availableLabel.textContent = T('chart_available');

  const trendTitle = document.getElementById('chart-trend-title');
  if (trendTitle) trendTitle.textContent = T('chart_trend_title');
  const trendSubtitle = document.getElementById('chart-trend-subtitle');
  if (trendSubtitle) trendSubtitle.textContent = T('chart_trend_subtitle');
  const legend = document.getElementById('chart-legend');
  if (legend) legend.textContent = T('chart_compliance_score_legend');
}

function renderTaskTable() {
  if (!window.MOCK) return;
  const T = t;

  const filterBar = document.getElementById('tasks-filter-bar');
  if (filterBar) {
    const frameworks = ['all', ...new Set(MOCK.tasks.map(tk => tk.framework))];
    filterBar.innerHTML = frameworks.map(fw => {
      const label = fw === 'all' ? T('tasks_filter_all') : fw.toUpperCase();
      return `<button class="filter-btn ${fw === 'all' ? 'active' : ''}" data-filter="${fw}">${label}</button>`;
    }).join('');
  }

  const thead = document.getElementById('tasks-thead');
  if (thead) {
    thead.innerHTML = `
      <th class="text-left pb-3 font-medium">${T('tasks_col_task')}</th>
      <th class="text-left pb-3 font-medium hidden sm:table-cell">${T('tasks_col_framework')}</th>
      <th class="text-left pb-3 font-medium hidden md:table-cell">${T('tasks_col_due')}</th>
      <th class="text-left pb-3 font-medium">${T('tasks_col_status')}</th>
    `;
  }

  const tbody = document.getElementById('tasks-tbody');
  if (tbody) {
    tbody.innerHTML = MOCK.tasks.map(task => {
      const statusStyles = {
        overdue:     'badge-danger',
        in_progress: 'badge-info',
        pending:     'badge-warning',
        on_track:    'badge-success',
        done:        'badge-success opacity-50'
      };
      const cls = statusStyles[task.status] || 'badge-info';
      const due = new Date(task.dueDate).toLocaleDateString(undefined, { month:'short', day:'numeric' });
      return `
        <tr data-framework="${task.framework}" class="hover:bg-slate-50 transition group ${task.status === 'done' ? 'opacity-70' : ''}">
          <td class="py-3 pr-4">
            <span class="font-medium text-slate-700 ${task.status === 'done' ? 'line-through' : ''}">${T(task.titleKey)}</span>
          </td>
          <td class="py-3 pr-4 hidden sm:table-cell">
            <span class="text-xs font-semibold text-slate-500 uppercase">${task.framework}</span>
          </td>
          <td class="py-3 pr-4 hidden md:table-cell text-slate-500 text-xs">${due}</td>
          <td class="py-3 flex items-center justify-between">
            <span class="text-xs px-2 py-1 rounded-full font-medium ${cls}">${task.status === 'done' ? 'Done' : T('status_' + task.status)}</span>
            ${task.status !== 'done' ? `<button onclick="completeTask(${task.id})" class="opacity-0 group-hover:opacity-100 text-emerald-500 hover:text-emerald-700 hover:bg-emerald-50 p-1.5 rounded transition" title="Mark Done"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></button>` : ''}
          </td>
        </tr>
      `;
    }).join('');
  }

  const tasksTitle = document.getElementById('tasks-title');
  if (tasksTitle) tasksTitle.textContent = T('tasks_title');
  const badge = document.getElementById('tasks-count-badge');
  if (badge) badge.textContent = MOCK.tasks.length + ' ' + T('tasks_open');
}

function renderActivityFeed() {
  if (!window.MOCK) return;
  const T = t;
  const list = document.getElementById('activity-list');
  if (!list) return;

  const typeStyles = {
    success: { dot: 'bg-emerald-500', text: 'text-emerald-600' },
    info:    { dot: 'bg-blue-500',    text: 'text-blue-600'    },
    warning: { dot: 'bg-amber-500',   text: 'text-amber-600'   },
  };

  list.innerHTML = MOCK.activity.map(item => {
    const s = typeStyles[item.type] || typeStyles.info;
    return `
      <div class="flex gap-3">
        <div class="mt-1 shrink-0">
          <span class="w-2 h-2 rounded-full ${s.dot} block mt-1.5"></span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-slate-700">${T(item.key)}</p>
          <p class="text-xs text-slate-500 mt-0.5">${T(item.detailKey)}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs font-semibold uppercase ${s.text}">${item.framework}</span>
            <span class="text-xs text-slate-400">${T(item.timeKey)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const title = document.getElementById('activity-title');
  if (title) title.textContent = T('activity_title');
}

function renderEmissions() {
  if (!window.MOCK) return;
  const T = t;
  const em = MOCK.emissions;

  const scopes = [
    { key: 'scope1', color: 'text-emerald-600' },
    { key: 'scope2', color: 'text-blue-600' },
    { key: 'scope3', color: 'text-amber-600' },
  ];

  scopes.forEach(({ key, color }) => {
    const data = em[key];
    const labelEl = document.getElementById(`emissions-${key}-label`);
    if (labelEl) labelEl.textContent = T('emissions_' + key);
    const valueEl = document.getElementById(`emissions-${key}-value`);
    if (valueEl) valueEl.textContent = data.value.toLocaleString() + ' t';
    const subEl = document.getElementById(`emissions-${key}-sub`);
    if (subEl) subEl.textContent = T('emissions_' + key + '_sub');
  });

  const totalLabel = document.getElementById('emissions-total-label');
  if (totalLabel) totalLabel.textContent = T('emissions_total');
  const totalValue = document.getElementById('emissions-total-value');
  if (totalValue) totalValue.textContent = em.totalValue.toLocaleString() + ' t CO₂e';

  const changeEl = document.getElementById('emissions-change');
  if (changeEl) {
    const pct = em.totalChangePercent;
    changeEl.innerHTML = `
      <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17H8m0 0l-4-4m4 4l-4-4M21 7l-4 4m4-4l-4 4"/></svg>
      <span class="text-emerald-600 font-semibold">${pct}%</span>
      <span class="text-slate-500 text-sm">${T('emissions_vs_baseline')}</span>
    `;
  }

  const title = document.getElementById('emissions-title');
  if (title) title.textContent = T('emissions_title');
  const subtitle = document.getElementById('emissions-subtitle');
  if (subtitle) subtitle.textContent = T('emissions_subtitle');
}

function renderDataSources() {
  if (!window.MOCK) return;
  const T = t;
  const grid = document.getElementById('ds-grid');
  if (!grid) return;

  const icons = {
    server: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>`,
    table:  `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>`,
    code:   `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>`,
    edit:   `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>`,
    file:   `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>`,
  };

  const statusStyles = {
    success: 'text-emerald-600 bg-emerald-50',
    pulse:   'text-blue-600 bg-blue-50',
    warning: 'text-amber-600 bg-amber-50',
    info:    'text-slate-600 bg-slate-100',
  };

  grid.innerHTML = MOCK.dataSources.map(ds => {
    const cls = statusStyles[ds.statusType] || statusStyles.info;
    return `
      <div class="flex flex-col items-center p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-sm transition cursor-pointer text-center">
        <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
          <svg class="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">${icons[ds.icon] || icons.file}</svg>
        </div>
        <p class="text-xs font-semibold text-slate-700 mb-1">${T(ds.nameKey)}</p>
        <span class="text-xs px-2 py-0.5 rounded-full font-medium ${cls}">${T(ds.statusKey)}</span>
      </div>
    `;
  }).join('') + `
    <div class="flex flex-col items-center p-4 rounded-xl border-2 border-dashed border-slate-200 hover:border-emerald-300 hover:bg-slate-50 transition cursor-pointer text-center" onclick="addDataSource()">
      <div class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-3">
        <svg class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
      </div>
      <p class="text-xs font-semibold text-slate-400">${T('ds_add_source')}</p>
    </div>
  `;

  const title = document.getElementById('ds-title');
  if (title) title.textContent = T('ds_title');
  const addBtn = document.getElementById('ds-add-btn');
  if (addBtn) addBtn.textContent = T('ds_add');
}

/* ── Task Filter ── */
function initTaskFilter() {
  const filterBar = document.getElementById('tasks-filter-bar');
  if (!filterBar) return;
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const rows = document.querySelectorAll('#tasks-tbody tr');
    rows.forEach(row => {
      row.style.display = (filter === 'all' || row.dataset.framework === filter) ? '' : 'none';
    });
  });
}

/* ── Notifications ── */
function initNotifications() {
  if (!window.MOCK) return;
  const T = t;

  const unread = MOCK.notifications.filter(n => !n.read).length;
  const dot = document.getElementById('notif-dot');
  const countBadge = document.getElementById('notif-unread-count');
  const markReadBtn = document.getElementById('notif-mark-read');

  if (dot) dot.classList.toggle('hidden', unread === 0);
  if (countBadge) {
    countBadge.textContent = unread;
    countBadge.classList.toggle('hidden', unread === 0);
  }
  if (markReadBtn) markReadBtn.style.display = unread > 0 ? 'block' : 'none';

  const list = document.getElementById('notif-list');
  if (list) {
    const typeConfig = {
      warning: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-500', path: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
      info:    { bg: 'bg-blue-50',  border: 'border-blue-200',  icon: 'text-blue-500',  path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
      success: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-500', path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    };
    list.innerHTML = MOCK.notifications.map(n => {
      const cfg = typeConfig[n.type] || typeConfig.info;
      const opacity = n.read ? 'opacity-60' : '';
      return `
        <div class="p-3 rounded-lg border ${cfg.bg} ${cfg.border} ${opacity}">
          <div class="flex gap-3">
            <svg class="w-4 h-4 shrink-0 mt-0.5 ${cfg.icon}" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${cfg.path}"/></svg>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-semibold text-slate-800">${T(n.titleKey)}</p>
              <p class="text-xs text-slate-600 mt-0.5">${T(n.bodyKey)}</p>
              <p class="text-xs text-slate-400 mt-1">${T(n.timeKey)}</p>
            </div>
            ${!n.read ? '<span class="w-2 h-2 rounded-full bg-red-500 shrink-0 mt-1"></span>' : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  // Open/close panel
  const btn = document.getElementById('notif-btn');
  const panel = document.getElementById('notif-panel');
  const overlay = document.getElementById('notif-overlay');
  const closeBtn = document.getElementById('notif-close');

  function openPanel() {
    panel.classList.add('open');
    overlay.classList.add('open');
  }
  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
  }

  if (btn) btn.addEventListener('click', openPanel);
  if (closeBtn) closeBtn.addEventListener('click', closePanel);
  if (overlay) overlay.addEventListener('click', closePanel);

  // Mark all read
  if (markReadBtn) {
    markReadBtn.addEventListener('click', () => {
      MOCK.notifications.forEach(n => n.read = true);
      if (window.saveMockData) window.saveMockData();
      initNotifications(); // re-render
    });
  }
}

// Global actions
window.completeTask = function(taskId) {
  const task = MOCK.tasks.find(t => t.id === taskId);
  if (task && task.status !== 'done') {
    if (task.status === 'overdue') MOCK.stats.overdueTasks = Math.max(0, MOCK.stats.overdueTasks - 1);
    task.status = 'done';
    MOCK.stats.openTasks = Math.max(0, MOCK.stats.openTasks - 1);
    // Simulate updating score slightly when task completes
    MOCK.stats.overallScore = Math.min(100, MOCK.stats.overallScore + 1);
    
    if (window.saveMockData) window.saveMockData();
    showToast('Task marked as complete');
    
    // Re-render
    renderDashboardStats();
    renderTaskTable();
    initTaskFilter(); // re-apply filters
    drawLineChart();  // Update chart gradient potentially
  }
};

window.addDataSource = function() {
  const newId = 'ds_' + Date.now();
  MOCK.dataSources.push({
    id: newId,
    nameKey: "ds_new_connection",
    statusKey: "ds_status_pending2",
    statusType: "pulse",
    icon: "code"
  });
  if (window.saveMockData) window.saveMockData();
  showToast('Connecting new data source...');
  renderDataSources();
};

/* ── Dashboard Charts ── */
function drawLineChart() {
  const canvas = document.getElementById('trend-chart');
  if (!canvas) return;

  const chartData = (window.MOCK && MOCK.trendChart) ? MOCK.trendChart : { values: [45,52,58,65,70,73], labelKeys: ['month_jan','month_feb','month_mar','month_apr','month_may','month_jun'] };
  const data = chartData.values;
  const labels = chartData.labelKeys.map(k => (typeof t === 'function') ? t(k) : k);

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const padding = { top: 20, right: 20, bottom: 40, left: 50 };
  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;
  const maxVal = 100;

  // Grid lines
  ctx.strokeStyle = 'rgba(100,116,139,0.12)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
    ctx.fillStyle = '#94A3B8';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxVal - (maxVal / 4) * i) + '%', padding.left - 8, y + 4);
  }

  // X-axis labels
  ctx.textAlign = 'center';
  labels.forEach((label, i) => {
    const x = padding.left + (chartW / (data.length - 1)) * i;
    ctx.fillStyle = '#94A3B8';
    ctx.font = '11px Inter, sans-serif';
    ctx.fillText(label, x, h - padding.bottom + 20);
  });

  const points = data.map((val, i) => ({
    x: padding.left + (chartW / (data.length - 1)) * i,
    y: padding.top + chartH - (val / maxVal) * chartH
  }));

  // Fill area
  const gradient = ctx.createLinearGradient(0, padding.top, 0, h - padding.bottom);
  gradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
  gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
  ctx.beginPath();
  ctx.moveTo(points[0].x, h - padding.bottom);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, h - padding.bottom);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Line
  ctx.beginPath();
  ctx.strokeStyle = '#10B981';
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  points.forEach((p, i) => { if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y); });
  ctx.stroke();

  // Dots
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#10B981';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  });
}

function drawDonutCharts() {
  const scopeData = (window.MOCK && MOCK.emissions) ? [
    { id: 'donut-scope1', value: MOCK.emissions.scope1.value, total: MOCK.emissions.scope1.total, color: MOCK.emissions.scope1.color },
    { id: 'donut-scope2', value: MOCK.emissions.scope2.value, total: MOCK.emissions.scope2.total, color: MOCK.emissions.scope2.color },
    { id: 'donut-scope3', value: MOCK.emissions.scope3.value, total: MOCK.emissions.scope3.total, color: MOCK.emissions.scope3.color },
  ] : [
    { id: 'donut-scope1', value: 1240,  total: 5000,  color: '#10B981' },
    { id: 'donut-scope2', value: 3890,  total: 5000,  color: '#3B82F6' },
    { id: 'donut-scope3', value: 12450, total: 15000, color: '#F59E0B' },
  ];

  scopeData.forEach(chart => {
    const canvas = document.getElementById(chart.id);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const size = 120;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + 'px';
    canvas.style.height = size + 'px';
    ctx.scale(dpr, dpr);

    const cx = size / 2, cy = size / 2, radius = 45, lineWidth = 10;
    const ratio = chart.value / chart.total;
    const startAngle = -Math.PI / 2;
    const endAngle = startAngle + (2 * Math.PI * ratio);

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(100,116,139,0.12)';
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.strokeStyle = chart.color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.fillStyle = '#1E293B';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(Math.round(ratio * 100) + '%', cx, cy);
  });
}

/* ── Dashboard Sidebar Toggle (Mobile) ── */
function initSidebarToggle() {
  const btn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!btn || !sidebar) return;
  btn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    if (overlay) overlay.classList.toggle('hidden');
  });
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    });
  }
}

/* ── Dashboard: wire theme toggle button ── */
function initDashboardThemeToggle() {
  const btn = document.getElementById('dashboard-theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', toggleTheme);
  updateThemeIcons();
}

/* ── Init Dashboard ── */
function initDashboard() {
  renderSidebar();
  renderDashboardStats();
  renderFrameworkStatus();
  renderTaskTable();
  renderActivityFeed();
  renderEmissions();
  renderDataSources();
  drawLineChart();
  drawDonutCharts();
  initTaskFilter();
  initNotifications();
  initDashboardThemeToggle();
  updateActiveLangBtns();
  initStudioChat();
}

function initStudioChat() {
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const history = document.getElementById('chat-history');
  if (!input || !sendBtn || !history) return;

  const setStudioLang = () => {
    const headerTitle = document.getElementById('studio-header-title');
    const headerDesc = document.getElementById('studio-header-desc');
    const newBtn = document.getElementById('studio-new-btn');
    const welcome = document.getElementById('studio-welcome');
    const disclaimer = document.getElementById('studio-disclaimer');
    if(headerTitle) headerTitle.textContent = T('studio_title') || 'Studio Assistant';
    if(headerDesc) headerDesc.textContent = T('studio_desc');
    if(newBtn) newBtn.textContent = T('studio_new_btn');
    if(welcome) welcome.textContent = T('studio_welcome');
    if(disclaimer) disclaimer.textContent = T('studio_disclaimer');
  };
  setStudioLang();
  // Override setLocale to also update these when language changes
  const originalSetLocale = window.setLocale;
  window.setLocale = (lang) => {
    if(originalSetLocale) originalSetLocale(lang);
    setStudioLang();
  };

  const sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;
    
    // Add user message
    const div = document.createElement('div');
    div.className = 'flex gap-4 max-w-3xl mx-auto flex-row-reverse animate-fade-in-up mt-4 mb-4';
    div.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1 shadow-sm font-bold text-sm">U</div>
      <div class="flex-1 text-right">
        <p class="text-sm font-semibold text-slate-800 mb-1">You</p>
        <div class="text-sm text-slate-800 bg-slate-100 p-4 rounded-2xl rounded-tr-none inline-block text-left border border-slate-200 shadow-sm leading-relaxed">${text}</div>
      </div>
    `;
    history.appendChild(div);
    input.value = '';
    input.style.height = '';
    sendBtn.disabled = true;
    sendBtn.classList.add('cursor-not-allowed', 'opacity-50');
    history.scrollTop = history.scrollHeight;

    // Simulate assistant reply
    setTimeout(() => {
      const resp = document.createElement('div');
      resp.className = 'flex gap-4 max-w-3xl mx-auto animate-fade-in-up';
      resp.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1 shadow-sm">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </div>
        <div class="flex-1">
          <p class="text-sm font-semibold text-slate-800 mb-1">ComplianceOS</p>
          <div class="text-sm text-slate-700 bg-white p-4 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm leading-relaxed">
            I understand. Based on your current data sources, we have successfully logged the relevant ERP dependencies. Let me know if you would like me to generate a gap analysis report for your upcoming assessment.
          </div>
        </div>
      `;
      history.appendChild(resp);
      history.scrollTop = history.scrollHeight;
    }, 1200);
  };

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  updateThemeIcons();
  updateActiveLangBtns();
  initScrollAnimations();
  initMobileMenu();
  initDropdown();

  // Wire nav theme toggle (rendered inside renderNavbar)
  const navToggle = document.getElementById('nav-theme-toggle');
  if (navToggle) navToggle.addEventListener('click', toggleTheme);

  if (document.getElementById('cta-banner')) renderCTABanner('cta-banner');
  if (document.querySelector('[data-counter]')) initCounters();
  if (document.querySelector('.accordion-item')) initAccordion();
  if (document.querySelector('form[data-ajax]')) initForms();
  if (document.getElementById('dashboard-app')) {
    initDashboard();
    initSidebarToggle();
  }
});
