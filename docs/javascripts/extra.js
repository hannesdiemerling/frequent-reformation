/* Beyond p-values — kleine UI-Helfer */

(function () {
  // Sanfte Reveal-Animation für Bento- und Karussell-Karten
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

  function init() {
    const targets = document.querySelectorAll(
      ".bp-bento__cell, .bp-card, .bp-pillar, .bp-stat, .bp-person"
    );
    targets.forEach((el, i) => {
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

  // mkdocs-material navigation.instant - re-init on page change
  if (typeof document$ !== "undefined") {
    document$.subscribe(() => init());
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }

  // Newsletter-Form: Demo-Handler (nicht angeschlossen)
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
