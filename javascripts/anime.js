$(document).ready(function(){
    $.getJSON("/anime.json",function(data){
        var build = []
        for(i in data){
            build += '</p>'+data[i].cn + data[i].jp+'</p>'
        }
        $(".anime").html(build)
    });
});
