$("#hat").click(function(){
    play("luffy")

});
$(".onePiece").click(function(){
    play("blueBird")
});
$("#konichiwa").click(function(){
    play("konichiwa")
})


function play(sound){
    var audio = new Audio("public/music/"+sound+".mp3");
    audio.play();
}
