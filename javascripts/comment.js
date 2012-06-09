$(document).ready(function(){
    //var url="http://localhost:8080/"
    var url="http://gae.maplebeats.com/"
    function getComm(){
        $.getJSON(url+"jsonp?callback=?",
            {postid:location.pathname},
            function(data){
                commlen = getJsonLength(data); //order
                var text = [];
                for(var i=0;i<commlen;i++){
                    text += '<p>--------------------------------------'+i+'----------------------------------</p>';
                    for(var j=0;j<data[i].length;j++){
                            text += '<div class="eachcomm">';
                            text += '<img src="http://www.gravatar.com/avatar/'+data[i][j].avatar+'"/>';
                            text += '<a href='+data[i][j].link+">"+data[i][j].author+'</a>';
                            text += '<h4>吐槽: '+data[i][j].content+'</h4>';
                            text += '<p><a href="#comminput" onclick=reply('+'"'+data[i][j].author+'"'+','+i+')>回复</a></p>';
                            text += '<p class="date">'+data[i][j].date+'</p>';
                            text += '</div>';
                    }
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
        document.getElementById("link").value="http://";
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
