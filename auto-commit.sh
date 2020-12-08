
while :
do
  sleep 2 &
  now=$(date +"%T")
  git add .
  git commit -m "$now - Javascript - Desafio"
  git push
  echo "Autocommit finished."
  wait
done
