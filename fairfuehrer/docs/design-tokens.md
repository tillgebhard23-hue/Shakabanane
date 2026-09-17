# FAIRFÜHRER Design Tokens

Stand 17.09.2026 · Entwurf zur Freigabe (TEIL D Schritt 4)

> **Vorläufig:** Orange und Grün sind aus dem Screenshot geschätzt, nicht gemessen.
> Beide liegen als einzelne Tokens vor. Sobald die echten Werte da sind, ändert sich
> genau eine Zeile pro Farbe, nichts weiter.

---

## Die Designidee in drei Sätzen

Die Seite liest sich wie ein gut gemachtes Regionalmagazin, nicht wie eine Öko-Broschüre und nicht wie eine App-Landingpage. Grundton ist warmes Papier, die Schrift trägt die Seite, und das Orange erscheint selten genug, dass es jedes Mal etwas bedeutet: ein PIN, ein Play-Button, ein Weg zur Karte. Alles Runde im Interface kommt vom Kartenpin und vom Play-Knopf, damit die Marke auch ohne Logo erkennbar bleibt.

Der Unterschied zur heutigen Seite: Orange war dort Flächenfarbe, hier ist es Akzent. Die Ruhe macht die Geschichten wichtiger als das Interface.

---

## 1. Farben

### Grundflächen (hell)

| Token | Hex | Verwendung |
|---|---|---|
| `--bg` | `#F8F6F2` | Seitengrund, warmes Papier |
| `--surface` | `#FFFDFA` | Karten, erhöhte Flächen |
| `--border` | `#E4DFD6` | Haarlinien, Kartenränder |

### Text

| Token | Hex | Kontrast auf `--bg` | Verwendung |
|---|---|---|---|
| `--ink` | `#222824` | **13.93:1** | Fließtext, Überschriften |
| `--ink-muted` | `#5C645D` | **5.66:1** | Sekundärtext, Bildunterschriften |

Beide warm und leicht grünstichig, wie im Brief gefordert. Kein reines Schwarz.

### Marke

| Token | Hex | Verwendung |
|---|---|---|
| `--brand` | `#EF7B22` | **geschätzt.** Flächen, PINs, Play-Buttons, Grafik |
| `--brand-ink` | `#B5540C` | Orange als **Text** oder Link auf hellem Grund (4.59:1) |
| `--accent-green` | `#4F8A3D` | **geschätzt.** Grafisches Beiwerk, Kategorie-Marker |
| `--accent-green-ink` | `#427334` | Grün als **Text** auf hellem Grund (5.21:1) |

### Warum es zwei Orange-Token gibt

Gemessen, nicht vermutet:

```
#EF7B22 als Text auf #F8F6F2   2.58:1   durchgefallen
weißer Text auf #EF7B22        2.79:1   durchgefallen
#222824 auf #EF7B22            5.39:1   bestanden
#B5540C als Text auf #F8F6F2   4.59:1   bestanden
```

Daraus folgen zwei feste Regeln:

1. **Orange nie als Textfarbe.** Für Links und farbige Wörter gilt `--brand-ink`.
2. **Auf oranger Fläche steht dunkler Text, nie weißer.** Das ist der sichtbarste Unterschied zur heutigen Seite und unten als eigener Punkt notiert.

### Dunkelmodus

| Token | Hex | Kontrast |
|---|---|---|
| `--bg` | `#191817` | Grund |
| `--surface` | `#232120` | Karten |
| `--ink` | `#F2EFE9` | 15.45:1 |
| `--ink-muted` | `#A8A39A` | 7.07:1 |
| `--brand` | `#EF7B22` | 6.35:1 (hier auch als Text nutzbar) |

Im Dunkelmodus trägt das Orange von selbst genug Kontrast, `--brand-ink` entfällt dort.

---

## 2. Typografie

| Rolle | Schrift | Begründung |
|---|---|---|
| Display | **Bricolage Grotesque** (200-800) | Charakterstark ohne Kostüm, für redaktionelle Nutzung gezeichnet, vollständige deutsche Diakritika |
| Text | **Source Sans 3** (200-900) | Humanistisch, hervorragend lesbar in langen Absätzen und auf kleinen Displays |

Beide frei lizenziert und als verfügbar geprüft. Ausgeliefert **selbst gehostet** über `next/font/local`, nicht per `<link>` zu Google. Das ist schneller, verhindert Layoutsprünge und vermeidet das DSGVO-Thema bei eingebetteten Google Fonts.

### Größen

| Token | Mobil | Desktop | Einsatz |
|---|---|---|---|
| `display-xl` | 2.25rem | 3.75rem | Hero-Headline |
| `display-l` | 1.875rem | 2.75rem | Sektions-Headlines |
| `display-m` | 1.5rem | 2rem | Karten-Titel |
| `body-l` | 1.125rem | 1.25rem | Hero-Subline, Einleitungen |
| `body` | 1rem | 1.0625rem | Fließtext |
| `body-s` | 0.9375rem | 0.9375rem | Bildunterschriften, Fußnoten |

Zeilenlänge maximal 65 Zeichen. Hero-Zeilenhöhe 1.05, Fließtext 1.6.

---

## 3. Abstände

Vierer-Raster. Sektionsabstände großzügig, passend zu `VISUAL_DENSITY 3`.

| Token | Wert |
|---|---|
| `space-1` bis `space-6` | 4 · 8 · 12 · 16 · 24 · 32 px |
| `space-8` / `space-12` | 48 / 64 px |
| Sektion mobil | 64 px oben und unten |
| Sektion desktop | 112 px oben und unten |
| Inhaltsbreite | max. 1200 px, Seitenrand 20 px mobil |

---

## 4. Radien

Ein System, durchgehend angewandt:

| Element | Radius |
|---|---|
| Buttons | voll rund (Pille) |
| Karten | 16 px |
| Eingabefelder | 10 px |
| Bilder | 12 px |
| PIN- und Play-Kreise | voll rund |

Die Pillenform der Buttons ist kein Zufall: sie zitiert den Play-Knopf und den Kartenpin.

---

## 5. Schatten

Warm getönt, nie neutralschwarz.

| Token | Wert |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(60, 45, 30, 0.06)` |
| `shadow-md` | `0 4px 16px rgba(60, 45, 30, 0.08)` |
| `shadow-lg` | `0 12px 32px rgba(60, 45, 30, 0.10)` |

Karten bekommen zuerst eine Haarlinie, einen Schatten nur dort, wo Höhe wirklich Hierarchie bedeutet.

---

## 6. Buttons

| Variante | Fläche | Text | Einsatz |
|---|---|---|---|
| Primär | `--brand` | `--ink` (5.39:1) | „Zur Karte", „App laden" |
| Sekundär | transparent, 1.5 px Rand `--ink` | `--ink` | Nebenaktionen |
| Text | keine | `--brand-ink` | Inline-Links |

Höhe 48 px, mobil 52 px, damit die Tippfläche den Empfehlungen entspricht. Beim Drücken `scale(0.98)`, Übergang 150 ms. Fokusring 2 px `--brand-ink` mit 2 px Abstand, immer sichtbar.

Maximal drei Wörter pro Button, eine Zeile.

---

## 7. Karten

Grund `--surface`, Rand 1 px `--border`, Radius 16 px, Innenabstand 24 px. Kategorie-Karten bekommen einen 3 px hohen Streifen in `--brand` an der Oberkante als einziges farbiges Element. Beim Überfahren hebt sich die Karte 2 px an, Schatten wechselt auf `shadow-md`.

---

## 8. Bewegung

`MOTION_INTENSITY 4`, also spürbar aber ruhig.

- Einblenden beim Scrollen: 24 px Versatz, 600 ms, Easing `cubic-bezier(0.16, 1, 0.3, 1)`, gestaffelt 60 ms
- Audiowelle: die einzige Dauerbewegung auf der Seite, und nur am Audio-Element
- Kein Parallax, kein Scroll-Hijack, keine magnetischen Buttons
- `prefers-reduced-motion` schaltet alles auf statisch

---

## 9. Was daraus noch nicht folgt

Offene Punkte, die die Tokens nicht lösen und die vor dem Bau geklärt sein sollten:

- **Weißer Text auf Orange fällt durch die Barrierefreiheitsprüfung** (2.79:1 gegen geforderte 4.5:1). Eure heutige Hero-Headline macht genau das. Mein Vorschlag ist dunkler Text auf Orange. Falls weiße Schrift auf Orange gesetzt ist, brauchen wir ein deutlich dunkleres Orange, und das verändert die Markenwirkung.
- **Gedankenstriche:** Ich setze durchgehend Komma, Doppelpunkt oder Punkt statt „–". Das weicht von der Zeichensetzung im Briefing ab, ist aber bewusst und einheitlich.
- Logo als SVG fehlt.
- Echte Fotos fehlen. Platzhalter werden abstrakt, nicht fotorealistisch.
