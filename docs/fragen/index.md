---
title: Fragen — Themenzentrierter Einstieg
hide:
  - toc
---

<section class="bp-hero" style="padding: 3.5rem 2rem 4rem 2rem;">
  <div class="bp-hero__inner" style="grid-template-columns: 1fr;">
    <div>
      <span class="bp-hero__eyebrow"><span class="dot"></span> Themenzentrierter Einstieg</span>
      <h1>Was willst du <span class="grad">wirklich wissen?</span></h1>
      <p class="bp-hero__lead">
        Statt durch Methoden-Kapitel zu blättern, starte mit deiner Frage. Jede Karte führt
        dich ohne Umwege zu den passenden Workshop-Kapiteln und Methoden-Seiten.
      </p>
    </div>
  </div>
</section>

## Wähle deine Frage

<div class="bp-questions">

{% for q in questions %}
  <details class="bp-question{% if q.tone %} tone-{{ q.tone }}{% endif %}" id="{{ q.key }}">
    <summary>
      <span class="bp-question__icon">{{ q.icon }}</span>
      <span class="bp-question__text">
        <strong>{{ q.title }}</strong>
        <span class="bp-question__lead">{{ q.lead }}</span>
      </span>
      <span class="bp-question__chev">+</span>
    </summary>
    <div class="bp-question__body">
      <p class="bp-question__hint">Direkt einsteigen — die Workshop-Kapitel öffnen sich in einem neuen Tab:</p>
      <div class="bp-question__links">
        {% for l in q.links %}
          {% if l.type == "chapter" %}
            {% set ws = workshops[l.workshop] %}
            {% set ch = ws.chapters[l.chapter - 1] %}
            <a class="bp-qlink bp-qlink--chapter" href="{{ ws.base }}/{{ ch.file }}" target="_blank" rel="noopener">
              <span class="bp-qlink__tag">{{ ws.title }} · Kapitel {{ ch.num }}</span>
              <span class="bp-qlink__title">{{ l.label }}</span>
              <span class="bp-qlink__meta">⏱ {{ ch.time }} · {{ ch.level }} · ↗ extern</span>
            </a>
          {% elif l.type == "method" %}
            <a class="bp-qlink bp-qlink--method" href="../{{ l.path }}">
              <span class="bp-qlink__tag">Methoden-Vertiefung</span>
              <span class="bp-qlink__title">{{ l.label }}</span>
              <span class="bp-qlink__meta">📖 Lesedauer 10–20 min</span>
            </a>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </details>
{% endfor %}

</div>

<hr class="bp-sep">

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Weiterführend</span>
    <h2>Wenn keine Frage passt</h2>
    <p class="bp-section-head__lead">Hier die zwei klassischen Wege ins Material — entweder über Workshops oder direkt über die Methoden-Seiten.</p>
  </div>
</div>

<div class="bp-pillars">
  <a class="bp-pillar" href="../workshops/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ WORKSHOPS</div>
    <h3>Strukturiert lernen</h3>
    <p>Drei Workshops — jeweils im eigenen Tempo oder als geführte Veranstaltung buchbar.</p>
  </a>
  <a class="bp-pillar" href="../methoden/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ METHODEN</div>
    <h3>Konzepte vertiefen</h3>
    <p>p-Werte, Effektgrößen, Stichproben und bayesianische Datenanalyse — kompakt erklärt.</p>
  </a>
  <a class="bp-pillar" href="../kontakt/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ KONTAKT</div>
    <h3>Frage fehlt?</h3>
    <p>Schreib uns — wir nehmen häufig nachgefragte Themen in diese Sektion auf.</p>
  </a>
</div>
