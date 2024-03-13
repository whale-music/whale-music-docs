# 部署

## Windows

工具链(Windos端)

| 供应商               | 工具链 | 地址                                                         |
| -------------------- | ------ | ------------------------------------------------------------ |
| openjdk (清华镜像源) | jre    | [地址](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.10_7.zip) |
| openjdk(华为镜像源)  | jdk    | [地址](https://mirrors.huaweicloud.com/openjdk/17.0.2/openjdk-17.0.2_windows-x64_bin.zip) |
| openjdk(官网)        | jdk    | [地址](https://download.java.net/java/GA/jdk17.0.2/dfd4a8d0985749f896bed50d7138ee7f/8/GPL/openjdk-17.0.2_windows-x64_bin.zip) |
| oracle(官网)         | jdk    | [地址](https://download.oracle.com/java/17/archive/jdk-17.0.10_windows-x64_bin.zip) |

### 手动安装

> 推荐下载jre，占用空间更小。

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jre/x64/windows/OpenJDK17U-jre_x64_windows_hotspot_17.0.10_7.zip -O OpenJDK17.zip
```

解压到当前目录（也可以使用[7-Zip](https://7-zip.org/)等工具解压）

```bash
unzip OpenJDK17.zip
```

下载whale music jar

```bash
wget https://github.com/whale-music/whale/releases/latest/download/whale-music.jar
```

这时当前目录应该是这样的

```bash
.
├── jdk-17.0.10+7-jre
└── whale-music.jar
```

在当前目录执行命令

```bash
./jdk-17.0.10+7-jre/bin/java -jar whale-music.jar
```

查看密码

```bash
./jdk-17.0.10+7-jre/bin/java -jar whale-music.jar admin
```



## Linux/Unix/Max

### SDKMAN

> 安装[sdkman](https://sdkman.io/)不是必须的，你也可以选择[自行安装JDK](#包管理器)。

安装[sdkman](https://sdkman.io/)

```bash
curl -s "https://get.sdkman.io" | bash
```

刷新环境

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

验证是否安装成功。

```bash
sdk version
```

安装jdk17

```bash
sdk install java 17.0.10-oracle
```

添加jdk到环境变量

```bash
sdk default java 17.0.10-oracle # 永久
sdk use java17.0.10-oracle      # 临时
```



### 包管理器

Debian/Ubuntu

```bash
sudo apt update -y && sudo apt install openjdk-17-jdk -y
```

Mac

```bash
brew install openjdk@17
```



### 手动安装

- [Oracle](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Adoptium](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jre/)(清华源)
- [OpenJdk](https://mirrors.huaweicloud.com/openjdk/17.0.2/)(华为源)

#### Linux

以[Oracle](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)为例

```bash
wget https://download.oracle.com/java/17/archive/jdk-17.0.10_linux-x64_bin.tar.gz
```

解压

```bash
tar xzvf jdk-17.0.10_linux-x64_bin.tar.gz
```

下载whale-music.jar

```bash
wget https://github.com/whale-music/whale/releases/latest/download/whale-music.jar
```

运行

```bash
./jdk-17.0.10/bin/java -jar whale-music.jar
```

#### MacOS 

下载

```bash
# x64
wget https://download.oracle.com/java/17/archive/jdk-17.0.10_macos-x64_bin.tar.gz -O jdk_bin.tar.gz
# arm
wget https://download.oracle.com/java/17/archive/jdk-17.0.10_macos-aarch64_bin.tar.gz -O jdk_bin.tar.gz
```

解压

```bash
tar xzvf jdk_bin.tar.gz
```

下载whale-music.jar

```bash
wget https://github.com/whale-music/whale/releases/latest/download/whale-music.jar
```

运行

```bash
./jdk-17.0.10/bin/java -jar whale-music.jar
```

