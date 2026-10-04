/* ==========================================================================
   main.js — 全站通用逻辑：渲染内容、主题切换、移动端导航、滚动入场
   依赖 data.js
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  var $$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  var PAGE = document.documentElement.getAttribute("data-page") || "home";
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------- 图标 ------------------------------- */
  var ARROW_RIGHT =
    '<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M5 12h13M12.5 5.5 19 12l-6.5 6.5"/></svg>';

  var ICON_MENU =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
    'stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';

  var ICON_CLOSE =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
    'stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  /* --------------------------- 头部 / 导航 --------------------------- */
  function navCurrentKey() {
    if (PAGE === "work" || PAGE === "project") return "work";
    return "home";
  }

  function renderHeader() {
    var initials = $("#brand-initials");
    var name = $("#brand-name");
    if (initials) initials.textContent = SITE.initials;
    if (name) name.textContent = SITE.name;

    var current = navCurrentKey();
    var desktop = $("#nav-desktop");
    var mobile = $("#nav-mobile");

    var links = NAV.map(function (item) {
      var isCurrent = item.key === current;
      var attr = isCurrent ? ' aria-current="page"' : "";
      return (
        '<a class="nav__link" href="' + item.href + '"' + attr + ">" + esc(item.label) + "</a>"
      );
    }).join("");

    var mobileLinks = NAV.map(function (item) {
      var isCurrent = item.key === current;
      var attr = isCurrent ? ' aria-current="page"' : "";
      return '<a href="' + item.href + '"' + attr + ">" + esc(item.label) + "</a>";
    }).join("");

    if (desktop) desktop.innerHTML = links;
    if (mobile) mobile.innerHTML = mobileLinks;
  }

  /* ------------------------------ 首屏 ------------------------------ */
  function renderHero() {
    var nameEl = $("#hero-name");
    if (!nameEl) return;

    nameEl.textContent = SITE.name;

    var eyebrow = $("#hero-eyebrow");
    if (eyebrow) eyebrow.textContent = SITE.role;

    var tagline = $("#hero-tagline");
    if (tagline) tagline.textContent = SITE.tagline;

    var intro = $("#hero-intro");
    if (intro) {
      intro.innerHTML = SITE.intro.map(function (p) {
        return "<p>" + esc(p) + "</p>";
      }).join("");
    }

    var stats = $("#hero-stats");
    if (stats) {
      stats.innerHTML = SITE.stats.map(function (s) {
        return (
          '<div class="hero__stat"><strong>' +
          esc(s.value) +
          "</strong><span>" +
          esc(s.label) +
          "</span></div>"
        );
      }).join("");
    }

    var portrait = $("#portrait");
    if (portrait) portrait.innerHTML = avatarSVG();
  }

  /* ---------------------------- 作品卡片 ---------------------------- */
  function workCardHTML(work, index) {
    var delay = index % 3 === 0 ? "" : ' data-delay="' + (index % 3) + '"';
    return (
      '<a class="card reveal"' + delay + ' href="project.html?id=' + encodeURIComponent(work.id) + '">' +
      '<div class="card__cover">' + coverSVG(work.cover, work.title) + "</div>" +
      '<div class="card__body">' +
      '<div class="card__title"><span>' + esc(work.title) + "</span>" + ARROW_RIGHT + "</div>" +
      '<p class="card__desc">' + esc(work.summary) + "</p>" +
      '<div class="card__meta"><span>' + esc(work.category) + '</span><span class="dot-sep">·</span><span>' +
      esc(work.year) + "</span></div>" +
      "</div></a>"
    );
  }

  function renderFeatured() {
    var box = $("#featured");
    if (!box) return;
    box.innerHTML = WORKS.slice(0, 3)
      .map(function (w, i) {
        return workCardHTML(w, i);
      })
      .join("");
  }

  /* ---------------------------- 作品集页 ---------------------------- */
  function renderWorkGrid() {
    var grid = $("#work-grid");
    if (!grid) return;

    var filterBox = $("#filters");
    var empty = $("#work-empty");

    if (filterBox) {
      filterBox.innerHTML = CATEGORIES.map(function (cat, i) {
        return (
          '<button class="chip" type="button" data-cat="' + esc(cat) + '" aria-pressed="' +
          (i === 0 ? "true" : "false") + '">' + esc(cat) + "</button>"
        );
      }).join("");
    }

    function paint(cat) {
      var list = cat === "全部"
        ? WORKS
        : WORKS.filter(function (w) {
            return w.category === cat;
          });

      grid.innerHTML = list
        .map(function (w, i) {
          return workCardHTML(w, i);
        })
        .join("");

      if (empty) empty.hidden = list.length > 0;
      observeReveals(grid);
    }

    paint("全部");

    if (filterBox) {
      filterBox.addEventListener("click", function (e) {
        var btn = e.target.closest(".chip");
        if (!btn) return;
        $$(".chip", filterBox).forEach(function (c) {
          c.setAttribute("aria-pressed", String(c === btn));
        });
        paint(btn.getAttribute("data-cat"));
      });
    }
  }

  /* ------------------------------ 技能 ------------------------------ */
  function renderSkills() {
    var box = $("#skills");
    if (!box) return;
    box.innerHTML = SKILLS.map(function (group) {
      return (
        '<div class="skill-group"><h3>' + esc(group.title) + "</h3><ul>" +
        group.items
          .map(function (item) {
            return '<li class="tag">' + esc(item) + "</li>";
          })
          .join("") +
        "</ul></div>"
      );
    }).join("");
  }

  /* ------------------------------ 经历 ------------------------------ */
  function renderExperience() {
    var box = $("#experience");
    if (!box) return;
    box.innerHTML = EXPERIENCE.map(function (item, i) {
      return (
        '<div class="timeline__item reveal" data-delay="' + Math.min(i, 3) + '">' +
        '<div class="timeline__when">' + esc(item.when) + "</div>" +
        '<div class="timeline__body">' +
        '<div class="timeline__role">' + esc(item.role) + "</div>" +
        '<div class="timeline__org">' + esc(item.org) + "</div>" +
        '<p class="timeline__desc">' + esc(item.desc) + "</p>" +
        "</div></div>"
      );
    }).join("");
  }

  /* ------------------------------ 联系 ------------------------------ */
  function renderContacts() {
    var mail = $("#contact-mail");
    if (mail) {
      var primary = CONTACTS[0];
      mail.href = primary.href;
      mail.textContent = primary.value;
    }

    var list = $("#contact-list");
    if (list) {
      list.innerHTML = CONTACTS.map(function (c) {
        return (
          '<a class="contact__row" href="' + esc(c.href) + '">' +
          "<span>" + esc(c.label) + "</span>" +
          "<span>" + esc(c.value) + "</span></a>"
        );
      }).join("");
    }
  }

  /* ------------------------------ 页脚 ------------------------------ */
  function renderFooter() {
    var copy = $("#footer-copy");
    if (!copy) return;
    var year = new Date().getFullYear();
    copy.textContent = "© " + year + " " + SITE.name + " · " + SITE.location + " · " + SITE.availability;
  }

  /* ----------------------- 外观：风格 + 主题 ----------------------- */
  var STYLE_META = {
    classic: { light: "#ffffff", dark: "#0b0b0c" },
    paper: { light: "#f7f4ed", dark: "#f7f4ed" },
    grid: { light: "#0a0a0b", dark: "#0a0a0b" },
  };

  function initAppearance() {
    var root = document.documentElement;
    var meta = document.querySelector('meta[name="theme-color"]');
    var styleBtns = document.querySelectorAll("[data-style-btn]");
    var themeBtn = $("#theme-toggle");

    function currentStyle() {
      var v = root.getAttribute("data-style");
      return v === "paper" || v === "grid" ? v : "classic";
    }

    function syncMeta() {
      if (!meta) return;
      var pair = STYLE_META[currentStyle()] || STYLE_META.classic;
      var dark = root.getAttribute("data-theme") === "dark";
      meta.setAttribute("content", dark ? pair.dark : pair.light);
    }

    function syncButtons() {
      var cur = currentStyle();
      for (var i = 0; i < styleBtns.length; i++) {
        var b = styleBtns[i];
        b.setAttribute("aria-pressed", String(b.getAttribute("data-style-btn") === cur));
      }
    }

    function setStyle(next) {
      root.setAttribute("data-style", next);
      try {
        localStorage.setItem("style", next);
      } catch (e) {}
      syncButtons();
      syncMeta();
    }

    syncButtons();
    syncMeta();

    for (var k = 0; k < styleBtns.length; k++) {
      styleBtns[k].addEventListener("click", function () {
        setStyle(this.getAttribute("data-style-btn"));
      });
    }

    if (themeBtn) {
      themeBtn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try {
          localStorage.setItem("theme", next);
        } catch (e) {}
        syncMeta();
      });
    }

    // 用户没手动选过时跟随系统；纸感/网格自带基调，不受系统影响
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function (e) {
      var saved = null;
      try {
        saved = localStorage.getItem("theme");
      } catch (err) {}
      if (saved === "light" || saved === "dark") return;
      if (currentStyle() !== "classic") return;
      root.setAttribute("data-theme", e.matches ? "dark" : "light");
      syncMeta();
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  /* --------------------------- 移动端菜单 --------------------------- */
  function initMobileNav() {
    var toggle = $("#menu-toggle");
    var panel = $("#nav-mobile");
    if (!toggle || !panel) return;

    function setOpen(open) {
      panel.setAttribute("data-open", String(open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
      toggle.innerHTML = open ? ICON_CLOSE : ICON_MENU;
    }

    setOpen(false);

    toggle.addEventListener("click", function () {
      setOpen(panel.getAttribute("data-open") !== "true");
    });

    panel.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) setOpen(false);
    });
  }

  /* --------------------------- 滚动入场 --------------------------- */
  var revealObserver = null;

  function observeReveals(root) {
    var nodes = $$(".reveal:not(.is-visible)", root || document);
    if (!nodes.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      nodes.forEach(function (n) {
        n.classList.add("is-visible");
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
      );
    }

    nodes.forEach(function (n) {
      revealObserver.observe(n);
    });
  }

  /* 暴露给其它脚本（如 project.js）复用 */
  window.WB = { observeReveals: observeReveals };

  /* ------------------------------ 启动 ------------------------------ */
  function boot() {
    renderHeader();
    renderHero();
    renderFeatured();
    renderWorkGrid();
    renderSkills();
    renderExperience();
    renderContacts();
    renderFooter();

    initAppearance();
    initMobileNav();
    observeReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
