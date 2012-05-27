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
        darling();
        setTimeout(timeSay,3000);//伤不起啊
    }
    timeSay();   
});
function getWord(data){
    darlingSay(data["hitokoto"])
}
/*------------main------------*/
var states = [
    "/images/darling1.png",
    "/images/darling2.png",
    "/images/darling3.png"
]
function darlingSay(say){
    document.getElementById("darling-say").innerHTML=say;
}
function randomNum(ary){
    var len = ary.length;
    var Num = Math.floor(Math.random()*len);
    return ary[Num]
}
function darlingState(state) {
    document.getElementById("darling").style.backgroundImage="url("+state+")";
}
function darling() {
    darlingState(randomNum(states));
}
//////////////////////

