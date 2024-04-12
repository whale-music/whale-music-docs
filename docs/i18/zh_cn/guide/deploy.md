# 部署

工具链

| 供应商                                                       | 工具链 | Window(x64)                                                  | Linux(x64)                                                   |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [openjdk](https://mirrors.tuna.tsinghua.edu.cn/) (清华镜像源) | jre    | [地址](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jre/x64/windows/OpenJDK21U-jre_x64_windows_hotspot_21.0.2_13.zip) | [地址](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jre/x64/linux/OpenJDK21U-jre_x64_linux_hotspot_21.0.2_13.tar.gz) |
| [openjdk](https://mirrors.huaweicloud.com/home)(华为镜像源)  | jdk    | [地址](https://mirrors.huaweicloud.com/openjdk/21.0.1/openjdk-21.0.1_windows-x64_bin.zip) | [地址](https://mirrors.huaweicloud.com/openjdk/21.0.1/openjdk-21.0.1_linux-x64_bin.tar.gz) |
| [openjdk](https://openjdk.org/)(官网)                        | jdk    | [地址](https://download.java.net/openjdk/jdk21/ri/openjdk-21+35_windows-x64_bin.zip) | [地址](https://download.java.net/openjdk/jdk21/ri/openjdk-21+35_linux-x64_bin.tar.gz) |
| [oracle](https://www.oracle.com/sg/java/technologies/downloads/)(官网) | jdk    | [地址](https://download.oracle.com/java/21/latest/jdk-21_windows-x64_bin.zip) | [地址](https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.tar.gz) |

## Windows

### 手动安装

> 推荐下载jre，占用空间更小。

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jre/x64/windows/OpenJDK21U-jre_x64_windows_hotspot_21.0.2_13.zip -O OpenJDK21.zip
```

解压到当前目录（也可以使用[7-Zip](https://7-zip.org/)等工具解压）

```bash
unzip OpenJDK21.zip
```

下载whale music jar

```bash
wget https://github.com/whale-music/whale/releases/latest/download/whale-music.jar
```

这时当前目录应该是这样的

```bash
.
├── jdk-21.0.2+13-jre
└── whale-music.jar
```

在当前目录执行命令

```bash
./jdk-21.0.2+13-jre/bin/java -jar whale-music.jar
```

查看密码

```bash
./jdk-21.0.2+13-jre/bin/java -jar whale-music.jar admin
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
sdk install java 21.0.2-open
```

添加jdk到环境变量

```bash
sdk default java 21.0.2-open # 永久
sdk use java 21.0.2-open     # 临时
```



### 包管理器

Debian/Ubuntu

```bash
sudo apt update -y && sudo apt install openjdk-21-jre -y
```

Mac

```bash
brew install openjdk@21
```



### 手动安装

- [Oracle](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Adoptium](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jre/)(清华源)
- [OpenJdk](https://mirrors.huaweicloud.com/openjdk/17.0.2/)(华为源)

#### Linux

以[清华源](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jre/)为例

```bash
wget https://mirrors.tuna.tsinghua.edu.cn/Adoptium/21/jre/x64/linux/OpenJDK21U-jre_x64_linux_hotspot_21.0.2_13.tar.gz
```

解压

```bash
tar xzvf OpenJDK21U-jre_x64_linux_hotspot_21.0.2_13.tar.gz
```

下载whale-music.jar

```bash
wget https://github.com/whale-music/whale/releases/latest/download/whale-music.jar
```

运行

```bash
./jdk-21.0.2+13-jre/bin/java -jar whale-music.jar
```

#### MacOS 

下载完成后点击安装

```bash
# x64
wget https://download.oracle.com/java/21/latest/jdk-21_macos-x64_bin.dmg
# arm
wget https://download.oracle.com/java/21/latest/jdk-21_macos-aarch64_bin.tar.gz
```

下载whale-music.jar

```bash
wget https://github.com/whale-music/whale/releases/latest/download/whale-music.jar
```

运行

```bash
java -jar whale-music.jar
```

