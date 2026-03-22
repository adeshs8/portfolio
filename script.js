const PREVIEW_COUNT = 3;

const setText = (id, value) => {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
};

const renderAnchor = (label, href, newTab = false) => {
  const isExternal = /^https?:\/\//.test(href);
  const shouldOpenInNewTab = isExternal || newTab;
  const attrs = shouldOpenInNewTab ? ' target="_blank" rel="noreferrer"' : "";

  return `<a href="${href}"${attrs}>${label}</a>`;
};

const iconMap = {
  LinkedIn: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5V19H3.5V8.5h3.44ZM5.22 3A2.02 2.02 0 1 1 5.2 7.04 2.02 2.02 0 0 1 5.22 3Zm15.28 9.58V19h-3.43v-5.9c0-1.48-.53-2.48-1.85-2.48-1.01 0-1.61.68-1.87 1.34-.1.23-.12.56-.12.9V19H9.8s.05-9.56 0-10.5h3.43v1.49l-.02.03h.02v-.03c.46-.71 1.28-1.73 3.11-1.73 2.27 0 3.97 1.48 3.97 4.66Z" fill="currentColor"/>
    </svg>
  `,
  Resume: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.75A1.75 1.75 0 0 1 8.75 2h4.94c.46 0 .9.18 1.23.51l3.57 3.57c.33.33.51.77.51 1.23v12.94A1.75 1.75 0 0 1 17.25 22h-8.5A1.75 1.75 0 0 1 7 20.25V3.75Zm7 0V7h3.25M9.5 11h5m-5 3h5m-5 3h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  GitHub: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.38 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.07A9.3 9.3 0 0 1 12 6.85c.85 0 1.71.12 2.52.36 1.91-1.35 2.75-1.07 2.75-1.07.55 1.41.2 2.46.1 2.72.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.84-4.57 5.1.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
    </svg>
  `,
  Substack: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4.5h16v2H4zm0 4h16v2H4zm0 4h16v6.5l-8-3-8 3Z" fill="currentColor"/>
    </svg>
  `,
  Medium: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7.5c0-.28.22-.5.5-.5h1.93c.2 0 .38.12.46.3l4.1 9.52 4.5-9.52c.08-.17.26-.28.45-.28h1.85c.28 0 .5.22.5.5v9c0 .28-.22.5-.5.5h-1.5a.5.5 0 0 1-.5-.5v-5.54l-3.53 7.45a.5.5 0 0 1-.9 0l-3.28-7.62v5.71a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5v-9Z" fill="currentColor"/>
    </svg>
  `
};

const renderIconAnchor = (label, href, newTab = false) => {
  const isExternal = /^https?:\/\//.test(href);
  const shouldOpenInNewTab = isExternal || newTab;
  const attrs = shouldOpenInNewTab ? ' target="_blank" rel="noreferrer"' : "";
  const icon = iconMap[label] || label;

  return `<a class="social-icon-link" href="${href}" aria-label="${label}" title="${label}"${attrs}>${icon}</a>`;
};

const renderSummary = () => {
  const container = document.getElementById("hero-summary");

  if (!container) {
    return;
  }

  container.innerHTML = siteData.summary.map((item) => `<p>${item}</p>`).join("");
};

const renderLinks = (id) => {
  const container = document.getElementById(id);

  if (!container) {
    return;
  }

  container.innerHTML = siteData.socialLinks
    .map(({ label, href, newTab }) => renderIconAnchor(label, href, newTab))
    .join("");
};

const renderList = (id, items) => {
  const container = document.getElementById(id);

  if (!container) {
    return;
  }

  container.innerHTML = items
    .slice(0, PREVIEW_COUNT)
    .map(
      ({ meta, title, subtitle, href }) => `
        <article class="list-item">
          <p class="item-meta">${meta}</p>
          <div>
            <div class="list-item-title">${renderAnchor(title, href)}</div>
            <p class="list-item-subtitle">${subtitle}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const renderLearningPreview = () => {
  const container = document.getElementById("learning-preview");

  if (!container) {
    return;
  }

  container.innerHTML = siteData.learning
    .map(
      ({ label, title, description, items, href }) => `
        <article class="learning-card">
          <p class="learning-label">${label}</p>
          <div class="card-head">
            <h3>${title}</h3>
            ${renderAnchor("Archive", href)}
          </div>
          <p>${description}</p>
          <ul>
            ${items
              .slice(0, PREVIEW_COUNT)
              .map((item) => `<li>${renderAnchor(item.title, item.href)}</li>`)
              .join("")}
          </ul>
        </article>
      `
    )
    .join("");
};

const renderAiLlmPreview = () => {
  const container = document.getElementById("ai-llm-preview");

  if (!container) {
    return;
  }

  const { title, description, items, href } = siteData.aiLlms;
  container.innerHTML = `
    <article class="note-card">
      <div class="card-head">
        <h3>${title}</h3>
        ${renderAnchor("Archive", href)}
      </div>
      <p>${description}</p>
      <ul>
        ${items
          .slice(0, PREVIEW_COUNT)
          .map((item) => `<li>${renderAnchor(item.title, item.href)}</li>`)
          .join("")}
      </ul>
    </article>
  `;
};

const renderFeaturedWork = () => {
  const container = document.getElementById("featured-work-card");

  if (!container) {
    return;
  }

  container.innerHTML = siteData.featuredWork
    .map(
      ({ meta, title, subtitle, href, context, cta }) => `
        <article class="featured-card">
          <div class="featured-meta-row">
            <p class="item-meta">${meta}</p>
            ${renderAnchor(cta || "View project", href)}
          </div>
          <h3>${renderAnchor(title, href)}</h3>
          <p class="featured-summary">${subtitle}</p>
          <p>${context}</p>
        </article>
      `
    )
    .join("");
};

const renderPage = () => {
  setText("brand-name", siteData.brandName || siteData.name);
  setText("hero-title", siteData.heroTitle);
  setText("hero-accent", siteData.heroAccent);
  renderSummary();
  renderFeaturedWork();
  renderLinks("footer-social-links");
  renderList("article-preview", siteData.articles);
  renderList("reading-preview", siteData.reading);
  renderAiLlmPreview();
  renderLearningPreview();
};

renderPage();
