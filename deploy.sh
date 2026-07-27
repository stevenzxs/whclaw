#!/bin/bash
# 本地部署脚本（docker compose 方式）
# 用法: 在项目根目录执行 bash deploy.sh
set -e

SERVER_IP="150.158.83.70"
USER="ubuntu"
PACKAGE="whclaw-docker-deploy.tar.gz"
REMOTE_DIR="/home/ubuntu/whclaw-deploy"

echo "[1/4] 打包部署文件..."
tar -czf "$PACKAGE" \
  --exclude=app/node_modules \
  --exclude=app/dist \
  --exclude=.git \
  --exclude=.codegraph \
  --exclude=cert \
  Dockerfile nginx.conf docker-compose.yml app

echo "[2/4] 上传部署包到服务器..."
scp -o StrictHostKeyChecking=no "$PACKAGE" "$USER@$SERVER_IP:/home/ubuntu/"

echo "[3/4] 解压并使用 docker compose 部署..."
# 注意: 不删除 $REMOTE_DIR，直接覆盖解压，以保留服务器上的 certs/ 证书目录
ssh -o StrictHostKeyChecking=no "$USER@$SERVER_IP" "
  set -e
  mkdir -p $REMOTE_DIR
  tar -xzf /home/ubuntu/$PACKAGE -C $REMOTE_DIR
  cd $REMOTE_DIR
  sudo docker compose up -d --build
"

echo "[4/4] 验证服务健康状态..."
ssh -o StrictHostKeyChecking=no "$USER@$SERVER_IP" "
  curl -sf http://localhost/health > /dev/null && echo 'HTTP health: OK'
  curl -skf https://localhost/health > /dev/null && echo 'HTTPS health: OK'
"

echo "部署完成！"
echo "访问地址: https://www.whclaw.top"
