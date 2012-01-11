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

		chenghai("body").append('<div id="smlebaobao" onfocus="this.blur();" style="color:#626262;z-index:999;"><div id="lebaobaoface"></div><div id="dialog_chat"><div id="chat_top"></div><div id="dialog_chat_contents"><div id="dialog_chat_loading"></div><div id="tempsaying"></div><div id="showlebaobaomenu"><ul class="wcc_mlist" id="npmanage"> 第一行左</ul><ul class="wcc_mlist" id="lwlm">第一行右</ul><ul class="wcc_mlist" id="mxqh">第二行左</ul><ul class="wcc_mlist" id="zkty">第二行右</ul><ul class="wcc_mlist" id="lrxc">第三行左</ul><ul class="wcc_mlist" id="kgmb">第三行右</ul><div id="closelebaobao"><center>滚开</center></div></div><div><ul id="lebaobaosaying"></ul></div><div id="getmenu"></div></div><div id="chat_bottom"></div></div></div>');
		chenghai("#smlebaobao").append('<div id="addinput"><div id="inp_l"><input id="talk" type="text" name="mastersay" value="" /> <input id="talkto" type="button" value=" " /></div><div id="inp_r"> X </div></div>');
		chenghai("body").append('<div id="calllebaobao">&nbsp;</div>');
		//判断落鸟是否处于隐藏状态
		var is_closelebaobao = getCookie("is_closelebaobao");
		if(is_closelebaobao == 'close'){
			closelebaobao_init();
		}
		//设置初始状态
		lebaobaoSay('欢迎来到这里</br>我叫乌贼娘，也可以叫我乌萌萌</br>主人有什么吩咐没？</br>不做任何操作我就和你聊天！');
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
		chenghai("#chatTolebaobao").click(function(){
				showInput();
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
				lebaobaoSay("左一回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = 'http://maplebeats.github.com';
					}, 2000);
				});
		chenghai("#lwlm").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("右一回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = 'http://maplebeats.github.com';
					}, 2000);
				});
		chenghai("#mxqh").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("左二回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = 'http://maplebeats.github.com';
					}, 2000);
				});
		chenghai("#zkty").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("右二回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = 'http://maplebeats.github.com';
					}, 2000);
				});
		chenghai("#lrxc").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("左三回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = 'http://maplebeats.github.com';
					}, 2000);
				});
		chenghai("#kgmb").click(function(){
				closelebaobaoMenu();
				closeNotice();
				chenghai("#getmenu").css("display", "none");
				lebaobaoSay("右三回复");
				setFace(2);
				setTimeout(function(){
					window.location.href = 'http://maplebeats.github.com';
					}, 2000);
				});
		chenghai("#foods").click(function(){
				closelebaobaoMenu();
				closeNotice();
				getdata("foods");
				});
/*		chenghai("#showlebaobaomenu").hover(function(){
				},function(){
				chenghai("#showlebaobaomenu").slideUp('slow').show();
				});*/
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

var eattimes = 0;
function eatfood(obj){
	var gettimes = getCookie("eattimes");
	if(parseInt(gettimes) > parseInt(9)){
		lebaobaoSay("主人是个大混蛋！！");
		setFace(3);
		closelebaobao_evil();
	}else if(parseInt(gettimes) > parseInt(7)){
		lebaobaoSay(".....................肚子要炸了，死也不要再吃了～～！！！TAT");
		setFace(3);
	}else if(parseInt(gettimes) == parseInt(5)){
		lebaobaoSay("我已经吃饱了，不要再吃啦......");
		setFace(3);
	}else if(parseInt(gettimes) == parseInt(3)){
		lebaobaoSay("多谢款待，我吃饱啦～～～ t（￣￣）q");
		setFace(2);
	}else{
		var id = obj.replace("f",'');
		getdata('eatsay', id);
	}
	eattimes++;
	setCookie("eattimes", eattimes, 60*10*1000);
}
function lebaobaoMenu(){
	//chenghai("#showlebaobaomenu").slideDown('fast').show();
	clearlebaobaoSay();
	closeInput();
	lebaobaoSay("尊贵的主人你好！我是乌贼娘~。</br>有什么问题你都可以来找我喔。</br>");
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
	lebaobaoSay("怎么不让我再多呆一会呢？</br>主人最讨厌了～哼!");
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
function createFace(a, b, c){
	chenghai("head").append('<div id="hiddenfaces"><img id="hf1" src="'+a+'" /><img id="hf2" src="'+b+'" /><img id="hf3" src="'+c+'" /></div>');
	setFace(1);
}
function setFace(num){
	obj = document.getElementById("hf"+num).src;
	chenghai("#lebaobaoface").attr("style", "background:url("+obj+") no-repeat scroll 50% 0% transparent; width:"+imagewidth+"px;height:"+imageheight+"px;");
}
function getdata(el, id){
	chenghai.ajax({
		type:	'GET',
		url:	path+'/?a=getdata',
		cache:	'false',
		dataType: 'html',
		contentType: 'application/json; charset=utf8',
		beforeSend: function(){
			//chenghai("#dialog_chat").fadeOut("normal");
			chenghai("#tempsaying").css('display', "none");
			chenghai("#dialog_chat_loading").fadeIn("normal");
		},
		success: function(data){
			chenghai("#dialog_chat_loading").css('display', "none");
			//chenghai("#dialog_chat").fadeIn("normal");
			chenghai("#tempsaying").css('display', "");
			var dat = eval("("+data+")");
			if(el == 'defaultccs'){
				lebaobaoSay('欢迎来到枫叶饭团的博客哦</br> ');
			}else if(el == 'getnotice'){
				lebaobaoSay('欢迎来到枫叶饭团的博客哦 </br>');
				setFace(1);
			}else if(el == 'showlifetime'){
				lebaobaoSay(dat.showlifetime);
			}else if(el == 'talking'){
				var talkcon = chenghai("#talk").val();
				var i = in_array(talkcon, dat.ques);
				var types = typeof(i);
				if(types != 'boolean'){
					lebaobaoSay(dat.ans[i]);
					setFace(2);
				}else{
					lebaobaoSay('.......................嗯？');
					setFace(3);
				}
				clearInput();
			}else if(el == 'foods'){
				var str='';
				var arr = dat.foods;
				for(var i in arr){
					if(arr[i] != ''){
						str +='<ul id="f'+i+'" class="eatfood" onclick="eatfood(this.id)">'+arr[i]+'</ul>';
					}
				}
				lebaobaoSay(str);
			}else if(el = "eatsay"){
				var str = dat.eatsay[id];
				lebaobaoSay(str);
				setFace(2);
			}else if(el = "talkself"){
				var arr = dat.talkself;
				return arr;
			}
		},
		error: function(){
			lebaobaoSay('好像出错了，是什么错误呢...不知道,我是码盲啦</br>');
		}
		});
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
	["饭团又跑去玩了，总是不带上偶", "2"],
        ["英语帝是神马东西？可以吃吗？呵呵~~", "2"],
        ["什么？不会是真的吧？我不相信！我坚决不会相信哦！你是女女？？", "3"],
	["纸玄猫3？别怕,萌萌的小弟哦~~我保护你~喔喔I(^ω^)J", "2"],
	["萝卜，好奇怪的名字哦，哈哈，哇哦~~难道是个小正太吗？不敢想了哦~~哇卡卡", "1"],
	["昨晚优子姐姐把人家弄哭了……", "3"],
	["大叔又抛我的裙子了TAT", "3"],
	["嗯嗯嗯，圣诞节要怎么过呢，真是好期待哦", "2"],
	["南宫经常偷偷网购女仆装，晚上在家穿着照镜子 -哟哟", "2"],
	["鼠标滑过不点我的同学最讨厌了~~!你无视我，我也会无视你的哦~讨厌你啦", "3"],
	["蔷薇馆是神马哟？喔喔~~淫家真的不好意思啦哦~~", "2"],
	["那个..主人..我是先给你捶背...还是.......", "1"],
	["夏天了,我想食雪糕,买给我!买给我!", "2"],
	["等人家生日了~要礼物", "2"],
	["昨天我好像看见主人又在众人之前卖萌了哦～", "3"]
	["因为忙着看帖，把作业完全忘记了阿鲁！", "1"],
	["再等一下就可以吃了哦，因为图案的肉有点不好煮的。哈~哈~哈~", "1"],
	["没有西瓜的冬天是不完整滴！！人家要吃西瓜啦~~", "2"],
	["看到你在吃蛋糕哦，不给我的话，我就去喝水，呜呜呜呜呜呜呜呜~", "3"],
	["不要轻易的把我关闭哦，我会恨你一辈子的，晚上梦里小心哦，嘿嘿", "3"],
        ["都说我卡哇伊，我一点都不卡哇伊，人家只是可爱了，哈哈！", "2"],
        ["鼠标可以把我拖拽到任何地方哦！我很厉害吧~~", "4"],
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
		document.cookie = name+"="+val+"; path=/;domain=.mzxzx.com;";
	}else{
		document.cookie = name+"="+val+"; expires="+times.toGMTString()+";path=/;domain=.mzxzx.com;";
	}
}
function getCookie(name){
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));   
	if(arr != null) return unescape(arr[2]); return null;
}
