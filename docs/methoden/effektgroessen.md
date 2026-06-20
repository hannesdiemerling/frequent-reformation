---
title: Effekte & Effektgrößen
---

# Effekte & Effektgrößen

> **Frage 01, beantwortet.** Wie groß ist der Effekt? Was er für Theorie, Praxis und
> Forschungsprogramm bedeutet, ergibt sich erst aus dieser Größe, nicht aus einem p-Wert.

## Warum Effektgrößen?

Ein p-Wert verrät dir, wie überraschend deine Daten unter einer Annahme wären, aber **nicht**,
wie groß der Unterschied oder Zusammenhang tatsächlich ist. Genau das ist jedoch die Frage,
die für Theoriebildung und Praxisentscheidungen zählt.

!!! quote "Cohen, 1994"
    *„The primary product of a research inquiry is one or more measures of effect size, not p values."*

## Zwei Familien

<div class="bp-pillars">

  <div class="bp-pillar">
    <div class="bp-pillar__num">FAMILIE 01</div>
    <h3>Unstandardisierte Effekte</h3>
    <p>
      In den Einheiten deiner Messung. Z. B. „die Therapie reduziert Depressionswerte im
      BDI-II um 4,2 Punkte". Direkt interpretierbar, wenn deine Skala gut bekannt ist.
    </p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">FAMILIE 02</div>
    <h3>Standardisierte Effektgrößen</h3>
    <p>
      Skalenfrei, vergleichbar über Studien hinweg. Cohen's d, Hedges' g, η², r, die
      gemeinsame Sprache der Meta-Analyse.
    </p>
  </div>

</div>

## Die wichtigsten Effektgrößen-Maße

<div class="bp-carousel">
  <div class="bp-carousel__track">

    <div class="bp-card">
      <span class="bp-card__tag">Mittelwertdifferenz</span>
      <h3 class="bp-card__title">Cohen's d</h3>
      <p class="bp-card__desc">
        Differenz zweier Mittelwerte, geteilt durch die gepoolte Standardabweichung. Klassiker
        für Vergleich zweier Gruppen.
      </p>
      <div class="bp-card__meta"><span>Klein: 0.2</span><span>Mittel: 0.5</span><span>Groß: 0.8</span></div>
    </div>

    <div class="bp-card">
      <span class="bp-card__tag">Korrigiert</span>
      <h3 class="bp-card__title">Hedges' g</h3>
      <p class="bp-card__desc">
        Variante von d mit Korrektur für kleine Stichproben. In der Meta-Analyse oft
        bevorzugt.
      </p>
      <div class="bp-card__meta"><span>SS-Korrektur</span><span>≈ d für n &gt; 50</span></div>
    </div>

    <div class="bp-card">
      <span class="bp-card__tag">ANOVA</span>
      <h3 class="bp-card__title">η² · ω² · partial η²</h3>
      <p class="bp-card__desc">
        Anteil aufgeklärter Varianz. ω² ist weniger verzerrt; partial η² wird in mehrfaktoriellen
        Designs berichtet.
      </p>
      <div class="bp-card__meta"><span>Klein: .01</span><span>Mittel: .06</span><span>Groß: .14</span></div>
    </div>

    <div class="bp-card">
      <span class="bp-card__tag">Korrelation</span>
      <h3 class="bp-card__title">Pearson's r</h3>
      <p class="bp-card__desc">
        Stärke und Richtung eines linearen Zusammenhangs zweier Variablen.
      </p>
      <div class="bp-card__meta"><span>Klein: .10</span><span>Mittel: .30</span><span>Groß: .50</span></div>
    </div>

    <div class="bp-card">
      <span class="bp-card__tag">Kategorial</span>
      <h3 class="bp-card__title">Odds Ratio · Risk Ratio</h3>
      <p class="bp-card__desc">
        Standard für binäre Outcomes, vor allem in Medizin und Epidemiologie.
      </p>
      <div class="bp-card__meta"><span>Log-Skala empfohlen</span></div>
    </div>

    <div class="bp-card">
      <span class="bp-card__tag">Robust</span>
      <h3 class="bp-card__title">Common Language Effect Size</h3>
      <p class="bp-card__desc">
        Wahrscheinlichkeit, dass ein zufälliger Wert aus Gruppe A größer ist als aus Gruppe B.
        Sehr gut kommunizierbar.
      </p>
      <div class="bp-card__meta"><span>0.50 = Zufall</span><span>0.71 ≈ d 0.8</span></div>
    </div>

  </div>
</div>

## Cohens Klassifikation: mit Vorbehalt

Jacob Cohen schlug 1988 die Einteilung klein/mittel/groß vor, als grobe Orientierung, **wenn
keine fachspezifischen Vergleichswerte vorliegen**. In der Praxis wird sie häufig als Naturgesetz
fehlinterpretiert.

!!! warning "Domänenwissen schlägt Faustregel"
    Was als „klein" oder „groß" gilt, hängt vom Forschungsfeld ab. Ein d = 0.2 für eine
    Suizidpräventions-Intervention ist riesig. Ein d = 0.5 für ein neues Lernformat in einem
    etablierten Fachgebiet ist eher mittelmäßig. **Vergleiche immer mit publizierten Effekten in
    deiner Subdisziplin.**

Empirische Verteilungen für viele Subdisziplinen findest du in:

- **Schäfer & Schwarz (2019).** *The meaningfulness of effect sizes in psychological research.* Frontiers in Psychology.

## Effektgrößen mit Unsicherheit

Eine Effektgröße ohne Intervall ist nur die halbe Geschichte. Berichte immer:

- **Punktschätzer** (z. B. d = 0.42)
- **Intervall** (z. B. 95 % CI [0.18, 0.66] oder bayesianisch HDI [0.20, 0.65])
- **Modellannahmen** und Effektgrößen-Variante (z. B. korrigiert für kleine Stichproben)

## Cheatsheet: welche Effektgröße wann?

| Design                              | Empfohlene Effektgröße             |
|-------------------------------------|------------------------------------|
| Vergleich zweier Mittelwerte        | Cohen's d (oder Hedges' g)         |
| Vergleich von Mittelwerten + Anova  | ω² oder partial η²                 |
| Linearer Zusammenhang               | Pearson's r                        |
| Nicht-linearer / Rang-Zusammenhang  | Spearman's ρ, Kendall's τ          |
| 2×2-Tabelle                         | Odds Ratio, Phi                    |
| Klinische Risiken                   | Risk Ratio, Number Needed to Treat |
| Kommunikation für Laien             | Common Language Effect Size        |

## Bayesianisches Pendant

Auch im bayesianischen Workflow sind Effektgrößen zentral. Du erhältst sie als
**Posterior-Verteilung über den Effekt** (nicht nur als Punktschätzer). Damit lassen sich
direkt Aussagen formulieren wie: *„Mit 92 % Wahrscheinlichkeit ist der Effekt mindestens d = 0.3."*

→ Mehr dazu in der [Bayesianischen Datenanalyse](bayesian.md).

## Übungs-Kapitel: direkt anwenden

Diese Workshop-Kapitel vertiefen das Thema mit interaktiven Beispielen im Browser:

<div class="bp-carousel">
  <div class="bp-carousel__track">
    {% for ref in [
      {"workshop": "power", "chapter": 3},
      {"workshop": "power", "chapter": 4},
      {"workshop": "power", "chapter": 5},
      {"workshop": "power", "chapter": 2}
    ] %}
      {% set ws = workshops[ref.workshop] %}
      {% set ch = ws.chapters[ref.chapter - 1] %}
      <a class="bp-card" href="{{ ws.base }}/{{ ch.file }}" target="_blank" rel="noopener">
        <span class="bp-card__num">{{ "%02d" | format(ch.num) }}</span>
        <span class="bp-card__tag">{{ ws.title }}</span>
        <h3 class="bp-card__title">{{ ch.title }}</h3>
        <p class="bp-card__desc">Theorie + interaktive Browser-App. ↗ extern.</p>
        <div class="bp-card__meta"><span>⏱ {{ ch.time }}</span><span>🎚 {{ ch.level }}</span></div>
      </a>
    {% endfor %}
  </div>
</div>

<div class="bp-soon">
  <span class="bp-pill bp-pill--soon">In Arbeit</span>
  <h3>Interaktiver Effektgrößen-Rechner</h3>
  <p>Wir bauen einen kleinen Web-Rechner, mit dem du Effektgrößen aus üblichen Berichts-Statistiken (t, F, χ², r) konvertieren und visualisieren kannst, inklusive Glaubwürdigkeitsintervall.</p>
</div>
