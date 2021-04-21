$(function () {
  setTimeout(function () {
    $("#pocket").addClass("crash");
    $("#welcome").css("display", "flex");
  }, 1500);

  $("#wcm-form").submit(function (e) {
    $(".input-page").remove();
    $(".info-page").css("display", "flex");
  });

  $("#done-btn").click(function (e) {
    $("#pocket").removeClass("crash");
    $("#welcome").remove();
  });

  $(".info-page").dblclick(function (e) {
    $("#pocket").removeClass("crash");
    $("#welcome").remove();
  });
});
