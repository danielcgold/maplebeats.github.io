if(location.hostname=='maplebeats.com')
    var url="http://gae.maplebeats.com/";
else
    var url="http://localhost:8080/";
var commorder = 0;
function getComm(){
    load_script(url+"jsonp?callback=commentCall&"+"postid="+location.pathname);
}
function commentCall(data){
    commorder = getJsonOrder(data)+1; //order
    var text = [];
    for(i in data){
        text += '<div class="eachcomm"><div id="eachcomm'+i+'">';
        data[i].sort(function(a,b){
            return a.date > b.date ? 1: -1;
        });//对数据按时间排序
        for(j in data[i]){
            text += '<p><img src="http://www.gravatar.com/avatar/'+data[i][j].avatar+'"/>';
            text += '<a href='+data[i][j].link+">"+data[i][j].author+'</a></p>';
            text += '<p>'+data[i][j].date+'<a href="#comminput" onclick=reply('+'"'+data[i][j].author+'"'+','+i+')>---回复</a></p>';
            text += '<h4>吐槽: '+data[i][j].content+'</h4>';
        }
        text += '</div></div>';
    }
    document.getElementById("comm").innerHTML = text;
}
function pushComm(){
    var push = serialize(document.comminput);
    var data = url+"comm?postid="+location.pathname+"&order="+commorder + "&"+push;
    load_script(data);
    document.getElementById("pushcomm").value='提交评论中...';
    getComm();
    document.getElementById("pushcomm").value='提交评论';
    document.getElementById("commcon").value='';
}
function reply(name,order){
    document.getElementById("commcon").value='@'+name+' ';
    commorder = order;
}
function getJsonOrder(json){
    var order = '';
    if(Boolean(json)){
        for(i in json){
          order = i;
        }
        if(isNaN(parseInt(order))){
            return 0;
        }
        else{
            return parseInt(order);
        }
    }
    return 0;
}
function main(){
    document.getElementById("pushcomm").onclick = pushComm;
    getComm();
}
main();
