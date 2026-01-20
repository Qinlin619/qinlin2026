# GitHub Pages 部署指南

## 步骤 1: 在 GitHub 上创建仓库

1. 登录 GitHub
2. 点击右上角的 "+" → "New repository"
3. 填写仓库信息：
   - Repository name: `qinlin-portfolio` (或你喜欢的名字)
   - Description: 可选
   - 选择 Public（GitHub Pages 免费版需要公开仓库）
   - **不要**勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

## 步骤 2: 更新 package.json 中的 homepage

打开 `package.json`，将 `homepage` 字段改为你的 GitHub Pages 地址：

```json
"homepage": "https://你的GitHub用户名.github.io/仓库名"
```

例如：
```json
"homepage": "https://qinlinliu.github.io/qinlin-portfolio"
```

## 步骤 3: 安装 gh-pages 包

在终端运行：

```bash
npm install --save-dev gh-pages
```

## 步骤 4: 初始化 Git 仓库（如果还没有）

```bash
git init
git add .
git commit -m "Initial commit"
```

## 步骤 5: 连接到 GitHub 仓库

```bash
git remote add origin https://github.com/你的用户名/仓库名.git
git branch -M main
git push -u origin main
```

## 步骤 6: 部署到 GitHub Pages

运行部署命令：

```bash
npm run deploy
```

这个命令会：
1. 自动运行 `npm run build` 构建项目
2. 将构建好的文件推送到 `gh-pages` 分支
3. GitHub 会自动从 `gh-pages` 分支部署你的网站

## 步骤 7: 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 选择 "gh-pages" 分支和 "/ (root)" 文件夹
5. 点击 "Save"

## 访问你的网站

等待几分钟后，你的网站将在以下地址可用：

```
https://你的用户名.github.io/仓库名
```

## 后续更新

每次修改代码后，只需运行：

```bash
git add .
git commit -m "Update content"
git push
npm run deploy
```

## 注意事项

- React Router 使用 BrowserRouter，GitHub Pages 需要特殊配置
- 如果直接访问子路由（如 `/research`）出现 404，这是正常的
- 用户通过首页导航不会有问题
- 如果需要支持直接访问子路由，可以考虑使用 HashRouter（但 URL 会有 `#`）

## 故障排除

如果部署后页面是空白的：
1. 检查 `package.json` 中的 `homepage` 是否正确
2. 确保 `build` 文件夹中有 `index.html`
3. 检查浏览器控制台是否有错误
