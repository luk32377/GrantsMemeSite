
var memeImage = document.getElementById("memeImage");
var mtype = document.getElementById("mtype");

document.addEventListener("DOMContentLoaded", function() {
    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", function(){
        var res = JSON.parse(this.responseText);
        memeImage.src = res["url"];
    });
    ajax.open("Get", "https://meme-api.com/gimme", true);
    ajax.send();
});

function wholesomeFetch() {
    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", function() {
        var res = JSON.parse(this.responseText);
        memeImage.src = res["url"];
        mtype.innerHTML = "WholesomeMeme";
    });
    ajax.open("GET", "https://meme-api.com/gimme/wholesomememes", true);
    ajax.send();
}

function animFetch() {
    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", function() {
        var res = JSON.parse(this.responseText);
        memeImage.src = res["url"];
        mtype.innerHTML = "Animeme";
    });
    ajax.open("GET", "https://meme-api.com/gimme/animemes", true);
    ajax.send();
}


function memeFetch() {
    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", function() {
        var res = JSON.parse(this.responseText);
        memeImage.src = res["url"];
        mtype.innerHTML = "Good Ol' Meme";
    });
    ajax.open("GET", "https://meme-api.com/gimme/memes", true);
    ajax.send();
}
