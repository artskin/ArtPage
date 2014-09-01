(function(a){
    a.fn.lazyload = function (settings) {
        var defaults = {
            imgObj: null,
            defHeight: 0,
            source: "lazysrc"
        }
        defaults = $.extend(defaults, settings || {});
        var defHeight = defaults.defHeight, imgObj = (typeof (defaults.imgObj) == "object") ? defaults.imgObj.find("img["+defaults.source+"]") : $(defaults.imgObj).find("img["+defaults.source+"]");
        var pageTop = function () {
            return document.documentElement.clientHeight + Math.max(document.documentElement.scrollTop, document.body.scrollTop) - defHeight;
        }
        var imgLoad = function () {
            imgObj.each(function () {
                if ($(this).offset().top <= pageTop()) {
                    var loadSrc = $(this).attr(defaults.source);
                    if (loadSrc) {
                        var img = $(this).hide();
                        if (typeof (img[0].onload) == "undefined" || img[0].onload == null) {
                            img.load(function () {
                                $(this).fadeIn(1000);
                            });
                        }
                        img.attr("src", loadSrc).removeAttr(defaults.source);
                    }
                }
            });
        }
        imgLoad();
        var timeOut = null;
        if (imgObj.length > 0) {
            $(window).scroll(function () {
                if (timeOut) {
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(function () { imgLoad() }, 100);
            });
        }
    }
})(jQuery);

