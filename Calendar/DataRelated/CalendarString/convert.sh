#!/bin/sh
echo
while read line
do
 if [ "${line}" ]; then
   printf '%s%s' "${line}" '\r\n'
 fi
done < ${1}
echo

# content=`cat ${1}`
# string=''
# for line in ${content}
# do
#   string=${string}${line}\\r\\n
# done
# printf '%s' "${string}" 

# There will be error if space letter in string
# content=`cat $1`
# string=''
# count=0
# for line in ${content}
# do
#   # ((count++))
#   # echo ${count} ${line}
#   string=${string}${line}\\r\\n
# done
# echo
# printf '%s' "${string}"
# echo
# echo