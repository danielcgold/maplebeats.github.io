function rand(len){
    var num = Math.floor(Math.random()*len);
    return num
}
function randlist(num){
    var r = [];
    for(var i=1; i<num; i++)
        r[i] = i;
    r = r.sort(function(){
        return Math.random()>0.5?-1:1
    })
    return r
}
var tags = ['First','Sencond','Third'];
var len = 10; //单图片个数
var tl = tags.length;
var l = randlist(len);
var li = '';
for(var j in tags){
    var tag = tags[j];
    for(var i=1; i<len-1; i++){
        var src = 'http://maplebeats.com/images/darling'+rand(23)+'.png';
        li += '<li data-tags="'+ tag +'"><img src="'+ src +'" alt="'+ tag +'"/></li>'; //@TODO 可以多tag
    }
}
var s = document.getElementById('stage');
s.innerHTML = li;
