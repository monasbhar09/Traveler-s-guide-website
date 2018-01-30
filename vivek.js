$(document).ready(function() {
//$(window).scrollTop(200);
var s;



 

if($(".header").offset().top == 0) {
  $("button#menutoggle").addClass("hide");
}
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
            $(".navbar-nav").removeClass("pull-right");
            $(".navbar").addClass("navbar-burger");
    }
    
    $(window).resize(function () {
    
        if (viewportWidth < 600) {
            $(".navbar-nav").removeClass("pull-right");
            $(".navbar").addClass("navbar-burger");
        }
    }); 

$("button#menutoggle").click(function() {
  s = $(window).scrollTop();
  //$(window).scrollTop(0);
  $("#menu").removeClass("hide");
  $("#menu1").removeClass("slideOutLeft");
  $("#menu2").removeClass("slideOutRight");
  $("#menu1").addClass("slideInLeft");
  $("#menu2").addClass("slideInRight");
  $("#menu").nextAll().removeClass("removeBlur");
  $("#menu").nextAll().addClass("blur");
  $(".carousel-control, img").addClass("zindex");
  $("body").css("overflow","hidden");
});

$("button#menubtn").click(function() {
  
  $("#menu1").removeClass("slideInLeft");
  $("#menu2").removeClass("slideInRight");
  $("#menu1").addClass("slideOutLeft");
  $("#menu2").addClass("slideOutRight");

  //$("#main").removeClass("hide");
  setTimeout(function(){ 
  $("#menu").addClass("hide");
  $("#menu").nextAll().removeClass("blur");
  $("#menu").nextAll().addClass("removeBlur"); 
$("button#menutoggle").addClass("hide");
$("body").css("overflow","visible");
checkMenuToggleBtn();
$(window).scrollTop(s);}, 300);

  function checkMenuToggleBtn() {
    var sc = $(window).scrollTop();
    var sc2 = ($("nav").offset().top + $("nav").outerHeight());

    if(sc > sc2) {
      $("button#menutoggle").removeClass("hide");
    }
  }
  

});

$(window).scroll(function() {

  var x = $(this).scrollTop();

  if (x >= ($("nav").offset().top + $("nav").outerHeight()) ) {
    $("button#menutoggle").removeClass("hide");
  }

  if(x <= ($("nav").offset().top + $("nav").outerHeight())) {
    $("button#menutoggle").addClass("removeBlur");
    $("button#menutoggle").addClass("hide");
    $("button#menutoggle").addClass("removeBlur");
  }
});


$("a#home").hover(function() {
  $('.homemenu').removeClass("hide");
  $('.homemenu').addClass("fadeIn");
  $(".messagesMenu").addClass("hide");
  $(".profileMenu").addClass("hide");
  $(".settingsmenu").addClass("hide");
});

 $('a#messages').hover(function() {
  $('.homemenu').addClass("hide");
  $(".messagesMenu").removeClass("hide");
  $(".messagesMenu").addClass("fadeIn");
  $(".profileMenu").addClass("hide");
  $(".settingsmenu").addClass("hide");
});

$('a#profile').hover(function() {
  $('.homemenu').addClass("hide");
  $(".messagesMenu").addClass("hide");
  $(".profileMenu").removeClass("hide");
  $(".profileMenu").addClass("fadeIn");
  $(".settingsmenu").addClass("hide");
});

$('a#settings').hover(function() {
  $('.homemenu').addClass("hide");
  $(".messagesMenu").addClass("hide");
  $(".profileMenu").addClass("hide");
  $(".settingsmenu").removeClass("hide");
  $(".settingsmenu").addClass("fadeIn");
});


$("button.feedbackBtn").click(function() {

  $("button.feedbackBtn").addClass("hide");
  $(".feedbackForm").removeClass("hide");
  $(".feedbackForm").addClass("slideInRight");

});

$("button.feedbackCloseBtn").click(function() {
  $(".feedbackForm").addClass("hide");
  $("button.feedbackBtn").removeClass("hide");
  $("button.feedbackBtn").css("margin-right", "0");
})

});