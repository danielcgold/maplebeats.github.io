Ajax("/post.json", function (data) {
    data = eval(data);
    var page = {
        Num : 6,
        MAX : data.length,
        index : 1,
        count : 6,
        next : function () {
            if(this.index < (this.MAX/this.Num|0)+1){
                this.index += 1;
            }
            return this.content();
        },
        prev : function () {
            if(this.index >1 ){
                this.index -= 1;
            }
            return this.content();
        },
        content : function () {
            var builder = '';
            var begin = (this.index-1)*this.Num;
            if(this.index == (this.MAX/this.Num|0)+1){
                this.count = this.MAX % this.Num;
            }else{
                this.count = 6;
            }
            for (var i = begin ; i < begin + this.count; i++) {
                    builder += '<li><h2 class="list-title"><a href=' + data[i].url + ">" + data[i].title + "</a></h2>" +
                    data[i].summary + '</li>';
            }
            return builder;
        }
    }
    var posts = document.getElementById("posts");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var button = document.getElementById("nav-button");
    next.onclick = next_page;
    prev.onclick = prev_page;
    function button_page(){
        if(page.index == 1){
            prev.style.display = 'none';
        }else if(page.index == (page.MAX/page.Num|0)+1){
            next.style.display = 'none';
        }else{
            next.style.display = 'inline';
            prev.style.display = 'inline';
        }
    }
    function next_page(){
        posts.innerHTML = page.next();
        button_page();
    }
    function prev_page(){
        posts.innerHTML = page.prev();
        button_page();
    }
    var mpd = {},
        mpu={};
    onmousedown = function(e){
        var e=e||event;
        if(e.button==0){
            mpd = getMousePoint(e);
        }
    }
    onmouseup = function(e){
        var e=e||event;
        if(e.button==0){
            mpu = getMousePoint(e);
            choice_page(mpu, mpd);
        }
    }
    function choice_page(d, u){
        var x = d.x - u.x;
        var y = d.y - u.y;
        if(y<25 && y>-25){
            button_page();
            if(x>20){
                next_page();
            }else if(x<-20){
                prev_page();
            }
        }
    }
    //init
    posts.innerHTML = page.content();
});
