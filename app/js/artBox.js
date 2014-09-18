
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
		if(!artBoxHeight){
			$(".artBox-body").css({height:artBoxH+40});
		}else{
            $(".artBox-body").css({height:artBoxHeight});
        }

        var offTop = ($(window).height() - $(".artBox-body").height() - 40)/2;

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

function loadImage(url, callback) {
    var img = new Image(); //����һ��Image����ʵ��ͼƬ��Ԥ����
    img.src = url;
     
    if(img.complete) { // ���ͼƬ�Ѿ���������������棬ֱ�ӵ��ûص�����
        callback.call(img);
        return; // ֱ�ӷ��أ������ٴ���onload�¼�
    }
    img.onload = function () { //ͼƬ�������ʱ�첽����callback������
        callback.call(img);//���ص�������this�滻ΪImage����
    };
};

var myObject ={
    foo: "bar",
    func: function() {
        var self = this;
        console.log("1outer func:  this.foo = " + this.foo);
        console.log("2outer func:  self.foo = " + self.foo);
        (function() {
            console.log("3inner func:  this.foo = " + this.foo);
            console.log("4inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();



    
    function artSlide(el){
        var timer;
        var sideDom = $(el);
        function autoRun(){
            timer=setInterval(function(){
                lastHight=sideDom.find("li:last").height();
                sideDom.animate({marginTop:lastHight+3+"px"},1e3,function(){
                    sideDom.find("li:last").prependTo(sideDom),
                    sideDom.find("li:first").hide(),
                    sideDom.css({marginTop:0}),
                    sideDom.find("li:first").fadeIn(1e3)
                })
            },3e3)
        }
        autoRun();
        sideDom.hover(function(){
            clearInterval(timer)
        },function(){
            autoRun();
        });
    }
    artSlide('#rcslider');