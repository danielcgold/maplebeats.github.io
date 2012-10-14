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
    var text = '';
    for(i in data){
        data[i].sort(function(a,b){
            return a.date > b.date ? 1: -1;
        });
        text += '<div class="eachcomm">';
        var childrens = '';
        for(j in data[i]){
            if(j>0){
                text += '<div class="children">';
                childrens += '</div>';
            }
            text += '<p><img src="https://secure.gravatar.com/avatar/'+data[i][j].avatar+'"/>';
            text += '<a href='+data[i][j].link+">"+data[i][j].author+'</a></p>';
            text += '<p>'+data[i][j].date+'<a class="comm-reply" href="#comminput" onclick=reply('+'"'+data[i][j].author+'"'+','+i+')>回复</a></p>';
            text += '<p>'+data[i][j].content+'</p>';
        }
        text += childrens + '</div>';
    }
    document.getElementById("comm").innerHTML = text;
    document.getElementById("pushcomm").disabled=false;
}
function pushComm(){
    var commcon = document.getElementById("commcon").value;
    var author = document.getElementById("author").value;
    var mail = document.getElementById("email").value;
    var link = document.getElementById("link").value;
    if(!commcon)
        alert("请输入评论内容");
    else if(!author)
        alert("请输入作者");
    else if(!mail)
        alert("请输入邮箱");
    else if(!link)
        alert("请输入您的网站");
    else{
        localStorage.author = author;
        localStorage.mail = mail;
        localStorage.link = link;
        var push = serialize(document.comminput);
        document.getElementById("pushcomm").value='提交评论中...';
        document.getElementById("pushcomm").disabled=true;
        var data = url+"comm?postid="+location.pathname+"&callback=pushCallback"+"&order="+commorder + "&"+push;
        load_script(data);
        document.getElementById("commcon").value='';
    }
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
    if(localStorage.author && localStorage.mail && localStorage.link){
        document.getElementById("email").value=localStorage.mail;
        document.getElementById("author").value=localStorage.author;
        document.getElementById("link").value=localStorage.link;
    }
}
main();
