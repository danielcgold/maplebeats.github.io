Ajax("/anime.json", function(data){
    data = eval(data);
    var build = [];
    for(i in data){
        build += '</p>'+data[i].cn + data[i].jp+'</p>';
    }
    document.getElementById("anime").innerHTML = build;
});
