/* ==========================================================================
   data.js — 全站内容数据（改这一个文件就能换掉整站文案）
   所有文字、作品、技能、经历、联系方式都集中在这里。
   ========================================================================== */

/* ------------------------------- 基本信息 ------------------------------- */
const SITE = {
  name: "DZY11",
  initials: "LZ",
  role: "视觉设计师 · 品牌与界面",
  location: "中国 · 上海",
  availability: "可接受 2026 Q4 新项目",
  // 首屏一句话
  tagline: "用克制的视觉语言，把复杂的信息讲清楚。",
  // 首屏下方两段简介
  intro: [
    "我是一名视觉设计师，八年时间专注于品牌视觉识别与数字产品界面。做过从 0 到 1 的品牌搭建，也做过成熟产品的大规模设计系统重构。",
    "我相信好的设计是「减法」——删掉不必要的装饰，让信息本身成为主角。工作之外，我在练习字体排印，也在整理一套关于节气与色彩的长期插画项目。",
  ],
  // 首屏数据
  stats: [
    { value: "8 年", label: "设计经验" },
    { value: "40+", label: "落地项目" },
    { value: "12", label: "长期合作客户" },
  ],
};

/* ------------------------------- 导航 ---------------------------------- */
const NAV = [
  { label: "首页", href: "index.html", key: "home" },
  { label: "作品集", href: "work.html", key: "work" },
  { label: "关于", href: "index.html#about", key: "about" },
  { label: "联系", href: "index.html#contact", key: "contact" },
];

/* ------------------------------- 技能 ---------------------------------- */
const SKILLS = [
  {
    title: "设计工具",
    items: ["Figma", "Sketch", "Illustrator", "Photoshop", "After Effects", "Blender"],
  },
  {
    title: "专业能力",
    items: ["品牌视觉识别", "界面设计", "设计系统", "字体排印", "动效设计", "插画"],
  },
  {
    title: "协作与流程",
    items: ["用户研究", "设计评审", "前端协作", "品牌规范落地", "设计走查"],
  },
];

/* ------------------------------- 经历 ---------------------------------- */
const EXPERIENCE = [
  {
    when: "2023.06 — 至今",
    role: "独立设计师",
    org: "自由职业",
    desc: "为消费品牌与科技公司提供品牌视觉、界面设计与设计系统咨询，直接对接创始人与产品负责人。",
  },
  {
    when: "2020.03 — 2023.05",
    role: "高级视觉设计师",
    org: "拾光科技",
    desc: "主导企业级产品的设计系统建设，覆盖 6 条产品线、200+ 组件；推动设计与前端的规范协同流程。",
  },
  {
    when: "2018.07 — 2020.02",
    role: "视觉设计师",
    org: "墨白设计工作室",
    desc: "参与 20 余个品牌识别与包装项目，负责视觉推导、字体选择与规范输出。",
  },
  {
    when: "2014 — 2018",
    role: "视觉传达设计 · 学士",
    org: "美术学院",
    desc: "主修字体排印与品牌设计，毕业设计获院级优秀作品。",
  },
];

/* ------------------------------- 联系方式 ------------------------------- */
const CONTACTS = [
  { label: "邮箱", value: "hello@example.com", href: "mailto:hello@example.com" },
  { label: "微信", value: "hello_design", href: "#" },
  { label: "站酷", value: "zcool.com.cn/u/hello", href: "#" },
  { label: "Behance", value: "behance.net/hello", href: "#" },
  { label: "小红书", value: "@hello.design", href: "#" },
];

/* ------------------------------- 作品分类 ------------------------------- */
const CATEGORIES = ["全部", "品牌", "界面", "插画", "空间"];

/* ------------------------------- 作品 ---------------------------------- */
/* cover: { variant, palette }  变体见下方 COVER 生成器
   summary: 卡片上的一句话；body: 详情页正文段落；gallery: 详情页图集 */
const WORKS = [
  {
    id: "morning-mist-coffee",
    title: "「晨雾」咖啡品牌视觉重塑",
    category: "品牌",
    year: "2025",
    client: "晨雾咖啡",
    role: "品牌设计 / 视觉规范",
    tools: "Illustrator · Figma · Photoshop",
    summary: "把一家社区咖啡馆的日常感，整理成一套能被复制的视觉语言。",
    cover: { variant: "arcs", palette: "amber" },
    body: [
      "晨雾咖啡在上海有三家门店，此前每家店的视觉各自为政：杯套、菜单、外带袋来自不同时期、不同供应商。品牌想扩张，却发现「自己长什么样」说不清楚。",
      "我从门店的日常里找线索——清晨玻璃上的水汽、木质吧台、手冲时的水流。最终落点是「雾」这个意象：它足够柔软，也足够克制，不会盖过咖啡本身。主色选用暖赭与米白，字形上选择了骨架偏细、字怀开阔的中文黑体，让菜单上的信息能安静地排好。",
      "交付包含标志与辅助图形、色彩与字体规范、杯具与包装系统、门店导视，以及一份 42 页的品牌手册。三家门店在四个月内完成换新，新店的筹备周期从原来的三个月压缩到六周。",
    ],
    gallery: [
      { variant: "waves", palette: "amber" },
      { variant: "rings", palette: "amber" },
      { variant: "arcs", palette: "amber" },
    ],
  },
  {
    id: "yuntu-design-system",
    title: "云图 SaaS 设计系统",
    category: "界面",
    year: "2025",
    client: "云图科技",
    role: "设计系统负责人",
    tools: "Figma · Tokens Studio",
    summary: "把 6 条产品线的界面，收敛到一套有据可依的组件与规范。",
    cover: { variant: "grid", palette: "indigo" },
    body: [
      "云图当时有 6 条产品线、11 位设计师、4 个前端小组。同一颗「保存」按钮在不同页面有 7 种尺寸，设计走查的成本高到没人愿意做。",
      "我们先把颜色、间距、圆角、阴影抽象成设计令牌（Design Tokens），用一套命名规则贯通设计与代码；再从中长出 200 多个组件，按基础、表单、数据展示、反馈四层组织。每个组件都写清楚了使用场景与禁忌，而不只是给一张图。",
      "落地半年后，新页面的设计到开发交付时间平均缩短约 40%，视觉走查的问题数量下降明显。更重要的是，设计师终于可以把精力放在「这个页面要解决什么问题」上。",
    ],
    gallery: [
      { variant: "blocks", palette: "indigo" },
      { variant: "rays", palette: "indigo" },
      { variant: "grid", palette: "indigo" },
    ],
  },
  {
    id: "shanhai-festival",
    title: "「山海」文化节主视觉",
    category: "品牌",
    year: "2024",
    client: "城市文化艺术中心",
    role: "主视觉 / 延展设计",
    tools: "Illustrator · After Effects",
    summary: "用一层层叠加的曲线，把「山海」这个古老意象做成当代的视觉。",
    cover: { variant: "waves", palette: "teal" },
    body: [
      "山海文化节持续九天，包含展演、市集与工作坊三类活动。主办方希望主视觉既有东方气质，又不要落进符号化的套路——不要祥云，不要水墨山。",
      "我从地图的等高线里找到答案：山与海，本质上都是被同一套线条描述的起伏。用等距的曲线层叠，配上青绿与灰蓝的渐变，山的稳与海的流动被压缩进同一个图形系统里。",
      "这套图形可以自由裁切、旋转、叠加，因而天然适合延展：海报、门票、导视、周边、动态开场都从同一套曲线里长出来，九天活动的物料保持了高度的一致性。",
    ],
    gallery: [
      { variant: "rings", palette: "teal" },
      { variant: "arcs", palette: "teal" },
      { variant: "waves", palette: "teal" },
    ],
  },
  {
    id: "shiguang-notes-app",
    title: "拾光笔记 App 改版",
    category: "界面",
    year: "2024",
    client: "拾光科技",
    role: "界面设计 / 动效",
    tools: "Figma · Principle",
    summary: "让一款笔记工具的书写体验，重新变得安静。",
    cover: { variant: "blocks", palette: "violet" },
    body: [
      "拾光笔记有 300 万用户，但改版前的版本堆叠了太多功能入口：首页有 14 个可点击区域，用户平均需要 3 步才能开始写一条笔记。",
      "这次改版的核心决策是「把写作放在最前面」。首页只保留一个大的新建入口和最近编辑的内容；标签、模板、协作全部收进次级层级。视觉上把色彩系统压缩到主色加中性色，减少装饰性阴影，把对比度让给文字本身。",
      "配合书写页的动效重做——键盘弹起、光标跟随、段落展开都做了细微的缓动——用户反馈里「用起来舒服」成为最高频的关键词。改版后新建笔记的转化率提升了约 25%。",
    ],
    gallery: [
      { variant: "grid", palette: "violet" },
      { variant: "rays", palette: "violet" },
      { variant: "blocks", palette: "violet" },
    ],
  },
  {
    id: "solar-terms-illustration",
    title: "「节气」系列插画",
    category: "插画",
    year: "2023",
    client: "个人长期项目",
    role: "插画 / 字体",
    tools: "Illustrator · Procreate",
    summary: "二十四节气，二十四种颜色，一套还在生长的视觉档案。",
    cover: { variant: "rings", palette: "rose" },
    body: [
      "这是我做了三年的个人项目。起点很简单：我想搞清楚「立秋」和「处暑」到底差在哪里，而不是只把它们当成两个名词。",
      "每个节气对应一张插画和一个主色。颜色不是随便选的，而是从当季的植物、天色、食材里取样——比如立夏取的是青梅的青，霜降取的是柿子的橙。图形上用重叠的圆与环来暗示时间的循环。",
      "目前完成了 24 张中的 19 张，持续在社交平台更新。这个项目也意外地成了我理解色彩体系的方式：当颜色有了出处，用它就不再是凭感觉。",
    ],
    gallery: [
      { variant: "arcs", palette: "rose" },
      { variant: "waves", palette: "rose" },
      { variant: "rings", palette: "rose" },
    ],
  },
  {
    id: "city-wayfinding",
    title: "城市公共导视系统",
    category: "空间",
    year: "2023",
    client: "市政规划研究院",
    role: "导视设计 / 信息架构",
    tools: "Illustrator · SketchUp",
    summary: "让第一次来的人，不用问路也能走对方向。",
    cover: { variant: "rays", palette: "slate" },
    body: [
      "项目覆盖一个文化街区，包含 14 个出入口、3 个地铁站、2 个停车场。此前的问题不是「没有牌子」，而是牌子太多、说法不一，游客反而更迷茫。",
      "我们重新梳理了信息层级：把「我在哪」放在最高优先级，「怎么走」其次，「周边有什么」再次。字高、观看距离、安装高度按人机尺度重新算过一遍，颜色只用来区分方向，不承担装饰功能。",
      "图形上采用倾斜的条带作为方向指代，既呼应街区的坡道地形，也能在远距离被快速识别。整套系统包含 60 余个标识点位与一份制作规范。",
    ],
    gallery: [
      { variant: "blocks", palette: "slate" },
      { variant: "grid", palette: "slate" },
      { variant: "rays", palette: "slate" },
    ],
  },
];

/* ==========================================================================
   封面图生成器 —— 不依赖任何外部图片，用内联 SVG 生成统一风格的几何封面
   想换成真实图片时，把下面 coverSVG / avatarSVG 的调用换成 <img> 即可。
   ========================================================================== */

const PALETTES = {
  indigo: { deep: "#4338ca", mid: "#6366f1", soft: "#c7d2fe", tint: "#eef2ff" },
  amber: { deep: "#b45309", mid: "#f59e0b", soft: "#fde68a", tint: "#fffbeb" },
  teal: { deep: "#0f766e", mid: "#14b8a6", soft: "#99f6e4", tint: "#f0fdfa" },
  rose: { deep: "#be123c", mid: "#f43f5e", soft: "#fecdd3", tint: "#fff1f2" },
  violet: { deep: "#6d28d9", mid: "#8b5cf6", soft: "#ddd6fe", tint: "#f5f3ff" },
  slate: { deep: "#1e293b", mid: "#475569", soft: "#cbd5e1", tint: "#f8fafc" },
};

let __coverSeq = 0;

/** 生成一张 800×600 的几何封面 SVG 字符串 */
function coverSVG(spec, label) {
  const p = PALETTES[(spec && spec.palette) || "indigo"] || PALETTES.indigo;
  const variant = (spec && spec.variant) || "arcs";
  const uid = "cv" + ++__coverSeq;
  const alt = label ? `${label} — 作品封面` : "作品封面";

  let art = "";
  switch (variant) {
    case "arcs":
      art = `
        <g fill="none" stroke-width="14" stroke-linecap="round">
          <path d="M-40 620 A 300 300 0 0 1 260 320" stroke="${p.deep}" opacity="0.85"/>
          <path d="M-40 620 A 400 400 0 0 1 360 220" stroke="${p.mid}" opacity="0.7"/>
          <path d="M-40 620 A 500 500 0 0 1 460 120" stroke="${p.soft}" opacity="0.9"/>
        </g>
        <circle cx="628" cy="176" r="86" fill="${p.mid}" opacity="0.9"/>
        <circle cx="628" cy="176" r="46" fill="${p.tint}"/>`;
      break;

    case "grid":
      art = `
        <g fill="${p.deep}" opacity="0.28">
          ${gridDots(9, 7, 84, 76, 34)}
        </g>
        <circle cx="560" cy="300" r="168" fill="${p.mid}" opacity="0.9"/>
        <circle cx="560" cy="300" r="88" fill="${p.tint}"/>
        <rect x="96" y="392" width="188" height="112" rx="18" fill="${p.deep}" opacity="0.85"/>`;
      break;

    case "waves":
      art = `
        <path d="M0 420 C 140 340 240 500 400 420 C 560 340 660 500 800 420 L800 600 L0 600 Z" fill="${p.deep}" opacity="0.85"/>
        <path d="M0 470 C 150 400 250 545 410 470 C 570 395 670 545 800 470 L800 600 L0 600 Z" fill="${p.mid}" opacity="0.85"/>
        <path d="M0 520 C 160 460 260 590 420 520 C 580 450 680 590 800 520 L800 600 L0 600 Z" fill="${p.soft}" opacity="0.95"/>
        <circle cx="642" cy="168" r="62" fill="${p.tint}"/>`;
      break;

    case "blocks":
      art = `
        <rect x="88" y="140" width="290" height="290" rx="26" fill="${p.mid}" opacity="0.92" transform="rotate(-7 233 285)"/>
        <rect x="300" y="228" width="290" height="290" rx="26" fill="${p.deep}" opacity="0.82" transform="rotate(6 445 373)"/>
        <rect x="196" y="196" width="196" height="196" rx="20" fill="${p.tint}" transform="rotate(-2 294 294)"/>
        <circle cx="660" cy="132" r="34" fill="${p.mid}"/>`;
      break;

    case "rings":
      art = `
        <g fill="none" stroke-width="20">
          <circle cx="330" cy="300" r="180" stroke="${p.deep}" opacity="0.85"/>
          <circle cx="470" cy="300" r="180" stroke="${p.mid}" opacity="0.75"/>
          <circle cx="400" cy="300" r="104" stroke="${p.soft}" opacity="0.95"/>
        </g>
        <circle cx="400" cy="300" r="30" fill="${p.deep}"/>`;
      break;

    case "rays":
    default:
      art = `
        <g stroke-width="26" stroke-linecap="round">
          <line x1="60" y1="540" x2="420" y2="120" stroke="${p.soft}" opacity="0.95"/>
          <line x1="180" y1="580" x2="540" y2="160" stroke="${p.mid}" opacity="0.85"/>
          <line x1="300" y1="620" x2="660" y2="200" stroke="${p.deep}" opacity="0.85"/>
          <line x1="420" y1="660" x2="780" y2="240" stroke="${p.mid}" opacity="0.7"/>
        </g>
        <circle cx="590" cy="430" r="118" fill="none" stroke="${p.deep}" stroke-width="18" opacity="0.9"/>`;
      break;
  }

  return `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(alt)}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${p.tint}"/>
      <stop offset="1" stop-color="${p.soft}"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#${uid})"/>
  ${art}
</svg>`;
}

/** 头像：抽象几何人像占位 */
function avatarSVG() {
  const p = PALETTES.indigo;
  const uid = "av" + ++__coverSeq;
  return `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(SITE.name)} 的头像">
  <defs>
    <linearGradient id="${uid}" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0" stop-color="${p.tint}"/>
      <stop offset="1" stop-color="${p.soft}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" fill="url(#${uid})"/>
  <g opacity="0.32" fill="none" stroke="${p.mid}" stroke-width="3">
    ${gridDots(7, 7, 60, 60, 80)}
  </g>
  <circle cx="300" cy="248" r="104" fill="${p.mid}"/>
  <path d="M112 600 C 112 452 196 386 300 386 C 404 386 488 452 488 600 Z" fill="${p.deep}"/>
  <circle cx="300" cy="248" r="52" fill="${p.tint}" opacity="0.55"/>
  <circle cx="470" cy="132" r="26" fill="${p.deep}"/>
</svg>`;
}

/* 生成点阵（用于 grid 变体与头像底纹） */
function gridDots(cols, rows, startX, startY, step) {
  let out = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      out += `<circle cx="${startX + c * step}" cy="${startY + r * step}" r="4.5"/>`;
    }
  }
  return out;
}

/* HTML 转义，防止文案里的特殊字符破坏标签 */
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* 按 id 取作品 */
function getWork(id) {
  return WORKS.find(function (w) {
    return w.id === id;
  });
}
