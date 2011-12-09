var knu = {
	show:true,
	talking:true,
	ukagakaRoot:"",
	ukagakaName:"default",
	fileExtension:".png",
	extendHTML:"<b>功能列表</b><br>我还做不了什么呢!",
	timeEffectId:0,
	init:function(){
		if(this.get_setting("name")!="")
			this.ukagakaName = this.get_setting("name");
		document.getElementById("cur_ukagaka").src = this.ukagakaRoot + this.ukagakaName + "/default" + this.fileExtension;
	},
	update_setting:function(name,value){
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+80000)
		document.cookie="knu_" +name+ "=" +escape(value)+
		(";expires="+exdate.toGMTString())
	},
	get_setting:function(name){
		if (document.cookie.length>0)
		{
		  var c_start=document.cookie.indexOf("knu_" + name + "=");
		  if (c_start!=-1)
		  { 
			c_start=c_start + name.length + 4 + 1 ;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) 
				c_end=document.cookie.length
			return unescape(document.cookie.substring(c_start,c_end));
			} 
		}
		return "";
	},
	toggleHide:function(){
		if(this.show){
			document.getElementById("ukagaka").style.display="none";
			document.getElementById("show_ukagaka").innerHTML="显示春菜 ▲";
			this.show=false;
		}else{
			document.getElementById("ukagaka").style.display="";
			document.getElementById("show_ukagaka").innerHTML="隐藏春菜 ▼";
			this.show=true;
		}
	},
	toggleTalk:function(){
		if(this.talking){
			document.getElementById("ukagaka_msgbox").style.display="none";
			document.getElementById("show_msg").innerHTML="显示会话 ▲";
			this.talking=false;
		}else{
			document.getElementById("ukagaka_msgbox").style.display="";
			document.getElementById("show_msg").innerHTML="隐藏会话 ▼";
			this.talking=true;
		}
	},
	showExtend:function(){
		if(!this.show)
			this.toggleHide();
		if(!this.talking)
			this.toggleTalk();
		document.getElementById("ukagaka_msg").innerHTML = this.extendHTML;
	},
	say:function(a){
		if(!this.talking)
			this.toggleTalk();
		document.getElementById("ukagaka_msg").innerHTML = a;
	},
	randomSay:function(arraySay){
		if(arraySay.length<1)
			return;
		var random = Math.round(Math.random()*(arraySay.length-1));
		this.say(arraySay[random]);
	},
	timeEffect:function(effect,params,timeout){
		if(this.timeEffectId!=0)
			return;
		if(effect=='say'){
			this.timeEffectId = setTimeout("knu.say('" + params +"');knu.timeEffectId=0;",timeout * 1000);
		}
	},
	cancelTimeEffects:function(){
		clearTimeout(this.timeEffectId);
		this.timeEffectId=0;
	},
	shout:function(a){
		if(!this.show)
			this.toggleHide();
		if(!this.talking)
			this.toggleTalk();
		document.getElementById("ukagaka_msg").innerHTML = a;
	},
	changeMood:function(a){
		document.getElementById("cur_ukagaka").src = this.ukagakaRoot + this.ukagakaName + "/" + a + this.fileExtension;
	},
	changeUkagaka:function(a){
		this.ukagakaName = a;
		this.update_setting('name',this.ukagakaName);
		this.init();
	}
};

function knu_embed(engine_css){
if(document.head!=null)
	document.head.innerHTML +="<link rel=\"stylesheet\" type=\"text/css\" href=\"" + engine_css +"\">";
else
	document.body.innerHTML +="<link href='" + engine_css + "' type='text/css' rel='stylesheet'>";
document.body.innerHTML +="<div id=\"kn_ukagaka\">\
	<div id=\"ukagaka_shell\">\
		<div id=\"ukagaka\">\
			<div id=\"ukagaka_msgbox\">\
				<div id=\"ukagaka_msg\"></div>\
				<div id=\"ukagaka_msgnum\" style=\"display:none;\">0</div>\
				<div id=\"ukagaka_msglist\" style=\"display:none;\"></div>\
				<div class=\"ukagaka-msgbox-border\"></div>\
			</div>\
			<div id=\"ukagaka_img\"><img id=\"cur_ukagaka\" title=\"\" alt=\"\" src=\"\" /></div>\
			<div id=\"ukagaka_num\" style=\"display:none;\">1</div>\
		</div>\
		<div class=\"knu-clear\"></div>\
		<div class=\"ukagaka-dock\">\
			<a id=\"show_ukagaka\" href=\"javascript:void(0);\" onclick=\"knu.toggleHide();\">隐藏春菜 ▼</a> | \
			<a id=\"show_msg\" href=\"javascript:void(0);\" onclick=\"knu.toggleTalk();\">隐藏会话 ▼</a> | \
			<a id=\"kn_extend\" href=\"javascript:void(0);\" onclick=\"knu.showExtend();\">扩展</a>\
		</div>\
	</div>\
</div>";
knu.ukagakaName = "senjo";
knu.ukagakaRoot = 'shell/';
knu.init();
}

function onloadEmbed(){
	knu_embed('knUkagaka.css');
}
window.onload = onloadEmbed;