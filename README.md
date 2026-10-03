# 林知远 — 视觉设计师 · 品牌与界面

个人作品集静态站点（GitHub Pages 托管）。

## 结构

- `index.html` — 首页
- `work.html` — 作品集页
- `css/style.css` — 全站样式
- `js/data.js` — 全站文字内容（改这一个文件就能换掉整站文案）
- `js/main.js` — 交互逻辑（主题切换、导航、滚动动效等）

## 改内容

文字、作品、技能、经历、联系方式都集中在 `js/data.js`，直接编辑保存后提交即可。

## 本地预览

```bash
python -m http.server 8000
```

然后打开 http://localhost:8000
