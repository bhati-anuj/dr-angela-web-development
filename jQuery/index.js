// $(document).keydown(function(event) {
//     $("h1").text(event.key)
// })

$("button").click(function(){
    $("h1").slideToggle();
    $("h1").css("color","red");
})