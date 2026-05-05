---
title: Workshops · Beyond p-values
hide:
  - toc
---

<section class="bp-hero" style="padding: 3.5rem 2rem 4rem 2rem;">
  <div class="bp-hero__inner" style="grid-template-columns: 1fr;">
    <div>
      <span class="bp-hero__eyebrow"><span class="dot"></span> Im eigenen Tempo &amp; geführt</span>
      <h1>Drei Workshops, <span class="grad">zwei Wege</span> zum Mitmachen.</h1>
      <p class="bp-hero__lead">
        Alle Inhalte laufen vollständig im Browser. Keine Installation, keine Anmeldung.
        Lerne <strong>im eigenen Tempo</strong> oder buche eine <strong>geführte Session</strong>
        für dein Team.
      </p>
    </div>
  </div>
</section>

## Zwei Wege, drei Workshops

<div class="bp-pillars">

  <a class="bp-pillar" href="#workshop-thinking" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">WEG 01 · KOSTENFREI</div>
    <h3>Im eigenen Tempo</h3>
    <p>
      Öffne die Workshop-Seite und arbeite Kapitel für Kapitel durch. Jede Lektion verbindet
      Theorie mit einer interaktiven Browser-App. Jederzeit verfügbar, ohne Anmeldung.
    </p>
  </a>

  <a class="bp-pillar" href="../kontakt/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">WEG 02 · GEBUCHT</div>
    <h3>Geführt mit uns</h3>
    <p>
      Wir kommen zu euch, online oder vor Ort, beantworten Fragen live und übersetzen die
      Inhalte auf eure Forschung. Ideal für Institute, Lehrstühle und Praxispartner.
    </p>
  </a>

</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Inhalte</span>
    <h2>Wähle deinen Workshop</h2>
    <p class="bp-section-head__lead">
      Jeder Workshop steht für sich. Wenn du neu einsteigst, empfehlen wir die gezeigte
      Reihenfolge.
    </p>
  </div>
  <a class="bp-section-head__link" href="../fragen/">Hilfe bei der Auswahl → Fragen</a>
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
      <span>· Eigenes Tempo: {{ w.duration_self }}</span>
      <span>· Geführt: {{ w.duration_guided }}</span>
    </div>

    <div class="bp-workshop__modes">

      <div class="bp-mode bp-mode--self">
        <div class="bp-mode__head">
          <span class="bp-pill bp-pill--live">Im eigenen Tempo</span>
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

## Empfohlener Lernpfad

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

## Häufige Fragen

<div class="bp-faq">
  <details>
    <summary>Muss ich etwas installieren oder ein Konto anlegen?</summary>
    <p>Nein. Alle Inhalte laufen direkt im Browser (Python via Shinylive). Keine Installation, kein Konto, keine Kosten.</p>
  </details>
  <details>
    <summary>Was kostet die geführte Variante?</summary>
    <p>Während der Förderphase kostenfrei für öffentliche Veranstaltungen. Inhouse-Schulungen kalkulieren wir nach Aufwand. <a href="../kontakt/">Anfrage stellen →</a></p>
  </details>
  <details>
    <summary>Erhalte ich ein Zertifikat?</summary>
    <p>Für geführte Workshops gibt es eine Teilnahmebescheinigung. Für ECTS-Anrechnung bitte mit deiner Hochschule abstimmen.</p>
  </details>
  <details>
    <summary>In welcher Sprache sind die Workshops?</summary>
    <p>Aktuell auf Deutsch. Eine englische Version ist in Arbeit.</p>
  </details>
  <details>
    <summary>Kann ich die Inhalte wiederverwenden?</summary>
    <p>Ja. Sämtliche Materialien stehen unter Creative-Commons-Lizenz (CC BY 4.0). Nutzbar für Lehre und Schulung mit Quellenangabe.</p>
  </details>
</div>
