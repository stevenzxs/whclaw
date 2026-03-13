#!/bin/bash
# 本地部署脚本

SERVER_IP="150.158.83.70"
USER="ubuntu"
PACKAGE="whclaw-docker-deploy.tar.gz"

echo "正在上传部署包到服务器..."
scp -o StrictHostKeyChecking=no "$PACKAGE" "$USER@$SERVER_IP:/home/ubuntu/"

echo "正在部署..."
ssh -o StrictHostKeyChecking=no "$USER@$SERVER_IP" "
  cd /home/ubuntu
  rm -rf whclaw-deploy
  mkdir whclaw-deploy
  tar -xzf $PACKAGE -C whclaw-deploy
  cd whclaw-deploy
  docker build -t whclaw:latest .
  docker stop whclaw || true
  docker rm whclaw || true
  docker run -d -p 80:80 --name whclaw whclaw:latest
  echo '部署完成！'
"

echo "访问地址: http://$SERVER_IP"
