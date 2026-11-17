/* Gelatox — gelatox-us.vercel.app */
(function () {
  "use strict";

  /* Mobile menu */
  var btn = document.querySelector(".menu-btn");
  var list = document.getElementById("menu-list");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  /* Order dock: rises once the hero buttons scroll away,
     drops again across the pricing cards so it never covers them. */
  var dock = document.querySelector(".dock");
  if (dock && "IntersectionObserver" in window) {
    var past = false;
    var onPacks = false;
    function update() {
      dock.classList.toggle("lift", past && !onPacks);
    }
    var heroCta = document.getElementById("hero-buys");
    if (heroCta) {
      new IntersectionObserver(
        function (entries) {
          past = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
          update();
        },
        { threshold: 0 }
      ).observe(heroCta);
    }
    var packs = document.getElementById("prices");
    if (packs) {
      new IntersectionObserver(
        function (entries) {
          onPacks = entries[0].isIntersecting;
          update();
        },
        { threshold: 0 }
      ).observe(packs);
    }
  }
})();
