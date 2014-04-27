#!/bin/bash

xelatex -shell-escape -interaction nonstopmode thesis.tex
bibtex thesis
makeglossaries thesis.acn
makeglossaries thesis.glo
xelatex -shell-escape -interaction nonstopmode thesis.tex
xelatex -shell-escape -interaction nonstopmode thesis.tex
