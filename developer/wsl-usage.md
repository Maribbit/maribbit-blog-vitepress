# WSL的基本使用

本文介绍WSL的基本使用方法，包括如何启动WSL、访问Windows目录以及使用指定用户登录等内容。

## `wsl`命令的基本使用

从命令行可以使用`wsl`命令启动WSL。

其实是启动了`/System32/wsl.exe`这个命令行工具。它可以被视为一个客户端。

启动这个工具时，同时启动了WSL子系统，并且使用该子系统默认的shell与子系统进行交互。

如果在子系统当中使用`exit`退出，命令行工具会关闭，回到Windows命令行，但子系统会在后台持续运行。

使用`--shutdown`，才会停止后台运行的子系统。

Windows启动时，默认不会启动子系统。它会在首次使用`wsl`命令时启动。

```powershell
# 启动默认子系统
wsl
# 停止WSL及所有子系统
wsl --shutdown
# 获取WSL命令指引
wsl --help
```

## 使用Appx安装的exe启动WSL

如果是使用Microsoft Store或者Appx安装的子系统，默认会同时安装一个exe文件用于访问。

这个exe文件默认会放在`C:\Program Files\WindowsApps`文件夹下。它也默认含在Path环境变量当中。

所以此时，在Windows命令行中，除了使用`wsl`命令之外，也可以使用相应的命令启动对应发行版。

```powershell
# 以Debian为例，它的exe文件名是`debian.exe`，所以命令行中可以使用以下命令启动debian
debian
# 获取帮助
debian --help
```

这个exe与`/System32/wsl.exe`是分离的。它用来管理指定的发行版，比如安装、设置默认用户。

## 访问Windows目录

Windows磁盘在WSL当中的挂载目录位于`/mnt`。

可以在WSL当中使用绝对路径快速导航，比如进入一个D盘的文件夹。

```bash
cd /mnt/d/myDir
```

此外，也可以先在Windows命令行导航，然后用`wsl`命令进入WSL。此时会直接导航到这个目录。

## 使用指定用户登录

如果子系统是用主流方法安装的，Windows会帮忙配置一个默认非root用户。

如果子系统是用快照导入的，有可能没有默认用户，登录时直接进入了root用户。

要使用指定用户登录，使用`--user`或简写`-u`选项。

```powershell
wsl -u <Username>
```

## 配置默认用户

### 从Windows配置

如果发行版是通过使用Microsoft Store或者Appx安装的，存在启动用的exe文件，就可以使用以下命令配置

```powershell
<DistributionName> config --default-user <Username>
```

### 从WSL内部配置

在WSL当中，新建并编辑`/etc/wsl.conf`文件（注意要有`sudo`权限）

```/
sudo vi /etc/wsl.conf
```

添加内容：

```
[user]
default = <Username>
```

## APT换源

Debian及其衍生版本采用Advanced Package Tool(APT)来管理软件包。

使用默认源，国内`apt install`速度往往很慢。需要换源加速。

不论使用哪个镜像站，在换源前，首先要安装HTTPS相关的软件。

```bash
apt install apt-transport-https ca-certificates
```

然后可以查阅镜像站文档来换源。

- [中科大Debian软件源](https://mirrors.ustc.edu.cn/help/debian.html)
- [清华Debian软件源](https://mirrors.tuna.tsinghua.edu.cn/help/debian/)

换源完成后使用`update`命令来更新软件源

```bash
sudo apt-get update
```