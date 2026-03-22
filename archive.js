const setBrand = () => {
  const brand = document.getElementById("brand-name");

  if (brand) {
    brand.textContent = siteData.brandName || siteData.name;
  }
};

const renderAnchor = (label, href, newTab = false) => {
  const isExternal = /^https?:\/\//.test(href);
  const shouldOpenInNewTab = isExternal || newTab;
  const attrs = shouldOpenInNewTab ? ' target="_blank" rel="noreferrer"' : "";

  return `<a href="${href}"${attrs}>${label}</a>`;
};

const renderArchiveList = (items) => {
  const container = document.getElementById("archive-list");

  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      ({ meta, title, subtitle, href }) => `
        <article class="archive-item">
          <p class="item-meta">${meta}</p>
          <div>
            <div class="archive-item-title">${renderAnchor(title, href)}</div>
            <p class="list-item-subtitle">${subtitle}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const renderLearningArchive = () => {
  const container = document.getElementById("learning-archive");

  if (!container) {
    return;
  }

  container.innerHTML = siteData.learning
    .map(
      ({ label, title, description, items, href }) => `
        <article class="note-card">
          <p class="learning-label">${label}</p>
          <div class="card-head">
            <h3>${title}</h3>
            ${renderAnchor("Archive", href)}
          </div>
          <p>${description}</p>
          <ul>
            ${items.map((item) => `<li>${renderAnchor(item.title, item.href)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
};

const renderLearningDetail = () => {
  const container = document.getElementById("archive-list");

  if (!container) {
    return;
  }

  const key = document.body.dataset.learningKey;
  const entry = siteData.learning.find((item) => item.key === key);

  if (!entry) {
    return;
  }

  const title = document.getElementById("archive-title");
  const intro = document.getElementById("archive-intro");

  if (title) {
    title.textContent = entry.archiveTitle;
  }

  if (intro) {
    intro.textContent = entry.archiveIntro;
  }

  container.innerHTML = entry.items
    .map(
      ({ meta, title: itemTitle, subtitle, href }, index) => `
        <article class="archive-item">
          <p class="item-meta">${meta || String(index + 1).padStart(2, "0")}</p>
          <div>
            <div class="archive-item-title">${renderAnchor(itemTitle, href)}</div>
            <p class="list-item-subtitle">${subtitle}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const renderAiArchive = () => {
  const container = document.getElementById("archive-list");

  if (!container) {
    return;
  }

  const title = document.getElementById("archive-title");
  const intro = document.getElementById("archive-intro");

  if (title) {
    title.textContent = siteData.aiLlms.title;
  }

  if (intro) {
    intro.textContent = siteData.aiLlms.description;
  }

  container.innerHTML = siteData.aiLlms.items
    .map(
      ({ meta, title: itemTitle, subtitle, href }) => `
        <article class="archive-item">
          <p class="item-meta">${meta}</p>
          <div>
            <div class="archive-item-title">${renderAnchor(itemTitle, href)}</div>
            <p class="list-item-subtitle">${subtitle}</p>
          </div>
        </article>
      `
    )
    .join("");
};

const page = document.body.dataset.page;

setBrand();

if (page === "articles") {
  renderArchiveList(siteData.articles);
}

if (page === "reading") {
  renderArchiveList(siteData.reading);
}

if (page === "learning") {
  renderLearningArchive();
}

if (page === "learning-detail") {
  renderLearningDetail();
}

if (page === "ai") {
  renderAiArchive();
}
