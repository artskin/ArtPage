
function artBox(id,artBoxtitle,artBoxwidth,artBoxHeight,isHTML){
    var artBoxH = $(id).height();
    if(artBoxH > 500) artBoxH = 500;
    var oLeft = ($(window).width() - artBoxwidth)/2;
    var offTop = ($(window).height() - artBoxH - 48)/2;

    if(isHTML){
        var bgObj = '<div class="artBox-overlay"></div>';
        offTop = ($(window).height() - artBoxHeight - 48)/2;
        $("body").append(bgObj);
        $("#"+id).show().css({width:artBoxwidth,left:oLeft,top:offTop});
        $(".artBox-body").css({height:artBoxHeight});
    }else{
        var bgObj = '<div class="artBox"><i class="artBox-close" onclick="oClose();">X</i><h3 class="artBox-title"></h3><div class="artBox-body">loading...</div></div><div class="artBox-overlay"></div>';
		$("body").append(bgObj);
        $(".artBox-title").html(artBoxtitle);
		if(!artBoxH){
			$(".artBox-body").css({height:artBoxH+10});
		}
		$(".artBox-body").css({height:artBoxHeight});
        $(".artBox").show().css({width:artBoxwidth,left:oLeft,top:offTop}).find(".artBox-body").html($(id).html());
        
    }

    if ('undefined' == typeof(document.body.style.maxHeight)) {
        $(window).resize(onScroll);
        $(window).scroll(onScroll);
    }

    function onScroll(){
        var oLeft = ($(window).width()-artBoxwidth)/2;
        var offTop = ($(window).height()-$(id).height()-48)/2;
        $(".artBox").animate({top:offTop},{duration:200,queue:false});
        $(".artBox").animate({left:oLeft},{duration:200,queue:false});
    }
}

function oClose(){
    $(".artBox-overlay").remove();
    $(".artBox").hide().remove();
}