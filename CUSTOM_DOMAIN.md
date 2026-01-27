# GitHub Pages 自定义域名设置指南

## 什么是自定义域名？

自定义域名允许你使用自己的域名（如 `www.yourname.com`）而不是默认的 `Qinlin619.github.io/qinlin2026`。

## 设置步骤

### 步骤 1：在 GitHub 上设置自定义域名

1. 访问你的仓库：https://github.com/Qinlin619/qinlin2026
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Custom domain** 部分：
   - 输入你的域名（例如：`www.yourname.com` 或 `yourname.com`）
   - 点击 **Save**（保存）
5. GitHub 会自动创建一个 `CNAME` 文件

### 步骤 2：更新 package.json

如果你的域名是 `www.yourname.com`，需要更新 `package.json`：

```json
{
  "homepage": "https://www.yourname.com"
}
```

或者如果是根域名：

```json
{
  "homepage": "https://yourname.com"
}
```

### 步骤 3：配置 DNS（域名解析）

你需要在你的域名注册商（如 GoDaddy、Namecheap、阿里云等）配置 DNS：

#### 选项 A：使用 CNAME 记录（推荐，适用于子域名如 www）

1. 登录你的域名注册商
2. 找到 DNS 管理/域名解析
3. 添加一条 **CNAME** 记录：
   - **类型**：CNAME
   - **主机记录**：www（或你想要的子域名）
   - **记录值**：`Qinlin619.github.io`
   - **TTL**：600（或默认值）

#### 选项 B：使用 A 记录（适用于根域名）

如果你使用根域名（如 `yourname.com`），需要添加 A 记录：

1. 添加 4 条 **A** 记录，都指向 GitHub Pages 的 IP：
   - **类型**：A
   - **主机记录**：@（或留空，表示根域名）
   - **记录值**：以下 4 个 IP 地址（每个添加一条）：
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **TTL**：600

2. 如果也要支持 www，再添加一条 CNAME：
   - **类型**：CNAME
   - **主机记录**：www
   - **记录值**：`Qinlin619.github.io`

### 步骤 4：等待 DNS 生效

- DNS 更改通常需要 10 分钟到 48 小时生效
- 可以使用在线工具检查：https://www.whatsmydns.net/

### 步骤 5：重新部署

更新 `package.json` 后，需要重新部署：

```bash
# 提交更改
git add package.json
git commit -m "Update homepage for custom domain"
git push origin main

# 重新部署
npm run deploy
```

### 步骤 6：启用 HTTPS（自动）

GitHub Pages 会自动为自定义域名配置 HTTPS，但需要等待：
- DNS 生效后
- GitHub 检测到域名解析正确
- 通常需要几分钟到几小时

你可以在 **Settings** → **Pages** 中看到 HTTPS 状态。

## 常见域名配置示例

### 示例 1：使用 www 子域名
- 域名：`www.yourname.com`
- DNS：CNAME 记录，指向 `Qinlin619.github.io`
- package.json：`"homepage": "https://www.yourname.com"`

### 示例 2：使用根域名
- 域名：`yourname.com`
- DNS：A 记录，指向 GitHub IP（4个）
- package.json：`"homepage": "https://yourname.com"`

### 示例 3：同时支持根域名和 www
- 根域名：A 记录
- www：CNAME 记录
- package.json：`"homepage": "https://yourname.com"`（或 www，选择一个主域名）

## 注意事项

1. **不要同时使用 www 和根域名**
   - 选择一个作为主域名
   - 另一个可以重定向到主域名

2. **CNAME 文件**
   - GitHub 会自动创建 `CNAME` 文件
   - 不要手动删除或修改这个文件
   - 它会在 `gh-pages` 分支的根目录

3. **HTTPS 证书**
   - GitHub 会自动提供免费 SSL 证书
   - 需要等待 DNS 生效后才能配置

4. **DNS 传播时间**
   - 通常 10 分钟到 1 小时
   - 最长可能需要 48 小时

## 验证设置

1. 检查 DNS 是否生效：
   ```bash
   # Windows
   nslookup www.yourname.com
   
   # 或使用在线工具
   https://www.whatsmydns.net/
   ```

2. 检查 GitHub Pages 设置：
   - Settings → Pages
   - 应该显示你的自定义域名
   - HTTPS 状态应该是 "Enforce HTTPS"（已启用）

3. 访问你的网站：
   - 在浏览器中访问你的自定义域名
   - 应该能看到你的网站

## 故障排除

### 问题：DNS 不生效
- 等待更长时间（最多 48 小时）
- 检查 DNS 记录是否正确
- 清除浏览器 DNS 缓存

### 问题：HTTPS 未启用
- 等待 GitHub 自动配置（可能需要几小时）
- 确保 DNS 已正确配置
- 检查域名是否被正确验证

### 问题：网站无法访问
- 检查 `package.json` 中的 `homepage` 是否正确
- 确保已重新部署（`npm run deploy`）
- 检查浏览器控制台是否有错误

## 如果没有自定义域名

如果你还没有域名，可以：
1. 使用免费的 GitHub Pages 域名：`Qinlin619.github.io/qinlin2026`
2. 购买域名（推荐服务商）：
   - Namecheap（国外）
   - GoDaddy（国外）
   - 阿里云（国内）
   - 腾讯云（国内）

域名价格通常每年 $10-15 美元或 ¥50-100 人民币。
