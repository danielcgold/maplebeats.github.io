$(document).ready(function(){
    var url="http://gae.maplebeats.com/"
    function getComm(){
        $.getJSON(url+"jsonp?callback=?",
            {postid:location.pathname},
            function(data){
                var text = [];
                for(i in data){
                    for(j in data[i]){
                        for(k in data[i][j]){
                            text+=data[i][j][k]
                        }
                    }
                }
                $(".comm").html(text);
            }
        )
    }
    function pushComm(){
        var push = $("form").serialize();
        $.ajax({
            type:'GET',
            url:url+"comm?postid="+location.pathname,
            data:push,
        });
        getComm()
    };
    $(".submit").click(function(){
        pushComm()
    });
    getComm()
});
