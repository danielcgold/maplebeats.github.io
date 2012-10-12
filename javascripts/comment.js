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
        });
        for(j in data[i]){
            if(j>0) text += '<div class="children">';
            text += '<p><img src="https://secure.gravatar.com/avatar/'+data[i][j].avatar+'"/>';
            text += '<a href='+data[i][j].link+">"+data[i][j].author+'</a></p>';
            text += '<p>'+data[i][j].date+'<a class="comm-reply" href="#comminput" onclick=reply('+'"'+data[i][j].author+'"'+','+i+')>回复</a></p>';
            text += '<h4>吐槽: '+data[i][j].content+'</h4>';
            if(j>0) text += '<div>';
        }
        text += '</div></div>';
    }
    document.getElementById("comm").innerHTML = text;
    document.getElementById("pushcomm").disabled=false;
}
function pushComm(){
    var push = serialize(document.comminput);
    document.getElementById("pushcomm").value='提交评论中...';
    document.getElementById("pushcomm").disabled=true;
    var data = url+"comm?postid="+location.pathname+"&callback=pushCallback"+"&order="+commorder + "&"+push;
    load_script(data);
    document.getElementById("commcon").value='';
}
function pushCallback(data){
    document.getElementById("pushcomm").value='提交评论';
    getComm();
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
