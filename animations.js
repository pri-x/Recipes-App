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
});
