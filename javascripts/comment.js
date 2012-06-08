$(document).ready(function(){
    var url="http://gae.maplebeats.com/"
    function getComm(){
        $.getJSON(url+"jsonp?callback=?",
            {postid:location.pathname},
            function(data){
                commlen = getJsonLength(data)+1;
                var text = [];
                for(i in data){
                    for(j in data[i]){
                        for(k in data[i][j]){
                            $(".comm").append('<p>'+i+':'+k+':'+data[i][j][k]+'</p>');
                        }
                        $(".comm").append('<p>--------------------</p>');
                    }
                }
            }
        )
    }
    function pushComm(){
        var push = $("#comminput").serialize();
        $.ajax({
            type:'GET',
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

function getJsonLength(json){
	var len=0;
	if(Boolean(json)){
		for(i in json)len++;
	}
	return len;
}
