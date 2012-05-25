var words = [
    "恩恩，偶终于又复活了QAQ",
    "主人好讨厌哦。。。",
    "偶居然只会说几句话",
    "偶好喜欢你哦",
    "骗你的啦。。。。"
]
var states = [
    "/images/darling1.png",
    "/images/darling2.png",
    "/images/darling3.png"
]
function darlingSay(say){
    document.getElementById("darling-say").innerHTML=say;
}
function randomNum(length){
    var Num = Math.floor(Math.random()*length)
    return Num
}
function darlingState() {
    var state = states[randomNum(states.length)];
    document.getElementById("darling").style.backgroundImage="url("+state+")  "
}
function darling() {
    var word = words[randomNum(words.length)]
    darlingSay(word);
    darlingState();
}
function timeSay() {
    darling();
    go =  setTimeout("timeSay()",3000)
}
timeSay();
