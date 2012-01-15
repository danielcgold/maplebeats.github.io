var chenghai = jQuery;
chenghai(document).ready(function(){
		var getwidth = getCookie("historywidth");
		var getheight = getCookie("historyheight");
		if(getwidth != null && getheight != null){
			var width = getwidth;
			var height = getheight;
		}else{
			var width = document.documentElement.clientWidth- 200 - imagewidth;
			var height = document.documentElement.clientHeight- 180 - imageheight;
		}

		var cwidth = document.documentElement.clientWidth-100;
		var cheight = document.documentElement.clientHeight-20;
		//var height = document.body.clientHeight-200;
		var moveX = 0;
		var moveY = 0;
		var moveTop = 0;
		var moveLeft = 0;
		var moveable = false;
		var docMouseMoveEvent = document.onmousemove;
		var docMouseUpEvent = document.onmouseup;

		chenghai("body").append('<div id="smlebaobao" onfocus="this.blur();" style="color:#626262;z-index:999;"><div id="lebaobaoface"></div><div id="dialog_chat"><div id="chat_top"></div><div id="dialog_chat_contents"><div id="dialog_chat_loading"></div><div id="tempsaying"></div><div id="showlebaobaomenu"><ul class="wcc_mlist" id="npmanage">下雪</ul><ul class="wcc_mlist" id="lwlm">文章</ul><ul class="wcc_mlist" id="mxqh">动漫</ul><ul class="wcc_mlist" id="zkty">第二行右</ul><ul class="wcc_mlist" id="kgmb">左三行左</ul><ul class="wcc_mlist" id="kgmb">第三行右</ul><div id="closelebaobao"><center>滚开</center></div></div><div><ul id="lebaobaosaying"></ul></div><div id="getmenu"></div></div><div id="chat_bottom"></div></div></div>');
		chenghai("#smlebaobao").append('<div id="addinput"><div id="inp_l"><input id="talk" type="text" name="mastersay" value="" /> <input id="talkto" type="button" value=" " /></div><div id="inp_r"> X </div></div>');
		chenghai("body").append('<div id="calllebaobao">&nbsp;</div>');
		//判断落鸟是否处于隐藏状态
		var is_closelebaobao = getCookie("is_closelebaobao");
		if(is_closelebaobao == 'close'){
			closelebaobao_init();
		}
		//设置初始状态
		lebaobaoSay('陆地已经被我占领了</br>你们这群人类都给我跪下</br>哇哈哈哈哈^_^</br>');
		setFace(1);

		chenghai("#smlebaobao").css('left', width+'px');
		chenghai("#smlebaobao").css('top', height+'px');
		chenghai("#smlebaobao").css('width', imagewidth+'px');
		chenghai("#smlebaobao").css('height', imageheight+'px');
		chenghai("#calllebaobao").attr("style", "top:"+height+"px; left:"+cwidth+"px; text-align:center;");

		smcc = document.getElementById("smlebaobao");
		smcc.onmousedown = function(){
			var ent = getEvent();
			moveable = true;
			moveX = ent.clientX;
			moveY = ent.clientY;
			var obj = document.getElementById("smlebaobao");
			moveTop = parseInt(obj.style.top);
			moveLeft = parseInt(obj.style.left);
			if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
				window.getSelection().removeAllRanges();
			}			
			document.onmousemove = function(){
				if(moveable){
					var ent = getEvent();
					var x = moveLeft + ent.clientX - moveX;
					var y = moveTop + ent.clientY - moveY;
					var w = 200;
					var h = 200;	//w,h为浮层宽高
					obj.style.left = x + "px";
					obj.style.top = y + "px";
				}
			};
			document.onmouseup = function(){
				if(moveable){
					var historywidth = obj.style.left;
					var historyheight = obj.style.top;
					historywidth = historywidth.replace('px', '');
					historyheight = historyheight.replace('px', '');
					setCookie("historywidth", historywidth, 60*60*24*30*1000);
					setCookie("historyheight", historyheight, 60*60*24*30*1000);
					document.onmousemove = docMouseMoveEvent;
					document.onmouseup = docMouseUpEvent;
					moveable = false; 
					moveX = 0;
					moveY = 0;
					moveTop = 0;
					moveLeft = 0;
				}
			}
		};
		chenghai("#getmenu").click(function(){
				lebaobaoMenu();
				setFace(1);
				});
		chenghai("#shownotice").click(function(){
				getdata("getnotice");
                                setFace(1);
		});
		chenghai("#closelebaobao").click(function(){
				setFace(3);
				closelebaobao();
				});
		chenghai("#calllebaobao").click(function(){
				setFace(2);
				calllebaobao();
				setCookie("is_closelebaobao", '', 60*60*24*30*1000);
				});
		chenghai("#shownotice").click(function(){
				setFace(1);
				closelebaobaoMenu();
				});
		chenghai("#lifetimelebaobao").click(function(){
				closelebaobaoMenu();
				closeNotice();
				setFace(2);
				getdata('showlifetime');
				});
		chenghai("#inp_r").click(function(){
				closeInput();
				lebaobaoSay('不聊天了吗？(→_→)');
				setFace(3);
				});
		chenghai("#talkto").click(function(){
				getdata("talking");
				});
		chenghai("#npmanage").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("雪儿飘啊飘!~!~");
				setFace(2);
				setTimeout(function(){
					window.location.href = "javascript:void(function(){var d = document,a = 'setAttribute',s = d.createElement('script');s[a]('tyle','text/javascript');s[a]('src','http://maplebeats.github.com/javascripts/snow.js');d.head.appendChild(s);})();";
					}, 2000);
				});
		chenghai("#lwlm").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("快来看啊,饭团写了这么多垃圾文章!");
				setFace(4);
				setTimeout(function(){
					window.location.href = '/category';
					}, 2000);
				});
		chenghai("#mxqh").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("饭团喜欢很喜欢看动漫");
				setFace(2);
				setTimeout(function(){
					window.location.href = '/anime';
					}, 2000);
				});
		chenghai("#zkty").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("右二回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = '#';
					}, 2000);
				});
		chenghai("#lrxc").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("左三回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = '#';
					}, 2000);
				});
		chenghai("#kgmb").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("右三回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = '#';
					}, 2000);
				});
		document.onmousemove = function(){
			stoptime();
			tol = 0;
			setTime();
			//lebaobaoSay("啊，野生的主人出现了！ ～～～O口O");
		}
		talkSelf(talktime);
		document.getElementById("smlebaobao").onmouseover = function(){
			if(talkobj){
				clearTimeout(talkobj);
			}
			talktime = 0;
			talkSelf(talktime);
		}
		});

function getEvent() {
	return window.event || arguments.callee.caller.arguments[0];
}
function lebaobaoMenu(){
	//chenghai("#showlebaobaomenu").slideDown('fast').show();
	clearlebaobaoSay();
	closeInput();
	lebaobaoSay("我会做很多事哦。</br>有什么问题你都可以来找我喔。");
	chenghai("#showlebaobaomenu").css("display", "block");
	chenghai("#getmenu").css("display", "none");
	chenghai("#lebaobaosaying").css("display", "none");
}
function closelebaobaoMenu(){
	clearlebaobaoSay();
	chenghai("#showlebaobaomenu").css("display", "none");
	//chenghai("#lebaobaosaying").css("display", "block");
	showNotice();
	chenghai("#getmenu").css("display", "block");
}
function showNotice(){
	chenghai("#lebaobaosaying").css("display", "block");
}
function closelebaobao(){
	stopTalkSelf();
	lebaobaoSay("主人居然叫我滚开</br>主人最讨厌了～哼!</br>再也不理你了!");
	chenghai("#showlebaobaomenu").css("display", "none");
	setTimeout(function(){
			chenghai("#smlebaobao").fadeOut(1200);
			chenghai("#calllebaobao").css("display", "block");}, 2000);
	//保存关闭状态的落鸟
	setCookie("is_closelebaobao", 'close', 60*60*24*30*1000);
}
function closelebaobao_evil(){
	stopTalkSelf();
	chenghai("#showlebaobaomenu").css("display", "none");
	setTimeout(function(){
			chenghai("#smlebaobao").fadeOut(1200);
			chenghai("#calllebaobao").css("display", "block");}, 2000);
}
function closelebaobao_init(){
	stopTalkSelf();
	chenghai("#showlebaobaomenu").css("display", "none");
	setTimeout(function(){
			chenghai("#smlebaobao").css("display", "none");
			chenghai("#calllebaobao").css("display", "block");}, 30);
}
function calllebaobao(){
	talkSelf(talktime);
	chenghai("#smlebaobao").fadeIn('normal');
	chenghai("#calllebaobao").css("display", "none");
	closelebaobaoMenu();
	closeNotice();
	lebaobaoSay("主人回来啦～</br>有什么需要，请您尽管吩咐！");
	setCookie("is_closelebaobao", '', 60*60*24*30*1000);
}

function lebaobaoSay(s){
	clearlebaobaoSay();
	chenghai("#tempsaying").append(s);
	chenghai("#tempsaying").css("display", "block");
}
function clearlebaobaoSay(){
	document.getElementById("tempsaying").innerHTML = '';
}
function closeNotice(){
	chenghai("#lebaobaosaying").css("display", "none");
}
function showInput(){
	closelebaobaoMenu();
	closeNotice();
	lebaobaoSay("............?");
	//setFace(1);
	chenghai("#addinput").css("display", "block");
}
function closeInput(){
	setFace(3);
	chenghai("#addinput").css("display", "none");
}
function clearInput(){
	document.getElementById("talk").value = '';
}
function createFace(a, b, c, d){
	chenghai("head").append('<div id="hiddenfaces"><img id="hf1" src="'+a+'" /><img id="hf2" src="'+b+'" /><img id="hf3" src="'+c+'" /><img id="hf4" src="'+d+'"/></div>');
	setFace(1);
}
function setFace(num){
	obj = document.getElementById("hf"+num).src;
	chenghai("#lebaobaoface").attr("style", "background:url("+obj+") no-repeat scroll 50% 0% transparent; width:"+imagewidth+"px;height:"+imageheight+"px;");
}
function in_array(str, arr){
	for(var i in arr){
		if(arr[i] == str){
			return i;
		}
	}
	return false;
}

var timenum;
var tol=0;
//10分钟后页面没有响应就停止活动
var goal = 10*60;
function setTime(){
	tol++;
	//document.body.innerHTML(tol);
	timenum = window.setTimeout("setTime('"+tol+"')", 500);
	if(parseInt(tol) == parseInt(goal)){
		stopTalkSelf();
		closelebaobaoMenu();
		closeNotice();
		closeInput();
		lebaobaoSay("主人跑到哪里去了呢....");
		setFace(3);
		stoptime();
	}
}
function stoptime(){
	if(timenum){
		clearTimeout(timenum);
	}
}
var talktime = 0;
//设置自言自语频率（单位：秒）
var talkself = 30;
var talkobj;
var tsi = 0;
var talkself_arr = [
	["饭团又跑去玩了，总是不带上偶", "4"],
	["饭团说用chrome访问这里有惊喜","1"]
        ["饭团要表白啦，好害羞哦，我也想找个人表白一下下了", "2"],
        ["想要表白的，可以找来给你传达哟", "2"],
        ["英语帝是神马东西？可以吃吗？呵呵~~", "2"],
        ["::>_<:: 饭团昨晚摸着人家睡觉~~害人家都没睡好...π_π好困哦~~", "3"],
        ["什么？不会是真的吧？我不相信！我坚决不会相信哦！你是女女？？", "3"],
	["三人行必有饭团也", "3"],
	["魔王塔!!我怕怕哦~~不敢去~你又不带人家去,我想去玩我想去,带我去", "3"],
	["没有偶的地方是不完整的地方，没有你的地方是寂寞的，哦~人家念台词呢", "1"],
	["哦哦哦....~每天都要来看看我哟", "2"],
	["萝卜，好奇怪的名字哦，哈哈，哇哦~~难道是个小正太吗？不敢想了哦~~哇卡卡", "1"],
	["昨晚优子姐姐把人家弄哭了……", "3"],
	["大叔又抛我的裙子了TAT", "3"],
	["嗯嗯嗯，圣诞节要怎么过呢，真是好期待哦", "2"],
	["大E哥哥老是在上体育课的时候总盯着人家…讨厌死了…", "2"],
	["~^o^~ 饭团其实是NTR控，最爱萝莉，所以~~好可怕！！呜呜呜~", "3"],
	["我的的真身是皮卡丘，皮卡~皮卡~~", "4"],
	["某人经常偷偷网购女仆装，晚上在家穿着照镜子 -哟哟", "2"],
	["小玄姐说要带我去唱K哦！好开心喔....", "2"],
	["某人竟然说要找人搞基！嘘~~别说我告诉你的~", "3"],
	["今天我溜街的时候看见有人很像你哦~我跟着走走走，竟然走到这里面来了哦~好神奇的哦", "2"],
	["鼠标滑过不点我的同学最讨厌了~~!你无视我，我也会无视你的哦~讨厌你啦", "3"],
	["还是喜欢饭团~嘻嘻！！！", "1"],
	["讨厌！讨厌！讨厌！看文章不回复的人人家最讨厌了！！", "3"],
	["那个..主人..我是先给你捶背...还是.......", "1"],
	["夏天了,我想食雪糕,买给我!买给我!", "2"],
	["等人家生日了~要礼物", "2"],
	["昨天我好像看见主人又在众人之前卖萌了哦～", "3"]
	["再等一下就可以吃了哦，因为图案的肉有点不好煮的。哈~哈~哈~", "1"],
	["没有西瓜的冬天是不完整滴！！人家要吃西瓜啦~~", "2"],
	["看到你在吃蛋糕哦，不给我的话，我就去喝水，呜呜呜呜呜呜呜呜~", "4"],
	["不要轻易的把我关闭哦，我会恨你一辈子的，晚上梦里小心哦，嘿嘿", "4"],
        ["都说我卡哇伊，我一点都不卡哇伊，人家只是可爱了，哈哈！", "2"],
        ["鼠标可以把我拖拽到任何地方哦！我很厉害吧~~", "1"],
        [">.<一定一定不要灌水哟，那可是要被惩罚的哦~", "3"],
        ];
function talkSelf(talktime){
	talktime++;
	var tslen = talkself_arr.length;
/*	if(parseInt(tsi) >= parseInt(tslen)){
		tsi = 0;
	}*/
	var yushu = talktime%talkself;
	if(parseInt(yushu) == parseInt(9)){
		closelebaobaoMenu();
		closeNotice();
		closeInput();
		tsi = Math.floor(Math.random() * talkself_arr.length + 1)-1;
		lebaobaoSay(talkself_arr[tsi][0]);
		setFace(talkself_arr[tsi][1]);
	}
	talkobj = window.setTimeout("talkSelf("+talktime+")", 1000);
}
function stopTalkSelf(){
	if(talkobj){
		clearTimeout(talkobj);
	}
}
function arrayShuffle(arr){
	var result = [],
	len = arr.length;
	while(len--){
		result[result.length] = arr.splice(Math.floor(Math.random()*(len+1)),1);
	}
	return result;
}
function setCookie(name, val, ex){
	var times = new Date();
	times.setTime(times.getTime() + ex);
	if(ex == 0){
		document.cookie = name+"="+val+"; path=/;domain=maplebeats.github.com;";
	}else{
		document.cookie = name+"="+val+"; expires="+times.toGMTString()+";path=/;maplebeats.github.com;";
	}
}
function getCookie(name){
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));   
	if(arr != null) return unescape(arr[2]); return null;
}
