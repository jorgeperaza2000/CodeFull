! function(a) { "use strict";

    function b() {
        var b = a(".hero-content-slider"),
            c = b.data("autoplay"),
            d = b.data("speed");
        a(window).width() > 992 ? b.owlCarousel({ animateOut: "bounceOut", animateIn: "bounceIn", autoplay: c, autoplayTimeout: d, items: 1, dots: !1, mouseDrag: !1, touchDrag: !1, loop: !0 }) : b.owlCarousel({ autoplay: !1, items: 1, dots: !1, mouseDrag: !0, touchDrag: !0, loop: !0, autoHeight: !0 }) }

    function c() { a(".hero-content-slider").css({ opacity: "1" }) }

    function d() {
        var b = a(".hero-slider"),
            c = b.data("autoplay"),
            d = b.data("speed"),
            e = b.data("touch-drag");
        b.owlCarousel({ autoplay: c, autoplayTimeout: d, items: 1, mouseDrag: e, touchDrag: e, dots: !1, nav: !0, navSpeed: 100, autoplaySpeed: 100, loop: !0, autoHeight: !0, navText: ["<img src='img/assets/slider-left-thin-arrow.png'>", "<img src='img/assets/slider-right-thin-arrow.png'>"] }), a(".hero-fullscreen>div").hasClass("hero-slider") && a(".hero-fullscreen").css({ padding: "0" }) }

    function e() {
        var b = a(".carousel"),
            c = b.data("autoplay"),
            d = b.data("speed"),
            e = b.data("touch-drag"),
            f = b.data("loop");
        b.owlCarousel({ autoplay: c, autoplayTimeout: d, items: 1, mouseDrag: e, touchDrag: e, dots: !0, nav: !0, loop: f, autoHeight: !0, navText: ["<img src='img/assets/slider-left-thin-arrow.png'>", "<img src='img/assets/slider-right-thin-arrow.png'>"], navRewind: !0, slideBy: "page" }) }

    function f() {
        function b() { a(".progress").each(function() { a(this).find(".progress-bar").animate({ width: a(this).attr("data-percent") }, 800) }) } "on" === a(".progress-bars").data("animate-on-scroll") ? a(".progress-bars").waypoint(function() { b() }, { offset: "100%", triggerOnce: !0 }) : b() }

    function g() {
        function b() {
            var a, b, c;
            c = document.querySelectorAll(".progress-svg");
            for (var d = 0; d < c.length; d++) a = c[d].querySelector("circle").getAttribute("stroke-dasharray"), b = c[d].parentElement.getAttribute("data-circle-percent"), c[d].querySelector(".bar").style["stroke-dashoffset"] = a * b / 100 } "on" === a(".progress-circles").data("animate-on-scroll") ? a(".progress-circle").waypoint(function() { b() }, { offset: "70%", triggerOnce: !0 }) : b() }

    function h() { a(".video-container").click(function() { a(this).addClass("reveal");
            var b = a(this).find("img"),
                c = a(this).find("iframe"),
                d = c.attr("data-video-embed"),
                e = d + "?autoplay=1&autoplay=true";
            b.animate({ opacity: 0 }, 300), c.css("visibility", "visible").attr("src", e), c[0].setAttribute("allowFullScreen", "") }) }

    function i() { a(".team-slider").owlCarousel({ autoplay: !1, items: 3, dots: !0, responsiveRefreshRate: 200, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1200: { items: 3 } } }) }

    function j() {
        var b = a(".quote-slider"),
            c = b.data("autoplay"),
            d = b.data("speed");

        b.owlCarousel({ autoplay: c, autoplayTimeout: d, items: 1, dots: !1, loop: !0, nav: !0, navText: ["<img src='img/assets/slider-left-thin-arrow.png'>", "<img src='img/assets/slider-right-thin-arrow.png'>"] }) }

    function k() {
        var b, c = a(".vossen-portfolio"),
            d = a(".vossen-portfolio-filters"),
            e = a(".vossen-portfolio-filters li"),
            f = a(".vossen-portfolio > div");
        d.each(function() {
            var b = a(this).attr("data-initial-filter");
            a(this).attr("data-initial-filter", "." + b), ".*" === a(d).data("initial-filter") && a(this).attr("data-initial-filter", "*") }), e.not(":first").each(function() {
            var b = a(this).attr("data-filter");
            a(this).attr("data-filter", "." + b) }), f.each(function() {
            var b = a(this).attr("data-filter");
            a(this).addClass(b) }), f.waypoint(function() { f.each(function(b) {
                var c = a(this);
                setTimeout(function() { c.addClass("reveal") }, 3 * b * 60) }) }, { offset: "100%", triggerOnce: !0 }), b = a(".vossen-portfolio-filters").attr("data-initial-filter"), a('.vossen-portfolio-filters li[data-filter="' + b + '"]').addClass("active"), e.on("click", function() { a(".vossen-portfolio-filters li.active").removeClass("active"), a(this).addClass("active");
            var b = a(this).attr("data-filter");
            c.isotope({ filter: b }) });
        var g = c.isotope({ itemSelector: ".vossen-portfolio > div", percentPosition: !0, filter: b, masonry: { columnWidth: ".vossen-portfolio > div" } });
        g.imagesLoaded().progress(function() { g.isotope("layout") }) }

    function l() {
        var b = a(".testimonials"),
            c = b.data("autoplay"),
            d = b.data("speed");
        b.owlCarousel({ autoplay: c, autoplayTimeout: d, autoplaySpeed: 700, loop: !0, items: 1, dots: !0, dotsSpeed: 400 }) }

    function m() {
        var b = a(".clients-slider"),
            c = b.data("autoplay"),
            d = b.data("speed");
        b.owlCarousel({ autoplay: c, autoplayTimeout: d, loop: !1, dots: !1, nav: !1, responsiveRefreshRate: 200, responsive: { 0: { items: 2 }, 600: { items: 5 }, 1200: { items: 6 } } }) }

    function n() { a("#contactform").submit(function() {
            var b = "php/contact-form.php";
            return a("#message-info").slideUp(250, function() { a("#message-info").hide(), a("#submit").after('<div class="loader"><div></div></div>').attr("disabled", "disabled"), a.post(b, { name: a("#name").val(), email: a("#email").val(), phone: a("#phone").val(), message: a("#message").val() }, function(b) { document.getElementById("message-info").innerHTML = b, a("#message-info").slideDown(250), a("#contactform .loader div").fadeOut("slow", function() { a(this).remove() }), a("#submit").removeAttr("disabled"), null !== b.match("success") && a("#contactform").slideUp(850, "easeInOutExpo") }) }), !1 }) }

    function o() { a("#subscribe-form,#subscribe-form-2").on("submit", function(b) { b.preventDefault();
            var c = a(this),
                d = c.find(".form-validation"),
                e = c.find("button"),
                f = c.attr("action");
            e.button("loading"), d.removeClass("alert-danger alert-success"), d.html(""), a.ajax({ type: "POST", url: f, data: c.serialize() + "&ajax=1", dataType: "JSON", success: function(a) { "error" === a.status ? (d.html(a.message), d.addClass("alert-danger").fadeIn(500)) : (c.trigger("reset"), d.html(a.message), d.addClass("alert-success").fadeIn(500)), e.button("reset") } }) }) }

    function p() { a("#vossen-map").waypoint(function() { initVossenMaps() }, { offset: "100%", triggerOnce: !0 }) }

    function q() {
        function b() { a(window).scroll(function() { a(window).scrollTop() > 70 ? a("nav").addClass("nav-small") : a("nav").removeClass("nav-small") }) }

        function c() {
            var b = window.location.hash; "" != b && setTimeout(function() { a("html, body").stop().animate({ scrollTop: a(b).offset().top - 59 }, 1e3, "easeInOutExpo"), history.pushState("", document.title, window.location.pathname) }, 500) }
        if (a(".nav li.dropdown>a, .dropdown-submenu>a").on("click", function() {
                return a(this).closest(".dropdown").siblings().removeClass("open"), a(this).closest(".dropdown").toggleClass("open"), !1 }), a(".nav li a, .btn-scroll").on("click", function() {
                function b() { a("html, body").stop().animate({ scrollTop: a(c.attr("href")).offset().top - d }, 1e3, "easeInOutExpo"), event.preventDefault() }
                var c = a(this);
                if (a(window).width() > 992) {
                    var d = "59";
                    b() } else {
                    var d = "0";
                    b() } }), "hiding" === a("nav").data("animation")) {
            var d = a(window),
                e = d.scrollTop();
            d.scroll(function() { d.scrollTop() > e ? a("nav").removeClass("nav-down").addClass("nav-up") : a("nav").removeClass("nav-up").addClass("nav-down"), e = d.scrollTop() }), b() } else b();
        a(".scroll-top").on("click", function() {
            return a("html, body").stop().animate({ scrollTop: 0 }, 2e3, "easeInOutExpo"), !1 }), c() }

    function r() { a("#accordion,#accordion2").on("show.bs.collapse", function() { a("#accordion .in").collapse("hide") }), a("[data-toggle='tooltip']").tooltip(), a("#buttonTabs a,#iconTabs a").click(function(b) { b.preventDefault(), a(this).tab("show") }) }

    function s() {
        if (a("#twitter-feed-slider").length) {
            var b, c, d;
            b = a("#twitter-feed-slider").attr("data-twitter-widget-id"), c = a("#twitter-feed-slider").attr("data-max-tweets"), d = { id: b, domId: "twitter-feed-slider", maxTweets: c, enableLinks: !0, showImages: !1 }, twitterFetcher.fetch(d) } }

    function t() {
        if (a("#twitter-feed-slider").length) { a("#twitter-feed-slider ul").addClass("twitter-feed-slider navigation-thin");
            var b = a("#twitter-feed-slider").attr("data-slider-speed");
            a(".twitter-feed-slider").owlCarousel({ autoplay: !0, autoplayTimeout: b, items: 1, dots: !1, mouseDrag: !0, touchDrag: !0, loop: !0 }) } }

    function u() {
        if (a("#twitter-feed-list").length) {
            var b, c, d;
            b = a("#twitter-feed-list").attr("data-twitter-widget-id"), c = a("#twitter-feed-list").attr("data-max-tweets"), d = { id: b, domId: "twitter-feed-list", maxTweets: c, enableLinks: !0, showImages: !1 }, twitterFetcher.fetch(d) } }

    function v() { a("#fun-facts").waypoint(function() { a(".counter h1").each(function() {
                var b = a(this),
                    c = b.attr("data-count");
                a({ countNum: b.text() }).animate({ countNum: c }, { duration: 1700, easing: "linear", step: function() { b.text(Math.floor(this.countNum)) }, complete: function() { b.text(this.countNum) } }) }) }, { offset: "100%", triggerOnce: !0 }) }

    function w() {
        function b() {
            var b = Date(),
                c = Date.parse(d) - Date.parse(b);
            if (0 >= c) clearInterval(e);
            else {
                var f = Math.floor(c / 1e3 % 60),
                    g = Math.floor(c / 1e3 / 60 % 60),
                    h = Math.floor(c / 1e3 / 60 / 60 % 24),
                    i = Math.floor(c / 864e5 % 30.5),
                    j = Math.floor(c / 26352e5 % 12);
                a("#months").text(("0" + j).slice(-2)), a("#days").text(("0" + i).slice(-2)), a("#hours").text(("0" + h).slice(-2)), a("#minutes").text(("0" + g).slice(-2)), a("#seconds").text(("0" + f).slice(-2)) } }
        var c = a("#countdown-timer").attr("data-date"),
            d = new Date(c),
            e = setInterval(b, 1e3) }

    function x() {
        var b = a(".vossen-blog-grid"),
            c = a(".vossen-blog-grid > div");
        c.each(function() {
            var b = a(this).attr("data-filter");
            a(this).addClass(b) }), c.waypoint(function() { c.each(function(b) {
                var c = a(this);
                setTimeout(function() { c.addClass("reveal") }, 3 * b * 60) }) }, { offset: "100%", triggerOnce: !0 }), b.isotope({ itemSelector: ".vossen-blog-grid > div", percentPosition: !0, masonry: { columnWidth: ".vossen-blog-grid > div" } });
        var d = b.isotope({ itemSelector: ".vossen-blog-grid > div", percentPosition: !0, masonry: { columnWidth: ".vossen-blog-grid > div" } });
        d.imagesLoaded().progress(function() { d.isotope("layout") }) }

    function y() { a(".lightbox").magnificPopup({ delegate: "a", type: "image", gallery: { enabled: !0, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><img src="img/assets/slider-left-thin-arrow.png"></button>' }, mainClass: "mfp-zoom-in", removalDelay: 500, callbacks: { beforeOpen: function() { this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim") } }, closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>', midClick: !0 }) }
    a(window).resize(function() { setTimeout(function() { a(".vossen-portfolio-filters .active").trigger("click") }, 600) }), a(document).ready(function() { a.when(b()).then(c()), d(), f(), g(), i(), v(), h(), j(), parallaxVossen(), k(), l(), m(), n(), o(), p(), e(), q(), r(), s(), u(), w(), x(), y() }), a(window).load(function() { t() }), a(window).on("scroll", function() {}) }(jQuery);
