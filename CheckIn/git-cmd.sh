git checkout history
git reset 414ace
git add -u
git commit -m 'CORE-1494: Add Soft Key Event for Monthly View. r?Arthur.'
git checkout local-CORE-1494
git reset --hard history
git rebase -i --onto e9d0f9 tag-CORE-1685 local-CORE-1494
git push -f me local-CORE-1494:CORE-1494
