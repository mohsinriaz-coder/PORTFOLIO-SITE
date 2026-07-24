/* ============================================================
   EDIT ME — your real links live here.
   Replace the "#" placeholders with your actual URLs.
   Anything left as "#" or empty will just not render a link icon.
   ============================================================ */
const LINKS = {
  github:   "#",   // e.g. "https://github.com/yourusername"
  linkedin: "#",   // e.g. "https://linkedin.com/in/yourusername"
  email:    "mailto:mohsinriaz1144@gamil.com",
  phone:    "tel:+923140415965",
};

const PROJECTS = [
  {
    id: "01",
    title: "Banking Management System",
    desc: "Account logic, security & data structures built with OOP principles.",
    tags: ["Java", "OOP"],
    url: "#" // add a GitHub repo or live demo link here
  },
  {
    id: "02",
    title: "Student Enrollment & Grades",
    desc: "A system for tracking enrollment records and grade data.",
    tags: ["Java", "MySQL"],
    url: "#"
  },
  {
    id: "03",
    title: "Restaurant Management",
    desc: "Responsive UI built with HTML, CSS, JavaScript & React.",
    tags: ["React", "JS"],
    url: "#"
  },
  {
    id: "04",
    title: "Doctor Appointment System",
    desc: "Scheduling and booking logic for clinic appointments.",
    tags: ["Java", "MongoDB"],
    url: "#"
  },
  {
    id: "05",
    title: "To-Do List",
    desc: "A lightweight task manager for organizing daily work.",
    tags: ["JS", "Node.js"],
    url: "#"
  },
  {
    id: "06",
    title: "Personal Portfolio",
    desc: "This site — designed and built to present the work above.",
    tags: ["HTML", "CSS"],
    url: "#"
  }
];

/* ============================================================
   Render projects from the config above
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById("proj-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(p => {
    const hasLink = p.url && p.url !== "#";
    const tagsHtml = p.tags.map(t => `<span>${t}</span>`).join("");
    const linkIcon = `
      <div class="proj-link-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
          <path d="M7 17L17 7M7 7h10v10"/>
        </svg>
      </div>`;
    const inner = `
      <div>
        <div class="proj-top">
          <div class="proj-mark">${p.id}</div>
          ${hasLink ? linkIcon : ""}
        </div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
      <div class="proj-tags">${tagsHtml}</div>
    `;

    return hasLink
      ? `<a class="proj-card" href="${p.url}" target="_blank" rel="noopener noreferrer">${inner}</a>`
      : `<div class="proj-card">${inner}</div>`;
  }).join("");
}

/* ============================================================
   Render social icons in the footer from LINKS config
   ============================================================ */
function renderSocial() {
  const wrap = document.getElementById("foot-social");
  if (!wrap) return;

  const icons = {
    github: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/></svg>`,
    email: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z"/></svg>`
  };

  wrap.innerHTML = Object.entries(LINKS)
    .filter(([, url]) => url && url !== "#")
    .map(([key, url]) => {
      const external = key === "github" || key === "linkedin";
      return `<a href="${url}" aria-label="${key}" ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>${icons[key] || ""}</a>`;
    })
    .join("");
}

/* ============================================================
   Mobile menu toggle
   ============================================================ */
function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const links = document.getElementById("navlinks");
  if (!btn || !links) return;

  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ============================================================
   Copy email button
   ============================================================ */
function initCopyEmail() {
  const btn = document.getElementById("copy-email");
  if (!btn) return;
  btn.addEventListener("click", async () => {
    const email = LINKS.email.replace("mailto:", "");
    try {
      await navigator.clipboard.writeText(email);
      btn.classList.add("copied");
      btn.textContent = "Copy Email";
      setTimeout(() => btn.classList.remove("copied"), 1600);
    } catch {
      window.location.href = LINKS.email;
    }
  });
}

/* ============================================================
   Scroll reveal
   ============================================================ */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ============================================================
   Animated counters
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const dur = 1100;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

/* ============================================================
   Scroll progress bar + back-to-top
   ============================================================ */
function initScrollUI() {
  const progress = document.getElementById("progress");
  const totop = document.getElementById("totop");
  if (!progress || !totop) return;

  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = pct + "%";
    totop.classList.toggle("show", h.scrollTop > 600);
  });
  totop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ============================================================
   Active nav link highlighting
   ============================================================ */
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navlinks a");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { threshold: 0.5, rootMargin: "-80px 0px -60% 0px" });
  sections.forEach(s => io.observe(s));
}

/* ============================================================
   Infinite tech ticker
   ============================================================ */
function initTicker() {
  const track = document.getElementById("ticker-track");
  if (track) track.innerHTML += track.innerHTML;
}

/* ============================================================
   Hero cursor spotlight (desktop only, respects reduced motion)
   ============================================================ */
function initSpotlight() {
  const hero = document.getElementById("hero");
  const spot = document.getElementById("spotlight");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || !spot || reduced) return;

  hero.addEventListener("mousemove", (e) => {
    const r = hero.getBoundingClientRect();
    spot.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    spot.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  });
}

/* ============================================================
   Footer year
   ============================================================ */
function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ============================================================
   Boot
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSocial();
  initMobileMenu();
  initCopyEmail();
  initReveal();
  initCounters();
  initScrollUI();
  initActiveNav();
  initTicker();
  initSpotlight();
  initYear();
});
