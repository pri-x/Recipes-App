$(document).ready(function () {
  //Header Text Animation 
  $(".ex1").textyle();

  $(".ex2").textyle({
    duration: 400,
    delay: 200,
    easing: "swing",
    callback: function () {
      $(this).css({
        color: "coral",
        transition: "4s",
      });
    },
  });
  // Image auto Slide Animation
  $(".bxslider").bxSlider({
    auto: true,
    mode: "fade",
  });

  //Recipe Description hover Animation
  $(".bxslider").hover(
    function () {
      $(this).find(".description").css("transform", "translateY(20%)");
    },
    function () {
      $(this).find(".description").css("transform", "translateY(70%)");
    }
  );
  $(".bxslider").hover(
    function () {
      $(this).find(".description").addClass("active");
    },
    function () {
      $(this).find(".description").removeClass("active");
    }
  );
});
