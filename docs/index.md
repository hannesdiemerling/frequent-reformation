---
hide:
  - navigation
  - toc
title: Beyond p-values — Hub für bayesianische Statistik
---

<section class="bp-hero">
  <div class="bp-hero__inner">
    <div>
      <span class="bp-hero__eyebrow"><span class="dot"></span> Pioniervorhaben · Wissenschaftssystem</span>
      <h1>Jenseits des <span class="grad">p-Werts</span>.<br>Bayesianisch denken.</h1>
      <p class="bp-hero__lead">
        Werkzeuge, Workshops und Wissen für eine Wissenschaft, die Evidenz nicht mehr an einer
        willkürlichen Schwelle festmacht — sondern an Effekten, Präzision und der Stärke der Evidenz
        für eine Hypothese.
      </p>
      <div class="bp-hero__ctas">
        <a class="bp-btn bp-btn--primary" href="workshops/">Workshops starten →</a>
        <a class="bp-btn bp-btn--ghost" href="fragen/">Mit einer Frage anfangen</a>
      </div>
    </div>
    <div class="bp-hero__visual">
      <img src="assets/Logo2.png" alt="Beyond p-values Logo">
    </div>
  </div>
</section>

<div class="bp-stats">
  <div class="bp-stat">
    <span class="bp-stat__num">61&nbsp;%</span>
    <span class="bp-stat__label">Falsch-positiv-Rate möglich, wenn Questionable Research Practices im Spiel sind <em>(Simmons et&nbsp;al., 2011)</em>.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">3</span>
    <span class="bp-stat__label">interaktive Workshops — vollständig im Browser, self-paced oder geführt.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">{{ workshops.thinking.chapters_count + workshops.power.chapters_count + workshops.reliability.chapters_count }}</span>
    <span class="bp-stat__label">Kapitel mit Theorie + interaktiven Beispielen rund um SmartRail.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">2015</span>
    <span class="bp-stat__label">verbietet <em>Basic and Applied Social Psychology</em> als erstes Journal p-Werte vollständig.</span>
  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Bento · Überblick</span>
    <h2>Drei Wege ins Material</h2>
    <p class="bp-section-head__lead">
      Strukturiert über Workshops. Themenzentriert über Fragen. Vertieft über die Methoden-Seiten.
      Wähle den Einstieg, der dir gerade dient.
    </p>
  </div>
  <a class="bp-section-head__link" href="ueber/">Mehr über das Projekt →</a>
</div>

<div class="bp-bento">

  <a class="bp-bento__cell x4 y2 tone-navy" href="workshops/">
    <span class="icon">▶</span>
    <div>
      <h3>Workshops — strukturiert lernen</h3>
      <p>
        Drei Workshops mit insgesamt {{ workshops.thinking.chapters_count + workshops.power.chapters_count + workshops.reliability.chapters_count }} Kapiteln. Vollständig im Browser nutzbar — als Self-paced oder als
        gebuchter Live-Workshop für dein Team.
      </p>
    </div>
  </a>

  <a class="bp-bento__cell x2 tone-coral" href="fragen/">
    <span class="icon">?</span>
    <h3>Fragen — themenzentriert</h3>
    <p>Klick auf deine Frage → direkt zum passenden Kapitel.</p>
  </a>

  <a class="bp-bento__cell x2" href="methoden/p-werte/">
    <span class="icon">⚠</span>
    <h3>Probleme des p-Werts</h3>
    <p>Sieben verbreitete Fehlannahmen — kompakt erklärt.</p>
  </a>

  <a class="bp-bento__cell x3 tone-teal" href="ressourcen/tools/">
    <span class="icon">⚙</span>
    <h3>Tools & Software</h3>
    <p>Niederschwellige Bayes-Workflows mit JASP, Jamovi, brms, PyMC.</p>
  </a>

  <a class="bp-bento__cell x3 tone-sand">
    <span class="icon">✦</span>
    <div>
      <span class="quote">„The earth is round (p &lt; .05).“</span>
      <div class="quote-author">— Jacob Cohen, 1994</div>
    </div>
  </a>

  <a class="bp-bento__cell x2" href="methoden/effektgroessen/">
    <span class="icon">d</span>
    <h3>Effektgrößen</h3>
    <p>Cohen's d, Hedges' g, η² — verstehen und interpretieren.</p>
  </a>

  <a class="bp-bento__cell x2" href="methoden/stichproben/">
    <span class="icon">N</span>
    <h3>Stichproben & Präzision</h3>
    <p>Wie viele brauche ich wirklich? Simulation statt Daumenregel.</p>
  </a>

  <a class="bp-bento__cell x2" href="ressourcen/literatur/">
    <span class="icon">📚</span>
    <h3>Literatur</h3>
    <p>Kuratierte Bücher, Reviews und Schlüsselpapers.</p>
  </a>

</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Workshops · Self-paced &amp; geführt</span>
    <h2>Drei Lernpfade — zwei Wege</h2>
    <p class="bp-section-head__lead">
      Jeder Workshop läuft komplett im Browser (Python via Shinylive). Self-paced ist
      kostenfrei und jederzeit zugänglich; die geführte Variante buchst du für dein Team
      über uns.
    </p>
  </div>
  <a class="bp-section-head__link" href="workshops/">Alle Workshops →</a>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    {% for key in ["thinking", "power", "reliability"] %}
    {% set w = workshops[key] %}
    <a class="bp-card" href="{{ w.slug }}/" style="text-decoration:none;color:inherit;">
      <span class="bp-card__num">{{ w.number }}</span>
      <span class="bp-card__tag">{{ w.eyebrow }}</span>
      <h3 class="bp-card__title">{{ w.title }}</h3>
      <p class="bp-card__desc">{{ w.tagline }}</p>
      <div class="bp-card__meta">
        <span>📂 {{ w.chapters_count }} Kapitel</span>
        <span>⏱ {{ w.duration_self }} self · {{ w.duration_guided }} geführt</span>
      </div>
    </a>
    {% endfor %}

    <a class="bp-card" href="workshops/">
      <span class="bp-card__num">04</span>
      <span class="bp-card__tag">Train-the-Trainer</span>
      <h3 class="bp-card__title">Multiplikator:innen-Programm</h3>
      <p class="bp-card__desc">
        Werde Multiplikator:in für die Methoden-Wende an deiner Hochschule oder Klinik.
        Curriculum &amp; Materialien folgen.
      </p>
      <div class="bp-card__meta">
        <span>👥 Lehrende</span><span class="bp-pill bp-pill--soon">In Planung</span>
      </div>
    </a>

  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Fragen · Themenzentriert</span>
    <h2>Starte mit deiner Frage</h2>
    <p class="bp-section-head__lead">
      Statt Methoden-Kapitel zu durchsuchen — wähle die Frage, die dich aktuell interessiert,
      und springe direkt ins relevante Workshop-Kapitel.
    </p>
  </div>
  <a class="bp-section-head__link" href="fragen/">Alle Fragen →</a>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">
    {% for q in questions[:6] %}
    <a class="bp-card" href="fragen/#{{ q.key }}">
      <span class="bp-card__tag">{{ q.icon }} &nbsp; Frage</span>
      <h3 class="bp-card__title">{{ q.title }}</h3>
      <p class="bp-card__desc">{{ q.lead }}</p>
      <div class="bp-card__meta">
        <span>🔗 {{ q.links | length }} Verweise</span>
      </div>
    </a>
    {% endfor %}
  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Methoden · Vertiefung</span>
    <h2>Die methodischen Säulen</h2>
    <p class="bp-section-head__lead">
      Drei Fragen, die jede Studie beantworten sollte — und die Werkzeuge, mit denen du sie
      tatsächlich beantworten kannst.
    </p>
  </div>
  <a class="bp-section-head__link" href="methoden/">Alle Methoden →</a>
</div>

<div class="bp-pillars">

  <div class="bp-pillar">
    <div class="bp-pillar__num">FRAGE 01</div>
    <h3>Gibt es einen Effekt — und wie groß?</h3>
    <p>
      Antwort: <strong>Effekte und Effektgrößen.</strong> Unstandardisierte Effekte in
      Mess-Einheiten und standardisierte Maße wie Cohen's d liefern direkt die Größe — der p-Wert
      kann das prinzipbedingt nicht.
    </p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">FRAGE 02</div>
    <h3>Wie verlässlich ist die Schätzung?</h3>
    <p>
      Antwort: <strong>Stichprobenqualität und -größe.</strong> Repräsentativität, Drop-outs und
      Simulationen zur Präzision sagen mehr als jede pauschale Power-Tabelle.
    </p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">FRAGE 03</div>
    <h3>Was sagt das Ergebnis über die Hypothese?</h3>
    <p>
      Antwort: <strong>Bayesianische Datenanalyse.</strong> Wahrscheinlichkeiten für Hypothesen,
      Bayes-Faktoren und sequenzielles Lernen statt binäres Sieger/Verlierer-Schema.
    </p>
  </div>

</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Ressourcen · Kuratiert</span>
    <h2>Software, Literatur &amp; Talks</h2>
    <p class="bp-section-head__lead">
      Empfehlungen, mit denen wir selbst arbeiten — laufend ergänzt und kommentiert.
    </p>
  </div>
  <a class="bp-section-head__link" href="ressourcen/">Alle Ressourcen →</a>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    <a class="bp-card" href="https://jasp-stats.org/" target="_blank" rel="noopener">
      <span class="bp-card__tag">Software · Free</span>
      <h3 class="bp-card__title">JASP</h3>
      <p class="bp-card__desc">
        GUI-basierte Statistiksoftware mit erstklassiger Bayes-Implementierung. Niederschwellig
        für Lehre und Forschung.
      </p>
      <div class="bp-card__meta"><span>🪟 Win</span><span>🍎 Mac</span><span>🐧 Linux</span></div>
    </a>

    <a class="bp-card" href="https://www.jamovi.org/" target="_blank" rel="noopener">
      <span class="bp-card__tag">Software · Free</span>
      <h3 class="bp-card__title">Jamovi</h3>
      <p class="bp-card__desc">
        Modulare Open-Source-Plattform auf R-Basis. Erweiterbar mit jsq und vielen
        Bayes-Modulen.
      </p>
      <div class="bp-card__meta"><span>🪟 Win</span><span>🍎 Mac</span><span>🐧 Linux</span></div>
    </a>

    <a class="bp-card" href="ressourcen/literatur/">
      <span class="bp-card__tag">Buch</span>
      <h3 class="bp-card__title">Statistical Rethinking</h3>
      <p class="bp-card__desc">
        Richard McElreath's Klassiker — der wahrscheinlich beste Einstieg in bayesianisches
        Denken überhaupt.
      </p>
      <div class="bp-card__meta"><span>📘 612 Seiten</span><span>🎥 Vorlesungsreihe</span></div>
    </a>

    <a class="bp-card" href="ressourcen/literatur/">
      <span class="bp-card__tag">Paper</span>
      <h3 class="bp-card__title">ASA Statement on p-Values</h3>
      <p class="bp-card__desc">
        Wasserstein &amp; Lazar (2016) — der offizielle Konsens der American Statistical
        Association.
      </p>
      <div class="bp-card__meta"><span>📄 6 Seiten</span><span>🔗 DOI</span></div>
    </a>

    <a class="bp-card" href="ressourcen/videos/">
      <span class="bp-card__tag">Video</span>
      <h3 class="bp-card__title">Vorlesungsreihe McElreath</h3>
      <p class="bp-card__desc">
        Komplette Vorlesung zu „Statistical Rethinking" — frei verfügbar auf YouTube. Empfohlen
        für Selbstlerner:innen.
      </p>
      <div class="bp-card__meta"><span>🎥 20 Folgen</span><span>⏱ 30+ h</span></div>
    </a>

    <a class="bp-card" href="ressourcen/journals/">
      <span class="bp-card__tag">Journal</span>
      <h3 class="bp-card__title">BASP — p-frei publizieren</h3>
      <p class="bp-card__desc">
        <em>Basic and Applied Social Psychology</em> verbietet seit 2015 p-Werte. Eine Blaupause für
        andere Journals.
      </p>
      <div class="bp-card__meta"><span>📰 Quarterly</span><span>🔗 Editorial</span></div>
    </a>

  </div>
</div>

<div class="bp-callout">
  <div>
    <h3>Bleib informiert — kein Spam, nur Substanz.</h3>
    <p>
      Quartalsweiser Newsletter mit neuen Workshops, Veröffentlichungen und Best-Practice-Beispielen
      aus dem Projekt.
    </p>
    <form>
      <input type="email" placeholder="deine@email.de" aria-label="E-Mail-Adresse" required>
      <button type="submit" class="bp-btn bp-btn--primary">Anmelden</button>
    </form>
    <small>Du kannst dich jederzeit abmelden. Wir geben deine Adresse nicht weiter.</small>
  </div>
  <div>
    <p style="margin: 0; opacity: 0.85;">
      <strong style="font-size: 1.1rem; color: #fff;">Du willst aktiv mitwirken?</strong><br>
      Wir suchen Kooperationen mit Hochschulen, Kliniken, Verlagen und Krankenkassen.
    </p>
    <a class="bp-btn bp-btn--ghost" href="kontakt/" style="margin-top: 1rem;">Kontakt aufnehmen →</a>
  </div>
</div>
