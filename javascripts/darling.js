$(document).ready(function (){ 
    function getSay(){
        var url="http://api.hitokoto.us/rand?encode=jsc&fun=getWord";
        $.getScript(
            url,
            function(){
        });
    }
    $("#darling").click(function(){
        getSay();
    });
    function timeSay() {
        getSay();
        preload(randomNum(23));
    }
    timeSay();
    setInterval(timeSay,6000);
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
        6000);
}

