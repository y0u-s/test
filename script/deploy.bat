ssh app@145.24.222.111 <<EOF
  cd ~/test/test
  git pull
  npm install --production
  forever restartall
  exit
EOF
