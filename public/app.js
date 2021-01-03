var nextBtn = document.querySelector("#nextbtn")
var img = document.querySelector(".image")
var head = document.querySelector("p")

var isbrown = false;


setInterval(function(){
    if(isbrown){
        head.style.background = "aqua"
        head.style.color = "brown";
    }
    else{
        head.style.background = "brown"
        head.style.color = "aqua";
    }
    isbrown = !isbrown
}, 2000)

nextBtn.addEventListener("click", function(){
    location.reload();
    // img.setAttribute("src","https://source.unsplash.com/random")
})