#!/bin/bash

bibtex ba
makeglossaries ba.acn
makeglossaries ba.glo
xelatex -shell-escape -interaction nonstopmode ba.tex
