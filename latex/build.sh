#!/bin/bash

pandoc --chapters --no-tex-ligatures --normalize ../Abstract.md -o abstract.tex
pandoc --chapters --no-tex-ligatures --normalize ../Introduction.md -o intro.tex
pandoc --chapters --no-tex-ligatures --normalize --biblatex ../Research.md -o research.tex
pandoc --chapters --no-tex-ligatures --normalize --biblatex ../Design.md -o design.tex
pandoc --chapters --no-tex-ligatures --normalize ../Conclusion.md -o conclusion.tex

bibtex thesis
makeglossaries thesis.acn
makeglossaries thesis.glo
xelatex -shell-escape -interaction nonstopmode thesis.tex
