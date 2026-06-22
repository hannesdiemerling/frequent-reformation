---
title: Tools & Software
---

# Tools & Software

Praktische Werkzeuge für bayesianische Analysen, nach Einstiegshürde sortiert. Alle
empfohlene Software ist **kostenlos und quelloffen**.

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Niederschwellig · GUI</span>
    <h2>Für Einsteigende</h2>
    <p class="bp-section-head__lead">Klicken statt Programmieren: ideal für Lehre, erste eigene Analysen und alle, die nicht coden möchten.</p>
  </div>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    <a class="bp-card" href="{{ links.jasp }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">★ Empfehlung Einstieg</span>
      <h3 class="bp-card__title">JASP</h3>
      <p class="bp-card__desc">
        Statistik-GUI mit erstklassiger Bayes-Implementierung. Klassische und bayesianische
        Tests stehen direkt nebeneinander. Wird an der Uni Amsterdam aktiv weiterentwickelt.
      </p>
      <div class="bp-card__meta"><span>🪟 Win</span><span>🍎 Mac</span><span>🐧 Linux</span><span>0 €</span></div>
    </a>

    <a class="bp-card" href="{{ links.jamovi }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">★ Empfehlung Einstieg</span>
      <h3 class="bp-card__title">Jamovi</h3>
      <p class="bp-card__desc">
        Modulare Plattform auf R-Basis. Mit dem Modul <em>jsq</em> kommen Bayes-Tests dazu.
        Skalen-Erstellung, Reproduzierbarkeit und Publikations-Output stark.
      </p>
      <div class="bp-card__meta"><span>🪟 Win</span><span>🍎 Mac</span><span>🐧 Linux</span><span>0 €</span></div>
    </a>

    <a class="bp-card" href="{{ links.r_project }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Programmierung</span>
      <h3 class="bp-card__title">R + RStudio</h3>
      <p class="bp-card__desc">
        Standard im Wissenschaftsbetrieb. Vollständig kostenlos. Brücke zu allen ernsthaften
        Bayes-Workflows.
      </p>
      <div class="bp-card__meta"><span>🪟 Win</span><span>🍎 Mac</span><span>🐧 Linux</span><span>Open Source</span></div>
    </a>

  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Fortgeschritten · R-Pakete</span>
    <h2>Für Anwendende mit R-Erfahrung</h2>
    <p class="bp-section-head__lead">Hohe Modell-Flexibilität, ohne den Sprung in eine probabilistische Programmiersprache.</p>
  </div>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    <a class="bp-card" href="{{ links.brms }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">★ Empfehlung Fortgeschritten</span>
      <h3 class="bp-card__title">brms</h3>
      <p class="bp-card__desc">
        R-Wrapper für Stan. Formel-Syntax wie bei <code>lme4</code>, aber bayesianisch, von
        einfachen Regressionen bis zu hierarchischen, nicht-linearen Modellen.
      </p>
      <div class="bp-card__meta"><span>R-Paket</span><span>Stan-basiert</span></div>
    </a>

    <a class="bp-card" href="{{ links.bayesfactor_pkg }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Standard-Tests</span>
      <h3 class="bp-card__title">BayesFactor</h3>
      <p class="bp-card__desc">
        Klassische Tests (t, ANOVA, Korrelation, Regression) als Bayes-Faktor-Versionen.
        Kompakte Schnittstelle, sinnvolle Defaults.
      </p>
      <div class="bp-card__meta"><span>R-Paket</span><span>Morey & Rouder</span></div>
    </a>

    <a class="bp-card" href="{{ links.easystats }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Workflow</span>
      <h3 class="bp-card__title">easystats</h3>
      <p class="bp-card__desc">
        Paketfamilie für Postprocessing, Reporting und Visualisierung, inklusive
        <code>bayestestR</code> für HDIs, ROPE und mehr.
      </p>
      <div class="bp-card__meta"><span>R-Suite</span><span>bayestestR</span></div>
    </a>

    <a class="bp-card" href="{{ links.repo_bfda }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Studienplanung</span>
      <h3 class="bp-card__title">BFDA</h3>
      <p class="bp-card__desc">
        Bayes-Faktor-Design-Analyse: Stichprobenplanung mit Simulation, sequenzielle
        Designs, Stoppregeln.
      </p>
      <div class="bp-card__meta"><span>R-Paket</span><span>Schönbrodt</span></div>
    </a>

  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Profi · Probabilistic Programming</span>
    <h2>Für maximale Flexibilität</h2>
    <p class="bp-section-head__lead">Wenn dein Modell nicht in eine Standardformel passt oder Performance entscheidend ist.</p>
  </div>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    <a class="bp-card" href="{{ links.stan }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">★ Goldstandard</span>
      <h3 class="bp-card__title">Stan</h3>
      <p class="bp-card__desc">
        Probabilistische Programmiersprache mit Anbindungen für R, Python, Julia und mehr.
        State-of-the-art HMC/NUTS-Sampler. Sehr aktive Community.
      </p>
      <div class="bp-card__meta"><span>C++ Backend</span><span>Multi-Sprache</span></div>
    </a>

    <a class="bp-card" href="{{ links.pymc }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Python</span>
      <h3 class="bp-card__title">PyMC</h3>
      <p class="bp-card__desc">
        Bayes-Workflows in Python. Saubere API, gute Visualisierungen via ArviZ. Ideal,
        wenn dein Stack ohnehin auf Python läuft.
      </p>
      <div class="bp-card__meta"><span>Python</span><span>PyTensor</span></div>
    </a>

    <a class="bp-card" href="{{ links.numpyro }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Performance</span>
      <h3 class="bp-card__title">NumPyro</h3>
      <p class="bp-card__desc">
        JAX-basiertes Pyro. Wenn du große Modelle, GPU-Beschleunigung oder
        Auto-Differentiation brauchst.
      </p>
      <div class="bp-card__meta"><span>JAX</span><span>GPU-fähig</span></div>
    </a>

    <a class="bp-card" href="{{ links.turing }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Julia</span>
      <h3 class="bp-card__title">Turing.jl</h3>
      <p class="bp-card__desc">
        Bayesian Inference in Julia. Schnell, eleganz und stark in numerischen Anwendungen.
      </p>
      <div class="bp-card__meta"><span>Julia</span></div>
    </a>

  </div>
</div>

<div class="bp-section-head">
  <div>
    <span class="bp-section-head__eyebrow">Reproduzierbarkeit & Open Science</span>
    <h2>Drumherum-Tools</h2>
  </div>
</div>

<div class="bp-carousel">
  <div class="bp-carousel__track">

    <a class="bp-card" href="{{ links.osf }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Plattform</span>
      <h3 class="bp-card__title">OSF · Open Science Framework</h3>
      <p class="bp-card__desc">
        Preregistration, Datenarchivierung, Projekt-Hosting. Standard für Open-Science-Workflows.
      </p>
      <div class="bp-card__meta"><span>Cloud</span><span>kostenlos</span></div>
    </a>

    <a class="bp-card" href="{{ links.zpid }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Plattform</span>
      <h3 class="bp-card__title">ZPID · Leibniz-Institut für Psychologie</h3>
      <p class="bp-card__desc">
        Datenarchiv PsychArchives, PsychOpen, Preregistration-Service und Methodenkurse,
        die zentrale Open-Science-Infrastruktur für Psychologie im DACH-Raum.
      </p>
      <div class="bp-card__meta"><span>DACH</span><span>kostenlos</span></div>
    </a>

    <a class="bp-card" href="{{ links.aspredicted }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Preregistration</span>
      <h3 class="bp-card__title">AsPredicted</h3>
      <p class="bp-card__desc">
        Schlanke Preregistration in unter 10 Minuten. Standard-Template, kein Konto nötig.
      </p>
      <div class="bp-card__meta"><span>Lean</span></div>
    </a>

    <a class="bp-card" href="{{ links.quarto }}" target="_blank" rel="noopener">
      <span class="bp-card__tag">Reporting</span>
      <h3 class="bp-card__title">Quarto</h3>
      <p class="bp-card__desc">
        Reproduzierbares Publizieren: Markdown + R/Python/Julia. Nachfolger von R Markdown
        und Jupyter-Reports.
      </p>
      <div class="bp-card__meta"><span>Multi-Sprache</span><span>HTML · PDF · DOCX</span></div>
    </a>

  </div>
</div>

## Welches Tool wann? Cheatsheet

| Situation                                              | Empfehlung                |
|--------------------------------------------------------|---------------------------|
| Erste Bayes-Analyse, Lehre                             | **JASP**                  |
| Klassische Tests + Bayes nebeneinander                 | **JASP** oder **Jamovi**  |
| Hierarchisches Modell ohne langen Code                 | **brms**                  |
| Bayes-Faktor für Standard-Tests in R                   | **BayesFactor**           |
| Studienplanung (BF-Design, Sequenz)                    | **BFDA**                  |
| Postprocessing & Reporting in R                        | **bayestestR**            |
| Eigenes komplexes Modell                               | **Stan**, **PyMC**        |
| Python-Stack / GPU                                     | **PyMC** oder **NumPyro** |
| Reproduzierbares Reporting                             | **Quarto**                |

<div class="bp-soon">
  <span class="bp-pill bp-pill--soon">In Arbeit</span>
  <h3>Vergleichende Tutorials</h3>
  <p>Wir bauen pro Tool eine kompakte 5-Minuten-Einführung mit identischem Beispieldatensatz, damit du Workflows direkt vergleichen kannst.</p>
</div>
