---
kernelspec:
  name: python3
  display_name: 'Python 3'

numbering:
  title: true
---
# Voorkennis

## Quantummechanica
### Energie van een foton 
Licht deeltjes (fotonen) hebben elk een beetje **energie** en een eigen **frequentie**.

Deze zijn aan elkaar gerelateerd met de formule voor foton energie:
```{math}
:label: eq_E_foton

E_f = h \cdot f
```

```{note} In deze formule
:class: dropdown
:open: false
:icon: false
- $E_f$: De energie van de foton. Eenheid: J of eV
- $h$: De constante van planck. Te vinden in BINAS tabel 7. Altijd gelijk aan $h=6,62607015 \cdot 10^{-34}\;\mathrm{Js}$
- $f$: De frequentie van het foton.
```

Met de verhouding tussen frequentie en golflengte: $v =\lambda \cdot f$ (met $v = c$ kunnen we formule {eq}`eq_E_foton` op schrijven als

$$ E_f = \frac{h \cdot c}{\lambda}$$

```{note} In deze formule
:class: dropdown
:open: false
:icon: false
- $E_f$: De energie van de foton in *J of eV*
- $h$: De constante van planck. Te vinden in BINAS tabel 7. Altijd gelijk aan $h=6,62607015 \cdot 10^{-34}\;\mathrm{Js}$
- $c$: De lichtsnelheid. Te vinden in BINAS tabel 7. Altijd gelijk aan $3 \cdot 10^{8}\;\mathrm{m/s}$
- $\lambda$: De golflengte van het licht *in m*
```


### Emissie van overspringen elektron verschillende banen 
We kunnen met het **bohr atoommodel** veel kenmerken van een atoom verklaren. Een belangrijke eigenschap van het model is dat elektronen zich alleen in bepaalde banen bevinden. Wanneer een elektron zich in een hogere baan dan nodig bevindt, noemen we dat elektron **geëxciteerd** of **aangeslagen**.

Wanneer dat elektron weer beweegt naar een lagere baan, noemen we dat **terugvallen**. Omdat het minder energie kost voor het elektron om zich in een lagere baan te bevinden, levert het terugvallen energie op. 

De energie van een elektron in een bepaalde baan (schil) kan berekend worden met de formule van Bohr:
```{math}
:label: eq_Bohr

E_n = \frac{-13.6\;\mathrm{eV}}{n^2}
```
```{note} In deze formule
:class: dropdown
:open: false
:icon: false
- $E_n$: De energie van het elektron in baan $n$. **Eenheid: eV**
- $n$: Het nummer van de baan (begint bij 1)
```


```{figure} https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Bohr_atom_model.svg/1280px-Bohr_atom_model.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail
:label: fig_foton
:width: 50%
:align: left

Een foton ontstaat door het terugvallen van een elektron. \
Door [JabberWok, CC BY-SA 3.0](https://commons.wikimedia.org/w/index.php?curid=2639910)
```

```{exercise}
:label: ex_opdr_1

Een elektron valt terug vanuit baan $n=3$ naar $n=1$. Bereken de frequentie van het foton dat daardoor ontstaat
```

```{solution} ex_opdr_1
:class: dropdown

We gebruiken hiervoor vergelijking {eq}`eq_Bohr` en {eq}`eq_E_foton`

$$ \Delta E = E_3 - E_1 = \frac{-13.6}{3^2} - \frac{13.6}{1^2} = 12.1 eV$$

Uit binas vinden we dat $1eV = 1.60217634\cdot 10^{-19} J$

Dus $\Delta E=12.1 \cdot 1.60217634\cdot 10^{-19} =19.36\cdot 10^{-19} J$

Nu gebruiken we {eq}`eq_E_foton` en stellen we $\Delta E$ gelijk aan $E_f$

$$ E_f = h \cdot f $$
$$ f=\frac{E_f}{h} = \frac{\Delta E}{h} = \frac{19.36\cdot 10^{-19}}{6.62607015 \cdot 10^{-34}}$$




```


## Electrische en magnetische velden
### Versnellen elektron in elektrisch veld 


### Buigen elektron in magnetisch veld 
