/* Beyond p-values — kleine UI-Helfer */

(function () {
  // ---------------------------------------------------------
  // Reveal-Animation für Karten
  // ---------------------------------------------------------
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  function initReveal() {
    const targets = document.querySelectorAll(
      ".bp-bento__cell, .bp-card, .bp-pillar, .bp-stat, .bp-person"
    );
    targets.forEach((el, i) => {
      if (el.dataset.bpReveal === "1") return;
      el.dataset.bpReveal = "1";
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition =
        "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) " +
        Math.min(i * 40, 320) +
        "ms, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) " +
        Math.min(i * 40, 320) +
        "ms";
      observer.observe(el);
    });
  }

  // ---------------------------------------------------------
  // Glossar-Tooltips: <abbr title="..."> -> <abbr data-tip="...">
  // Verhindert den langsamen, unstylebaren nativen Browser-Tooltip
  // und aktiviert das CSS-Tooltip aus extra.css.
  // ---------------------------------------------------------
  function initTooltips() {
    document.querySelectorAll("abbr[title]").forEach((el) => {
      const tip = el.getAttribute("title");
      if (!tip) return;
      el.dataset.tip = tip;
      el.removeAttribute("title");
      // Macht Tooltip per Tastatur fokussierbar (a11y) und auf Touch-Geräten antippbar
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
    });
  }

  function init() {
    initReveal();
    initTooltips();
  }

  // mkdocs-material navigation.instant — re-init bei Page-Wechsel
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => init());
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }

  // ---------------------------------------------------------
  // Newsletter-Form: Demo-Handler (nicht angeschlossen)
  // ---------------------------------------------------------
  document.addEventListener("submit", (e) => {
    const form = e.target.closest(".bp-callout form");
    if (!form) return;
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const btn = form.querySelector("button");
    if (input && input.value) {
      btn.textContent = "Eingetragen ✓";
      btn.disabled = true;
      input.value = "";
      setTimeout(() => {
        btn.textContent = "Anmelden";
        btn.disabled = false;
      }, 2400);
    }
  });
})();
