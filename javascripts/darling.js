function getSay(){
    var url="http://api.hitokoto.us/rand?encode=jsc&fun=darlingSay";
    load_script(url);
}
document.getElementById("darling").onclick = clickdarling;
function clickdarling(){
    darlingSay("非礼啊QAQ...再点我我就要叫了(つдC)");
    count += 1;
    if(count==3){
        darlingSay("去死吧");
        count = 2;
    };
};
function timeSay() {
    getSay();
    preload(randomNum(23));
}
var count  = 0;
function darlingSay(data){
    say = data["hitokoto"];
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
function main() {
    timeSay();
    setInterval(timeSay,6000);
}
main();
