---
layout: post
title: Git操作指南
author: Lape
tags:
  - 开发者手册
abbrlink: 51526
date: 2023-06-14 14:17:00
---

> “这里整理 Git 常用命令. ”

```bash
// 克隆项目
git clone 'url'

// 初始化
git init

// 添加所有更改项到暂存
git add .

// 添加提交备注
git commit -m "first commit"

// 添加远程仓库地址
git remote add origin 'url'

// 向远程仓库 master 分支推送
git push origin master

// 向远程仓库 master 分支拉取
git pull origin master

// 新建远程分支
git branch 'newName'

// 查看所有分支信息
git branch

// 删除分支，需要切换到其他分支
git branch 'name'

// 切换到 master 分支
git checkout master

// 合并 dev 分支
git merge dev

// 查看远程仓库地址
git remote -v

// 更改远程仓库地址
git remote set-url origin 'url'

// 移除当前仓库地址
git remote rm origin
```
