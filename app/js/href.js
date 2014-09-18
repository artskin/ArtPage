(function(){
	var hf = window.location.href;
	var url = hf.substring(hf.lastIndexOf('/')+1,hf.lastIndexOf('.'));
    function log(msg){
        try{
            console.log(msg)
        }
        catch(err){
            alert("您的浏览器版本过低");
        }

    }
    function sizeZoom(size){
        $(".newstext").css({"font-size":size+"px","line-height":(size*2-2) + "px"});
    }

	/*
	function browserRedirect(){
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
			window.location.href=;
		}
	}
	browserRedirect();
     */

    //log(url);
	function trueUrl(){
        var toUrl;
        if(isNaN(url)){
            switch(url){
                case "questions":
                    toUrl = "/Index/News?n=100076";
                    break;
                case "technique":
                    toUrl = "/Index/News?n=100062";
                    break;
                case "site":
                    toUrl = "/Html/About/sitemap";
                    break;
                case "announcement":
                    toUrl = "/Index/News?n=100075";
                    break;
                case "news":
                    toUrl = "/Index/News?n=100063";
                    break;
                case "protection":
                    toUrl = "/Index/Page/security/?id=100082";
                    break;
                case "institution":
                    toUrl = "/Index/Page/Security/?id=100073";
                    break;
                case "invest":
                    toUrl = "/Html/About/invest";
                    break;
                case "union":
                    toUrl = "/Html/About/union";
                    break;
                case "cooperatives":
                    toUrl = "/Index/Page/security/?id=100083";
                    break;
                case "riskcontrol":
                    toUrl = "/Html/About/riskcontrol";
                    break;
                case "joinus":
                    toUrl = "/Html/About/joinus";
                    break;
                default:
                    toUrl = "/Public/tmpl/error/"
            }
        }else{
            var colName = hf.substring(hf.lastIndexOf('/')-1,hf.lastIndexOf('/'));
            switch(colName){
                case "p":
                    toUrl = "/Project/Info?id="+url;
                    break;
                case "q":
                    toUrl = "/Index/News/Info?id="+url+"&n=100076";
                    break;
                case "t":
                    toUrl = "/Index/News/Info?id="+url+"&n=100062";
                    break;
                case "n":
                    toUrl = "/Index/News/Info?id="+url+"&n=100063";
                    break;
                case "a":
                    toUrl = "/Index/News/Info?id="+url+"&n=100075";
                    break;
                default:
                    toUrl = "/Public/tmpl/error/"
            }
        }
        window.location.href = toUrl;
	}
    window.load = trueUrl();
	
})();