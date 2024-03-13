# 快速开始
> 启动服务需要一些前置软件，如果没有安装请先阅读[部署](deploy.md)
## 安装
::: danger
重新安装该服务可能会因为数据库版本不一致导致软件运行错误，所以重新安装时需要清空数据库文件。
:::
下载
```bash
wget https://github.com/whale-music/whale/releases/latest/download/whale-music.jar
```
运行
```bash
java -jar whale-music.jar
```
## 查看密码
```bash
java -jar whale-music.jar admin
```

## Docker
pull
```bash
docker pull whalemusic@latest
```
run
```bash
docker run -d \
-p 6780:6780  \
-p 6781:6781  \
-p 6782:6782  \
-p 6783:6783  \
-v ./whale-music:/whale-music \
whalemusic
```
