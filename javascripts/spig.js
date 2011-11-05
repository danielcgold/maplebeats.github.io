/*
*作者木木
*
*http://www.dao-gu.com
*/

//右键菜单
jQuery(document).ready(function (a) {
    $("#spig").mousedown(function (e) {
        if(e.which==3){
        showMessage("传送门:<br /><a href=\"http://forum.ubuntu.org.cn\" title=\"乌班免\">乌班免</a>    <a href=\"http://maplebeats.github.com\" title=\"首页\">首页</a>    <a href=\"http://www.google.com.hk\" title=\"搜索\">搜索</a>",10000);
}
});
$("#spig").bind("contextmenu", function(e) {
    return false;
});
});

//鼠标在消息上时
jQuery(document).ready(function (a) {
    a("#message").hover(function () {
       a("#message").fadeTo("100", 1);
     });
});


//鼠标在上方时
jQuery(document).ready(function (a) {
    //a(".mumu").jrumble({rangeX: 2,rangeY: 2,rangeRot: 1});
    a(".mumu").mouseover(function () {
       a(".mumu").fadeTo("300", 0.3);
       msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
       var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i]);
    });
    a(".mumu").mouseout(function () {
        a(".mumu").fadeTo("300", 1)
    });
});

//开始
jQuery(document).ready(function (a) {
    if (isindex) { //如果是主页
        var now = (new Date()).getHours();
        if (now > 0 && now <= 6) {
            showMessage(vistor + ' 你是夜猫子呀？还不睡觉，明天起的来么你？', 6000);
        } else if (now > 6 && now <= 11) {
            showMessage(vistor + ' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！', 6000);
        } else if (now > 11 && now <= 14) {
            showMessage(vistor + ' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！', 6000);
        } else if (now > 14 && now <= 18) {
            showMessage(vistor + ' 中午的时光真难熬！还好有你在！', 6000);
        } else {
            showMessage(vistor + ' 快来逗我玩吧！', 6000);
        }
    }
    else {
        showMessage('欢迎' + vistor + '来到maple阅读《' + title + '》', 6000);
    }
    a(".spig").animate({
        top: a(".spig").offset().top + 300,
        left: document.body.offsetWidth - 200
    },
	{
	    queue: false,
	    duration: 1000
	});
//    window.setTimeout(function () {
//        showMessage("下面播报明日天气<iframe name=\"xidie\" src=\"http://t.xidie.com/skin/2010-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", 10000);
//    },
//	4000);
});

//鼠标在某些元素上方时
jQuery(document).ready(function (a) {
    a('.title a').click(function () {//标题被点击时
        showMessage('正在用吃奶的劲加载《<span style="color:red;">' + a(this).text() + '</span>》请稍候');
        a(this).text('看灰机，灰过来，灰过去，呀~灰走了...');
    });
    a('test1').mouseover(function () {
        showMessage('要看看《<span style="color:red;">' + post.title + '</span>》这篇文章么？');
    });
    a('.recentcomments li').mouseover(function () {
        showMessage('伟大的 <span style="color:red;">' + a(this).children(".comment_author").text() + '</span>' + a(this).children(".comment_content").text());
    });
    a('.menuheader').mouseover(function () {
        showMessage("可以折叠的哦！点下试试");
    });
    a('.ad').mouseover(function () {
        showMessage("Google的给力广告！有空点点！~");
    });
    a('.post-title').mouseover(function () {
        showMessage("显示隐藏文章内容！");
    });
    a('.cat-item').mouseover(function () {
        showMessage('查看 <span style="color:red;">' + a(this).text() + '</span> 下所有文章');
    });
    a('.link li a').mouseover(function () {
        showMessage('去 <span style="color:red;">' + a(this).text() + '</span> 逛逛');
    });
    a('.addcomments').mouseover(function () {
        showMessage('<span style="color:red;">' + vistor + '</span> 向评论栏出发吧！');
    });
    a('#input_search').mouseover(function () {
        showMessage("Google 给力站内搜索，搜遍每一个角落！");
    });
    a('#birthday').mouseover(function () {
        showMessage('我已经' + dni + '天了！我还小，需要你多多照顾！');
    });
    a('#submit').mouseover(function () {
        showMessage('确认提交了么？');
    });

});


//无聊讲点什么
jQuery(document).ready(function (a) {

    window.setInterval(function () {
        msgs = ["播报明日天气<iframe name=\"xidie\" src=\"http://t.xidie.com/skin/2010-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "陪我聊天吧！", "<a href=\"http://maplebeats.github.com/feed/\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"别点我\" alt=\"Feed\" src=\"/images/spig.png\"></a>", "好无聊哦，你都不陪我玩！", "…@……!………", "^%#&*!@*(&#)(!)(", "我可爱吧！嘻嘻!~^_^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];
        var i = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[i], 10000);
    }, 35000);
});

//无聊动动
jQuery(document).ready(function (a) {
    window.setInterval(function () {
        msgs = ["播报明日天气<iframe name=\"xidie\" src=\"http://t.xidie.com/skin/2010-0601.html\"frameborder=\“0\” scrolling=\"no\" height=\"15px\"  width=\"130px\" allowtransparency=\"true\" ></iframe>", "快快订阅我的博客吧！<a href=\"http://maplebeats.github.com/feed/\" target=\"_blank\" rel=\"external\" tip=\"Feed\"><img border=\"0\" title=\"订阅捣鼓笔记\" alt=\"Feed\" src=\"/images/spig.png\"></a>", "乾坤大挪移！", "我飘过来了！~", "我飘过去了", "德尔一个飘！~飘！~"];
        var i = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            a(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
        },
			{
			    duration: 2000,
			    complete: showMessage(msgs[i])
			});
    }, 45000);
});

//评论资料
jQuery(document).ready(function (a) {
    a(".author").click(function () {
        showMessage("留下你的尊姓大名！");
        a(".spig").animate({
            top: a(".author").offset().top - 70,
            left: a(".author").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    a(".mail").click(function () {
        showMessage("留下你的邮箱，不然就是无头像人士了！");
        a(".spig").animate({
            top: a(".mail").offset().top - 70,
            left: a(".mail").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    a(".url").click(function () {

        showMessage("快快告诉我你的家在哪里，好让我去参观参观！");
        a(".spig").animate({
            top: a(".url").offset().top - 70,
            left: a(".url").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
    a("#comment").click(function () {
        showMessage("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");
        a(".spig").animate({
            top: a("#comment").offset().top - 70,
            left: a("#comment").offset().left - 170
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

var spig_top = 50;
//滚动条移动
jQuery(document).ready(function (a) {
    var f = a(".spig").offset().top;
    a("#shang,#xia").click(function () {
        gds = ["等等我呀！", "跑不动啦！累死我了!", "站住，不要跑！@_@"];
        var gd = Math.floor(Math.random() * gds.length);
        showMessage(gds[gd], 5000);
    });
    a("#comt").click(function () {
        gds = ["快去凑热闹哦", "围观去咯", "看看评论去！"];
        var gd = Math.floor(Math.random() * gds.length);
        showMessage(gds[gd], 5000);
    });
    a(window).scroll(function () {
        a(".spig").animate({
            top: a(window).scrollTop() + f +300
        },
		{
		    queue: false,
		    duration: 1000
		});
    });
});

//鼠标点击时
jQuery(document).ready(function (a) {
    var stat_click = 0;
    a(".mumu").click(function () {
        if (!ismove) {
            stat_click++;
            if (stat_click > 4) {
                msgs = ["你有完没完呀？", "你已经摸我" + stat_click + "次了", "非礼呀！救命！OH，My ladygaga"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            } else {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老公来打你的！", "干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random() * msgs.length);
                //showMessage(msgs[i]);
            }
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7,0.75,-0.1, -0.2, -0.3, -0.4, -0.5, -0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random() * s.length);
        var i2 = Math.floor(Math.random() * s.length);
            a(".spig").animate({
            left: document.body.offsetWidth/2*(1+s[i1]),
            top:  document.body.offsetheight/2*(1+s[i1])
            },
			{
			    duration: 500,
			    complete: showMessage(msgs[i])
			});
        } else {
            ismove = false;
        }
    });
});
//显示消息函数 
function showMessage(a, b) {
    if (b == null) b = 10000;
    $("#message").hide().stop();
    $("#message").html(a);
    $("#message").fadeIn();
    $("#message").fadeTo("1", 1);
    $("#message").fadeOut(b);
};

//拖动
var _move = false;
var ismove = false; //移动标记
var _x, _y; //鼠标离控件左上角的相对位置
$(document).ready(function () {
    $("#spig").mousedown(function (e) {
        _move = true;
        _x = e.pageX - parseInt($("#spig").css("left"));
        _y = e.pageY - parseInt($("#spig").css("top"));
     });
    $(document).mousemove(function (e) {
        if (_move) {
            var x = e.pageX - _x; 
              var y = e.pageY - _y;
            $("#spig").css({
                top: y,
                left: x
            }); //控件新位置
            ismove = true;
        }
    }).mouseup(function () {
        _move = false;
    });
});
