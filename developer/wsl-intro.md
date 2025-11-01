# Windows子系统Linux(WSL)简介与安装

Windows子系统Linux(Windows Subsystem for Linux, WSL)是微软官方提供的在Windows上运行Linux环境的解决方案。

WSL允许用户在Windows上直接运行Linux发行版，提供了一个完整的Linux内核接口，使得用户可以在Windows环境下使用Linux的命令行工具和应用程序。

WSL有两个主要版本：

- WSL1：最初版本，通过翻译Linux系统调用来实现与Windows内核的交互，性能较低，但兼容性较好。
- WSL2：引入了真正的Linux内核，使用轻量级虚拟机技术，性能大幅提升，兼容性更好。

WSL2是目前推荐使用的版本，支持更多的Linux应用程序和工具，并且提供了更好的文件系统性能。

## 为什么要使用WSL

大多数情况下，一个Windows用户并不需要WSL。

因为Windows本身就是一个功能强大的操作系统，可以满足大部分用户的需求。

如果你没有命令行、Linux使用经验，WSL可能看起来没什么用处。大可不必安装它。

而开发者都要明白：现代的硬件、软件开发环境，越来越多地依赖于Linux生态系统。

嵌入式开发、云计算、服务器运维等领域都是如此。

我个人从小使用Windows，养成了习惯，但工作当中Linux环境是绕不过去的：

只有在Linux环境下，才可以模拟服务器环境，使用Linux特有的工具链。

像Docker、Kubernetes这些现代开发工具，都是基于Linux内核设计的。

如果你在Windows上安装Docker Desktop，那么它的后端也是基于WSL2的。

为了性能，很多人直接在WSL2上使用Docker，而不是在Windows上使用Docker Desktop。

还有像换行符、文件权限这些细节问题，只有在Linux环境下才能被正确处理。

有了WSL之后，就可以在Windows上无缝使用Linux环境，符合Windows的使用习惯，又能满足开发需求。

## 安装WSL

入门第一步：安装WSL。

WSL不是Windows的默认组件，需要手动安装。

可以从[Microsoft Store](https://www.microsoft.com/store)下载，也可以从[Github](https://github.com/microsoft/WSL/releases)获取。

下面的所有内容都基于WSL2。

## 安装一个Linux发行版

有两种主流方法

1. 通过Microsoft Store安装
2. 或者使用WSL安装命令（见[此文档](https://learn.microsoft.com/en-us/windows/wsl/install)）。

```powershell
wsl --install
```

如果安装失败，可能是因为WSL版本不够高，或者Windows虚拟机相关设置未打开。

此时搜索“启动或关闭Windows功能”（Turn Windows features on or off），打开虚拟机相关的几个设置。

- Windows Subsystem for Linux
- Virtual Machine Platform
- Hyper-V

或者走一下下面手动安装文档中的配置过程。

默认会安装Ubuntu。如果想要指定其他发行版，同样是两种方法

1. 通过Microsoft Store下载
2. 或者使用d参数进行安装

```powershell
# 查看可下载的发行版
wsl --list --online
# 安装对应发行版
wsl --install -d Debian
```

如果无法查看可下载的发行版，可能是网络问题。可以走手动安装的方式。

如果下载发行版时停在0，可能是WSL版本过低，需要升级。

## 手动从Microsoft Store安装

从[此文档](https://learn.microsoft.com/en-us/windows/wsl/install-manual#downloading-distributions)下载Appx软件包，相当于直接下载了Microsoft Store的安装包。

如果电脑上无法使用Microsoft Store，那么大概率双击安装是无效的。

此时可以使用Windows的内置安装程序来直接安装。

```powershell
Add-AppxPackage .\XXX.AppxBundle
```

完成后从开始菜单可以找到新安装的发行版。点击打开后就进入了用户配置流程。

## 切换到其他安装位置：导出快照

使用主流的安装方式，WSL的默认安装位置是C盘。

可以使用快照导出、导入的功能，把WSL移动到任意位置。

导出的快照默认是tar格式。（在WSL2下可以导出`.vhdx`文件，具体查看[基本命令](https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands)）

```powershell
# 关闭WSL（如果正在运行）
wsl --shutdown
# 查看当前的发行版名称
wsl --list
# 导出快照
wsl --export <Distribution Name> <FileName>
```

## 从快照导入安装

如果拿到了tar快照，想要导入，只要使用import命令。它可以指定安装位置，建议找一个空间充足的地方。

```powershell
# 格式
wsl --import <Distribution Name> <InstallLocation> <FileName>
# 示例
wsl --import Ubuntu-22.04 D:\wsl\Ubuntu D:\wsl\wslbackup-250422.tar
```