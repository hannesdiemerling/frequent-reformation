---
title: Probleme des p-Werts
---

# Probleme des p-Werts

> Eine kompakte Diagnose: was der p-Wert ist, was er **nicht** ist, und welche Konsequenzen
> seine Fehlinterpretation für Wissenschaft und Praxis hat.

<div class="bp-stats">
  <div class="bp-stat">
    <span class="bp-stat__num">7</span>
    <span class="bp-stat__label">verbreitete Fehlinterpretationen — alle systematisch falsch.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">61&nbsp;%</span>
    <span class="bp-stat__label">Falsch-positiv-Rate möglich bei Kombination üblicher QRPs.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">~&nbsp;90&nbsp;%</span>
    <span class="bp-stat__label">aller Forschenden interpretieren mindestens einen Punkt falsch.</span>
  </div>
  <div class="bp-stat">
    <span class="bp-stat__num">.05</span>
    <span class="bp-stat__label">— eine willkürliche Schwelle, die zur Trennung von "wahr" und "falsch" wurde.</span>
  </div>
</div>

## Was der p-Wert tatsächlich bedeutet

Der p-Wert ist die Wahrscheinlichkeit, **die beobachteten Daten — oder noch extremere — zu
erhalten, wenn die Nullhypothese wahr wäre und alle Modellannahmen zutreffen**.

Er sagt **nichts** darüber:

- wie wahrscheinlich die Nullhypothese ist
- wie wahrscheinlich deine Alternativhypothese ist
- wie groß der gefundene Effekt ist
- wie wichtig oder bedeutsam der Effekt ist
- wie wahrscheinlich es ist, das Ergebnis zu replizieren
- ob ein Effekt "wirklich" existiert

## Die sieben verbreitetsten Fehlinterpretationen

<div class="bp-faq">

  <details>
    <summary>1. „Der p-Wert ist die Wahrscheinlichkeit, dass die Nullhypothese wahr ist."</summary>
    <p><strong>Falsch.</strong> Der p-Wert ist eine bedingte Wahrscheinlichkeit der Daten <em>unter Annahme</em> der Nullhypothese — nicht die Wahrscheinlichkeit der Hypothese selbst. Was du eigentlich willst — P(H | Daten) — liefert nur die Bayes-Inferenz.</p>
  </details>

  <details>
    <summary>2. „p &lt; .05 bedeutet, der Effekt ist real."</summary>
    <p><strong>Falsch.</strong> Selbst bei wahrer Nullhypothese werden 5 % aller Studien per Konstruktion einen p-Wert &lt; .05 produzieren. Mit selektivem Reporting steigt diese Rate dramatisch.</p>
  </details>

  <details>
    <summary>3. „p &lt; .05 bedeutet, der Effekt ist groß / wichtig."</summary>
    <p><strong>Falsch.</strong> Der p-Wert hängt von Effekt UND Stichprobengröße ab. Mit ausreichend großer Stichprobe wird auch ein winziger, irrelevanter Effekt signifikant.</p>
  </details>

  <details>
    <summary>4. „1 − p ist die Replikationswahrscheinlichkeit."</summary>
    <p><strong>Falsch.</strong> Replikation hängt von der wahren Effektstärke und Stichprobenqualität ab — nicht vom p-Wert der Originalstudie. Dass diese Annahme so weit verbreitet ist, ist eine der schädlichsten Konsequenzen der Signifikanz-Ritualisierung.</p>
  </details>

  <details>
    <summary>5. „p ist die Wahrscheinlichkeit, dass das Ergebnis Zufall war."</summary>
    <p><strong>Falsch.</strong> Der p-Wert beschreibt eine bedingte Häufigkeit unter unendlich vielen hypothetischen Wiederholungen — nicht eine Aussage über dein konkretes Ergebnis.</p>
  </details>

  <details>
    <summary>6. „Nicht-signifikant bedeutet kein Effekt."</summary>
    <p><strong>Falsch.</strong> "Absence of evidence is not evidence of absence." Nicht-signifikante Ergebnisse können auch durch zu kleine Stichproben oder zu hohes Rauschen entstehen. Bayesianische Analysen können hier echte Evidenz <em>für</em> die Nullhypothese liefern — der Signifikanztest nicht.</p>
  </details>

  <details>
    <summary>7. „Konfidenzintervalle sind eine bessere Variante des p-Werts."</summary>
    <p><strong>Halb richtig.</strong> KIs zeigen wenigstens die Effektgröße — aber die intuitive Interpretation ("das wahre Mittel liegt mit 95 % Wahrscheinlichkeit im KI") ist <em>ebenfalls falsch</em>. Glaubwürdigkeitsintervalle (HDI/CrI) aus der Bayes-Inferenz erlauben genau diese Interpretation.</p>
  </details>

</div>

## Warum das wichtig ist

### Publication Bias

Weil signifikante Ergebnisse leichter publiziert werden, verzerrt sich die Literatur
systematisch. Effekte werden im Mittel als zu groß geschätzt; Replikationen scheitern, weil sie
an realistischeren (kleineren) Effekten arbeiten.

### Questionable Research Practices

Die Jagd nach p &lt; .05 fördert *p-hacking*, optionale Tests, selektives Reporting und
HARKing. Simmons et al. (2011) zeigen: mit der Kombination üblicher QRPs steigt die effektive
Falsch-positiv-Rate **von 5 % auf bis zu 61 %**.

### Praktische Konsequenzen

> *„The Cult of Statistical Significance: How the Standard Error Costs Us Jobs, Justice, and Lives."*
> — Ziliak & McCloskey (2008)

Therapien, Maßnahmen und politische Entscheidungen werden auf "signifikante" Ergebnisse
gestützt, die in Wahrheit Zufallsbefunde sind oder Effekte beschreiben, die für die Praxis
irrelevant klein sind.

## Was tun?

<div class="bp-pillars">

  <a class="bp-pillar" href="../effektgroessen/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ ALTERNATIVE 01</div>
    <h3>Effektgrößen berichten</h3>
    <p>Standardisiert und unstandardisiert — immer mit Glaubwürdigkeitsintervall.</p>
  </a>

  <a class="bp-pillar" href="../stichproben/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ ALTERNATIVE 02</div>
    <h3>Präzision planen, nicht Power</h3>
    <p>Wie schmal soll dein Intervall werden? Direkter, ehrlicher, planbarer.</p>
  </a>

  <a class="bp-pillar" href="../bayesian/" style="text-decoration:none;color:inherit;display:block;">
    <div class="bp-pillar__num">→ ALTERNATIVE 03</div>
    <h3>Bayesianisch denken</h3>
    <p>Wahrscheinlichkeiten für Hypothesen — die Frage, die du eigentlich stellst.</p>
  </a>

</div>

## Schlüsselliteratur

| Quelle                                              | Worum es geht                                                                |
|-----------------------------------------------------|------------------------------------------------------------------------------|
| Cohen, J. (1994). The earth is round (p &lt; .05).  | Klassische Polemik gegen die Schwellen-Logik                                 |
| Wasserstein & Lazar (2016)                          | Offizieller ASA-Konsens zu p-Werten                                          |
| Simmons, Nelson & Simonsohn (2011)                  | Wie QRPs die Falsch-positiv-Rate sprengen                                    |
| Haller & Krauss (2002)                              | Empirischer Beleg, dass selbst Methoden-Lehrende falsch interpretieren       |
| Meehl, P. E. (1978)                                 | "...one of the worst things that ever happened in the history of psychology" |

→ Vollständige Liste in den [Ressourcen](../ressourcen/literatur.md).

!!! tip "Tieferer Einstieg"
    Der ausführliche Antragstext zum Pioniervorhaben steht im internen Bereich zur Verfügung. Bei Interesse [Kontakt](../kontakt.md) aufnehmen.
