setTimeout(function(){
    window.location = '/blog';
},
5000);

var time = document.getElementById('time');
var m = 4;
setInterval(function(){
    time.innerHTML = m>0 ? (m--) : 0;
},1000);
