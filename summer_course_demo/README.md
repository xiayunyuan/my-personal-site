# summer_course_demo

课程部署演示静态网站项目。

## 项目结构

```
summer_course_demo/
├─ .gitignore          # Git 忽略规则
├─ .gitlab-ci.yml      # GitLab CI/CD 自动部署流水线
├─ README.md           # 项目说明
└─ public/             # 唯一需要部署的静态资源目录
   ├─ index.html       # 网站首页
   └─ styles.css       # 样式表
```

## 部署说明

- `public/` 是唯一部署到腾讯云 CVM 云服务器的目录，外网访问读取其中的 `index.html`。
- 推送代码到 GitLab 的 `main` 分支后，CI/CD 流水线会通过 SSH 免密 + rsync 自动把 `public/` 下所有文件同步到服务器 Nginx 网站根目录。

## 需要配置的 CI/CD 变量

在 GitLab 仓库 `Settings -> CI/CD -> Variables` 中添加：

| 变量名 | 说明 | 示例 |
| ------ | ---- | ---- |
| `SSH_PRIVATE_KEY` | SSH 私钥（免密登录用） | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SERVER_IP` | 腾讯云 CVM 公网 IP | `123.45.67.89` |
| `SERVER_USER` | SSH 登录用户名 | `ubuntu` |
| `DEPLOY_PATH` | Nginx 网站根目录 | `/var/www/summer_course` |

## 本地操作步骤

```bash
# 1. 初始化 git 仓库
cd summer_course_demo
git init
git branch -M main

# 2. 关联 GitLab 远程仓库（替换为你的仓库地址）
git remote add origin git@gitlab.com:你的用户名/summer_course_demo.git

# 3. 提交并推送，触发自动部署
git add .
git commit -m "初始化静态网站项目"
git push -u origin main
```

推送完成后，到 GitLab 仓库 `Build -> Pipelines` 查看流水线执行状态。
