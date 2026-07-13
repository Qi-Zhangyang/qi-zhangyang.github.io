# 3D Grounding project site

静态项目介绍页，无构建步骤、无后端依赖，可直接部署到 GitHub Pages。

## 本地预览

```bash
python3 -m http.server 8000 --directory 3d-grounding-site
```

然后访问 `http://127.0.0.1:8000/`。

## 文件

- `index.html`：页面内容与结构
- `styles.css`：响应式视觉样式
- `assets/project-overview.png`：项目说明图

## 部署

将整个目录复制到 GitHub Pages 仓库中的独立子目录，例如 `3d-grounding/`，即可通过
`https://<username>.github.io/3d-grounding/` 访问。
