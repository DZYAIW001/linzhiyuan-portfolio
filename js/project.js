/* ==========================================================================
   project.js — 作品详情页：按 URL 上的 ?id= 渲染对应项目
   依赖 data.js、main.js
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (sel) {
    return document.querySelector(sel);
  };

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch (e) {
      var m = window.location.search.match(new RegExp("[?&]" + name + "=([^&]*)"));
      return m ? decodeURIComponent(m[1]) : null;
    }
  }

  function specHTML(work) {
    var rows = [
      ["年份", work.year],
      ["分类", work.category],
      ["客户", work.client],
      ["我的角色", work.role],
      ["使用工具", work.tools],
    ];
    return rows
      .map(function (row) {
        return (
          '<div class="spec__row"><span class="spec__key">' +
          esc(row[0]) +
          '</span><span class="spec__val">' +
          esc(row[1]) +
          "</span></div>"
        );
      })
      .join("");
  }

  function pagerHTML(work) {
    var i = WORKS.indexOf(work);
    var prev = WORKS[(i - 1 + WORKS.length) % WORKS.length];
    var next = WORKS[(i + 1) % WORKS.length];

    var prevHTML =
      '<a class="pager__item" href="project.html?id=' + encodeURIComponent(prev.id) + '">' +
      '<span class="pager__label">上一个</span>' +
      '<span class="pager__name">' + esc(prev.title) + "</span></a>";

    var nextHTML =
      '<a class="pager__item pager__item--next" href="project.html?id=' +
      encodeURIComponent(next.id) + '">' +
      '<span class="pager__label">下一个</span>' +
      '<span class="pager__name">' + esc(next.title) + "</span></a>";

    return prevHTML + nextHTML;
  }

  function render(work) {
    document.title = work.title + " — " + SITE.name;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", work.summary);

    $("#p-category").textContent = work.category + " · " + work.year;
    $("#p-title").textContent = work.title;
    $("#p-summary").textContent = work.summary;
    $("#p-cover").innerHTML = coverSVG(work.cover, work.title);
    $("#p-spec").innerHTML = specHTML(work);

    $("#p-body").innerHTML = work.body
      .map(function (p) {
        return "<p>" + esc(p) + "</p>";
      })
      .join("");

    var gallery = (work.gallery || []).slice();
    $("#p-gallery").innerHTML = gallery
      .map(function (g, i) {
        return (
          '<div class="reveal" data-delay="' + Math.min(i, 3) + '">' +
          coverSVG(g, work.title + " 图 " + (i + 1)) +
          "</div>"
        );
      })
      .join("");

    $("#p-pager").innerHTML = pagerHTML(work);

    var root = $("#project-root");
    if (root) root.hidden = false;

    if (window.WB && window.WB.observeReveals) window.WB.observeReveals();
  }

  function notFound() {
    document.title = "没有找到这个项目 — " + SITE.name;
    var nf = $("#not-found");
    if (nf) nf.hidden = false;
  }

  function boot() {
    var id = getParam("id");
    var work = id ? getWork(id) : null;
    if (!work) {
      notFound();
      return;
    }
    render(work);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
