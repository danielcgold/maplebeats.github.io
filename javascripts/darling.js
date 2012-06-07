$(document).ready(function (){ 
    function getSay(){
        var url="http://api.hitokoto.us/rand?encode=jsc&fun=?";
        $.getJSON(
            url,
            function(data){
            darlingSay(data["hitokoto"]);
        });
    }
    $("#darling").click(function(){
        darlingSay("非礼啊QAQ...再点我我就要叫了(つдC)");
        count += 1;
        if(count==3){
            darlingSay("去死吧");
            count = 2;
        };
   });
    $(".title").mouseenter(function(){
        darlingSay("点击访问--> "+$(this).html());
    });
    $("#disqus_thread").mouseenter(function(){
        darlingSay("吐槽一下主人吧");
    });
    function timeSay() {
        getSay();
        preload(randomNum(23));
    }
    function main() {
        timeSay();
        init();
        setInterval(timeSay,6000);
    }
    main();
});
var count  = 0;
function darlingSay(say){
    document.getElementById("darling-say").innerHTML=say;
}
function randomNum(len){
    var Num = Math.floor(Math.random()*len);
    return Num;
}
function darlingState(state) {
    document.getElementById("darling").style.backgroundImage="url(/images/darling"+state+".png)";
}
function preload(num) {
    new Image().src = '/images/darling'+num+'.png';
    setTimeout(
        function(){
            darlingState(num);
        },
        6000
    );
}
function init() {
    $("#darling").animate({bottom:"0",right:"0"});
}
