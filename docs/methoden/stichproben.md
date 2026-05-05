---
title: Stichproben & Präzision
---

# Stichproben & Präzision

> **Frage 02 — beantwortet.** Wie verlässlich verallgemeinert die Studie auf die Population?
> Eine ehrliche Antwort beginnt mit der Stichprobe — und endet bei einem
> Glaubwürdigkeitsintervall, dessen Breite du vorab geplant hast.

## Was eine Stichprobe wirklich braucht

Eine größere Stichprobe ist nicht automatisch eine bessere. Drei Eigenschaften zählen:

<div class="bp-pillars">

  <div class="bp-pillar">
    <div class="bp-pillar__num">QUALITÄT 01</div>
    <h3>Repräsentativität</h3>
    <p>Spiegelt die Stichprobe die Zielpopulation? Auswahlmechanismus dokumentieren — nicht erst im Diskussions-Teil.</p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">QUALITÄT 02</div>
    <h3>Daten-Integrität</h3>
    <p>Drop-outs, fehlende Werte, Antwortverhalten — alles, was die effektive Stichprobe verzerrt.</p>
  </div>

  <div class="bp-pillar">
    <div class="bp-pillar__num">QUALITÄT 03</div>
    <h3>Größe</h3>
    <p>So groß wie nötig, um die Frage mit hinreichender Präzision zu beantworten — nicht nach Daumenregel.</p>
  </div>

</div>

## Repräsentativität — meist das größere Problem

WEIRD-Stichproben (Western, Educated, Industrialised, Rich, Democratic) dominieren die
psychologische Forschung. Bevor du über Stichprobengröße nachdenkst, kläre vier Fragen:

- Wer ist deine **Zielpopulation**?
- Wie wurden Teilnehmende **ausgewählt** (Convenience-Sample, geschichtet, randomisiert)?
- Welche **systematischen Ausschlüsse** gibt es?
- Welche Verzerrungen entstehen durch **Self-Selection**?

!!! warning "Drop-out ist ein Auswahlmechanismus"
    Wenn 30 % deiner Stichprobe abbrechen und das nicht zufällig geschieht, hast du keine
    repräsentative Stichprobe mehr — egal wie sorgfältig du anfangs gezogen hast.

## Stichprobengröße — drei Wege

### Weg 1: Klassische Power-Analyse (problematisch)

Fragt: *„Wie viele Probanden brauche ich, um mit 80 % Wahrscheinlichkeit einen signifikanten
p-Wert zu finden — wenn der wahre Effekt d = 0.5 ist?"*

Probleme:

- setzt eine konkrete Effektgröße voraus, die du meist nicht kennst,
- plant auf „signifikant" — nicht auf „gut geschätzt",
- suggeriert eine Sicherheit, die nicht da ist.

### Weg 2: Präzisionsplanung (empfohlen)

Fragt: *„Wie viele Probanden brauche ich, damit mein Glaubwürdigkeitsintervall für den Effekt
schmaler wird als z. B. ± 0.15?"*

- direkt an die Aussagekraft gekoppelt — nicht an Schwellen,
- funktioniert auch ohne starke Vorannahmen über den Effekt,
- lässt sich transparent kommunizieren.

### Weg 3: Bayes-Faktor-Design (für Hypothesentests)

Fragt: *„Wie viele Probanden brauche ich, damit der Bayes-Faktor mit hoher Wahrscheinlichkeit
≥ 10 wird, falls H₁ stimmt?"*

- erlaubt **sequenzielle Datenerhebung** mit klaren Stopp-Regeln,
- vermeidet Ressourcen-Verschwendung,
- funktioniert symmetrisch für H₀ und H₁.

→ Tiefere Behandlung in [Workshop 02 — Beyond Significance](../workshops/power.md).

## Simulation statt Faustregel

Statt Tabellen zu konsultieren: **simuliere deine eigene Studie**. Generiere künstliche
Datensätze unter realistischen Annahmen, ziehe sie immer wieder, schau, wie sich
Punktschätzer und Intervalle verhalten.

```r
# Beispiel-Skizze (R)
sim_one <- function(n, d) {
  x <- rnorm(n, 0, 1)
  y <- rnorm(n, d, 1)
  ci <- t.test(y, x)$conf.int
  diff(ci)  # Breite des KI
}
widths <- replicate(1000, sim_one(n = 60, d = 0.4))
mean(widths)  # erwartete Intervallbreite
```

Mit 10–20 Zeilen Code bekommst du eine ehrlichere Antwort als jede Tabelle.

## Was du immer berichten solltest

- Geplante und tatsächlich erreichte **Stichprobengröße**
- **Auswahlmechanismus** und Dropout-Rate
- **A-priori-Begründung** für die Größe (Präzision, Bayes-Faktor-Design oder Power)
- **Sensitivitätsanalysen** für unterschiedliche Annahmen

## Übungs-Kapitel — direkt anwenden

Diese Workshop-Kapitel vertiefen das Thema mit interaktiven Beispielen im Browser:

<div class="bp-carousel">
  <div class="bp-carousel__track">
    {% for ref in [
      {"workshop": "reliability", "chapter": 1},
      {"workshop": "reliability", "chapter": 2},
      {"workshop": "reliability", "chapter": 4},
      {"workshop": "reliability", "chapter": 5}
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
  <h3>Web-Tool: Sample Size Explorer</h3>
  <p>Wir bauen ein interaktives Tool, mit dem du für gängige Designs (Mittelwertvergleich, Korrelation, lineares Modell) Präzisions- und Bayes-Faktor-basierte Stichprobenpläne erkunden kannst — inkl. Sensitivität und Visualisierung.</p>
</div>

## Schlüsselliteratur

- **Maxwell, Kelley & Rausch (2008).** *Sample Size Planning for Statistical Power and Accuracy in Parameter Estimation.*
- **Schönbrodt & Wagenmakers (2018).** *Bayes Factor Design Analysis.*
- **Cumming, G. (2014).** *The New Statistics: Why and How.*

→ Vollständige Liste in den [Ressourcen](../ressourcen/literatur.md).
