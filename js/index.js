setTimeout(function(){
    window.location = '/blog';
},
5000);

var time = document.getElementById('time');
var m = 4;
setInterval(function(){
    time.innerHTML = (m--);
},1000);
