$(document).ready(function(){
    if(location.hostname=='maplebeats.com')
        var url="http://gae.maplebeats.com/";
    else:
        var url="http://localhost:8080/";
    function getComm(){
        $.getJSON(url+"jsonp?callback=?",
            {postid:location.pathname},
            function(data){
                commlen = getJsonLength(data); //order
                var text = [];
                for(var i=0;i<commlen;i++){
                    text += '<div class="eachcomm"><div id="eachcomm'+i+'">';
                    for(var j=0;j<data[i].length;j++){
                        text += '<p><img src="http://www.gravatar.com/avatar/'+data[i][j].avatar+'" style="margin-top: 5px;"/>';
                        text += '<a href='+data[i][j].link+">"+data[i][j].author+'</a></p>';
                        text += '<p>'+data[i][j].date+'<a href="#comminput" onclick=reply('+'"'+data[i][j].author+'"'+','+i+')>---回复</a></p>';
                        text += '<h4>吐槽: '+data[i][j].content+'</h4>';
                    }
                    text += '</div></div>';
                }
                $(".comm").html(text);
            }
        )
    }
    function pushComm(){
        var push = $("#comminput").serialize();
        $.ajax({
            type:'GET',
            async:false,
            url:url+"comm?postid="+location.pathname+"&order="+commlen,
            data:push,
            beforeSend:function(){
            }
        });
        getComm();
    };
    $(".pushcomm").click(function(){
        pushComm();
    });
    function init(){
        getComm();
    }
    init();
});
var commlen = 0;
function reply(name,order){
    document.getElementById("commcon").value='@'+name+' ';
    commlen = order;
}

function getJsonLength(json){
    var len=0;
    if(Boolean(json)){
        for(i in json)len++;
    }
    return len;
}
