# Wh Claw Docker Deployment

## 快速部署

```bash
# 构建镜像
docker build -t whclaw:latest .

# 运行容器
docker run -d --name whclaw -p 80:80 whclaw:latest

# 查看日志
docker logs -f whclaw

# 停止容器
docker stop whclaw

# 删除容器
docker rm whclaw
```

## 使用 Docker Compose

```bash
# 启动
docker-compose up -d

# 停止
docker-compose down

# 重新构建并启动
docker-compose up -d --build
```

## 访问应用

部署完成后，访问: http://服务器IP
