#!/bin/bash

rm src/newsleters.txt

for C in public/newsletters/*; do
  VCAT="$(echo "${C}" | awk -F/ '{print $NF}')"
  echo $VCAT
  for D in public/newsletters/$VCAT/*; do
    VDATE="$(echo "${D}" | awk -F/ '{print $NF}')"
      if [ -d "${D}" ]; then
          # for f in $D/*mjml; do
          #   ./node_modules/.bin/mjml $f > $(echo $f | sed 's/mjml$/html/g');
          # done
          echo $VDATE \| $(grep \<title ${D}/index.html) \| $VCAT >> src/newsletters.txt
      fi
  done
done