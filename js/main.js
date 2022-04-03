$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var total = 0;

$(".scenes").each(function(index){
    total = index + 1;
});
$(".scenes").each(function(index){
    $(this).css({
        background: "hsl(183, 100%, " + ((total * 2) - (index + 1) * 2) + "%)"
    });
});

var currentScene;
var nextScene;
var previousScene;

$(window).on('resize scroll', function() {
    $('.scenes').each(function(index) {
        currentScene = $(this).attr('id');
        nextScene = $(this).next(".scenes").attr('id');
        previousScene = $(this).prev(".scenes").attr('id');

      if ($(this).isInViewport()) {
        console.log("This is the current scene: " + currentScene);
        if(currentScene == "scene4"){
            $("#back").css({background: "white"})
            $("#next").css({background: "white"})
        }
        if(currentScene == "scene3"){
            $("#back").css({background: "black"})
            $("#next").css({background: "black"})
            $(".ani").addClass("aniMove")
        } else{
            $(".ani").removeClass("aniMove")
        }

        $("#next").attr('href', "#" + nextScene);
        $("#back").attr('href', "#" + previousScene);

        if(currentScene == "scene" + total){
            $("#next").attr('href', "#scene1");
        }
        if(currentScene == "scene1"){
            $("#back").attr('href', "#scene" + total);
        }
      }
    });
});

$(document).ready(function(){

    $("a").on('click', function(event) {
  
      if (this.hash !== "") {

        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          window.location.hash = hash;
        });
      }
    });
  });