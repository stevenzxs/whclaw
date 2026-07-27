# 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

# 复制 package.json 和 package-lock.json (从 app 目录)
COPY app/package*.json ./

# 安装依赖
RUN npm ci

# 复制源代码 (从 app 目录)
COPY app/ .

# 构建应用
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 复制 nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 复制构建产物到 nginx 目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]
