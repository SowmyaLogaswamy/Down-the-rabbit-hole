//USER INTERFACE LOGIC
function resetOutput() {
  $("#element1-clickbutton").hide();
  $("#element1-details").hide();
  $("#element2-trigger").hide();
  $("#element2b-trigger").hide();
  $("#element2-details").hide();
  $("#element3-trigger").hide();
  $("#element3-details").hide();
  $("#element4-trigger").hide();
  $("#element4-details").hide();
  $("#element5-trigger").hide();
  $("#element5-details").hide();
}



$(document).ready(function() {
  // $(".bxslider").bxSlider({
  //    auto: true,
  //    autoControls: true
  //  });



  $("li#element1-id").click(function() {
    resetOutput();
    $("#element1-clickbutton").show();
  });

  $("button#element1-clickbutton").click(function() {
    $("div#element1-details").show();
  });

  $("li#element2-id").click(function() {
    resetOutput();
    $("#element2-trigger").show();
    $("#element2b-trigger").show();
  });

  $("#element2-trigger").click(function() {
    $("div#element2-details").fadeIn();
  });
  $("#element2b-trigger").click(function() {
    $("div#element2-details").fadeOut();
  });

  $("li#element3-id").click(function() {
    resetOutput();
    $("#element3-trigger").show();
  });

  $("#element3-trigger").click(function() {
    $("#element3-details").toggle();
  });

  $("li#element4-id").click(function() {
    resetOutput();
    $("#element4-trigger").show();
  });

  $("#element4-trigger").click(function() {
    $("#element4-details").show();
    $(".bxslider").bxSlider({
       auto: true,
       autoControls: true
     });
   });

   $("li#element5-id").click(function() {
     resetOutput();
     $("#element5-trigger").show();
   });

   $("#element5-trigger").mouseover(function() {
     $("#element5-details").show();
   });
   $("#element5-trigger").mouseout(function() {
     $("#element5-details").hide();
   });

});
