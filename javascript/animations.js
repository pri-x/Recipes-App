$(document).ready(function () {
  $(function () {
    $(".flipster").flipster({
      style: "carousel",
    });
  });
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
});
