
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$("button").on("mouseover", function(){
    $("button").css("color", "yellow");

});