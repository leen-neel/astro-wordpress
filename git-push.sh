#!/bin/bash  
  
echo "Enter the commit message: "
read commit_message

git add .
git commit -am "$commit_message"
git push origin main

clear
figlet "Done!"
sleep 3
clear
