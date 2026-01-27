# GitHub Pages 部署指南

## 你的网站地址
部署成功后，你的网站将在这里访问：
**https://Qinlin619.github.io/qinlin2026**

## 快速部署步骤

### 1. 提交所有更改到 Git

```bash
# 添加所有更改的文件
git add .

# 提交更改
git commit -m "Update portfolio with multilingual support and new features"

# 推送到 GitHub
git push origin main
```

### 2. 部署到 GitHub Pages

```bash
npm run deploy
```

这个命令会：
- 自动构建项目（`npm run build`）
- 将构建好的文件推送到 `gh-pages` 分支
- GitHub 会自动从 `gh-pages` 分支部署网站

### 3. 在 GitHub 上启用 Pages（如果还没有启用）

1. 访问你的仓库：https://github.com/Qinlin619/qinlin2026
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 部分：
   - 选择 **Deploy from a branch**
   - Branch 选择 **gh-pages**
   - Folder 选择 **/ (root)**
5. 点击 **Save**（保存）

### 4. 等待部署完成

- 通常需要 1-3 分钟
- 你可以在仓库的 **Actions** 标签页查看部署状态
- 部署完成后，访问：https://Qinlin619.github.io/qinlin2026

## 后续更新

每次修改代码后，只需运行：

```bash
# 1. 提交更改
git add .
git commit -m "描述你的更改"
git push origin main

# 2. 部署
npm run deploy
```

## 常见问题

### 问题1：页面显示空白
- 检查 `package.json` 中的 `homepage` 是否正确
- 确保运行了 `npm run build` 且没有错误
- 检查浏览器控制台是否有错误

### 问题2：404 错误
- React Router 使用 BrowserRouter，直接访问子路由（如 `/research`）会显示 404
- 这是正常的，用户通过首页导航不会有问题
- 如果需要支持直接访问子路由，可以考虑使用 HashRouter

### 问题3：样式或图片不显示
- 确保所有资源路径使用相对路径
- 检查 `package.json` 中的 `homepage` 配置

### 问题4：GitHub Pages 设置找不到
- 确保仓库是 **Public**（公开）的
- 如果使用私有仓库，需要 GitHub Pro 账户

## 检查部署状态

1. 访问仓库的 **Settings** → **Pages**
2. 查看是否有绿色的成功提示
3. 如果显示错误，点击查看详情

## 分享你的网站

部署成功后，你可以分享这个链接：
**https://Qinlin619.github.io/qinlin2026**
