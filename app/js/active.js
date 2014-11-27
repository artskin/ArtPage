// 顶部弹出菜单和登录检测
function EMFUNDLOGOUT(){loadScript("http://sso.1234567.com.cn/FundTradeLoginState.aspx?t=logout",function(){document.getElementById("loginfo").innerHTML='<a href="https://trade.1234567.com.cn/login">\u5b89\u5168\u767b\u5f55</a><a href="https://trade.1234567.com.cn/reg/">\u514d\u8d39\u5f00\u6237</a><a href="https://trade.1234567.com.cn/forgetpwd">\u5fd8\u8bb0\u5bc6\u7801</a>'})}var loadScript=function(a,b){var c=document.createElement("script");c.setAttribute("src",a),document.getElementsByTagName("head")[0].appendChild(c),c.addEventListener?c.onload=function(){c.onload=null,c.parentNode.removeChild(c),b&&b()}:c.readyState?c.onreadystatechange=function(){("loaded"==c.readyState||"complete"==c.readyState)&&(c.onreadystatechange=null,c.parentNode.removeChild(c),b&&b())}:(c.parentNode.removeChild(c),b&&b())};!function(){var a=function(a){return document.getElementById(a)},b=function(a,b){try{window.external.addFavorite(a,b)}catch(c){try{window.sidebar.addPanel(b,a,"")}catch(c){alert("\u52a0\u5165\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528Ctrl+D\u8fdb\u884c\u6dfb\u52a0")}}},c=function(a,b){try{a.style.behavior="url(#default#homepage)",a.setHomePage(b)}catch(c){if(window.netscape)try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(c){alert("\u62b1\u6b49\uff0c\u6b64\u64cd\u4f5c\u88ab\u6d4f\u89c8\u5668\u62d2\u7edd\uff01\n\n\u8bf7\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u8f93\u5165\u201cabout:config\u201d\u5e76\u56de\u8f66\u7136\u540e\u5c06[signed.applets.codebase_principal_support]\u8bbe\u7f6e\u4e3a'true'")}else alert("\u62b1\u6b49\uff0c\u60a8\u6240\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u65e0\u6cd5\u5b8c\u6210\u6b64\u64cd\u4f5c\u3002\n\n\u60a8\u9700\u8981\u624b\u52a8\u5c06\u3010"+b+"\u3011\u8bbe\u7f6e\u4e3a\u9996\u9875\u3002")}};a("topAddBook").onclick=function(){b(window.location,document.title)};for(var d=function(a,b){return a.className.match(RegExp("(\\s|^)"+b+"(\\s|$)"))},e=function(a,b){d(a,b)||(a.className+=" "+b)},f=function(a,b){if(d(a,b)){var c=RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c,"")}},g=function(a,b,c){if(document.getElementsByClassName){var b=b||document;return b.getElementsByClassName(a)}b=b||document,c=c||"*";for(var d,e,f=a.split(" "),g="*"===c&&b.all?b.all:b.getElementsByTagName(c),h=[],i=[],j=f.length;--j>=0;)h.push(RegExp("(^|\\s)"+f[j]+"(\\s|$)"));for(var k=g.length;--k>=0;){d=g[k],e=!1;for(var l=0,m=h.length;m>l&&(e=h[l].test(d.className));l++);e&&i.unshift(d)}return i},h=g("top-link-item"),i="",k=0;h.length>k;k++)i=g("top-dropmenu",h[k]),0!=i.length&&(h[k].onmouseover=function(){return function(){e(this,"top-link-hasDropItem")}}(k),h[k].onmouseout=function(){return function(){f(this,"top-link-hasDropItem")}}());!function(){var a=3e5,b=function(){loadScript("http://sso.1234567.com.cn/FundTradeLoginState.aspx?v="+Math.random(),function(){customer&&""!==customer.CustomerNo&&""!==customer.CustomerName?window.customeID!=customer.CustomerNo&&(window.customeID=customer.CustomerNo,document.getElementById("loginfo").innerHTML="<span class='mr10' style='font-size:12px'>"+customer.CustomerName+"</span><a onclick='EMFUNDLOGOUT()' style='cursor:pointer;'>\u5b89\u5168\u9000\u51fa</a>"):document.getElementById("loginfo").innerHTML='<a href="https://trade.1234567.com.cn/login">\u5b89\u5168\u767b\u5f55</a><a href="https://trade.1234567.com.cn/reg/">\u514d\u8d39\u5f00\u6237</a><a href="https://trade.1234567.com.cn/forgetpwd">\u5fd8\u8bb0\u5bc6\u7801</a>'})};b(),window.setInterval(function(){b()},a)}()}();


var fundData = {
	// FUNDCODE : ["202301", "202302", "000009", "482002", "270004", "270014", "110006", "110016", 
	// 			"213009", "213909", "040003", "041003", "200003", "200103", "530002", "090022", "091022"],
	RATE: 0.35,

	// 活期宝充值技术链接
	BUY_URL : "http://js6.eastmoney.com/tg.aspx?ID=",

	// 活期宝充值技术链接对应ID（与基金代码对应）
	// BUY_URL_ID : ["330", "328", "332", "329", "334", "331",
	// 			"337", "336", "335", "333", "341", "339", "340", "338", "737", "750", "751"],

	//排序字段
	sc : 'ljjz',//7日年化

	//默认显示前10名
	FUNDCODE_MIX : 10,

	// FUNDCODE_MAX : function(){return this.FUNDCODE.length}

	loginURL : 'http://sso.1234567.com.cn/FundTradeLoginState.aspx'
}


var table = {
	week: ['日', '一', '二', '三', '四', '五', '六'],
	fomatDay: function(time, string, param) {

        var newDate = new Date(time),
            arr = [],
            that = this;

        for (var i = 0, l = string.length; i < l; i++) {
            var data;
            if (string.substring(i,i+1) === param) continue
            else if (string.substring(i-1,i) === param) {
                switch (string.substring(i,i+1)) {
                    case 'Y':
                        data = newDate.getFullYear()
                        break;
                    case 'M':
                        data = that.addAll(newDate.getMonth() + 1, 2)
                        break;
                    case 'D':
                        data = that.addAll(newDate.getDate(), 2)
                        break;
                    case 'd':
                        data = that.week[newDate.getDay()]
                        break;
                    case 'h':
                        data = that.addAll(newDate.getHours(), 2)
                        break;
                    case 'm':
                        data = that.addAll(newDate.getMinutes(), 2)
                        break;
                    case 's':
                        data = that.addAll(newDate.getSeconds(), 2)
                        break;
                    default:
                        data = string.substring(i,i+1);
                }

            } else {
                data = string.substring(i,i+1);

            }
            arr.push(data)
        }

        return arr.join('');

    },
	getBuyUrl : function (isbuy,fcode) {
		var html, classname;
	    if (isbuy == "1" || isbuy == "3" || isbuy == "8" || isbuy == "9") {
	        html = "https://trade.1234567.com.cn/FundtradePage/default2.aspx?fc=" + fcode ;
	        classname='buy'
	    } else if (isbuy == "2") {
	        html = "https://trade.1234567.com.cn/FundTradePage/default.aspx?tbtbb=1&fc=" + fcode;
	        classname='buy'
	    } else{
	    	html = "javascript:void(0)";
	    	classname='buy-gray'
	    }
	        

	    return {
	    	'html':html,
	    	'classname':classname
	    }
	},
	addAll : function(num, data){
		num += ''

		if(num.length < data){
			num = '0' + num
		}

		return num
	},
	changeDate : function(date){
		var time = new Date(date)
		time = this.addAll(time.getMonth()+1, 2) +'-'+ this.addAll(time.getDate(), 2)

		return time
	},
	d2 : function(num){

		return num.toFixed(2)
	},
	decimal2 : function(num){
		return parseFloat(parseInt(num*100, 10)/100)
	},
	createTr : function(obj){
		var html = '<tr>';

		html += '<td>'+'<a target="_blank" href="http://fund.eastmoney.com/'+obj.FundCode+'.html">'+obj.FundCode+'</a></td>'
		html += '<td class="col2">'+'<a target="_blank" href="http://fund.eastmoney.com/'+obj.FundCode+'.html">'+obj.FundName+'</a></td>'
		html += '<td>'+this.changeDate(obj.OpenTime)+'</td>'
		html += '<td>'+obj.Profit+'</td>'
		html += '<td>'+obj.Week+'%</td>'
		html += '<td>'+this.d2(obj.Week/fundData.RATE)+'倍</td>'
		html += '<td class="last"><a class="'+this.getBuyUrl(obj.IsBuy,obj.FundCode).classname+'" href="'+this.getBuyUrl(obj.IsBuy,obj.FundCode).html+'" target="_blank">充值</a></td>'

		html += '</tr>'

		return html
	},
	createTable : function(arr){
		var that = this,
			html = ' ';

		$.each(arr, function(i, n){
			html += that.createTr(n)
		})

		$('.tbl-broadcast tbody').html(html)
		fundData.FUNDCODE_MAX = arr.length

		return this
	},
	ajaxTable : function(type, fcallback){

		var that = this,
			url = "json/data_"+type+".json";

		// broadcast

		$.ajax({
			type: 'get',
			url: url,
			dataType: "text",
			success: function (responseText) {
				var jsonstr = responseText.replace(/\'/g, "\"");

				var jsonobj = $.parseJSON(jsonstr);

				var data = jsonobj.datas;

				that.createTable(data).addClass(type).drag()

				fcallback && fcallback(data)
			}
		})
	},
	JsLoader : function(sUrl, fCallback) {
	    var _script = document.createElement('script');

	    _script.setAttribute('type', 'text/javascript');
	    _script.setAttribute('src', sUrl);
	    document.getElementsByTagName('head')[0].appendChild(_script);

	    if (_script.addEventListener) {

	        _script.onload = function() {
	            _script.parentNode.removeChild(_script);
	            fCallback && fCallback();

	        }
	    } else if (_script.readyState) {

	        _script.onreadystatechange = function() {

	            if (_script.readyState == 'loaded' || _script.readyState == 'complete') {
	            	_script.onreadystatechange = null;
	                _script.parentNode.removeChild(_script);
	                fCallback && fCallback();
	            }

	        }
	    } else {
	        _script.parentNode.removeChild(_script);
	    }


	},
	addClass : function(type){
		$('.sorttype').removeClass('active')
		$('[data-type="'+type+'"]').parent().addClass('active')

		var index = $('.tbl-broadcast th').index($('[data-type="'+type+'"]').parent());

		$('.tbl-broadcast tbody tr').each(function(){
			$(this).find('td').removeClass('active')
			$(this).find('td:eq('+index+')').addClass('active')
		})

		return this

	},
	drag : function(){
		var height = $('.tbl-broadcast thead tr').outerHeight();
		for(var i=0; i<fundData.FUNDCODE_MIX; i++){
			height += $('.tbl-broadcast tbody tr:eq('+i+')').outerHeight();
		}

		var table = $('.tbl-broadcast thead tr').outerHeight();
		for(var i=0; i<fundData.FUNDCODE_MAX; i++){
			table += $('.tbl-broadcast tbody tr:eq('+i+')').outerHeight();

		}

		fundData.tableHeight_m = height
		fundData.tableHeight = table


	},
	animateDrag : function(height, speed, fcallback){
		$('.drag-content').animate({
				height : height
			},300, function(){
				fcallback && fcallback()
			})
	},
	dynamicData : function(data){
		var data = data[0],
			date = data.OpenTime,
			week = data.Week,
			rate = this.d2(data.Week/fundData.RATE),
			that = this;

		$('.profit-date').html(that.fomatDay(date, '^Y年^M月^D日', '^'))
		$('.countUp-qrnh-2').data('n', that.decimal2(parseFloat(week)))
		$('.countUp-beishu-2').data('n', rate)
	},
	dynamicspan : function(text, type){
		var margin = {'mobile' : 391, 'user' : 55};
		$('#errorMess span').html(text)
		$('#errorMess').css('margin-left', margin[type] + 'px').addClass('errorMessBLOCK').data('type', type)
	},
	countUp : function(target){

		// var i = 0,
		// 	n = 0.01,
		// 	et = target.data('n'),
		// 	that = this,
		// 	s = parseInt(speed*n/et, 10);

		// var interval = setInterval(function(){
		// 	target.html(that.d2(i))
		// 	if((et - i)<0.000000001) clearInterval(interval)
		// 	else i += n
		// }, s)
		var st = parseInt($('#'+target).html()),
			ed = $('#'+target).data('n');

		if(!!st) return

		var options = {
		  useEasing : true, 
		  useGrouping : true, 
		  separator : ',', 
		  decimal : '.' ,
		  prefix : '' ,
		  suffix : '' 
		}
		var demo = new countUp(target, st, ed, 2, 2, options);
		demo.start()
	},
	showTips : function(text){
		$('#tips p').html(text);

		var scrollTop = $(window).scrollTop(),
			height = $(window).height(),
			divHeight = $('#tips').height();
		
		$('#tips').css('top', scrollTop + (height/2) - (divHeight/2) +'px').show();

		$('#tips').on('click', '[data-dismiss]' ,function(e){
			e.preventDefault();
			var target = $(this).data('dismiss');
			$(target).hide()
			$('#tips').off('click')
		})
	},
	changePlacehold :function(str, p1, p2){
		return (str.split(p1)).join(p2)
	},
	addP : function(str, p){
		var len = str.length,
			arr = [];

		if(len > 3){
			for(var i=len;i>0;i-=3){
				arr.push(str.substring(i-3, i))
			}
			return arr.reverse().join(',')
		}else{
			return str
		}
	},
	addPlacehold : function(str, p){
		var that = this,
			arr=[],
			str1 = '';

		if(str.indexOf('.') >= 0){
			arr = str.split('.')

			str = arr[0]
			str1 = '.' + arr[1].substring(0, 2)
		}


		if(str.indexOf(p) >= 0){
			return {
				'str' : that.changePlacehold(str, p, '') +str1,
				'bol' : true,
				'format' : this.addP(that.changePlacehold(str, p, '')) + str1
			}
		}else{
			return {
				'str' : str + str1,
				'bol' : false,
				'format' : this.addP(str) + str1
			}
		}
	},
	getTransform : function (){
		var obj = document.createElement('div'),
			transName = {
				'WebkitTransform' : 'WebkitTransform',
				'MozTransform' : 'MozTransform',
				'OTransform' : 'OTransform',
				'msTransform' : 'msTransform',
				'transform' : 'transform'
			},name;
		for(name in transName){
			if(obj.style[name] !== undefined){
				return transName[name]
			}
		}
	}
}

//live800客服
var live800=function(){var a=800,b=500,c=(window.screen.availHeight-30-b)/2,d=(window.screen.availWidth-10-a)/2;return window.open("https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=224834&jid=9137290589&enterurl=https%3A%2F%2Ftrade%2E1234567%2Ecom%2Ecn%2Freg%2Fstep1%2Easpx&pagetitle=%E5%85%8D%E8%B4%B9%E5%BC%80%E6%88%B7+_+%E5%A4%A9%E5%A4%A9%E5%9F%BA%E9%87%91%E7%BD%91&pagereferrer=https%3A%2F%2Ftrade%2E1234567%2Ecom%2Ecn%2Freg%2F&tm=1361153212268","OnlineCustomerService","height="+b+",innerHeight="+b+",width="+a+",innerWidth="+a+",top="+c+",left="+d+",toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no"),!1};


$(document).ready(function(){

	//table.JsLoader(fundData.loginURL + '?v=' + (new Date).getTime(), function(){
		$('#loading').hide()

		//if(!customer.CustomerNo.length && !customer.CustomerName.length){
			$('[data-login="0"]').show()
			loadData()
		// }else{
		// 	$('[data-login="1"]').show()
			
		// }
	//})

	// broadcast

	function loadData(){
		table.ajaxTable(fundData.sc, function(data){

			table.dynamicData(data)

			$('#form2').on('submit', function(e){
				e.preventDefault()

				$('#tips').hide()
				var val = $('#input-money').val(),
					len = val.length,
					rate = parseFloat(data[0].Profit, 10),
					obj = table.addPlacehold(val,',');

				if(!/^\d+(\.)?\d+$/.test(obj.str) && !/^\d$/.test(obj.str)){
					table.showTips('<p>请输合法的数字！</p>')
					$('#result-money').html('--')
					return
				}else if(parseInt(obj.str, 10) < 100){
					table.showTips('<p>建议充值100元以上的金额<br><span style="font-size:12px">（注：如活期宝金额太低，当天收益低于0.01元无法正常发放）</span></p>')
					$('#result-money').html('--')
					return
				}else if(parseInt(obj.str, 10) >= 100000000){
					table.showTips('<p>活期宝充值金额需低于1亿元。<br>请重新输入金额。</p>')
					$('#result-money').html('--')
					return
				}


				if(!len) val = 0;
				else val = parseFloat(obj.str)

				$('#input-money').val(obj.format)


				$('#result-money').html(table.decimal2(rate*val/10000))

			}).trigger('submit')

			$(window).on("scroll", function () {

				var scrollTop = $(this).scrollTop();

				if (scrollTop >= 0) {
					table.countUp('countUp-profit1')
					table.countUp('countUp-beishu1')

					!table.flightflying  &&  animate_flight()
				}
				
				if (scrollTop > 600) {
					table.countUp('countUp-profit2')
					table.countUp('countUp-beishu2')
				}

				sideLeft(scrollTop)

				if(!-[1,]&&!window.XMLHttpRequest) return

				if(scrollTop>1500){
					!table.supermanflying  &&  animate_superman(1)
				}

			}).scroll();

			$(window).on('resize', function(){
				var width = $(this).width()
				if(width<1340){
					$('#side-left').hide()
				}else{
					$('#side-left').show()
				}


			}).resize()

			table.animateDrag(fundData.tableHeight_m, 300, function(){

				$('.sorttype').on('mouseover', function(e){
					e.preventDefault();

					var act = $(this).hasClass('active'),
						type = $(this).find('a').data('type');

					if(act) return

					table.ajaxTable(type)
					

				})

				$('.control-tbl a').on('click', function(e){
					e.preventDefault();

					var open = $('.tbl-broadcast').hasClass('open'),
						height = 0,
						$this = $(this);

					if(open) height = fundData.tableHeight_m
					else height = fundData.tableHeight

					table.animateDrag(height, 300, function(){
						$this.toggleClass('act')
						$('.tbl-broadcast').toggleClass('open')
					})
				})
			})
		
		})
	}

	// form 表单
	$("#form").on("submit", function (e) {

		e.preventDefault();

		var user = $("#user").val(),
			mobile = $("#mobile").val(),
			regUser = /^[\u4e00-\u9fa5]+$/,
			regMobile = /^1[358]\d{9}$/,
			popupHtml = "",
			popup = null,
			tongjiUrl = "",
			addScript = function (url) {
				var script = document.createElement("script");
				script.src = url;
				script.type = "text/plain"; // fixed ie 6 bug
				document.getElementsByTagName("head")[0].appendChild(script);
			};

			$('#errorMess').removeClass('errorMessBLOCK')

			if (user === '请输入真实姓名' || !regUser.test(user)) {

			    popupHtml = '请输入您的中文姓名！';
			    table.dynamicspan(popupHtml, 'user')

			} else if (user === '请输入手机号码' ||!regMobile.test(mobile)) {

			    popupHtml = '请输入您的11位手机号码！';
			    table.dynamicspan(popupHtml, 'mobile')

			} else {

				// 提交时，添加计数统计
				!!tongjiUrl.length && addScript(tongjiUrl);

				$("#form")[0].submit();
				
			}
	})

	$('[data-value]').focus(function(e){
		e.preventDefault()
		var value = $(this).data('value');

		if(value === $(this).val()){
			$(this).val('')
		}
		$('#errorMess').css('display') !== 'none' && $(this).attr('name') === $('#errorMess').data('type') && $('#errorMess').removeClass('errorMessBLOCK')

	}).blur(function(e){
		e.preventDefault()
		var value = $(this).data('value');

		if($(this).val().length === 0){
			$(this).val(value)
		}
	})

	$('#submitBtn').hover(function(e){
		e.preventDefault();
		$(this).css('background-position', ' 0px -55px')
	}, function(e){
		e.preventDefault();
		$(this).css('background-position', ' 0px 0px')
	}).on('click', function(e){
		$(this).blur()

	})

	// qusetion

	$('[data-target]').on('mouseover', function(e){
		e.preventDefault();

		var act = $(this).hasClass('active'),
			$this = $(this);

		if(act) return

		var $target = $($this.data('target'));
		$('[data-target]').removeClass('active')
		$this.addClass('active')
		$('.contentAll').removeClass('active')
		$target.addClass('active')

	})

	// side-left
	$('.side-left .icon_x').on('click', function(e){
		e.preventDefault()
		$(this).parent().remove();
		$(this).off('click')
	})


	// calculate

	$('#cacu-btn').hover(function(e){
		e.preventDefault();
		$(this).css('background', '#f04e28')
	}, function(e){
		e.preventDefault();
		$(this).css('background', '#f05a28')
	}).focus(function(){
		$(this).blur()
	})

	//单击后 #input-money focusIn
	$('#em-input').on('click', function(e){
		e.preventDefault();

		$(this).addClass('focusIn').find('input').focus()

	})

	//双击全选
	$('#em-input').on('dblclick', function(e){
		e.preventDefault();
		$('#input-money').select()
	})

	//添加blur事件
	$('#input-money').focus(function(e){

		e.stopPropagation()

		if($('#em-input').data('event')) return

		$(document).on('click.money', function(e){

			$('#em-input').data('event', true)

			if($(e.target)[0] !== $('#input-money')[0] && $(e.target)[0] !== $('.rmb')[0] && $(e.target)[0] !== $('#em-input')[0] && $(e.target)[0] !== $('.inputWrap')[0]){
				$('#em-input').removeClass('focusIn')
				$('#em-input').data('event', false)
				$('#em-input').css('margin-left', '0px')
				$(document).off('click.money')
			}
		})



	})


	function animate_flight(){
		table.flightflying = true
		$('#flight').animate({
			left : '20px'
		}, 5000, 'easeOutQuad', function(){

		})
	}

	function sideLeft(scrollTop){
		var $target = $('#side-left'),
			top = $target.data('top'),
			bottom = $target.data('bottom'),
			offset = $target.data('offset'),
			wheight = $(document).height(),
			theight = $target.height();

		if( (scrollTop + offset) < top){
			$target.css({
				position : 'absolute',
				top : top +'px'
			})
		}else if( (scrollTop + offset + theight) > (wheight - bottom)){
			$target.css({
				position : 'absolute',
				top : (wheight - bottom - theight ) +'px'
			})
		}else{
			if(!-[1,]&&!window.XMLHttpRequest){
				$target.css({
					position : 'absolute',
					top : (scrollTop + offset) +'px'
				})
			}else{
				!!$target.attr('style') && $target.removeAttr('style')
			}
			
		}
	}


	//ie6
	if(!-[1,]&&!window.XMLHttpRequest) return

	//chart  roll 事件
	$('.chart .roll').hover(function(e){
		e.preventDefault()

		var transform = table.getTransform(),
			deg = 0,
			$this = $(this),
			target = $($this.data('div'));

		target.stop(true).animate({
			opacity : '1'
		}, 1000)

		$this.find('span').addClass('act').css({transformOrigin : '50% 50%'});
		if(!transform) return

		table.interval = setInterval(function (){
			deg+=1;
			$this.find('span').css(transform, 'rotate('+deg+'deg)')		
		},10)

	}, function(e){
		e.preventDefault()
		var transform = table.getTransform(),
			$this = $(this),
			target = $($this.data('div'));


		target.stop(true).animate({
			opacity : '0'
		}, 500)


		$(this).find('span').removeClass('act')

		if(!transform) return
		$this.find('span').css(transform, 'rotate(0deg)')	
		clearInterval(table.interval)
	})

	$('#r5').css({transformOrigin : '50% 50%'});
	$('#superman').css({transformOrigin : '50% 50%'});
	var transform_roll = table.getTransform();

	function interval_roll(speed){
		if(!transform_roll) return

		table.roll_interval = setInterval(function(){
			deg_roll = parseInt($('#r5').data('deg'), 10)
			if(deg_roll === 360) deg_roll=0
	
			deg_roll = deg_roll + 4;
		
			$('#r5').css(transform_roll, 'rotate('+deg_roll+'deg)').data('deg', deg_roll)	
		},speed)
	}


	interval_roll(10)

	$('#roll-big').hover(function(e){
		e.preventDefault()

		$(this).find('.r6').addClass('r6act')
		console.log(!transform_roll)
		if(!transform_roll) return
		clearInterval(table.roll_interval)
		interval_roll(1)
		
	}, function(e){
		e.preventDefault()
		$(this).find('.r6').removeClass('r6act')
		if(!transform_roll) return
		clearInterval(table.roll_interval)
		interval_roll(10)
		
	})
	

	var superman_position = {
		r1 : {top : '397px', left : '174px'},
		r2 : {top : '317px', left : '322px'},
		r3 : {top : '143px', left : '551px'},
		end: {top : '-55px', left : '800px'}
	};


	function animate_superman(n){

		table.supermanflying = true
		var b = n%2,
			argumentsF = arguments.callee,
			speed = !b? 6000 : 1000,
			csscontent = !!b? superman_position['r' + (n+1)/2] : superman_position.end,
			deg = 0, dd=0;

		if(n>6) return
		$('#superman').animate(csscontent,{
            duration:speed,
            easing: "easeInQuad",
            step:function(){
            	!!transform_roll && !!b && $(this).css(transform_roll, 'rotate('+(deg+=18)+'deg)')           	
            },
            complete:function(){
            	!!transform_roll && $(this).css(transform_roll, 'rotate(0deg)')
				!b && $(this).css({top:'301px', left:'409px'})
				argumentsF(++n)
               
            }

        })
	}



	

	
	
})