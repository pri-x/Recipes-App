$(document).ready(function () {
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
  $(".bxslider").bxSlider({
    auto: true, 
    mode: "fade", // Set the sliding effect
    // You can add more options as needed
  });
});
