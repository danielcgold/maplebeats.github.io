$(document).ready(function () {
    $.getJSON("/post.json", function (data) {
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
                if(this.index < 0)
                {
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
                        builder += ("<p>" + data[i].summary + "</p>");
                }
                return builder;
            }
        };
        $("#next").click(function () {
            page.next();
            $(".posts").html(page.content());
        });
        $("#prev").click(function () {
            page.prev();
            $(".posts").html(page.content());
        });
    });
});
