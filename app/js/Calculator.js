var EDEN_UI_HELPER=function() {
    var t=0,i=0,n= {
    },r=function() {
    for(var i=document.cookie.split(";
    "),t=0;
    t<i.length;
    t++) {
    var r=i[t].split("="),u=$.trim(r[0]),f=unescape(r[1]);
    n[u]=f
}
};
    return r() {
    getCookie:function(t) {
    return n[t]
}
,setCookie:function(n,t,i) {
    var r=new Date,u;
    r.setTime(r.getTime()+i*864e5);
    u=n+"="+t+";
    expires="+r.toGMTString()+";
    path=/";
    document.cookie=u
}
,delCookie:function(n) {
    document.cookie=n+"=;
    expires="+new Date(0).toGMTString()+";
    path=/"
}
,InitWidgets:function() {
    $.scrollUp( {
    scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:"返回顶部",scrollTitle:!1,scrollImg:!0,activeOverlay:!1,zIndex:1099
}
);
    $("#Calculator").modal( {
    keyboard:!1,backdrop:"static",show:!1
}
);
    var n=function() {
    var i=$("#Cal-Amount").val(),//金额
        t=$("#Cal-Income"),//收益
        r=$("#Cal-InterestRate").val()/100,//利率
        u=$("#Cal-FinancingMaturity").val(),//天数
        n;
    n=(i*r*u/365).toFixed(2);
    t.html("");
    isNaN(n)||t.html(n)
}
;$("#cal").on("click",function() {
    n()
}
);
    $(window).on("keydown",function(t) {
    t.keyCode==13&&$("#Calculator").css("display")=="block"&&n()
}
)},RefreshCaptcha:function() {
    $("#CaptchaImage").on("click",function(n) {
    n.preventDefault();
    $.getJSON($(this).attr("data-href"),function(n) {
    $("#CaptchaDeText").attr("value",n.CaptchaDeText);
    $("#CaptchaImage").attr("src",n.CaptchaImage)
}
)})},MarkCurrentPage:function() {
    var i,f;
    if($(".js-ignore-pagemark").length==0) {
    var n=function(n) {
    n.addClass("active")
}
,r=$(".nav-collapse .nav"),u=0,t;
    if(r.length!=0) {
    if(i=$(".sub-nav"),i.length!=0) {
    f=i.attr("sup");
    n($("#"+f));
    return
}
r.find("li").each(function() {
    t=$(this).find("a");
    window.location.href.indexOf(t.attr("href"))!=-1&&t.attr("href")!="/"&&(n($(this)),u=1)
}
);
    u===0&&n($("#Home"))}}},FixSubNavToTop:function() {
    var n=$(".sub-nav"),t,i;
    n.length!=0&&(t=n.offset().top,i=function() {
    if($(window).width()<979) {
    n.hasClass("fixed-top")&&(n.removeClass("fixed-top"),$("body").attr("style","padding-top:0px"));
    return
}
if(n.length!=0) {
    var i=$(window).scrollTop();
    i>=t&&!n.hasClass("fixed-top")?(n.addClass("fixed-top"),$("body").attr("style","padding-top:50px")):i<t&&n.hasClass("fixed-top")&&(n.removeClass("fixed-top"),$("body").attr("style","padding-top:0px"))
}
},$(window).bind("scroll resize",i),i())},FixFooterToBottom:function() {
    function r() {
    if($(window).width()<979) {
    n.hasClass("fixedToBottom")&&n.removeClass("fixedToBottom");
    return
}
n.length!=0&&(i=$(window).height(),i>t?n.addClass("fixedToBottom"):n.removeClass("fixedToBottom"))}var n=$("footer").add(".sup-footer"),t,i;
    if(n.length!=0) {
    t=$(document.body).height();
    $(window).on("resize",r);
    r()
}
},ChangeFormToAjax:function(n,t,i,r) {
    n==null&&(n=$("form"));
    n.submit(function() {
    return t!=null&&!t(n)?!1:($.ajax( {
    type:n.attr("method"),url:n.attr("action"),data:n.serialize()
}
).done(function(t) {
    i!=null&&i(n,t)
}
).fail(function(t) {
    r!=null&&r(n,t)
}
),!1)})},PairRadioOrCheckboxWithTextbox:function(n) {
    n=n||$(".js-radio-checkbox-text");
    n.each(function(n,t) {
    var i=$(t).find(":radio:last,:checkbox:last"),r=$(t).find(":text");
    i.on("click",function() {
    this.checked&&r.focus()
}
);
    r.on("focus",function() {
    i.attr("checked","checked")
}
)})},HookResponsiveTable:function(n) {
    var t=n==undefined?$(".table-responsive"):n.find(".table-responsive");
    $.each(t,function(n,t) {
    var u=$(t).find("th"),f="",e="table-responsive-"+ ++i,r,o;
    for($(t).attr("id",e),r=0;
    r<u.length;
    r++)o="#"+e+" td:nth-of-type("+(r+1)+"):before {
    content:'"+u.eq(r).text()+"'
}
\n",f+=o;
    $("head").append("<style type='text/css'>"+f+"<\/style>")})},HookDatePicker:function(n) {
    var i=n==undefined?$(".js-date-picker"):n.find(".js-date-picker");
    $.each(i,function(n,i) {
    $(i).attr("id","date-picker-"+ ++t).datepicker( {
    format:"yyyy-mm-dd",language:"zh-CN"
}
).on("changeDate",function() {
    $(this).blur()
}
)})},HookLookup:function(n) {
    var t=n==undefined?$(".js-lookup"):n.find(".js-lookup");
    $.each(t,function(n,t) {
    var i=parseInt($(t).attr("ui-tree-id"),10);
    EDEN_TREE.BindLookup($(t),i)
}
)},HookFlotLookup:function(n) {
    var t=n==undefined?$(".js-flat-lookup"):n.find(".js-flat-lookup");
    $.each(t,function(n,t) {
    var i=parseInt($(t).attr("ui-tree-id"),10);
    EDEN_TREE.BindFlatLookup($(t),i)
}
)},HookAutoComplete:function(n) {
    var t=n==undefined?$(".js-auto-complete"):n.find(".js-auto-complete");
    $.each(t,function(n,t) {
    var i=parseInt($(t).attr("ui-tree-id"),10);
    EDEN_TREE.BindAutoComplete($(t),i)
}
)}}}()