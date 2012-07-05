var count  = 0;
function getSay(){
    var url="http://api.hitokoto.us/rand?encode=jsc&fun=darlingCall";
    load_script(url);
}
function darlingCall(data) {
    say = data["hitokoto"];
    darlingSay(say);
}
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
function main() {
    document.getElementById("darling").onclick = clickdarling;
    timeSay();
    setInterval(timeSay,6000);
}
main();
