/* =========================================================
   Mohamed Ali Fawzy Ali — Data Analyst Portfolio
   Structured data + UI logic
   ========================================================= */

const SKILLS = [
  {
    icon: 'chart',
    title: 'Data Analytics & BI',
    tags: ['Microsoft Excel', 'Power BI', 'Power Query', 'DAX', 'Pivot Tables', 'Slicers']
  },
  {
    icon: 'database',
    title: 'Databases & Querying',
    tags: ['SQL', 'SQL Server', 'Data Modeling']
  },
  {
    icon: 'sparkle',
    title: 'Data Preparation',
    tags: ['Data Cleaning', 'Data Transformation', 'Advanced Data Visualization']
  }
];

const PROJECTS = [
  {
    id: 'sales',
    title: 'Executive Sales & Performance Dashboard',
    category: 'Sales Analytics',
    image: 'images/project-sales.jpeg',
    short: 'Interactive executive dashboard analyzing company sales and performance — revenue, profitability and regional distribution at a glance.',
    tools: ['Microsoft Excel', 'Power BI', 'Power Query', 'Pivot Tables', 'Slicers'],
    tags: ['Power BI', 'Excel', 'Sales'],
    overview: 'An interactive executive dashboard built to analyze company sales and performance metrics, empowering decision-makers to track revenue, profitability and regional distribution effectively.',
    problem: 'Decision-makers needed a single, interactive view of sales performance — total revenue, profit and how results distribute across regions, states, categories and customer segments.',
    kpis: [
      { value: '$2.9M', label: 'Total Sales' },
      { value: '$360K', label: 'Total Profit' },
      { value: 'West', label: 'Top Region' }
    ],
    insights: [
      'Designed core KPIs showcasing Total Sales ($2.9M), Total Profit ($360K) and Top Region performance (West).',
      'Analyzed monthly sales trends and evaluated profitability distribution across different states.',
      'Segmented sales by categories and customer segments (Consumer, Corporate, Home Office) to extract actionable market insights.',
      'Implemented dynamic filtering (slicers) for cities and regions to ensure seamless interactive data exploration.'
    ]
  },
  {
    id: 'delivery',
    title: 'Delivery Operations Performance Dashboard',
    category: 'Operations & Logistics',
    image: 'images/project-delivery.jpeg',
    short: 'Comprehensive operations dashboard monitoring logistics and delivery efficiency, on-time rates, driver performance and operational risk.',
    tools: ['Power BI', 'Microsoft Excel', 'Data Modeling', 'Interactive Tables', 'Donut / Bar Charts'],
    tags: ['Power BI', 'Operations', 'KPIs'],
    overview: 'A comprehensive operations dashboard built to monitor and evaluate logistics and delivery efficiency, measure on-time delivery rates, and assess driver performance and operational risks.',
    problem: 'Operations teams needed continuous visibility into shipment status, delivery fees and costs, distance metrics and driver performance to control operational risk.',
    kpis: [
      { value: '1,684', label: 'Total Shipments' },
      { value: '88.8%', label: 'On-Time Delivery Rate' },
      { value: 'Medium', label: 'Operations Risk Level' }
    ],
    insights: [
      'Tracked critical operational metrics including Total Shipments (1,684), On-Time Delivery Rate (88.8%) and Operations Risk Level (Medium Risk).',
      'Analyzed total delivery fees, operational costs and distance metrics against net contribution.',
      'Monitored shipment status distribution (Delivered, Returned, Failed, Cancelled, In Transit) utilizing structured visual breakdowns.',
      'Evaluated driver performance via interactive tables measuring delivered shipments, driver IDs and average customer ratings.'
    ]
  },
  {
    id: 'risk',
    title: 'Operation Risk & SLA Management Dashboard',
    category: 'Risk & SLA Monitoring',
    image: 'images/project-risk.jpeg',
    short: 'Risk-focused dashboard tracking returned and late shipments, critical-risk orders, damaged deliveries and SLA performance by hub and driver.',
    tools: ['Power BI', 'Data Modeling', 'Bar Charts', 'Treemap'],
    tags: ['Power BI', 'Risk', 'SLA'],
    overview: 'A dedicated risk and SLA management dashboard designed to surface operational failures early — returned shipments, late deliveries, damaged orders and critical-risk shipments.',
    problem: 'The business needed to identify which regions, hubs and drivers were driving returns, delays and damages in order to manage SLA compliance and operational risk.',
    kpis: [
      { value: '121', label: 'Returned Shipments' },
      { value: '171', label: 'Late Delivered Shipments' },
      { value: '17', label: 'Critical Risk Shipments' },
      { value: '88.8%', label: 'On-Time Delivery Rate' }
    ],
    insights: [
      'Monitored returned (121), late-delivered (171) and damaged (38) shipments with dedicated KPI cards.',
      'Compared on-time delivered shipments across regions to locate under-performing areas.',
      'Ranked hubs by failed or returned shipments to target operational interventions.',
      'Tracked critical-risk shipments by year and month and evaluated driver SLA performance with on-time rates and average delivery minutes.'
    ]
  },
  {
    id: 'cars',
    title: 'Used Car Market Analysis Dashboard',
    category: 'Market Analysis',
    image: 'images/project-cars.jpeg',
    short: 'General overview of the used-car market — listings, pricing, brands, gear-type preferences and registration trends. Built with Arabic & English UI.',
    tools: ['Power BI', 'Interactive Filters', 'Trend Analysis'],
    tags: ['Power BI', 'Market Data', 'Bilingual'],
    overview: 'A market intelligence dashboard providing a general overview of used-car sales details — listings, pricing, brands and model trends — with bilingual (Arabic/English) interface elements.',
    problem: 'A broad view of the used-car market was needed to understand listing volumes, vehicle age and mileage, brand landscapes and shifts in gear-type preference over time.',
    kpis: [
      { value: '358K', label: 'Total Listings' },
      { value: '40', label: 'Brands' },
      { value: '12', label: 'Median Vehicle Age' }
    ],
    insights: [
      'Summarized market size with 358K total listings across 40 brands and 358K models.',
      'Profiled the typical listing: median age 12, average listing duration of ~8 days, and average mileage of 126K.',
      'Analyzed the trend in gear-type preference over the years.',
      'Examined vehicle listings by registration month and fuel category to spot seasonal patterns.'
    ]
  }
];

/* ---------------- Icons ---------------- */
const ICONS = {
  chart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 3 5-6"/></svg>',
  database: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
  sparkle: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="4"/></svg>',
  search: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>'
};

/* ---------------- Render skills ---------------- */
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map((s, i) => `
    <div class="skill-card reveal ${i === 1 ? 'delay-1' : i === 2 ? 'delay-2' : ''}">
      <div class="skill-head">
        <div class="skill-icon">${ICONS[s.icon]}</div>
        <h3>${s.title}</h3>
      </div>
      <div class="skill-tags">${s.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

/* ---------------- Render projects ---------------- */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal ${i % 2 === 1 ? 'delay-1' : ''}" data-id="${p.id}">
      <div class="project-media" data-open="${p.id}" role="button" tabindex="0" aria-label="Open ${p.title} case study">
        <img src="${p.image}" alt="${p.title} — dashboard screenshot" loading="lazy" />
        <div class="project-zoom"><span>${ICONS.search}</span></div>
      </div>
      <div class="project-body">
        <p class="project-category">${p.category}</p>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        <div class="project-tags">${p.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
        <div class="project-actions">
          <button class="btn-view" data-open="${p.id}">View Project
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </article>`).join('');
}

/* ---------------- Modal ---------------- */
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  modalBody.innerHTML = `
    <p class="modal-kicker">${p.category} — Case Study</p>
    <h2 id="modalTitle">${p.title}</h2>
    <div class="modal-tools">${p.tools.map(t => `<span class="skill-tag">${t}</span>`).join('')}</div>
    <div class="modal-shot">
      <img src="${p.image}" alt="${p.title} — full dashboard preview" />
    </div>
    <div class="modal-section">
      <h3>Project Overview</h3>
      <p>${p.overview}</p>
    </div>
    <div class="modal-section">
      <h3>Business Problem</h3>
      <p>${p.problem}</p>
    </div>
    <div class="modal-section">
      <h3>Key Metrics</h3>
      <div class="modal-kpis">
        ${p.kpis.map(k => `<div class="modal-kpi"><b>${k.value}</b><span>${k.label}</span></div>`).join('')}
      </div>
    </div>
    <div class="modal-section">
      <h3>Key Insights & Responsibilities</h3>
      <ul>${p.insights.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
    <div class="modal-section">
      <h3>Tools & Technologies</h3>
      <p>${p.tools.join(' · ')}</p>
    </div>`;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-panel').scrollTop = 0;
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

document.addEventListener('click', e => {
  const opener = e.target.closest('[data-open]');
  if (opener) { openModal(opener.dataset.open); return; }
  if (e.target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
  if (e.key === 'Enter' && e.target.matches('.project-media')) openModal(e.target.dataset.open);
});

/* ---------------- Navbar ---------------- */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.addEventListener('click', e => {
  if (e.target.matches('.nav-link')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

/* Active link on scroll */
const sections = [...document.querySelectorAll('section[id]')];
const linkMap = new Map([...document.querySelectorAll('.nav-link')].map(l => [l.getAttribute('href').slice(1), l]));
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      linkMap.forEach(l => l.classList.remove('active'));
      const link = linkMap.get(en.target.id);
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => spy.observe(s));

/* ---------------- Reveal on scroll ---------------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add('visible');
      revealObserver.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
function observeReveals() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

/* ---------------- Contact form (frontend, mailto fallback) ---------------- */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const data = new FormData(form);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
  );
  window.location.href = `mailto:mohamedhagaly23@gmail.com?subject=${subject}&body=${body}`;
  const note = document.getElementById('formNote');
  note.textContent = 'Opening your email client… Thank you for reaching out — I reply within 24 hours.';
  note.classList.add('success');
});

/* ---------------- Init ---------------- */
renderSkills();
renderProjects();
observeReveals();
