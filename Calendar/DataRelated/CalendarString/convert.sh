#!/bin/sh
echo
while read line
do
  if [ "${line}" ]; then
    printf '%s%s' "${line}" '\r\n'
  fi
done < ${1}
echo

#content=`cat ${1}`
#string=''
#for line in ${content}
#do
#  string=${string}${line}\\r\\n
#done
#printf '%s' "${string}" 
