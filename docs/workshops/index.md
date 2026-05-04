---
title: Workshops — Beyond p-values
hide:
  - toc
---

<section class="bp-hero" style="padding: 3.5rem 2rem 4rem 2rem;">
  <div class="bp-hero__inner" style="grid-template-columns: 1fr;">
    <div>
      <span class="bp-hero__eyebrow"><span class="dot"></span> Workshops · Self-paced &amp; geführt</span>
      <h1>Drei Workshops — <span class="grad">zwei Wege</span> zum Mitmachen.</h1>
      <p class="bp-hero__lead">
        Alle Inhalte laufen vollständig im Browser (Python via Shinylive, kein Setup). Du wählst,
        wie du sie nutzt: <strong>selbstständig</strong> in deinem Tempo — oder
        <strong>geführt</strong> als gebuchten Live-Workshop für dein Team.
      </p>
    </div>
  </div>
</section>

## So funktionieren die zwei Wege

<div class="bp-pillars">

  <div class="bp-pillar">
    <div class="bp-pillar__num">WEG 01 · KOSTENFREI</div>
    <h3>Selbstständig (Self-paced)</h3>
    <p>
      Öffne die Workshop-Seite, arbeite Kapitel für Kapitel durch. Jede Lektion enthält
      Theorie + interaktive Browser-App. Lerne in deinem Tempo, jederzeit, ohne Anmeldung.
    </p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">WEG 02 · GEBUCHT</div>
    <h3>Geführt durch uns</h3>
    <p>
      Wir kommen zu euch (online oder vor Ort), führen durch die Inhalte, beantworten Fragen
      live und übersetzen Beispiele auf eure Forschung. Ideal für Institute, Lehrstühle und
      Praxispartner.
    </p>
  </div>

</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Drei Workshops · Inhalte</span>
    <h2>Wähle deinen Workshop</h2>
    <p class="bp-section-head__lead">
      Jeder Workshop ist eigenständig nutzbar. Empfehlung: in der gezeigten Reihenfolge,
      wenn du frisch einsteigst.
    </p>
  </div>
  <a class="bp-section-head__link" href="../fragen/">Hilfe bei der Auswahl? → Fragen</a>
</div>

{% for key in ["thinking", "power", "reliability"] %}
{% set w = workshops[key] %}

<article class="bp-workshop">
  <header class="bp-workshop__head bp-tone-{{ w.tone }}">
    <div class="bp-workshop__num">{{ w.number }}</div>
    <div>
      <span class="bp-workshop__eyebrow">{{ w.eyebrow }}</span>
      <h3 class="bp-workshop__title">{{ w.title }}</h3>
      <p class="bp-workshop__subtitle">{{ w.subtitle }}</p>
    </div>
  </header>

  <div class="bp-workshop__body">
    <p class="bp-workshop__tagline">{{ w.tagline }}</p>

    <div class="bp-workshop__meta">
      <span><strong>{{ w.chapters_count }}</strong> Kapitel</span>
      <span>· {{ w.level }}</span>
      <span>· Self-paced: {{ w.duration_self }}</span>
      <span>· Geführt: {{ w.duration_guided }}</span>
    </div>

    <div class="bp-workshop__modes">

      <div class="bp-mode bp-mode--self">
        <div class="bp-mode__head">
          <span class="bp-pill bp-pill--live">Selbstständig</span>
          <strong>kostenfrei</strong>
        </div>
        <p>{{ w.goal_self }}</p>
        <a class="bp-btn bp-btn--primary" href="{{ w.base }}/" target="_blank" rel="noopener">
          Workshop starten →
        </a>
      </div>

      <div class="bp-mode bp-mode--guided">
        <div class="bp-mode__head">
          <span class="bp-pill bp-pill--soon">Geführt buchen</span>
          <strong>auf Anfrage</strong>
        </div>
        <p>{{ w.goal_guided }}</p>
        <a class="bp-btn bp-btn--ghost" href="../{{ w.slug }}/#booking">
          Geführt buchen →
        </a>
      </div>

    </div>

    <div class="bp-workshop__footer">
      <a class="bp-section-head__link" href="../{{ w.slug }}/">
        Mehr Details &amp; Kapitelübersicht →
      </a>
    </div>
  </div>
</article>

{% endfor %}

## Lernpfad — Empfehlung

<div class="bp-timeline">
  {% for key in ["thinking", "power", "reliability"] %}
  {% set w = workshops[key] %}
  <div class="bp-timeline__item">
    <div class="bp-timeline__date">Schritt {{ w.number }}</div>
    <h3 class="bp-timeline__title">{{ w.title }}</h3>
    <p>{{ w.tagline }}</p>
  </div>
  {% endfor %}
</div>

## FAQ

<div class="bp-faq">
  <details>
    <summary>Brauche ich Vorinstallation oder ein Konto?</summary>
    <p>Nein. Alle Inhalte laufen direkt im Browser (Python via Shinylive). Es entstehen keine Kosten und es ist kein Konto nötig.</p>
  </details>
  <details>
    <summary>Was kostet die geführte Variante?</summary>
    <p>Während der Förderphase kostenfrei für öffentliche Veranstaltungen. Inhouse-Schulungen werden nach Aufwand kalkuliert. <a href="../kontakt/">Anfrage stellen</a>.</p>
  </details>
  <details>
    <summary>Erhalte ich ein Zertifikat?</summary>
    <p>Geführte Workshops werden mit einer Teilnahmebescheinigung abgeschlossen. Für ECTS-Anrechnung bitte mit deiner Hochschule abstimmen.</p>
  </details>
  <details>
    <summary>In welcher Sprache sind die Workshops?</summary>
    <p>Inhalte aktuell auf Deutsch. Englische Versionen sind in Arbeit.</p>
  </details>
  <details>
    <summary>Kann ich Inhalte wiederverwenden?</summary>
    <p>Ja. Materialien werden unter Creative-Commons-Lizenz veröffentlicht — nutzbar für Lehre und Schulung mit Quellenangabe.</p>
  </details>
</div>
