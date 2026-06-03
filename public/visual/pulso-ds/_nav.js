/* Pulso DS preview — shared sidebar injection + theme/density */
(function() {
  const here = location.pathname.split('/').pop() || 'index.html';
  const inPages = location.pathname.includes('/pages/');
  const pg = (n) => inPages ? n : 'pages/' + n;

  const links = [
    { section: 'Release' },
    { name: 'Release Notes · v3',     href: inPages ? '../release-v3.html' : 'release-v3.html' },
    { name: 'Roadmap · v3',           href: inPages ? '../roadmap-v3.html' : 'roadmap-v3.html' },
    { name: 'Roadmap · v2 (histórico)', href: inPages ? '../roadmap-v2.html' : 'roadmap-v2.html' },
    { name: 'HANDOFF · v3',           href: inPages ? '../HANDOFF_v3.md' : 'HANDOFF_v3.md' },
    { section: 'Getting Started' },
    { name: 'Instalação',             href: pg('installation.html') },
    { name: 'Quick Start',            href: pg('quick-start.html') },
    { section: 'Conceitual' },
    { name: 'Conceito do Pulso',      href: pg('conceito.html') },
    { name: 'Princípios',             href: pg('principios.html') },
    { name: 'AI Interface Rules',     href: pg('ai-rules.html') },
    { name: 'Padrões de Composição',  href: pg('padroes.html') },
    { section: 'Foundations' },
    { name: 'Cores',         href: inPages ? '../index.html' : 'index.html', match: ['index.html', ''] },
    { name: 'Tipografia',    href: pg('typography.html') },
    { name: 'Espaçamento',   href: pg('spacing.html') },
    { name: 'Radii',         href: pg('radii.html') },
    { name: 'Elevation',     href: pg('elevation.html') },
    { name: 'Motion',        href: pg('motion.html') },
    { name: 'Icons',         href: pg('icons.html') },
    { section: 'Accessibility' },
    { name: 'Contraste',     href: pg('accessibility-contrast.html') },
    { name: 'Redundância de Risco', href: pg('accessibility-risk-redundancy.html') },
    { name: 'Focus & Keyboard',     href: pg('accessibility-focus-keyboard.html') },
    { name: 'Screen Readers',       href: pg('accessibility-screen-readers.html') },
    { name: 'Reduced Motion',       href: pg('accessibility-reduced-motion.html') },
    { section: 'Voice & Content' },
    { name: 'Vocabulário',          href: pg('voice-vocabulary.html') },
    { name: 'Microcopy',            href: pg('voice-microcopy.html') },
    { name: 'Localização',          href: pg('localization.html') },
    { name: 'Pulso IA · Voz',       href: pg('ai-voice.html') },
    { section: 'Data Visualization' },
    { name: 'Chart Primitives',     href: pg('chart-primitives.html') },
    { name: 'Data Color',           href: pg('data-color.html') },
    { name: 'Axes & Auxiliaries',   href: pg('chart-axes.html') },
    { name: 'Real-time Motion',     href: pg('chart-realtime.html') },
    { name: 'Chart Recipes',        href: pg('chart-recipes.html') },
    { section: 'Atoms' },
    { name: 'Button',         href: pg('button.html') },
    { name: 'Input',          href: pg('input.html') },
    { name: 'Badge',          href: pg('badge.html') },
    { name: 'Chip',           href: pg('chip.html') },
    { name: 'Avatar',         href: pg('avatar.html') },
    { name: 'Kicker',         href: pg('kicker.html') },
    { name: 'Label',          href: pg('label.html') },
    { name: 'Spinner',        href: pg('spinner.html') },
    { name: 'Skeleton',       href: pg('skeleton.html') },
    { name: 'Separator',      href: pg('separator.html') },
    { name: 'Live Indicator', href: pg('live-indicator.html') },
    { name: 'Alert',          href: pg('alert.html') },
    { name: 'Tooltip',        href: pg('tooltip.html') },
    { name: 'Progress',       href: pg('progress.html') },
    { name: 'Controls',       href: pg('controls.html') },
    { section: 'Form Atoms' },
    { name: 'Checkbox',       href: pg('checkbox.html') },
    { name: 'Radio',          href: pg('radio.html') },
    { name: 'Switch',         href: pg('switch.html') },
    { name: 'Select',         href: pg('select.html') },
    { name: 'Textarea',       href: pg('textarea.html') },
    { name: 'Slider',         href: pg('slider.html') },
    { name: 'Date Picker',    href: pg('datepicker.html') },
    { section: 'Molecules' },
    { name: 'Metric Card',    href: pg('metric-card.html') },
    { name: 'Delta Chip',     href: pg('delta-chip.html') },
    { name: 'Form Field',     href: pg('form-field.html') },
    { name: 'Input Group',    href: pg('input-group.html') },
    { name: 'Button Group',   href: pg('button-group.html') },
    { name: 'Avatar Group',   href: pg('avatar-group.html') },
    { name: 'Accordion',      href: pg('accordion.html') },
    { name: 'Empty State',    href: pg('empty-state.html') },
    { name: 'Page Header',    href: pg('page-header.html') },
    { section: 'Organisms' },
    { name: 'Table',           href: pg('table.html') },
    { name: 'Card',            href: pg('card.html') },
    { name: 'Collapsible Card',href: pg('collapsible-card.html') },
    { name: 'Tabs',            href: pg('tabs.html') },
    { name: 'Dialog',          href: pg('dialog.html') },
    { name: 'Dropdown Menu',   href: pg('dropdown.html') },
    { name: 'Command',         href: pg('command.html') },
    { name: 'Sheet',           href: pg('sheet.html') },
    { name: 'Responsive Sheet',href: pg('responsive-sheet.html') },
    { name: 'Form',            href: pg('form.html') },
    { name: 'Filter Bar',      href: pg('filter-bar.html') },
    { section: 'Patterns' },
    { name: 'Risk Levels',    href: pg('risk-levels.html') },
    { name: 'Crisis Status',  href: pg('crisis-status.html') },
    { name: 'Mention Card',   href: pg('mention-card.html') },
    { name: 'Score Ring',     href: pg('score-ring.html') },
    { name: 'Sentiment Bar',  href: pg('sentiment-bar.html') },
    { name: 'States Matrix',  href: pg('states-matrix.html') },
    { name: 'Multi-select',   href: pg('multi-select.html') },
    { section: 'Responsive & Density' },
    { name: 'Responsive',     href: pg('responsive.html') },
    { name: 'Density',        href: pg('density.html') },
    { section: 'v3 · Identidade' },
    { name: 'Identity Audit',     href: pg('identity-audit.html') },
    { name: 'Type Confidence',    href: pg('type-confidence.html') },
    { name: 'Rhythm',             href: pg('rhythm.html') },
    { name: 'Signature Shapes',   href: pg('signature-shapes.html') },
    { name: 'Brand Toolkit',      href: pg('brand-toolkit.html') },
    { section: 'v3 · IA Patterns' },
    { name: 'AI Origin Tracking',     href: pg('ai-origin-tracking.html') },
    { name: 'AI Draft & Regenerate',  href: pg('ai-draft-regenerate.html') },
    { name: 'AI Embedding',           href: pg('ai-embedding.html') },
    { name: 'AI Recommendation',      href: pg('ai-recommendation.html') },
    { name: 'AI Audit Trail',         href: pg('ai-audit-trail.html') },
    { section: 'v3 · Mobile' },
    { name: 'Mobile Gestures',        href: pg('mobile-gestures.html') },
    { name: 'Offline-first',          href: pg('mobile-offline.html') },
    { name: 'Push Handover',          href: pg('mobile-handover.html') },
    { name: 'Native Token Foundation',href: pg('mobile-native-tokens.html') },
    { section: 'Governance' },
    { name: 'Token Architecture', href: pg('token-architecture.html') },
    { name: 'Figma ↔ Code',       href: pg('figma-parity.html') },
    { name: 'RFC & Deprecation',  href: pg('rfc-process.html') },
    { name: 'Adoption Metrics',   href: pg('adoption-metrics.html') },
    { section: 'Templates' },
    { name: 'Dashboard',      href: pg('tpl-dashboard.html') },
    { name: 'Crisis Detail',  href: pg('tpl-crisis-detail.html') },
    { name: 'Settings',       href: pg('tpl-settings.html') },
    { name: 'Auth',           href: pg('tpl-auth.html') },
    { name: 'Onboarding',     href: pg('tpl-onboarding.html') },
    { name: 'Search',         href: pg('tpl-search.html') },
    { name: 'Notifications',  href: pg('tpl-notifications.html') },
    { name: 'Audit Log',      href: pg('tpl-audit-log.html') },
  ];

  const sb = document.getElementById('sb');
  if (!sb) return;

  const sunIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;
  const moonIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  let html = `
    <div class="sb-brand">
      <div class="sb-brand-mark">P</div>
      <div style="flex:1;min-width:0;">
        <div class="sb-brand-name">Pulso DS</div>
        <div class="sb-brand-sub">v3.0 · estável</div>
      </div>
      <div class="sb-theme">
        <button class="theme-btn" data-theme="light" aria-label="Light theme" title="Light">${sunIcon}</button>
        <button class="theme-btn" data-theme="dark" aria-label="Dark theme" title="Dark">${moonIcon}</button>
      </div>
    </div>`;

  const groups = [];
  let currentGroup = null;

  for (const item of links) {
    if (item.section) {
      currentGroup = { section: item.section, items: [], active: false };
      groups.push(currentGroup);
    } else {
      if (!currentGroup) {
        currentGroup = { section: 'Navigation', items: [], active: false };
        groups.push(currentGroup);
      }
      const itemFile = (item.href || '').split('/').pop();
      const isActive = itemFile === here ||
                       (item.match && item.match.includes(here));
      currentGroup.active = currentGroup.active || isActive;
      currentGroup.items.push({ ...item, isActive });
    }
  }

  for (const [index, group] of groups.entries()) {
    const groupId = `sb-group-${index}`;
    const isOpen = group.active;
    html += `
      <div class="sb-group${group.active ? ' active' : ''}" data-open="${isOpen ? 'true' : 'false'}">
        <button class="sb-section" type="button" aria-expanded="${isOpen ? 'true' : 'false'}" aria-controls="${groupId}">
          <span>${group.section}</span>
          <svg class="sb-section-i" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="sb-items" id="${groupId}">
    `;
    for (const item of group.items) {
      html += `<a class="sb-link${item.isActive ? ' active' : ''}" href="${item.href}">${item.name}</a>`;
    }
    html += `</div></div>`;
  }

  html += `<div style="height:8px;"></div>`;

  sb.innerHTML = html;

  const main = document.querySelector('.main');
  if (main && !document.querySelector('.tweaks')) {
    const tw = document.createElement('div');
    tw.className = 'tweaks';
    tw.innerHTML = `
      <span class="tw-label">Density</span>
      <button class="tw-btn" data-density="compact">Compact</button>
      <button class="tw-btn" data-density="comfortable">Comfort</button>
      <button class="tw-btn" data-density="spacious">Spacious</button>
    `;
    main.prepend(tw);
  }

  function applyTheme(t) {
    document.documentElement.classList.toggle('dark', t === 'dark');
    localStorage.setItem('pulso-theme', t);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === t));
  }
  function applyDensity(d) {
    document.documentElement.setAttribute('data-density', d);
    localStorage.setItem('pulso-density', d);
    document.querySelectorAll('.tw-btn').forEach(b => b.classList.toggle('active', b.dataset.density === d));
  }
  document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', () => applyTheme(b.dataset.theme)));
  document.querySelectorAll('.tw-btn').forEach(b => b.addEventListener('click', () => applyDensity(b.dataset.density)));
  document.querySelectorAll('.sb-section').forEach(button => {
    button.addEventListener('click', () => {
      const targetGroup = button.closest('.sb-group');
      const shouldOpen = targetGroup?.dataset.open !== 'true';

      document.querySelectorAll('.sb-group').forEach(group => {
        const isTarget = group === targetGroup;
        const isOpen = isTarget && shouldOpen;
        group.dataset.open = isOpen ? 'true' : 'false';
        group.querySelector('.sb-section')?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    });
  });

  applyTheme(localStorage.getItem('pulso-theme') || 'light');
  applyDensity(localStorage.getItem('pulso-density') || 'comfortable');

  /* Scroll active sidebar link into view — without using scrollIntoView,
     which can hijack the page scroll. Centers the active link inside the
     scrollable sidebar so the user always sees where they are. */
  requestAnimationFrame(() => {
    const active = sb.querySelector('.sb-link.active');
    if (!active) return;
    const sbRect = sb.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();
    const linkOffset = linkRect.top - sbRect.top + sb.scrollTop;
    const target = linkOffset - (sb.clientHeight / 2) + (active.offsetHeight / 2);
    sb.scrollTop = Math.max(0, target);
  });
})();
