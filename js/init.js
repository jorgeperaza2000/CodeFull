function parallaxVossen() {
    function t() {
        function t(t) {
            for (var e = 0; e < t.length; e++)
                if ("undefined" != typeof document.body.style[t[e]]) return t[e];
            return null }

        function e(t, e, i) {
            var n = t - 1;
            return n /= i, t /= i, n--, t--, e * (t * t * t * t * t + 1) + h - (e * (n * n * n * n * n + 1) + h) }

        function i() {
            if (O) {
                for (var t = c.length, s = o(); t--;) n(c[t], s, f, m);
                O = !1 }
            y && (k += -_ * e(b, 0, I, $), (k > S || -S > k) && (z.scrollBy(0, k), k = 0), b++, b > $ && (b = 0, y = !1, w = !0, _ = 0, x = 0, T = 0, k = 0)), d(i) }

        function n(t, e, i, n) {
            var o = l();
            o ? e + g - v > t.elemTop && e - v < t.elemBottom && (t.isFirstSection ? t.backgroundImage.style[p] = i + e / 2 + n : t.backgroundImage.style[p] = i + (e - t.elemTop - v) / 2 + n) : e + g > t.elemTop && e < t.elemBottom && (t.isFirstSection ? t.backgroundImage.style[p] = i + e / 2 + n : t.backgroundImage.style[p] = i + (e + g - t.elemTop) / 2 + n) }

        function o() {
            return z != window ? z.scrollTop : 0 === document.documentElement.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop }

        function s() { O = !0 }

        function r(t) { D.vosSa === !0 && (t.preventDefault && t.preventDefault(), _ = t.vorw ? -t.deltaY / 4 : 1 == t.deltaMode ? -t.deltaY / 3 : 100 === Math.abs(t.deltaY) ? -t.deltaY / 120 : -t.deltaY / 40, _ = -C > _ ? -C : _, _ = _ > C ? C : _, y = !0, b = E) }

        function a(t) {
            var e = {};
            return t && "[object Function]" === e.toString.call(t) }

        function l() {}

        function h() {}
        var c, d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
            u = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"],
            p = t(u),
            f = "translate3d(0,",
            m = "px,0)",
            g = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            v = 0,
            y = !1,
            w = !0,
            b = 0,
            _ = 0,
            x = 0,
            T = 0,
            C = 2.2,
            E = 2,
            I = 350,
            S = 1,
            $ = 35,
            k = 0,
            z = window,
            O = (l(), !1),
            D = this;
        jQuery(document).ready(function() { D.documentReady() }), jQuery(window).load(function() { D.windowLoad() }), this.scrollStat = function() {
            return b > 0 }, this.documentReady = function(t) {
            return g = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), /Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) ? jQuery(".parallax") : d && (D.vope(), D.vops()), a(t) ? void t() : void 0 }, this.windowLoad = function() { g = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), v = h(), window.vossenParallax.vope() }, this.vops = function() { l() && (z = jQuery().get(0), "undefined" != typeof z && (z.scrollBy = function(t) { this.scrollTop += h, this.scrollLeft += t })), "undefined" != typeof z && (z.addEventListener("scroll", s, !1), window.addWheelListener(z, r, !1), window.addEventListener("resize", function() { g = Math.max(document.documentElement.clientHeight, window.innerHeight || 0), v = h(), D.vope() }, !1), i()) }, this.vope = function() { c = [], v = h();
            var t = l(),
                e = ".parallax > .background-image, .hero-slider div.slide .background-image";
            t && (e = ".hero-slider div.slide .background-image"), jQuery(e).each(function(e) {
                var i = jQuery(this).closest(".parallax"),
                    n = t ? i.position().top : i.offset().top;
                c.push({ section: i.get(0), outerHeight: i.outerHeight(), elemTop: n, elemBottom: n + i.outerHeight(), isFirstSection: !!i.is(":nth-of-type(1)"), backgroundImage: jQuery(this).get(0) }), t ? t && (i.is(":nth-of-type(1)") ? D.vostt(jQuery(this).get(0), 0 === o() ? 0 : o() / 2) : D.vostt(jQuery(this).get(0), (o() - n - v) / 2)) : i.is(":nth-of-type(1)") ? D.vostt(jQuery(this).get(0), 0 === o() ? 0 : o() / 2) : D.vostt(jQuery(this).get(0), (o() + g - n) / 2) }) }, this.vostt = function(t) { t.style[p] = f + h + m } }
    window.vossenParallax = new t,
        function(t, e) {
            function i(e, i, r, a) { e[n](s + i, "wheel" == o ? r : function(e) {!e && (e = t.event);
                    var i = { originalEvent: e, target: e.target || e.srcElement, type: "wheel", deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1, deltaX: 0, deltaZ: 0, vorw: 1, preventDefault: function() { e.preventDefault ? e.preventDefault() : e.returnValue = !1 } };
                    return "mousewheel" == o ? (i.deltaY = -.025 * e.wheelDelta, e.wheelDeltaX && (i.deltaX = -.025 * e.wheelDeltaX)) : i.deltaY = e.detail / 3, r(i) }, a || !1) }
            var n, o, s = "";
            t.addEventListener ? n = "addEventListener" : (n = "attachEvent", s = "on"), o = "onwheel" in e.createElement("div") ? "wheel" : "undefined" != typeof e.onmousewheel ? "mousewheel" : "DOMMouseScroll", t.addWheelListener = function(t, e, n) { i(t, o, e, n), "DOMMouseScroll" == o && i(t, "MozMousePixelScroll", e, n) } }(window, document);
    var t = function(t, e, i) {
        function n(e) { e = "undefined" == typeof e ? t : e, r.documentReady.forEach(function(t) { t(e) }) }

        function o(e) { e = "object" == typeof e ? t : e, r.windowLoad.forEach(function(t) { t(e) }) }
        var s = {},
            r = { documentReady: [], windowLoad: [] };
        return t(i).ready(n), t(e).load(o), s.setContext = function(e) {
            var i = t;
            return "undefined" != typeof e ? function(i) {
                return t(e).find(i) } : i }, s.components = r, s.documentReady = n, s.windowLoad = o, s }(jQuery, window, document);! function(t, e, i) {
        var n = function(t) { t(".background-image").each(function() {
                var e = t(this).children("img").attr("src");
                t(this).css("background-image", 'url("' + e + '")').css("opacity", "1") }) };
        return t.backgrounds = { documentReady: n }, t.components.documentReady.push(n), t;
        var n }(t),
    function(t, e, i) {} }

function vossenGoogleMaps() {
    function t(t, i) {
        var s = new google.maps.LatLng(t, i),
            r = { zoom: o, center: s, mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: !1, mapTypeControl: !1 },
            a = new google.maps.Map(document.getElementById("vossen-map"), r),
            l = '<div class="vossen-map-info">' + n + "</div>",
            h = new google.maps.InfoWindow({ content: l }),
            c = new google.maps.Marker({ position: s, map: a, icon: "img/assets/marker.png", title: "location : Dublin" });
        c.addListener("click", function() { h.open(a, c) });
        var d = [{ featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#0c0b0b" }] }, { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] }, { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] }, { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#090909" }] }, { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "simplified" }] }, { featureType: "road.arterial", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] }, { featureType: "water", elementType: "all", stylers: [{ color: "#d4e4eb" }, { visibility: "on" }] }, { featureType: "water", elementType: "geometry.fill", stylers: [{ visibility: "on" }, { color: "#c7d1d5" }] }, { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#9b7f7f" }] }, { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#fef7f7" }] }],
            u = [{ featureType: "all", elementType: "labels.text.fill", stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }] }, { featureType: "all", elementType: "labels.text.stroke", stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }] }, { featureType: "all", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "administrative", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }] }, { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 20 }] }, { featureType: "poi", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 21 }] }, { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#000000" }, { lightness: 17 }] }, { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: .2 }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 18 }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 16 }] }, { featureType: "transit", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 19 }] }, { featureType: "water", elementType: "geometry", stylers: [{ color: "#000000" }, { lightness: 17 }] }];
        if ("light" === e.data("map-style")) var p = new google.maps.StyledMapType(d);
        else if ("dark" === e.data("map-style")) var p = new google.maps.StyledMapType(u);
        else var p = new google.maps.StyledMapType;
        a.mapTypes.set("map_style", p), a.setMapTypeId("map_style") }
    var e = $("#vossen-map"),
        i = e.data("map-address"),
        n = e.data("marker-info"),
        o = e.data("map-zoom"),
        s = e.data("map-height");
    e.css("height", s), (new google.maps.Geocoder).geocode({ address: i }, function(e, i) {
        if (i == google.maps.GeocoderStatus.OK) {
            var n = e[0].geometry.location.lat(),
                o = e[0].geometry.location.lng();
            t(n, o) } }) }

function initVossenMaps() {
    var t = $("#vossen-map").data("maps-api-key"),
        e = document.createElement("script");
    e.src = "https://maps.googleapis.com/maps/api/js?key=" + t + "&callback=vossenGoogleMaps", document.body.appendChild(e) }

function onYouTubeIframeAPIReady() { player = new YT.Player("vossen-youtube", { width: $(window).width() + 0, height: $(window).height() + 0, videoId: vosVideoId, playerVars: { controls: 0, showinfo: 0 }, events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange } }) }

function playToggle() { player.playVideo(), document.getElementById("play-toggle").innerHTML = '<i class="ion-pause"></i>' }

function pauseToggle() { player.pauseVideo(), document.getElementById("play-toggle").innerHTML = '<i class="ion-play"></i>' }

function vosResize() {
    var t = $(window).width() + 0,
        e = $(window).height() + 0;
    t / e > 16 / 9 ? (player.setSize(t, t / 16 * 9), $("#vossen-youtube").css({ left: "50%" })) : (player.setSize(e / 9 * 16, e), $("#vossen-youtube").css({ left: -($("#vossen-youtube").outerWidth() - t) / 2 })) }

function onPlayerReady() {
    var t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent);
    t ? $("#play-toggle").on("click", function() { playToggle() }) : playToggle(), player.mute(), vosResize(), $(window).on("resize", function() { vosResize() }) }

function onPlayerStateChange(t) { $("#mute-toggle").on("click", function() { $(this), player.isMuted() ? (player.unMute(), document.getElementById("mute-toggle").innerHTML = '<i class="ion-android-volume-up"></i>') : (player.mute(), document.getElementById("mute-toggle").innerHTML = '<i class="ion-android-volume-mute"></i>') }), t.data == YT.PlayerState.ENDED && player.playVideo(), $("#play-toggle").on("click", function() { t.data == YT.PlayerState.PLAYING ? pauseToggle() : t.data == YT.PlayerState.PAUSED && playToggle() }) }
if (! function() { setTimeout(function() { $(".pre-loader").css({ opacity: "0" }).one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() { $(this).hide() }) }, 1e3) }(), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (+ function(t) { "use strict";
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3") }(jQuery), + function(t) { "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var i in e)
                if (void 0 !== t.style[i]) return { end: e[i] };
            return !1 }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                n = this;
            t(this).one("bsTransitionEnd", function() { i = !0 });
            var o = function() { i || t(n).trigger(t.support.transition.end) };
            return setTimeout(o, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i) }) }
        var i = '[data-dismiss="alert"]',
            n = function(e) { t(e).on("click", i, this.close) };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
            function i() { r.detach().trigger("closed.bs.alert").remove() }
            var o = t(this),
                s = o.attr("data-target");
            s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
            var r = t(s);
            e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i()) };
        var o = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
            return t.fn.alert = o, this }, t(document).on("click.bs.alert.data-api", i, n.prototype.close) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.button"),
                    s = "object" == typeof e && e;
                o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e) }) }
        var i = function(e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1 };
        i.VERSION = "3.3.6", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) {
            var i = "disabled",
                n = this.$element,
                o = n.is("input") ? "val" : "html",
                s = n.data();
            e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() { n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i)) }, this), 0) }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input"); "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") };
        var n = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
            return t.fn.button = n, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var n = t(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.carousel"),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                    r = "string" == typeof e ? e : s.slide;
                o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle() }) }
        var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return }
                t.preventDefault() } }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) {
            var i = this.getItemIndex(e),
                n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
            if (n && !this.options.wrap) return e;
            var o = "prev" == t ? -1 : 1,
                s = (i + o) % this.$items.length;
            return this.$items.eq(s) }, i.prototype.to = function(t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t)) }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next") }, i.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev") }, i.prototype.slide = function(e, n) {
            var o = this.$element.find(".item.active"),
                s = n || this.getItemForDirection(e, o),
                r = this.interval,
                a = "next" == e ? "left" : "right",
                l = this;
            if (s.hasClass("active")) return this.sliding = !1;
            var h = s[0],
                c = t.Event("slide.bs.carousel", { relatedTarget: h, direction: a });
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, r && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active");
                    var d = t(this.$indicators.children()[this.getItemIndex(s)]);
                    d && d.addClass("active") }
                var u = t.Event("slid.bs.carousel", { relatedTarget: h, direction: a });
                return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() { s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(u) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(u)), r && this.cycle(), this } };
        var n = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = n, this };
        var o = function(i) {
            var n, o = t(this),
                s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (s.hasClass("carousel")) {
                var r = t.extend({}, s.data(), o.data()),
                    a = o.attr("data-slide-to");
                a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault() } };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data()) }) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(n) }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);!o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]() }) }
        var n = function(e, i) { this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
        n.VERSION = "3.3.6", n.TRANSITION_DURATION = 350, n.DEFAULTS = { toggle: !0 }, n.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height" }, n.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                    var s = t.Event("show.bs.collapse");
                    if (this.$element.trigger(s), !s.isDefaultPrevented()) { o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                        var r = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var a = function() { this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                        if (!t.support.transition) return a.call(this);
                        var l = t.camelCase(["scroll", r].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l]) } } } }, n.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var o = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this) } } }, n.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, n.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
                var o = t(n);
                this.addAriaAndCollapsedClass(e(o), o) }, this)).end() }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i) };
        var o = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = o, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var o = t(this);
            o.attr("data-target") || n.preventDefault();
            var s = e(o),
                r = s.data("bs.collapse"),
                a = r ? "toggle" : o.data();
            i.call(s, a) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && t(i);
            return n && n.length ? n : e.parent() }

        function i(i) { i && 3 === i.which || (t(o).remove(), t(s).each(function() {
                var n = t(this),
                    o = e(n),
                    s = { relatedTarget: this };
                o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s))))) })) }

        function n(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i) }) }
        var o = ".dropdown-backdrop",
            s = '[data-toggle="dropdown"]',
            r = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
        r.VERSION = "3.3.6", r.prototype.toggle = function(n) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var s = e(o),
                    r = s.hasClass("open");
                if (i(), !r) { "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                    var a = { relatedTarget: this };
                    if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                    o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a)) }
                return !1 } }, r.prototype.keydown = function(i) {
            if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                var n = t(this);
                if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var o = e(n),
                        r = o.hasClass("open");
                    if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
                    var a = " li:not(.disabled):visible a",
                        l = o.find(".dropdown-menu" + a);
                    if (l.length) {
                        var h = l.index(i.target);
                        38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus") } } } };
        var a = t.fn.dropdown;
        t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = a, this }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown) }(jQuery), + function(t) { "use strict";

        function e(e, n) {
            return this.each(function() {
                var o = t(this),
                    s = o.data("bs.modal"),
                    r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
                s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n) }) }
        var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) {
            var n = this,
                o = t.Event("show.bs.modal", { relatedTarget: e });
            this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { n.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
                var o = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                var s = t.Event("shown.bs.modal", { relatedTarget: e });
                o ? n.$dialog.one("bsTransitionEnd", function() { n.$element.trigger("focus").trigger(s) }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s) })) }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) {
            var n = this,
                o = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var s = t.support.transition && o;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in");
                var r = function() { n.removeBackdrop(), e && e() };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r() } else e && e() }, i.prototype.handleUpdate = function() { this.adjustDialog() }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left) }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e };
        var n = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = n, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = t(this),
                o = n.attr("href"),
                s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
                r = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, s.data(), n.data());
            n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) { t.isDefaultPrevented() || s.one("hidden.bs.modal", function() { n.is(":visible") && n.trigger("focus") }) }), e.call(s, r, this) }) }(jQuery), + function(t) {
        "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tooltip"),
                    s = "object" == typeof e && e;
                (o || !/destroy|hide/.test(e)) && (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]()) }) }
        var i = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, n) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
                var r = o[s];
                if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != r) {
                    var a = "hover" == r ? "mouseenter" : "focusin",
                        l = "hover" == r ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } }
            this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, i.prototype.getDefaults = function() {
            return i.DEFAULTS }, i.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, n) { i[t] != n && (e[t] = n) }), e }, i.prototype.enter = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
                i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show())
        }, i.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1 }, i.prototype.leave = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide()) }, i.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) { this.$element.trigger(e);
                var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !n) return;
                var o = this,
                    s = this.tip(),
                    r = this.getUID(this.type);
                this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
                var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    h = l.test(a);
                h && (a = a.replace(l, "") || "top"), s.detach().css({ top: 0, left: 0, display: "block" }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(),
                    d = s[0].offsetWidth,
                    u = s[0].offsetHeight;
                if (h) {
                    var p = a,
                        f = this.getPosition(this.$viewport);
                    a = "bottom" == a && c.bottom + u > f.bottom ? "top" : "top" == a && c.top - u < f.top ? "bottom" : "right" == a && c.right + d > f.width ? "left" : "left" == a && c.left - d < f.left ? "right" : a, s.removeClass(p).addClass(a) }
                var m = this.getCalculatedOffset(a, c, d, u);
                this.applyPlacement(m, a);
                var g = function() {
                    var t = o.hoverState;
                    o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o) };
                t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g() } }, i.prototype.applyPlacement = function(e, i) {
            var n = this.tip(),
                o = n[0].offsetWidth,
                s = n[0].offsetHeight,
                r = parseInt(n.css("margin-top"), 10),
                a = parseInt(n.css("margin-left"), 10);
            isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({ using: function(t) { n.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                h = n[0].offsetHeight; "top" == i && h != s && (e.top = e.top + s - h);
            var c = this.getViewportAdjustedDelta(i, e, l, h);
            c.left ? e.left += c.left : e.top += c.top;
            var d = /top|bottom/.test(i),
                u = d ? 2 * c.left - o + l : 2 * c.top - s + h,
                p = d ? "offsetWidth" : "offsetHeight";
            n.offset(e), this.replaceArrow(u, n[0][p], d) }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right") }, i.prototype.hide = function(e) {
            function n() { "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e() }
            var o = this,
                s = t(this.$tip),
                r = t.Event("hide.bs." + this.type);
            return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this) }, i.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, i.prototype.hasContent = function() {
            return this.getTitle() }, i.prototype.getPosition = function(e) { e = e || this.$element;
            var i = e[0],
                n = "BODY" == i.tagName,
                o = i.getBoundingClientRect();
            null == o.width && (o = t.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
            var s = n ? { top: 0, left: 0 } : e.offset(),
                r = { scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
                a = n ? { width: t(window).width(), height: t(window).height() } : null;
            return t.extend({}, o, r, a, s) }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
            return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - n / 2, left: e.left - i } : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
            var o = { top: 0, left: 0 };
            if (!this.$viewport) return o;
            var s = this.options.viewport && this.options.viewport.padding || 0,
                r = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - s - r.scroll,
                    l = e.top + s - r.scroll + n;
                a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l) } else {
                var h = e.left - s,
                    c = e.left + s + i;
                h < r.left ? o.left = r.left - h : c > r.right && (o.left = r.left + r.width - c) }
            return o }, i.prototype.getTitle = function() {
            var t, e = this.$element,
                i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title) }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t }, i.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) {
            var i = this;
            e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }, i.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null }) };
        var n = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = n, this }
    }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.popover"),
                    s = "object" == typeof e && e;
                (o || !/destroy|hide/.test(e)) && (o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]()) }) }
        var i = function(t, e) { this.init("popover", t, e) };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
            return i.DEFAULTS }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, i.prototype.hasContent = function() {
            return this.getTitle() || this.getContent() }, i.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow") };
        var n = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
            return t.fn.popover = n, this } }(jQuery), + function(t) { "use strict";

        function e(i, n) { this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

        function i(i) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.scrollspy"),
                    s = "object" == typeof i && i;
                o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]() }) }
        e.VERSION = "3.3.6", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
            var e = this,
                i = "offset",
                n = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    o = e.data("target") || e.attr("href"),
                    s = /^#./.test(o) && t(o);
                return s && s.length && s.is(":visible") && [
                    [s[i]().top + n, o]
                ] || null }).sort(function(t, e) {
                return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) }) }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                o = this.offsets,
                s = this.targets,
                r = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
            if (r && e < o[0]) return this.activeTarget = null, this.clear();
            for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t]) }, e.prototype.activate = function(e) { this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                n = t(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy") }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = n, this }, t(window).on("load.bs.scrollspy.data-api", function() { t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data()) }) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.tab");
                o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]() }) }
        var i = function(e) { this.element = t(e) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("target");
            if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = i.find(".active:last a"),
                    s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                    r = t.Event("show.bs.tab", { relatedTarget: o[0] });
                if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    var a = t(n);
                    this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() { o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] }) }) } } }, i.prototype.activate = function(e, n, o) {
            function s() { r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o() }
            var r = n.find("> .active"),
                a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
            r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in") };
        var n = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
            return t.fn.tab = n, this };
        var o = function(i) { i.preventDefault(), e.call(t(this), "show") };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.affix"),
                    s = "object" == typeof e && e;
                o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]() }) }
        var i = function(e, n) { this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
        i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, n) {
            var o = this.$target.scrollTop(),
                s = this.$element.offset(),
                r = this.$target.height();
            if (null != i && "top" == this.affixed) return i > o ? "top" : !1;
            if ("bottom" == this.affixed) return null != i ? o + this.unpin <= s.top ? !1 : "bottom" : t - n >= o + r ? !1 : "bottom";
            var a = null == this.affixed,
                l = a ? o : s.top,
                h = a ? r : e;
            return null != i && i >= o ? "top" : null != n && l + h >= t - n ? "bottom" : !1 }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    n = this.options.offset,
                    o = n.top,
                    s = n.bottom,
                    r = Math.max(t(document).height(), t(document.body).height()); "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
                var a = this.getState(r, e, o, s);
                if (this.affixed != a) { null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (a ? "-" + a : ""),
                        h = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                    this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == a && this.$element.offset({ top: r - e - s }) } };
        var n = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = n, this }, t(window).on("load", function() { t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n) }) }) }(jQuery), ! function() {
        function t() { z.keyboardSupport && p("keydown", s) }

        function e() {
            if (!P && document.body) { P = !0;
                var e = document.body,
                    i = document.documentElement,
                    n = window.innerHeight,
                    o = e.scrollHeight;
                if (L = document.compatMode.indexOf("CSS") >= 0 ? i : e, C = e, t(), top != self) D = !0;
                else if (o > n && (e.offsetHeight <= n || i.offsetHeight <= n)) {
                    var s = document.createElement("div");
                    s.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + L.scrollHeight + "px", document.body.appendChild(s);
                    var r;
                    I = function() { r || (r = setTimeout(function() { O || (s.style.height = "0", s.style.height = L.scrollHeight + "px", r = null) }, 500)) }, setTimeout(I, 10), p("resize", I);
                    var a = { attributes: !0, childList: !0, characterData: !1 };
                    if (E = new Y(I), E.observe(e, a), L.offsetHeight <= n) {
                        var l = document.createElement("div");
                        l.style.clear = "both", e.appendChild(l) } }
                z.fixedBackground || O || (e.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll") } }

        function i() { E && E.disconnect(), f(Q, o), f("mousedown", r), f("keydown", s), f("resize", I), f("load", e) }

        function n(t, e, i) {
            if (g(e, i), 1 != z.accelerationMax) {
                var n = Date.now(),
                    o = n - H;
                if (o < z.accelerationDelta) {
                    var s = (1 + 50 / o) / 2;
                    s > 1 && (s = Math.min(s, z.accelerationMax), e *= s, i *= s) }
                H = Date.now() }
            if (B.push({ x: e, y: i, lastX: 0 > e ? .99 : -.99, lastY: 0 > i ? .99 : -.99, start: Date.now() }), !W) {
                var r = t === document.body,
                    a = function(n) {
                        for (var o = Date.now(), s = 0, l = 0, h = 0; h < B.length; h++) {
                            var c = B[h],
                                d = o - c.start,
                                u = d >= z.animationTime,
                                p = u ? 1 : d / z.animationTime;
                            z.pulseAlgorithm && (p = x(p));
                            var f = c.x * p - c.lastX >> 0,
                                m = c.y * p - c.lastY >> 0;
                            s += f, l += m, c.lastX += f, c.lastY += m, u && (B.splice(h, 1), h--) }
                        r ? window.scrollBy(s, l) : (s && (t.scrollLeft += s), l && (t.scrollTop += l)), e || i || (B = []), B.length ? U(a, t, 1e3 / z.frameRate + 1) : W = !1 };
                U(a, t, 0), W = !0 } }

        function o(t) { P || e();
            var i = t.target,
                o = h(i);
            if (!o || t.defaultPrevented || t.ctrlKey) return !0;
            if (m(C, "embed") || m(i, "embed") && /\.pdf/i.test(i.src) || m(C, "object") || i.shadowRoot) return !0;
            var s = -t.wheelDeltaX || t.deltaX || 0,
                r = -t.wheelDeltaY || t.deltaY || 0;
            return R && (t.wheelDeltaX && y(t.wheelDeltaX, 120) && (s = -120 * (t.wheelDeltaX / Math.abs(t.wheelDeltaX))), t.wheelDeltaY && y(t.wheelDeltaY, 120) && (r = -120 * (t.wheelDeltaY / Math.abs(t.wheelDeltaY)))), s || r || (r = -t.wheelDelta || 0), 1 === t.deltaMode && (s *= 40, r *= 40), !z.touchpadSupport && v(r) ? !0 : (Math.abs(s) > 1.2 && (s *= z.stepSize / 120), Math.abs(r) > 1.2 && (r *= z.stepSize / 120), n(o, s, r), t.preventDefault(), void a()) }

        function s(t) {
            var e = t.target,
                i = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== j.spacebar;
            document.body.contains(C) || (C = document.activeElement);
            var o = /^(textarea|select|embed|object)$/i,
                s = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (t.defaultPrevented || o.test(e.nodeName) || m(e, "input") && !s.test(e.type) || m(C, "video") || b(t) || e.isContentEditable || i) return !0;
            if ((m(e, "button") || m(e, "input") && s.test(e.type)) && t.keyCode === j.spacebar) return !0;
            if (m(e, "input") && "radio" == e.type && N[t.keyCode]) return !0;
            var r, l = 0,
                c = 0,
                d = h(C),
                u = d.clientHeight;
            switch (d == document.body && (u = window.innerHeight), t.keyCode) {
                case j.up:
                    c = -z.arrowScroll;
                    break;
                case j.down:
                    c = z.arrowScroll;
                    break;
                case j.spacebar:
                    r = t.shiftKey ? 1 : -1, c = -r * u * .9;
                    break;
                case j.pageup:
                    c = .9 * -u;
                    break;
                case j.pagedown:
                    c = .9 * u;
                    break;
                case j.home:
                    c = -d.scrollTop;
                    break;
                case j.end:
                    var p = d.scrollHeight - d.scrollTop - u;
                    c = p > 0 ? p + 10 : 0;
                    break;
                case j.left:
                    l = -z.arrowScroll;
                    break;
                case j.right:
                    l = z.arrowScroll;
                    break;
                default:
                    return !0 }
            n(d, l, c), t.preventDefault(), a() }

        function r(t) { C = t.target }

        function a() { clearTimeout(S), S = setInterval(function() { q = {} }, 1e3) }

        function l(t, e) {
            for (var i = t.length; i--;) q[F(t[i])] = e;
            return e }

        function h(t) {
            var e = [],
                i = document.body,
                n = L.scrollHeight;
            do {
                var o = q[F(t)];
                if (o) return l(e, o);
                if (e.push(t), n === t.scrollHeight) {
                    var s = d(L) && d(i),
                        r = s || u(L);
                    if (D && c(L) || !D && r) return l(e, V()) } else if (c(t) && u(t)) return l(e, t) } while (t = t.parentElement) }

        function c(t) {
            return t.clientHeight + 10 < t.scrollHeight }

        function d(t) {
            var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
            return "hidden" !== e }

        function u(t) {
            var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
            return "scroll" === e || "auto" === e }

        function p(t, e) { window.addEventListener(t, e, !1) }

        function f(t, e) { window.removeEventListener(t, e, !1) }

        function m(t, e) {
            return (t.nodeName || "").toLowerCase() === e.toLowerCase() }

        function g(t, e) { t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, (M.x !== t || M.y !== e) && (M.x = t, M.y = e, B = [], H = 0) }

        function v(t) {
            return t ? (A.length || (A = [t, t, t]), t = Math.abs(t), A.push(t), A.shift(), clearTimeout($), $ = setTimeout(function() { window.localStorage && (localStorage.SS_deltaBuffer = A.join(",")) }, 1e3), !w(120) && !w(100)) : void 0 }

        function y(t, e) {
            return Math.floor(t / e) == t / e }

        function w(t) {
            return y(A[0], t) && y(A[1], t) && y(A[2], t) }

        function b(t) {
            var e = t.target,
                i = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch"))
                do
                    if (i = e.classList && e.classList.contains("html5-video-controls")) break;
            while (e = e.parentNode);
            return i }

        function _(t) {
            var e, i, n;
            return t *= z.pulseScale, 1 > t ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * z.pulseNormalize }

        function x(t) {
            return t >= 1 ? 1 : 0 >= t ? 0 : (1 == z.pulseNormalize && (z.pulseNormalize /= _(1)), _(t)) }

        function T(t) {
            for (var e in t) k.hasOwnProperty(e) && (z[e] = t[e]) }
        var C, E, I, S, $, k = { frameRate: 150, animationTime: 400, stepSize: 100, pulseAlgorithm: !0, pulseScale: 4, pulseNormalize: 1, accelerationDelta: 50, accelerationMax: 3, keyboardSupport: !0, arrowScroll: 50, touchpadSupport: 1, fixedBackground: !0, excluded: "" },
            z = k,
            O = !1,
            D = !1,
            M = { x: 0, y: 0 },
            P = !1,
            L = document.documentElement,
            A = [],
            R = /^Mac/.test(navigator.platform),
            j = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 },
            N = { 37: 1, 38: 1, 39: 1, 40: 1 },
            B = [],
            W = !1,
            H = Date.now(),
            F = function() {
                var t = 0;
                return function(e) {
                    return e.uniqueID || (e.uniqueID = t++) } }(),
            q = {};
        window.localStorage && localStorage.SS_deltaBuffer && (A = localStorage.SS_deltaBuffer.split(","));
        var Q, U = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t, e, i) { window.setTimeout(t, i || 1e3 / 60) } }(),
            Y = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            V = function() {
                var t;
                return function() {
                    if (!t) {
                        var e = document.createElement("div");
                        e.style.cssText = "height:10000px;width:1px;", document.body.appendChild(e);
                        var i = document.body.scrollTop;
                        document.documentElement.scrollTop, window.scrollBy(0, 3), t = document.body.scrollTop != i ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(e) }
                    return t } }(),
            X = window.navigator.userAgent,
            Z = /Edge/.test(X),
            G = /chrome/i.test(X) && !Z,
            K = /safari/i.test(X) && !Z,
            J = /mobile/i.test(X),
            tt = /Windows NT 6.1/i.test(X) && /rv:11/i.test(X),
            et = (G || K || tt) && !J; "onwheel" in document.createElement("div") ? Q = "wheel" : "onmousewheel" in document.createElement("div") && (Q = "mousewheel"), Q && et && (p(Q, o), p("mousedown", r), p("load", e)), T.destroy = i, window.SmoothScrollOptions && T(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function() {
            return T }) : "object" == typeof exports ? module.exports = T : window.SmoothScroll = T }(), ! function(t, e, i, n) {
        function o(e, i) { this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this.drag = t.extend({}, u), this.state = t.extend({}, p), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function(t, e) { this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(o.Pipe, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }

        function s(t) {
            if (t.touches !== n) return { x: t.touches[0].pageX, y: t.touches[0].pageY };
            if (t.touches === n) {
                if (t.pageX !== n) return { x: t.pageX, y: t.pageY };
                if (t.pageX === n) return { x: t.clientX, y: t.clientY } } }

        function r(t) {
            var e, n, o = i.createElement("div"),
                s = t;
            for (e in s)
                if (n = s[e], "undefined" != typeof o.style[n]) return o = null, [n, e];
            return [!1] }

        function a() {
            return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

        function l() {
            return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

        function h() {
            return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

        function c() {
            return "ontouchstart" in e || !!navigator.msMaxTouchPoints }

        function d() {
            return e.navigator.msPointerEnabled }
        var u, p, f;
        u = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, p = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, f = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, o.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, o.Width = { Default: "default", Inner: "inner", Outer: "outer" }, o.Plugins = {}, o.Pipe = [{ filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() {
                var t = this._clones,
                    e = this.$stage.children(".cloned");
                (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []) } }, { filter: ["items", "settings"], run: function() {
                var t, e, i = this._clones,
                    n = this._items,
                    o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned"))) } }, { filter: ["width", "items", "settings"], run: function() {
                var t, e, i, n = this.settings.rtl ? 1 : -1,
                    o = (this.width() / this.settings.items).toFixed(3),
                    s = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * n, this._coordinates.push(s) } }, { filter: ["width", "items", "settings"], run: function() {
                var e, i, n = (this.width() / this.settings.items).toFixed(3),
                    o = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
                if (this.$stage.css(o), o = { width: this.settings.autoWidth ? "auto" : n - this.settings.margin }, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                        return t > 1 }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
                else this.$stage.children().css(o) } }, { filter: ["width", "items", "settings"], run: function(t) { t.current && this.reset(this.$stage.children().index(t.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() {
                var t, e, i, n, o = this.settings.rtl ? 1 : -1,
                    s = 2 * this.settings.stagePadding,
                    r = this.coordinates(this.current()) + s,
                    a = r + this.width() * o,
                    l = [];
                for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)) } }], o.prototype.initialize = function() {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
                var e, i, o;
                if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o) return this.preloadAutoWidthImages(e), !1 }
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, o.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                o = null;
            i ? (t.each(i, function(t) { e >= t && t > n && (n = Number(t)) }), o = t.extend({}, this.options, i[n]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function(t, e) {
                return e.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + n)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", { property: { name: "settings", value: o } }), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })) }, o.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, o.prototype.prepare = function(e) {
            var i = this.trigger("prepare", { content: e });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, o.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                    return this[t] }, this._invalidated), o = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
            this._invalidated = {} }, o.prototype.width = function(t) {
            switch (t = t || o.Width.Default) {
                case o.Width.Inner:
                case o.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, o.prototype.refresh = function() {
            return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0) }, o.prototype.eventsCall = function() { this.e._onDragStart = t.proxy(function(t) { this.onDragStart(t) }, this), this.e._onDragMove = t.proxy(function(t) { this.onDragMove(t) }, this), this.e._onDragEnd = t.proxy(function(t) { this.onDragEnd(t) }, this), this.e._onResize = t.proxy(function(t) { this.onResize(t) }, this), this.e._transitionEnd = t.proxy(function(t) { this.transitionEnd(t) }, this), this.e._preventClick = t.proxy(function(t) { this.preventClick(t) }, this) }, o.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, o.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1 }, o.prototype.eventsRouter = function(t) {
            var e = t.type; "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t) }, o.prototype.internalEvents = function() {
            var i = (c(), d());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.$stage.on("dragstart", function() {
                return !1 }), this.$stage.get(0).onselectstart = function() {
                return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this)) }, o.prototype.onDragStart = function(n) {
            var o, r, a, l;
            if (o = n.originalEvent || n || e.event, 3 === o.which || this.state.isTouch) return !1;
            if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) { this.eventsRouter(t) }, this))
        }, o.prototype.onDragMove = function(t) {
            var i, o, r, a, l, h;
            this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, o = s(i).x, r = s(i).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, o.prototype.onDragEnd = function(e) {
            var n, o, s;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, o = Math.abs(this.drag.distance), (o > 3 || n > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents") } }, o.prototype.removeClick = function(i) { this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() { t(i).off("click.preventClick") }, 300) }, o.prototype.preventClick = function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick") }, o.prototype.getTransformProperty = function() {
            var t, i;
            return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12] }, o.prototype.closest = function(e) {
            var i = -1,
                n = 30,
                o = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || t.each(s, t.proxy(function(t, r) {
                return e > r - n && r + n > e ? i = t : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i }, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i }, o.prototype.animate = function(e) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + e + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: e + "px" }) : this.$stage.animate({ left: e }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, o.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", { property: { name: "position", value: t } });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) }
            return this._current }, o.prototype.invalidate = function(t) { this._invalidated[t] = !0 }, o.prototype.reset = function(t) { t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"])) }, o.prototype.normalize = function(e, i) {
            var o = i ? this._items.length : this._items.length + this._clones.length;
            return !t.isNumeric(e) || 1 > o ? n : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(i), Math.min(this.maximum(i), e)) }, o.prototype.relative = function(t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0) }, o.prototype.maximum = function(t) {
            var e, i, n, o = 0,
                s = this.settings;
            if (t) return this._items.length - 1;
            if (!s.loop && s.center) e = this._items.length - 1;
            else if (s.loop || s.center)
                if (s.loop || s.center) e = this._items.length + s.items;
                else {
                    if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
                    for (revert = s.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                        (n = this.coordinates(o)) && !(n * revert >= i);) e = ++o }
            else e = this._items.length - s.items;
            return e }, o.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2 }, o.prototype.items = function(t) {
            return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, o.prototype.mergers = function(t) {
            return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, o.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                o = i + this._items.length,
                s = function(t) {
                    return t % 2 === 0 ? o + t / 2 : i - (t + 1) / 2 };
            return e === n ? t.map(this._clones, function(t, e) {
                return s(e) }) : t.map(this._clones, function(t, i) {
                return t === e ? s(i) : null }) }, o.prototype.speed = function(t) {
            return t !== n && (this._speed = t), this._speed }, o.prototype.coordinates = function(e) {
            var i = null;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e) }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i) }, o.prototype.duration = function(t, e, i) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, o.prototype.to = function(i, n) {
            if (this.settings.loop) {
                var o = i - this.relative(this.current()),
                    s = this.current(),
                    r = this.current(),
                    a = this.current() + o,
                    l = 0 > r - a ? !0 : !1,
                    h = this._clones.length + this._items.length;
                a < this.settings.items && l === !1 ? (s = r + this._items.length, this.reset(s)) : a >= h - this.settings.items && l === !0 && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() { this.speed(this.duration(this.current(), s + o, n)), this.current(s + o), this.update() }, this), 30) } else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update() }, o.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, o.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, o.prototype.transitionEnd = function(t) {
            return t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, o.prototype.viewport = function() {
            var n;
            if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) n = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                n = i.documentElement.clientWidth }
            return n }, o.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, o.prototype.add = function(t, e) { e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", { content: t, position: e }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: t, position: e }) }, o.prototype.remove = function(t) { t = this.normalize(t, !0), t !== n && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t })) }, o.prototype.addTriggerableEvents = function() {
            var e = t.proxy(function(e, i) {
                return t.proxy(function(t) { t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i])) }, this) }, this);
            t.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, t.proxy(function(t, i) { this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel")) }, this)) }, o.prototype.watchVisibility = function() {
            function i(t) {
                return t.offsetWidth > 0 && t.offsetHeight > 0 }

            function n() { i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile)) }
            i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500)) }, o.prototype.preloadAutoWidthImages = function(e) {
            var i, n, o, s;
            i = 0, n = this, e.each(function(r, a) { o = t(a), s = new Image, s.onload = function() { i++, o.attr("src", s.src), o.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize()) }, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina") }) }, o.prototype.destroy = function() { this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var n in this._plugins) this._plugins[n].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
                return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap() }, o.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : i > t;
                case ">":
                    return n ? i > t : t > i;
                case ">=":
                    return n ? i >= t : t >= i;
                case "<=":
                    return n ? t >= i : i >= t } }, o.prototype.on = function(t, e, i, n) { t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i) }, o.prototype.off = function(t, e, i, n) { t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i) }, o.prototype.trigger = function(e, i, n) {
            var o = { item: { count: this._items.length, index: this.current() } },
                s = t.camelCase(t.grep(["on", e, n], function(t) {
                    return t }).join("-").toLowerCase()),
                r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, o, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(r) }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r }, o.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, o.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, o.prototype.browserSupport = function() {
            if (this.support3d = h(), this.support3d) { this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" }
            this.state.orientation = e.orientation }, t.fn.owlCarousel = function(e) {
            return this.each(function() { t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e)) }) }, t.fn.owlCarousel.Constructor = o
    }(window.Zepto || window.jQuery, window, document), function(t, e) {
        var i = function(e) { this._core = e, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) { this.load(e) }, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a) }, this) }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        i.Defaults = { lazyLoad: !1 }, i.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                o = n && n.find(".owl-lazy");!o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
                var o, s = t(n),
                    r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
                this._core.trigger("load", { element: s, url: r }, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() { s.css("opacity", 1), this._core.trigger("loaded", { element: s, url: r }, "lazy") }, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function() { s.css({ "background-image": "url(" + r + ")", opacity: "1" }), this._core.trigger("loaded", { element: s, url: r }, "lazy") }, this), o.src = r) }, this)), this._loaded.push(n.get(0))) }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i }(window.Zepto || window.jQuery, window, document), function(t) {
        var e = function(i) { this._core = i, this._handlers = { "initialized.owl.carousel": t.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document), function(t, e, i) {
        var n = function(e) { this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": t.proxy(function(t) { this._core.settings.video && !this.isInFullScreen() && t.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function() { this._playing && this.stop() }, this), "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content))) }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this)) };
        n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, n.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                s = t.attr("data-height") || this._core.settings.videoHeight,
                r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo" }
            n = n[6], this._videos[r] = { type: i, id: n, width: o, height: s }, e.attr("data-video", r), this.thumbnail(t, this._videos[r]) }, n.prototype.thumbnail = function(e, i) {
            var n, o, s, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                a = e.find("img"),
                l = "src",
                h = "",
                c = this._core.settings,
                d = function(t) { o = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o) };
            return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (d(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(s)) : "vimeo" === i.type && t.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { s = t[0].thumbnail_large, d(s) } })) }, n.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, n.prototype.play = function(e) { this._core.trigger("play", null, "video"), this._playing && this.stop();
            var i, n, o = t(e.target || e.srcElement),
                s = o.closest("." + this._core.settings.itemClass),
                r = this._videos[s.attr("data-video")],
                a = r.width || "100%",
                l = r.height || this._core.$stage.height(); "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), o.after(n) }, n.prototype.isInFullScreen = function() {
            var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), n && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0 }, n.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Video = n }(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
        var o = function(e) { this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = { "change.owl.carousel": t.proxy(function(t) { "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { this.swapping = "translated" == t.type }, this), "translate.owl.carousel": t.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
        o.Defaults = { animateOut: !1, animateIn: !1 }, o.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    o = this.core.$stage.children().eq(this.next),
                    s = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)) } }, o.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, o.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = o }(window.Zepto || window.jQuery, window, document), function(t, e, i) {
        var n = function(e) { this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.$element.on(this.handlers) };
        n.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, n.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval) }, n.prototype.play = function() {
            return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, n.prototype.stop = function() { e.clearInterval(this.interval) }, n.prototype.pause = function() { e.clearInterval(this.interval) }, n.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n }(window.Zepto || window.jQuery, window, document), function(t) { "use strict";
        var e = function(i) { this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "add.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) { this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "change.owl.carousel": t.proxy(function(t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            n = this._core.minimum();
                        t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value } }, this), "changed.owl.carousel": t.proxy(function(t) { "position" == t.property.name && this.draw() }, this), "refreshed.owl.carousel": t.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this) }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
        e.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, e.prototype.initialize = function() {
            var e, i, n = this._core.settings;
            n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
                var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, n.dotsSpeed) }, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function() { this.prev(n.navSpeed) }, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function() { this.next(n.navSpeed) }, this));
            for (i in this._overrides) this._core[i] = t.proxy(this[i], this) }, e.prototype.destroy = function() {
            var t, e, i, n;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (n in this.overides) this._core[n] = this._overrides[n];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, e.prototype.update = function() {
            var t, e, i, n = this._core.settings,
                o = this._core.clones().length / 2,
                s = o + this._core.items().length,
                r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
            if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
                for (this._pages = [], t = o, e = 0, i = 0; s > t; t++)(e >= r || 0 === e) && (this._pages.push({ start: t - o, end: t - o + r - 1 }), e = 0, ++i), e += this._core.mergers(this._core.relative(t)) }, e.prototype.draw = function() {
            var e, i, n = "",
                o = this._core.settings,
                s = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
                    this._controls.$indicators.html(n) } else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active") }
            this._controls.$indicators.toggle(o.dots) }, e.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items) } }, e.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, function(t) {
                return t.start <= e && t.end >= e }).pop() }, e.prototype.getPosition = function(e) {
            var i, n, o = this._core.settings;
            return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i }, e.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, e.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, e.prototype.to = function(e, i, n) {
            var o;
            n ? t.proxy(this._overrides.to, this._core)(e, i) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i)) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e }(window.Zepto || window.jQuery, window, document), function(t, e) { "use strict";
        var i = function(n) { this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": t.proxy(function() { "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[i] = e.content }, this) }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                var t = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    n = this._hashes[t] && i.index(this._hashes[t]) || 0;
                return t ? void this._core.to(n, !1, !0) : !1 }, this)) };
        i.Defaults = { URLhashListener: !1 }, i.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null) }, t.fn.owlCarousel.Constructor.Plugins.Hash = i }(window.Zepto || window.jQuery, window, document), function() {
        var t = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1 },
            e = [].slice;
        ! function(t, e) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
                return e(i, t) }) : e(t.jQuery, t) }(this, function(i, n) {
            var o, s, r, a, l, h, c, d, u, p, f, m, g, v, y, w;
            return o = i(n), d = t.call(n, "ontouchstart") >= 0, a = { horizontal: {}, vertical: {} }, l = 1, c = {}, h = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", y = "waypoint", w = "waypoints", s = function() {
                function t(t) {
                    var e = this;
                    this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() }, this.waypoints = { horizontal: {}, vertical: {} }, t.data(h, this.id), c[this.id] = this, t.bind(m, function() {
                        var t;
                        return e.didScroll || d ? void 0 : (e.didScroll = !0, t = function() {
                            return e.doScroll(), e.didScroll = !1 }, n.setTimeout(t, i[w].settings.scrollThrottle)) }), t.bind(f, function() {
                        var t;
                        return e.didResize ? void 0 : (e.didResize = !0, t = function() {
                            return i[w]("refresh"), e.didResize = !1 }, n.setTimeout(t, i[w].settings.resizeThrottle)) }) }
                return t.prototype.doScroll = function() {
                    var t, e = this;
                    return t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }, !d || t.vertical.oldScroll && t.vertical.newScroll || i[w]("refresh"), i.each(t, function(t, n) {
                        var o, s, r;
                        return r = [], s = n.newScroll > n.oldScroll, o = s ? n.forward : n.backward, i.each(e.waypoints[t], function(t, e) {
                            var i, o;
                            return n.oldScroll < (i = e.offset) && i <= n.newScroll ? r.push(e) : n.newScroll < (o = e.offset) && o <= n.oldScroll ? r.push(e) : void 0 }), r.sort(function(t, e) {
                            return t.offset - e.offset }), s || r.reverse(), i.each(r, function(t, e) {
                            return e.options.continuous || t === r.length - 1 ? e.trigger([o]) : void 0 }) }), this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll } }, t.prototype.refresh = function() {
                    var t, e, n, o = this;
                    return n = i.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                        horizontal: {
                            contextOffset: n ? 0 : e.left,
                            contextScroll: n ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: { contextOffset: n ? 0 : e.top, contextScroll: n ? 0 : this.oldScroll.y, contextDimension: n ? i[w]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" }
                    }, i.each(t, function(t, e) {
                        return i.each(o.waypoints[t], function(t, n) {
                            var o, s, r, a, l;
                            return o = n.options.offset, r = n.offset, s = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp], i.isFunction(o) ? o = o.apply(n.element) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(e.contextDimension * o / 100))), n.offset = s - e.contextOffset + e.contextScroll - o, n.options.onlyOnScroll && null != r || !n.enabled ? void 0 : null !== r && r < (a = e.oldScroll) && a <= n.offset ? n.trigger([e.backward]) : null !== r && r > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === r && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0 }) })
                }, t.prototype.checkEmpty = function() {
                    return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, m].join(" ")), delete c[this.id]) : void 0 }, t
            }(), r = function() {
                function t(t, e, n) {
                    var o, s;
                    n = i.extend({}, i.fn[y].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() {
                        var t;
                        return t = i[w]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight() }), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, o = null != (s = t.data(v)) ? s : [], o.push(this.id), t.data(v, o) }
                return t.prototype.trigger = function(t) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0 }, t.prototype.disable = function() {
                    return this.enabled = !1 }, t.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0 }, t.prototype.destroy = function() {
                    return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty() }, t.getWaypointsByElement = function(t) {
                    var e, n;
                    return (n = i(t).data(v)) ? (e = i.extend({}, a.horizontal, a.vertical), i.map(n, function(t) {
                        return e[t] })) : [] }, t }(), p = { init: function(t, e) {
                    var n;
                    return null == e && (e = {}), null == (n = e.handler) && (e.handler = t), this.each(function() {
                        var t, n, o, a;
                        return t = i(this), o = null != (a = e.context) ? a : i.fn[y].defaults.context, i.isWindow(o) || (o = t.closest(o)), o = i(o), n = c[o.data(h)], n || (n = new s(o)), new r(t, n, e) }), i[w]("refresh"), this }, disable: function() {
                    return p._invoke(this, "disable") }, enable: function() {
                    return p._invoke(this, "enable") }, destroy: function() {
                    return p._invoke(this, "destroy") }, prev: function(t, e) {
                    return p._traverse.call(this, t, e, function(t, e, i) {
                        return e > 0 ? t.push(i[e - 1]) : void 0 }) }, next: function(t, e) {
                    return p._traverse.call(this, t, e, function(t, e, i) {
                        return e < i.length - 1 ? t.push(i[e + 1]) : void 0 }) }, _traverse: function(t, e, o) {
                    var s, r;
                    return null == t && (t = "vertical"), null == e && (e = n), r = u.aggregate(e), s = [], this.each(function() {
                        var e;
                        return e = i.inArray(this, r[t]), o(s, e, r[t]) }), this.pushStack(s) }, _invoke: function(t, e) {
                    return t.each(function() {
                        var t;
                        return t = r.getWaypointsByElement(this), i.each(t, function(t, i) {
                            return i[e](), !0 }) }), this } }, i.fn[y] = function() {
                var t, n;
                return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[n] ? p[n].apply(this, t) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.") }, i.fn[y].defaults = { context: n, continuous: !0, enabled: !0, horizontal: !1, offset: 0, triggerOnce: !1 }, u = { refresh: function() {
                    return i.each(c, function(t, e) {
                        return e.refresh() }) }, viewportHeight: function() {
                    var t;
                    return null != (t = n.innerHeight) ? t : o.height() }, aggregate: function(t) {
                    var e, n, o;
                    return e = a, t && (e = null != (o = c[i(t).data(h)]) ? o.waypoints : void 0), e ? (n = { horizontal: [], vertical: [] }, i.each(n, function(t, o) {
                        return i.each(e[t], function(t, e) {
                            return o.push(e) }), o.sort(function(t, e) {
                            return t.offset - e.offset }), n[t] = i.map(o, function(t) {
                            return t.element }), n[t] = i.unique(n[t]) }), n) : [] }, above: function(t) {
                    return null == t && (t = n), u._filter(t, "vertical", function(t, e) {
                        return e.offset <= t.oldScroll.y }) }, below: function(t) {
                    return null == t && (t = n), u._filter(t, "vertical", function(t, e) {
                        return e.offset > t.oldScroll.y }) }, left: function(t) {
                    return null == t && (t = n), u._filter(t, "horizontal", function(t, e) {
                        return e.offset <= t.oldScroll.x }) }, right: function(t) {
                    return null == t && (t = n), u._filter(t, "horizontal", function(t, e) {
                        return e.offset > t.oldScroll.x }) }, enable: function() {
                    return u._invoke("enable") }, disable: function() {
                    return u._invoke("disable") }, destroy: function() {
                    return u._invoke("destroy") }, extendFn: function(t, e) {
                    return p[t] = e }, _invoke: function(t) {
                    var e;
                    return e = i.extend({}, a.vertical, a.horizontal), i.each(e, function(e, i) {
                        return i[t](), !0 }) }, _filter: function(t, e, n) {
                    var o, s;
                    return (o = c[i(t).data(h)]) ? (s = [], i.each(o.waypoints[e], function(t, e) {
                        return n(o, e) ? s.push(e) : void 0 }), s.sort(function(t, e) {
                        return t.offset - e.offset }), i.map(s, function(t) {
                        return t.element })) : [] } }, i[w] = function() {
                var t, i;
                return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], u[i] ? u[i].apply(null, t) : u.aggregate.call(null, i) }, i[w].settings = { resizeThrottle: 100, scrollThrottle: 30 }, o.load(function() {
                return i[w]("refresh") })
        })
    }.call(this), ! function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) { "use strict";

        function i(i, s, a) {
            function l(t, e, n) {
                var o, s = "$()." + i + '("' + e + '")';
                return t.each(function(t, l) {
                    var h = a.data(l, i);
                    if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var c = h[e];
                    if (!c || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var d = c.apply(h, n);
                    o = void 0 === o ? d : o }), void 0 !== o ? o : t }

            function h(t, e) { t.each(function(t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o)) }) }
            a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return l(this, t, e) }
                return h(this, t), this }, n(a)) }

        function n(t) {!t || t && t.bridget || (t.bridget = i) }
        var o = Array.prototype.slice,
            s = t.console,
            r = "undefined" == typeof s ? function() {} : function(t) { s.error(t) };
        return n(e || t.jQuery), i }), function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function(t, e) {
            if (t && e) { this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this } }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = s && s[o];
                    r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n] }
                return this } }, t }), function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() { "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e }

        function e() {}

        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; h > e; e++) {
                var i = l[e];
                t[i] = 0 }
            return t }

        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

        function o() {
            if (!c) { c = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e) } }

        function s(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var s = n(e);
                if ("none" == s.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == s.boxSizing, d = 0; h > d; d++) {
                    var u = l[d],
                        p = s[u],
                        f = parseFloat(p);
                    a[u] = isNaN(f) ? 0 : f }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    w = a.borderLeftWidth + a.borderRightWidth,
                    b = a.borderTopWidth + a.borderBottomWidth,
                    _ = c && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (_ ? 0 : m + w));
                var T = t(s.height);
                return T !== !1 && (a.height = T + (_ ? 0 : g + b)), a.innerWidth = a.width - (m + w), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a } }
        var r, a = "undefined" == typeof console ? e : function(t) { console.error(t) },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            h = l.length,
            c = !1;
        return s }), function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() { "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o } }();
        return function(e, i) {
            return e[t](i) } }), function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t }, i.modulo = function(t, e) {
            return (t % e + e) % e }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1) }, i.getParent = function(t, i) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t) }, i.filterFindElements = function(t, n) { t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s]) } }), o }, i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[o] = setTimeout(function() { n.apply(s, e), delete s[o] }, i || 100) } }, i.docReady = function(t) {
            var e = document.readyState; "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i }).toLowerCase() };
        var n = t.console;
        return i.htmlInit = function(e, o) { i.docReady(function() {
                var s = i.toDashed(o),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    h = i.makeArray(a).concat(i.makeArray(l)),
                    c = r + "-options",
                    d = t.jQuery;
                h.forEach(function(t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(c);
                    try { i = s && JSON.parse(s) } catch (a) {
                        return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a)) }
                    var l = new e(t, i);
                    d && d.data(t, o, l) }) }) }, i }), function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) { "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0 }

        function n(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase() }) }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
            h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
            c = n.prototype = Object.create(t.prototype);
        c.constructor = n, c._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t) }, c.getSize = function() { this.size = e(this.element) }, c.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = h[i] || i;
                e[n] = t[i] } }, c.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
            r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a }, c.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[o];
            e[s] = this.getXValue(a), e[r] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                h = n ? "top" : "bottom",
                c = n ? "bottom" : "top",
                d = this.position.y + t[l];
            e[h] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this]) }, c.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, c.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, c._transitionTo = function(t, e) { this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                s = parseInt(e, 10),
                r = o === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                h = {};
            h.transform = this.getTranslate(a, l), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, c.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, c.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, c._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, c.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) { this.css(t.from);
                var n = this.element.offsetHeight;
                n = null }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 };
        var d = "opacity," + o(a);
        c.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: d, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1) } }, c.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, c.onotransitionend = function(t) { this.ontransitionend(t) };
        var u = { "-webkit-transform": "transform" };
        c.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = u[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n] }
                this.emitEvent("transitionEnd", [this]) } }, c.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1 }, c._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e) };
        var p = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return c.removeTransitionStyles = function() { this.css(p) }, c.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, c.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, c.remove = function() {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, c.reveal = function() { delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, c.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, c.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i }, c.hide = function() { this.isHidden = !0, this.css({ display: "" });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, c.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, c.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n }), function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
            return e(t, i, n, o, s) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, n, o) { "use strict";

        function s(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, h && (this.$element = h(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++d;
            this.element.outlayerGUID = o, u[o] = this, this._create();
            var s = this._getOption("initLayout");
            s && this.layout() }

        function r(t) {
            function e() { t.apply(this, arguments) }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = f[n] || 1;
            return i * o }
        var l = t.console,
            h = t.jQuery,
            c = function() {},
            d = 0,
            u = {};
        s.namespace = "outlayer", s.Item = o, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
        var p = s.prototype;
        n.extend(p, e.prototype), p.option = function(t) { n.extend(this.options, t) }, p._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, p._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize() }, p.reloadItems = function() { this.items = this._itemize(this.element.children) }, p._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var s = e[o],
                    r = new i(s, this);
                n.push(r) }
            return n }, p._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector) }, p.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element }) }, p.layout = function() { this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0 }, p._init = p.layout, p._resetLayout = function() { this.getSize() }, p.getSize = function() { this.size = i(this.element) }, p._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0 }, p.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, p._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored }) }, p._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n) }, this), this._processLayoutQueue(i) } }, p._getItemLayoutPosition = function() {
            return { x: 0, y: 0 } }, p._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, p.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger) }, p._positionItem = function(t, e, i, n, o) { n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i)) }, p._postLayout = function() { this.resizeContainer() }, p.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)) } }, p._getContainerSize = c, p._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, p._emitCompleteOnItems = function(t, e) {
            function i() { o.dispatchEvent(t + "Complete", null, [e]) }

            function n() { r++, r == s && i() }
            var o = this,
                s = e.length;
            if (!e || !s) return void i();
            var r = 0;
            e.forEach(function(e) { e.once(t, n) }) }, p.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), h)
                if (this.$element = this.$element || h(this.element), e) {
                    var o = h.Event(e);
                    o.type = t, this.$element.trigger(o, i) } else this.$element.trigger(t, i) }, p.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0) }, p.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored }, p.stamp = function(t) { t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, p.unstamp = function(t) { t = this._find(t), t && t.forEach(function(t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, p._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0 }, p._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, p._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, p._manageStamp = c, p._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                s = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };
            return s }, p.handleEvent = n.handleEvent, p.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, p.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, p.onresize = function() { this.resize() }, n.debounceMethod(s, "onresize", 100), p.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, p.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth }, p.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e }, p.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e)) }, p.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, p.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) { t.stagger(i * e), t.reveal() }) } }, p.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) { t.stagger(i * e), t.hide() }) } }, p.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e) }, p.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e) }, p.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i } }, p.getItems = function(t) { t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i) }, this), e }, p.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), n.removeFrom(this.items, t) }, this) }, p.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete u[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace) }, s.data = function(t) { t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && u[e] }, s.create = function(t, e) {
            var i = r(s);
            return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i };
        var f = { ms: 1, s: 1e3 };
        return s.Item = o, s }), function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) { "use strict";

        function e() { t.Item.apply(this, arguments) }
        var i = e.prototype = Object.create(t.Item.prototype),
            n = i._create;
        i._create = function() { this.id = this.layout.itemGUID++, n.call(this), this.sortData = {} }, i.updateSortData = function() {
            if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this) } } };
        var o = i.destroy;
        return i.destroy = function() { o.apply(this, arguments), this.css({ display: "" }) }, e }), function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) { "use strict";

        function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) }
        var n = i.prototype,
            o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return o.forEach(function(t) { n[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments) } }), n.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight }, n._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, n.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, n.getRowHeight = function() { this.getSegmentSize("row", "Height") }, n.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + e] } }, n.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element) }, n.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, n.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
            function o() { i.apply(this, arguments) }
            return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o }, i }), function(t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0 }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                s = o / n,
                r = n - o % n,
                a = r && 1 > r ? "round" : "floor";
            s = Math[a](s), this.cols = Math.max(s, 1) }, i.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth }, i.prototype._getItemLayoutPosition = function(t) { t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && 1 > e ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = { x: this.columnWidth * r, y: s }, l = s + t.size.outerHeight, h = this.cols + 1 - o.length, c = 0; h > c; c++) this.colYs[r + c] = l;
            return a }, i.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o) }
            return e }, i.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                s = o ? n.left : n.right,
                r = s + i.outerWidth,
                a = Math.floor(s / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(r / this.columnWidth);
            l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var h = this._getOption("originTop"), c = (h ? n.top : n.bottom) + i.outerHeight, d = a; l >= d; d++) this.colYs[d] = Math.max(c, this.colYs[d]) }, i.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs);
            var t = { height: this.maxY };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth }, i }), function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype,
            o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
        var r = n.measureColumns;
        n.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) };
        var a = n._getOption;
        return n._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }), function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) { t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = { x: this.x, y: this.y };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n }, i._getContainerSize = function() {
            return { height: this.maxY } }, e }), function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) { "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) { t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function() {
            return { height: this.y } }, e }), function(t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, s, r, a) {
            return e(t, i, n, o, s, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, n, o, s, r) {
        function a(t, e) {
            return function(i, n) {
                for (var o = 0; o < t.length; o++) {
                    var s = t[o],
                        r = i.sortData[s],
                        a = n.sortData[s];
                    if (r > a || a > r) {
                        var l = void 0 !== e[s] ? e[s] : e,
                            h = l ? 1 : -1;
                        return (r > a ? 1 : -1) * h } }
                return 0 } }
        var l = t.jQuery,
            h = String.prototype.trim ? function(t) {
                return t.trim() } : function(t) {
                return t.replace(/^\s+|\s+$/g, "") },
            c = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        c.Item = s, c.LayoutMode = r;
        var d = c.prototype;
        d._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in r.modes) this._initLayoutMode(t) }, d.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, d._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var n = t[i];
                n.id = this.itemGUID++ }
            return this._updateItemsSortData(t), t }, d._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this) }, d.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, d._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, d.arrange = function(t) { this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, d._init = d.arrange, d._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, d._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e }, d._bindArrangeComplete = function() {
            function t() { e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems]) }
            var e, i, n, o = this;
            this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { n = !0, t() }) }, d._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var l = s(a);
                    l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a) } }
            return { matches: i, needReveal: n, needHide: o } }, d._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t) } : "function" == typeof t ? function(e) {
                return t(e.element) } : function(e) {
                return n(e.element, t) } }, d.updateSortData = function(t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, d._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = u(i) } }, d._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData() } };
        var u = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    n = i[0],
                    o = n.match(/^\[(.+)\]$/),
                    s = o && o[1],
                    r = e(s, n),
                    a = c.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(r(t)) } : function(t) {
                    return t && r(t) } }

            function e(t, e) {
                return t ? function(e) {
                    return e.getAttribute(t) } : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent } }
            return t }();
        c.sortDataParsers = { parseInt: function(t) {
                return parseInt(t, 10) }, parseFloat: function(t) {
                return parseFloat(t) } }, d._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t) } }, d._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e }, d._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, d._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t) }, d._manageStamp = function(t) { this._mode()._manageStamp(t) }, d._getContainerSize = function() {
            return this._mode()._getContainerSize() }, d.needsResizeLayout = function() {
            return this._mode().needsResizeLayout() }, d.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i) } }, d.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) { this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, d._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, d.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, o = e.length;
                for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
                var s = this._filter(e).matches;
                for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                this.reveal(s) } };
        var p = d.remove;
        return d.remove = function(t) { t = o.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var i = e && e.length, n = 0; i && i > n; n++) {
                var s = e[n];
                o.removeFrom(this.filteredItems, s) } }, d.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random() }
            this.options.sortBy = "random", this._sort(), this._layout() }, d._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return this.options.transitionDuration = i, n }, d.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element }) }, c }), ! function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function(t, e) {
            if (t && e) { this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || [];
                return n[e] = !0, this } }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = s && s[o];
                    r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n] }
                return this } }, t }), function(t, e) { "use strict"; "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
            return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter) }(window, function(t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t }

        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e }

        function o(t, e, s) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? s = e : i(this.options, e), s && this.on("always", s), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() { this.check() }.bind(this))) : new o(t, e, s) }

        function s(t) { this.img = t }

        function r(t, e) { this.url = t, this.element = e, this.img = new Image }
        var a = t.jQuery,
            l = t.console;
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() { this.images = [], this.elements.forEach(this.addElementImages, this) }, o.prototype.addElementImages = function(t) { "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && h[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o) }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (n = 0; n < s.length; n++) {
                        var r = s[n];
                        this.addElementBackgroundImages(r) } } } };
        var h = { 1: !0, 9: !0, 11: !0 };
        return o.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage) } }, o.prototype.addImage = function(t) {
            var e = new s(t);
            this.images.push(e) }, o.prototype.addBackground = function(t, e) {
            var i = new r(t, e);
            this.images.push(i) }, o.prototype.check = function() {
            function t(t, i, n) { setTimeout(function() { e.progress(t, i, n) }) }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) { e.once("progress", t), e.check() }) : void this.complete() }, o.prototype.progress = function(t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e) }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this) } }, s.prototype = Object.create(e.prototype), s.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src)) }, s.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth }, s.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]) }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t) }, s.prototype.onload = function() { this.confirm(!0, "onload"), this.unbindEvents() }, s.prototype.onerror = function() { this.confirm(!1, "onerror"), this.unbindEvents() }, s.prototype.unbindEvents = function() { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, r.prototype = Object.create(s.prototype), r.prototype.check = function() { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, r.prototype.unbindEvents = function() { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, r.prototype.confirm = function(t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]) }, o.makeJQueryPlugin = function(e) { e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function(t, e) {
                var i = new o(this, t, e);
                return i.jqDeferred.promise(a(this)) }) }, o.makeJQueryPlugin(), o }), function(t) { t.easing.jswing = t.easing.swing, t.extend(t.easing, { def: "easeOutQuad", swing: function(e, i, n, o, s) {
                return t.easing[t.easing.def](e, i, n, o, s) }, easeInQuad: function(t, e, i, n, o) {
                return n * (e /= o) * e + i }, easeOutQuad: function(t, e, i, n, o) {
                return -n * (e /= o) * (e - 2) + i }, easeInOutQuad: function(t, e, i, n, o) {
                return 1 > (e /= o / 2) ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i }, easeInCubic: function(t, e, i, n, o) {
                return n * (e /= o) * e * e + i }, easeOutCubic: function(t, e, i, n, o) {
                return n * ((e = e / o - 1) * e * e + 1) + i }, easeInOutCubic: function(t, e, i, n, o) {
                return 1 > (e /= o / 2) ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i }, easeInQuart: function(t, e, i, n, o) {
                return n * (e /= o) * e * e * e + i }, easeOutQuart: function(t, e, i, n, o) {
                return -n * ((e = e / o - 1) * e * e * e - 1) + i }, easeInOutQuart: function(t, e, i, n, o) {
                return 1 > (e /= o / 2) ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i }, easeInQuint: function(t, e, i, n, o) {
                return n * (e /= o) * e * e * e * e + i }, easeOutQuint: function(t, e, i, n, o) {
                return n * ((e = e / o - 1) * e * e * e * e + 1) + i }, easeInOutQuint: function(t, e, i, n, o) {
                return 1 > (e /= o / 2) ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i }, easeInSine: function(t, e, i, n, o) {
                return -n * Math.cos(e / o * (Math.PI / 2)) + n + i }, easeOutSine: function(t, e, i, n, o) {
                return n * Math.sin(e / o * (Math.PI / 2)) + i }, easeInOutSine: function(t, e, i, n, o) {
                return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i }, easeInExpo: function(t, e, i, n, o) {
                return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i }, easeOutExpo: function(t, e, i, n, o) {
                return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i }, easeInOutExpo: function(t, e, i, n, o) {
                return 0 == e ? i : e == o ? i + n : 1 > (e /= o / 2) ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i }, easeInCirc: function(t, e, i, n, o) {
                return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i }, easeOutCirc: function(t, e, i, n, o) {
                return n * Math.sqrt(1 - (e = e / o - 1) * e) + i }, easeInOutCirc: function(t, e, i, n, o) {
                return 1 > (e /= o / 2) ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i }, easeInElastic: function(t, e, i, n, o) { t = 1.70158;
                var s = 0,
                    r = n;
                return 0 == e ? i : 1 == (e /= o) ? i + n : (s || (s = .3 * o), r < Math.abs(n) ? (r = n, t = s / 4) : t = s / (2 * Math.PI) * Math.asin(n / r), -(r * Math.pow(2, 10 * --e) * Math.sin(2 * (e * o - t) * Math.PI / s)) + i) }, easeOutElastic: function(t, e, i, n, o) { t = 1.70158;
                var s = 0,
                    r = n;
                return 0 == e ? i : 1 == (e /= o) ? i + n : (s || (s = .3 * o), r < Math.abs(n) ? (r = n, t = s / 4) : t = s / (2 * Math.PI) * Math.asin(n / r), r * Math.pow(2, -10 * e) * Math.sin(2 * (e * o - t) * Math.PI / s) + n + i) }, easeInOutElastic: function(t, e, i, n, o) { t = 1.70158;
                var s = 0,
                    r = n;
                return 0 == e ? i : 2 == (e /= o / 2) ? i + n : (s || (s = .3 * o * 1.5), r < Math.abs(n) ? (r = n, t = s / 4) : t = s / (2 * Math.PI) * Math.asin(n / r), 1 > e ? -.5 * r * Math.pow(2, 10 * --e) * Math.sin(2 * (e * o - t) * Math.PI / s) + i : r * Math.pow(2, -10 * --e) * Math.sin(2 * (e * o - t) * Math.PI / s) * .5 + n + i) }, easeInBack: function(t, e, i, n, o, s) {
                return void 0 == s && (s = 1.70158), n * (e /= o) * e * ((s + 1) * e - s) + i }, easeOutBack: function(t, e, i, n, o, s) {
                return void 0 == s && (s = 1.70158), n * ((e = e / o - 1) * e * ((s + 1) * e + s) + 1) + i }, easeInOutBack: function(t, e, i, n, o, s) {
                return void 0 == s && (s = 1.70158), 1 > (e /= o / 2) ? n / 2 * e * e * (((s *= 1.525) + 1) * e - s) + i : n / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i }, easeInBounce: function(e, i, n, o, s) {
                return o - t.easing.easeOutBounce(e, s - i, 0, o, s) + n }, easeOutBounce: function(t, e, i, n, o) {
                return (e /= o) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i }, easeInOutBounce: function(e, i, n, o, s) {
                return s / 2 > i ? .5 * t.easing.easeInBounce(e, 2 * i, 0, o, s) + n : .5 * t.easing.easeOutBounce(e, 2 * i - s, 0, o, s) + .5 * o + n } }) }(jQuery), $("#vossen-youtube").length) {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var vosVideoId = $("#vossen-youtube").attr("data-youtube-video-id"),
        player }
$("#twitter-feed-slider, #twitter-feed-list").length && ! function(t, e) { "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : e() }(this, function() {
    function t(t) {
        if (null === m) {
            for (var e = t.length, i = 0, n = document.getElementById(s), o = "<ul>"; e > i;) o += "<li>" + t[i] + "</li>", i++;
            o += "</ul>", n.innerHTML = o } else m(t) }

    function e(t) {
        return t.replace(/<b[^>]*>(.*?)<\/b>/gi, function(t, e) {
            return e }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "") }

    function i(t) {
        for (var e = t.getElementsByTagName("a"), i = e.length - 1; i >= 0; i--) e[i].setAttribute("target", "_blank") }

    function n(t, e) {
        for (var i = [], n = new RegExp("(^| )" + e + "( |$)"), o = t.getElementsByTagName("*"), s = 0, r = o.length; r > s; s++) n.test(o[s].className) && i.push(o[s]);
        return i }

    function o(t) {
        if (void 0 !== t && t.innerHTML.indexOf("data-srcset") >= 0) {
            var e = t.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];
            return decodeURIComponent(e).split('"')[1] } }
    var s = "",
        r = 20,
        a = !0,
        l = [],
        h = !1,
        c = !0,
        d = !0,
        u = null,
        p = !0,
        f = !0,
        m = null,
        g = !0,
        v = !1,
        y = !0,
        w = "en",
        b = !0,
        _ = !1,
        x = null,
        T = { fetch: function(t) {
                if (void 0 === t.maxTweets && (t.maxTweets = 20), void 0 === t.enableLinks && (t.enableLinks = !0), void 0 === t.showUser && (t.showUser = !0), void 0 === t.showTime && (t.showTime = !0), void 0 === t.dateFunction && (t.dateFunction = "default"), void 0 === t.showRetweet && (t.showRetweet = !0), void 0 === t.customCallback && (t.customCallback = null), void 0 === t.showInteraction && (t.showInteraction = !0), void 0 === t.showImages && (t.showImages = !1), void 0 === t.linksInNewWindow && (t.linksInNewWindow = !0), void 0 === t.showPermalinks && (t.showPermalinks = !0), void 0 === t.dataOnly && (t.dataOnly = !1), h) l.push(t);
                else { h = !0, s = t.domId, r = t.maxTweets, a = t.enableLinks, d = t.showUser, c = t.showTime, f = t.showRetweet, u = t.dateFunction, m = t.customCallback, g = t.showInteraction, v = t.showImages, y = t.linksInNewWindow, b = t.showPermalinks, _ = t.dataOnly;
                    var e = document.getElementsByTagName("head")[0];
                    null !== x && e.removeChild(x), x = document.createElement("script"), x.type = "text/javascript", void 0 !== t.list ? x.src = "https://syndication.twitter.com/timeline/list?callback=twitterFetcher.callback&dnt=false&list_slug=" + t.list.listSlug + "&screen_name=" + t.list.screenName + "&suppress_response_codes=true&lang=" + (t.lang || w) + "&rnd=" + Math.random() : void 0 !== t.profile ? x.src = "https://syndication.twitter.com/timeline/profile?callback=twitterFetcher.callback&dnt=false&screen_name=" + t.profile.screenName + "&suppress_response_codes=true&lang=" + (t.lang || w) + "&rnd=" + Math.random() : void 0 !== t.likes ? x.src = "https://syndication.twitter.com/timeline/likes?callback=twitterFetcher.callback&dnt=false&screen_name=" + t.likes.screenName + "&suppress_response_codes=true&lang=" + (t.lang || w) + "&rnd=" + Math.random() : x.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + t.id + "?&lang=" + (t.lang || w) + "&callback=twitterFetcher.callback&suppress_response_codes=true&rnd=" + Math.random(), e.appendChild(x) } }, callback: function(s) {
                function m(t) {
                    var e = t.getElementsByTagName("img")[0];
                    return e.src = e.getAttribute("data-src-2x"), t }
                var w = document.createElement("div");
                w.innerHTML = s.body, "undefined" == typeof w.getElementsByClassName && (p = !1);
                var x = [],
                    C = [],
                    E = [],
                    I = [],
                    S = [],
                    $ = [],
                    k = [],
                    z = 0;
                if (p)
                    for (var O = w.getElementsByClassName("timeline-Tweet"); z < O.length;) O[z].getElementsByClassName("timeline-Tweet-retweetCredit").length > 0 ? S.push(!0) : S.push(!1), (!S[z] || S[z] && f) && (x.push(O[z].getElementsByClassName("timeline-Tweet-text")[0]), $.push(O[z].getAttribute("data-tweet-id")), C.push(m(O[z].getElementsByClassName("timeline-Tweet-author")[0])), E.push(O[z].getElementsByClassName("dt-updated")[0]), k.push(O[z].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== O[z].getElementsByClassName("timeline-Tweet-media")[0] ? I.push(O[z].getElementsByClassName("timeline-Tweet-media")[0]) : I.push(void 0)), z++;
                else
                    for (var O = n(w, "timeline-Tweet"); z < O.length;) n(O[z], "timeline-Tweet-retweetCredit").length > 0 ? S.push(!0) : S.push(!1), (!S[z] || S[z] && f) && (x.push(n(O[z], "timeline-Tweet-text")[0]), $.push(O[z].getAttribute("data-tweet-id")), C.push(m(n(O[z], "timeline-Tweet-author")[0])), E.push(n(O[z], "dt-updated")[0]), k.push(n(O[z], "timeline-Tweet-timestamp")[0]), void 0 !== n(O[z], "timeline-Tweet-media")[0] ? I.push(n(O[z], "timeline-Tweet-media")[0]) : I.push(void 0)), z++;
                x.length > r && (x.splice(r, x.length - r), C.splice(r, C.length - r), E.splice(r, E.length - r), S.splice(r, S.length - r), I.splice(r, I.length - r), k.splice(r, k.length - r));
                var D = [],
                    z = x.length,
                    M = 0;
                if (_)
                    for (; z > M;) D.push({ tweet: x[M].innerHTML, author: C[M].innerHTML, time: E[M].textContent, image: o(I[M]), rt: S[M], tid: $[M], permalinkURL: void 0 === k[M] ? "" : k[M].href }), M++;
                else
                    for (; z > M;) {
                        if ("string" != typeof u) {
                            var P = E[M].getAttribute("datetime"),
                                L = new Date(E[M].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                                A = u(L, P);
                            if (E[M].setAttribute("aria-label", A), x[M].textContent)
                                if (p) E[M].textContent = A;
                                else {
                                    var R = document.createElement("p"),
                                        j = document.createTextNode(A);
                                    R.appendChild(j), R.setAttribute("aria-label", A), E[M] = R }
                            else E[M].textContent = A }
                        var N = "";
                        a ? (y && (i(x[M]), d && i(C[M])), d && (N += '<div class="user">' + e(C[M].innerHTML) + "</div>"), N += '<p class="tweet">' + e(x[M].innerHTML) + "</p>", c && (N += b ? '<p class="timePosted"><a href="' + k[M] + '">' + E[M].getAttribute("aria-label") + "</a></p>" : '<p class="timePosted">' + E[M].getAttribute("aria-label") + "</p>")) : x[M].textContent ? (d && (N += '<p class="user">' + C[M].textContent + "</p>"), N += '<p class="tweet">' + x[M].textContent + "</p>", c && (N += '<p class="timePosted">' + E[M].textContent + "</p>")) : (d && (N += '<p class="user">' + C[M].textContent + "</p>"), N += '<p class="tweet">' + x[M].textContent + "</p>", c && (N += '<p class="timePosted">' + E[M].textContent + "</p>")), g && (N += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + $[M] + '" class="twitter_reply_icon"' + (y ? ' target="_blank" title="Reply">' : ">") + '</a><a href="https://twitter.com/intent/retweet?tweet_id=' + $[M] + '" class="twitter_retweet_icon"' + (y ? ' target="_blank" title="Retweet">' : ">") + '</a><a href="https://twitter.com/intent/favorite?tweet_id=' + $[M] + '" class="twitter_fav_icon"' + (y ? ' target="_blank" title="Like">' : ">") + "</a></p>"), v && void 0 !== I[M] && (N += '<div class="media"><img src="' + o(I[M]) + '" alt="Image from tweet" /></div>'), D.push(N), M++ }
                t(D), h = !1, l.length > 0 && (T.fetch(l[0]), l.splice(0, 1)) } };
    return window.twitterFetcher = T, T }), ! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(t) {
    var e, i, n, o, s, r, a = "Close",
        l = "BeforeClose",
        h = "AfterClose",
        c = "BeforeAppend",
        d = "MarkupParse",
        u = "Open",
        p = "Change",
        f = "mfp",
        m = "." + f,
        g = "mfp-ready",
        v = "mfp-removing",
        y = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        _ = t(window),
        x = function(t, i) { e.ev.on(f + t + m, i) },
        T = function(e, i, n, o) {
            var s = document.createElement("div");
            return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s },
        C = function(i, n) { e.ev.triggerHandler(f + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n])) },
        E = function(i) {
            return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn },
        I = function() { t.magnificPopup.instance || (e = new w, e.init(), t.magnificPopup.instance = e) },
        S = function() {
            var t = document.createElement("p").style,
                e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length;)
                if (e.pop() + "Transition" in t) return !0;
            return !1 };
    w.prototype = { constructor: w, init: function() {
            var i = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = S(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {} }, open: function(i) {
            var o;
            if (i.isObj === !1) { e.items = i.items.toArray(), e.index = 0;
                var r, a = i.items;
                for (o = 0; o < a.length; o++)
                    if (r = a[o], r.parsed && (r = r.el[0]), r === i.el[0]) { e.index = o;
                        break } } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
            if (e.isOpen) return void e.updateItemHTML();
            e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = T("bg").on("click" + m, function() { e.close() }), e.wrap = T("wrap").attr("tabindex", -1).on("click" + m, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = T("container", e.wrap)), e.contentContainer = T("content"), e.st.preloader && (e.preloader = T("preloader", e.container, e.st.tLoading));
            var l = t.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var h = l[o];
                h = h.charAt(0).toUpperCase() + h.slice(1), e["init" + h].call(e) }
            C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(d, function(t, e, i, n) { i.close_replaceWith = E(n.type) }), s += " mfp-close-btn-in") : e.wrap.append(E())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: _.scrollTop(), position: "absolute" }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: n.height(), position: "absolute" }), e.st.enableEscapeKey && n.on("keyup" + m, function(t) { 27 === t.keyCode && e.close() }), _.on("resize" + m, function() { e.updateSize() }), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
            var c = e.wH = _.height(),
                p = {};
            if (e.fixedContentPos && e._hasScrollBar(c)) {
                var f = e._getScrollbarSize();
                f && (p.marginRight = f) }
            e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var v = e.st.mainClass;
            return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(p), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), n.on("focusin" + m, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(c), C(u), i }, close: function() { e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) }, _close: function() { C(a);
            var i = v + " " + g + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var o = { marginRight: "" };
                e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o) }
            n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(h) }, updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth,
                    n = window.innerHeight * i;
                e.wrap.css("height", n), e.wH = n } else e.wH = t || _.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize") }, updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (C("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                var s = e.st[n] ? e.st[n].markup : !1;
                C("FirstMarkupParse", s), s ? e.currTemplate[n] = t(s) : e.currTemplate[n] = !0 }
            o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
            var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(r, n), i.preloaded = !0, C(p, i), o = i.type, e.container.prepend(e.contentContainer), C("AfterChange") }, appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(E()) : e.content = t : e.content = "", C(c), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) }, parseEl: function(i) {
            var n, o = e.items[i];
            if (o.tagName ? o = { el: t(o) } : (n = o.type, o = { data: o, src: o.src }), o.el) {
                for (var s = e.types, r = 0; r < s.length; r++)
                    if (o.el.hasClass("mfp-" + s[r])) { n = s[r];
                        break }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href")) }
            return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, C("ElementParse", o), e.items[i] }, addGroup: function(t, i) {
            var n = function(n) { n.mfpEl = this, e._openClick(n, t, i) };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n))) }, _openClick: function(i, n, o) {
            var s = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
            if (s || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                if (r)
                    if (t.isFunction(r)) {
                        if (!r.call(e)) return !0 } else if (_.width() < r) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o) } }, updateStatus: function(t, n) {
            if (e.preloader) { i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                var o = { status: t, text: n };
                C("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t } }, _checkIfClose: function(i) {
            if (!t(i).hasClass(y)) {
                var n = e.st.closeOnContentClick,
                    o = e.st.closeOnBgClick;
                if (n && o) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n) return !0 } else if (o && t.contains(document, i)) return !0;
                return !1 } }, _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) }, _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) }, _hasScrollBar: function(t) {
            return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || _.height()) }, _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus() }, _onFocusIn: function(i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1) }, _parseMarkup: function(e, i, n) {
            var o;
            n.data && (i = t.extend(n.data, i)), C(d, [e, i, n]), t.each(i, function(i, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = i.split("_"), o.length > 1) {
                    var s = e.find(m + "-" + o[0]);
                    if (s.length > 0) {
                        var r = o[1]; "replaceWith" === r ? s[0] !== n[0] && s.replaceWith(n) : "img" === r ? s.is("img") ? s.attr("src", n) : s.replaceWith(t("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(o[1], n) } } else e.find(m + "-" + i).html(n) }) }, _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t) }
            return e.scrollbarSize } }, t.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(e, i) {
            return I(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) },
        defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 }
    }, t.fn.magnificPopup = function(i) { I();
        var n = t(this);
        if ("string" == typeof i)
            if ("open" === i) {
                var o, s = b ? n.data("magnificPopup") : n[0].magnificPopup,
                    r = parseInt(arguments[1], 10) || 0;
                s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), e._openClick({ mfpEl: o }, n, s) } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else i = t.extend(!0, {}, i), b ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
        return n };
    var $, k, z, O = "inline",
        D = function() { z && (k.after(z.addClass($)).detach(), z = null) };
    t.magnificPopup.registerModule(O, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { e.types.push(O), x(a + "." + O, function() { D() }) }, getInline: function(i, n) {
                if (D(), i.src) {
                    var o = e.st.inline,
                        s = t(i.src);
                    if (s.length) {
                        var r = s[0].parentNode;
                        r && r.tagName && (k || ($ = o.hiddenClass, k = T($), $ = "mfp-" + $), z = s.after(k).detach().removeClass($)), e.updateStatus("ready") } else e.updateStatus("error", o.tNotFound), s = t("<div>");
                    return i.inlineElement = s, s }
                return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n } } });
    var M, P = "ajax",
        L = function() { M && t(document.body).removeClass(M) },
        A = function() { L(), e.req && e.req.abort() };
    t.magnificPopup.registerModule(P, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { e.types.push(P), M = e.st.ajax.cursor, x(a + "." + P, A), x("BeforeChange." + P, A) }, getAjax: function(i) { M && t(document.body).addClass(M), e.updateStatus("loading");
                var n = t.extend({ url: i.src, success: function(n, o, s) {
                        var r = { data: n, xhr: s };
                        C("ParseAjax", r), e.appendContent(t(r.data), P), i.finished = !0, L(), e._setFocus(), setTimeout(function() { e.wrap.addClass(g) }, 16), e.updateStatus("ready"), C("AjaxContentAdded") }, error: function() { L(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) } }, e.st.ajax.settings);
                return e.req = t.ajax(n), "" } } });
    var R, j = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n)) return n.call(e, i);
            if (i.el) return i.el.attr(n) || "" }
        return "" };
    t.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() {
                var i = e.st.image,
                    n = ".image";
                e.types.push("image"), x(u + n, function() { "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor) }), x(a + n, function() { i.cursor && t(document.body).removeClass(i.cursor), _.off("resize" + m) }), x("Resize" + n, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage) }, resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i) } }, _onImageHasSize: function(t) { t.img && (t.hasSize = !0, R && clearInterval(R), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) }, findImageSize: function(t) {
                var i = 0,
                    n = t.img[0],
                    o = function(s) { R && clearInterval(R), R = setInterval(function() {
                            return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(R), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500))) }, s) };
                o(1) }, getImage: function(i, n) {
                var o = 0,
                    s = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(s, 100) : r())) },
                    r = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                    a = e.st.image,
                    l = n.find(".mfp-img");
                if (l.length) {
                    var h = document.createElement("img");
                    h.className = "mfp-img", i.el && i.el.find("img").length && (h.alt = i.el.find("img").attr("alt")), i.img = t(h).on("load.mfploader", s).on("error.mfploader", r), h.src = i.src, l.is("img") && (i.img = i.img.clone()), h = i.img[0], h.naturalWidth > 0 ? i.hasSize = !0 : h.width || (i.hasSize = !1) }
                return e._parseMarkup(n, { title: j(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? (R && clearInterval(R), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n) } } });
    var N, B = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N };
    t.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) {
                return t.is("img") ? t : t.find("img") } }, proto: { initZoom: function() {
                var t, i = e.st.zoom,
                    n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var o, s, r = i.duration,
                        h = function(t) {
                            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                n = "all " + i.duration / 1e3 + "s " + i.easing,
                                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                s = "transition";
                            return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, e.css(o), e },
                        c = function() { e.content.css("visibility", "visible") };
                    x("BuildControls" + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(o), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void c();
                            s = h(t), s.css(e._getOffset()), e.wrap.append(s), o = setTimeout(function() { s.css(e._getOffset(!0)), o = setTimeout(function() { c(), setTimeout(function() { s.remove(), t = s = null, C("ZoomAnimationEnded") }, 16) }, r) }, 16) } }), x(l + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(o), e.st.removalDelay = r, !t) {
                                if (t = e._getItemToZoom(), !t) return;
                                s = h(t) }
                            s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function() { s.css(e._getOffset()) }, 16) } }), x(a + n, function() { e._allowZoom() && (c(), s && s.remove(), t = null) }) } }, _allowZoom: function() {
                return "image" === e.currItem.type }, _getItemToZoom: function() {
                return e.currItem.hasSize ? e.currItem.img : !1 }, _getOffset: function(i) {
                var n;
                n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                var o = n.offset(),
                    s = parseInt(n.css("padding-top"), 10),
                    r = parseInt(n.css("padding-bottom"), 10);
                o.top -= t(window).scrollTop() - s;
                var a = { width: n.width(), height: (b ? n.innerHeight() : n[0].offsetHeight) - r - s };
                return B() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a } } });
    var W = "iframe",
        H = "//about:blank",
        F = function(t) {
            if (e.currTemplate[W]) {
                var i = e.currTemplate[W].find("iframe");
                i.length && (t || (i[0].src = H), e.isIE8 && i.css("display", t ? "block" : "none")) } };
    t.magnificPopup.registerModule(W, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { e.types.push(W), x("BeforeChange", function(t, e, i) { e !== i && (e === W ? F() : i === W && F(!0)) }), x(a + "." + W, function() { F() }) }, getIframe: function(i, n) {
                var o = i.src,
                    s = e.st.iframe;
                t.each(s.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0 });
                var r = {};
                return s.srcAction && (r[s.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n } } });
    var q = function(t) {
            var i = e.items.length;
            return t > i - 1 ? t - i : 0 > t ? i + t : t },
        Q = function(t, e, i) {
            return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
    t.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
                var i = e.st.gallery,
                    o = ".mfp-gallery";
                return e.direction = !0, i && i.enabled ? (s += " mfp-gallery", x(u + o, function() { i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function() {
                        return e.items.length > 1 ? (e.next(), !1) : void 0 }), n.on("keydown" + o, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), x("UpdateStatus" + o, function(t, i) { i.text && (i.text = Q(i.text, e.currItem.index, e.items.length)) }), x(d + o, function(t, n, o, s) {
                    var r = e.items.length;
                    o.counter = r > 1 ? Q(i.tCounter, s.index, r) : "" }), x("BuildControls" + o, function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup,
                            o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
                        o.click(function() { e.prev() }), s.click(function() { e.next() }), e.container.append(o.add(s)) } }), x(p + o, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void x(a + o, function() { n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null })) : !1 }, next: function() { e.direction = !0, e.index = q(e.index + 1), e.updateItemHTML() }, prev: function() { e.direction = !1, e.index = q(e.index - 1), e.updateItemHTML() }, goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() }, preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload,
                    n = Math.min(i[0], e.items.length),
                    o = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t) }, _preloadItem: function(i) {
                if (i = q(i), !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() { n.hasSize = !0 }).on("error.mfploader", function() { n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n) }).attr("src", n.src)), n.preloaded = !0 } } } });
    var U = "retina";
    t.magnificPopup.registerModule(U, { options: { replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/, function(t) {
                    return "@2x" + t }) }, ratio: 1 }, proto: { initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina,
                        i = t.ratio;
                    i = isNaN(i) ? i() : i, i > 1 && (x("ImageHasSize." + U, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), x("ElementParse." + U, function(e, n) { n.src = t.replaceSrc(n, i) })) } } } }), I()
});
