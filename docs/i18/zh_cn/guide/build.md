# Docker

## 拉取
```bash
docker pull whale-music
```
### 运行
```bash
docker run -d \
  -p 6780:6780 \
  -p 6781:6781 \
  -p 6782:6782 \
  -p 6783:6783 \
  -v ./data:/whale-music/data \
  whale-music
```

## 手动构建
> 必须安装 `java` `maven` `docker`
```bash
docker build .
```

