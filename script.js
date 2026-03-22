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
    .map(({ label, href, newTab }) => renderAnchor(label, href, newTab))
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

const renderPage = () => {
  setText("brand-name", siteData.brandName || siteData.name);
  setText("hero-title", siteData.heroTitle);
  setText("hero-accent", siteData.heroAccent);
  renderSummary();
  renderLinks("footer-social-links");
  renderList("article-preview", siteData.articles);
  renderList("reading-preview", siteData.reading);
  renderAiLlmPreview();
  renderLearningPreview();
};

renderPage();
