Ajax("/post.json", function (data) {
    data = eval(data);
    var page = {
        Num : 5,
        MAX : data.length,
        index : 0,
        count : 5,
        next : function () {
            this.index += 1 ;
        },
        prev : function () {
            this.index -= 1 ;
        },
        content : function () {
            if(this.index < 0){
                this.index = 0;
            }
            else if(this.index >= (this.MAX/this.Num|0)){
                this.count = this.MAX % this.Num;
                this.index = (this.MAX/this.Num|0)
            }
            else{
                this.count = 5;
            }
            var builder = '';
            for (var i = this.index*this.Num ; i < this.index*this.Num + this.count; i++) {
                    builder += ("<li><h2 class=\"title\"><a href=" + data[i].url + ">" + data[i].title + "</a></h2>");
                    builder += ( data[i].summary + "</li>");
            }
            return builder;
        }
    }
    document.getElementById("next").onclick=next;
    function next(){
        page.next();
        document.getElementById("posts").innerHTML=page.content();
    }
    document.getElementById("prev").onclick=prev;
    function prev(){
        page.prev();
        document.getElementById("posts").innerHTML=page.content();
    }
});
