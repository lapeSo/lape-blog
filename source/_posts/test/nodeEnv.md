---
layout: post
title: 环境依赖
author: Lape
tags:
  - 技术
  - node.js
abbrlink: 7915
date: 2023-06-13 00:00:00
---

> “这里整理部分环境依赖. ”

## NVM

> node.js版本管理 [NVM](https://github.com/coreybutler/nvm-windows/releases),下载 nvm-setup.zip.


```javascript
// 国内镜像配置（淘宝）：
$ npm config set registry https://registry.npm.taobao.org
```

```javascript
// strapi 不支持 v16 以上
// 查看已下载版本: 
$ nvm list
// 下载指定版本的node环境: 
$ nvm install 16.18.1
// 使用指定版本的node环境: 
$ nvm use 16.18.1
```

## PM2

> PM2 是一个守护进程管理工具，帮助您管理和守护您的应用程序。它以简单直观的 CLI 命令行方式进行工作。

```javascript
// pm2 安装
$ npm install pm2@latest -g
// 启动
$ pm2 start app.js
// 重命名启动
$ pm2 start app.js --name testName
// 查看进程
$ pm2 list
// 重新开始指定进程 可以用 all
$ pm2 restart app_name
// 停止指定进程 可以用 all
$ pm2 stop app_name
// 删除指定进程 可以用 all
$ pm2 delete app_name
```

```javascript
// 单个应用的进程配置文件，app.js中的代码：
const {
    exec
} = require('child_process')
exec('hexo server -p 4000 & ', (error, stdout, stderr) => {
    if (error) {
        console.log('exec error: ${error}')
        return
    }
    console.log('stdout: ${stdout}');
    console.log('stderr: ${stderr}');
})
```
## Sqlite

>Sqlite 可视化工具，可以在vscode插件库安装

>数据库[下载地址](https://www.sqlite.org/download.html)
数据库可视化工具[下载地址](https://www.heidisql.com/download.php)
