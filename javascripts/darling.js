$(document).ready(function (){ 
    function getSay(){
        var url="http://api.hitokoto.us/rand?encode=jsc&fun=getWord";
        $.getScript(
            url,
            function(){
        });
    }
    $("#darling").click(function(){
        darlingSay("非礼啊QAQ...再点我我就要叫了(つдC)");
    });
    $(".title").mouseenter(function(){
        darlingSay("点击可以得到更多内容哦");
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
function getWord(data){
    darlingSay(data["hitokoto"])
}
/*------------main------------*/
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
