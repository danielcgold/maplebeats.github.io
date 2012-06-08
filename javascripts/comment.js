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
                    for(var j=0;j<data[i].length;j++){
                            text += '<div class="eachcomm">';
                            text += '<a href='+data[i][j].link+">"+data[i][j].author+'</a>';
                            text += '<p>'+data[i][j].content+'</p>';
                            text += '<p>'+data[i][j].date+'</p>';
                            text += '<a href="#comminput" onclick=reply('+'"'+data[i][j].author+'"'+','+i+')>回复</a>';
                            text += '</div>';
                    }
                    text += '<p>--------------------</p>';
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
    getComm();
});
var commlen = 0;
function reply(name,order){
    document.getElementById("commcon").value='@'+name;
    commlen = order;
}

function getJsonLength(json){
    var len=0;
    if(Boolean(json)){
        for(i in json)len++;
    }
    return len;
}
