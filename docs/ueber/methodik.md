---
title: Methodik & Dokumentation
---

# Methodik & Dokumentation

Diese Seite dokumentiert, wie die Workshops und Methoden-Inhalte entstehen, auf welchen
Standards sie beruhen und wie wir Änderungen nachvollziehbar halten. Sie dient zugleich als
Nachweis der wissenschaftlichen Sorgfalt gegenüber Förderern und Kooperationen.

## Didaktischer Aufbau

Die drei Workshops folgen einer bewussten Reihenfolge vom Problem zur Lösung:

1. **Beyond Significance** klärt, warum der p-Wert allein keine Aussage über Bedeutsamkeit
   trifft, und stellt Effektgrößen in den Mittelpunkt.
2. **Repräsentativität & Stichprobengröße** behandelt, wie verlässlich eine Stichprobe auf
   die Population verallgemeinert, und macht Verzerrung und Präzision greifbar.
3. **Denke Bayesianisch** vertieft die bayesianische Alternative: Vorwissen, Aktualisierung
   und Wahrscheinlichkeitsaussagen über Hypothesen.

Ein durchgängiges Beispiel (das fiktive SmartRail-Szenario der Deutschen Bahn) zieht sich
durch alle Kapitel, damit Methoden an einem konkreten Anwendungsfall sichtbar werden.

## Methodische Grundlagen

Die Inhalte orientieren sich an etablierten Standards der Methodenreform:

- ASA-Statement zur Interpretation von p-Werten (Wasserstein & Lazar, 2016)
- Empfehlungen zu Effektgrößen und deren Berichterstattung (APA-Richtlinien)
- Open-Science-Praktiken: Präregistrierung, offene Daten, offener Code
- Bayesianische Inferenz nach McElreath sowie etablierte Lehrbücher der Bayes-Statistik

Eine kuratierte Quellenauswahl findest du unter [Literatur](../ressourcen/literatur.md) und
[Journals](../ressourcen/journals.md).

## Technische Umsetzung

- Die Hub-Seite basiert auf **MkDocs Material**.
- Die Workshops sind in **Quarto** geschrieben und laufen als interaktive Browser-Apps über
  **Shinylive** (Python im Browser), ohne Installation.
- Statistische Beispiele werden mit offener Software (JASP, Jamovi, R/brms, PyMC) gerechnet
  und sind dadurch reproduzierbar.

## Versionierung und Reproduzierbarkeit

Sämtliche Inhalte werden in öffentlichen Git-Repositorys versioniert. Jede Änderung ist über
die Commit-Historie nachvollziehbar. Die Quell-Repositorys:

- Hub: [Frequent-Reformation]({{ links.repo }})
- Workshop Beyond Significance: [Bayesian_Power]({{ links.repo_power }})
- Workshop Repräsentativität & Stichprobengröße: [True_Reliability]({{ links.repo_reliability }})
- Workshop Denke Bayesianisch: [Thinking_Bayesian]({{ links.repo_thinking }})

## Änderungshistorie

Inhaltliche Meilensteine halten wir hier fest. Detaillierte Änderungen stehen in der
Commit-Historie der Repositorys.

| Datum     | Änderung                                                              |
|-----------|-----------------------------------------------------------------------|
| 2026      | Aufbau der Hub-Seite und der drei Workshops im Antragsverfahren        |

## Fehler und Feedback

Hinweise auf inhaltliche oder methodische Fehler sind ausdrücklich erwünscht. Melde sie per
E-Mail an {{ contact.email }} oder als
[GitHub Issue]({{ links.repo_issues }}). Siehe auch
die [Nutzungshinweise](../rechtliches/nutzung.md).
