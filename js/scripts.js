//USER INTERFACE LOGIC
function resetOutput() {
  $("#element1-clickbutton").hide();
  $(".all-triggers").hide();
  $(".all-element-details").hide();
}



$(document).ready(function() {

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

   $("li#element6-id").click(function() {
     resetOutput();
     $("#element6-trigger").show();
   });

   $("#element6-trigger").click(function() {
      var bounce = "I am bouncing";
      $("#element6-trigger").append('<p class="bg-ping-pong"><marquee direction="down" width="100" height="30" behavior="alternate">'+bounce+'</p');
      $("#element6-details").show();
   });

   $("li#element7-id").click(function() {
     resetOutput();
     $("#element7-trigger").show();
   });

   $("#element7-trigger").click(function() {
     $("#element7-details").show();
    //  $("span#mm").text(event.pageX + ", " + event.pageY);
   });

   $(document).mousemove(function(event){
     $("span#mm").text(event.pageX + ", " + event.pageY);
   });

   $("li#element8-id").click(function() {
     resetOutput();
     $("#element8-trigger").show();
   });

   $("#element8-trigger").click(function() {
     $("#element8-details").show();
     $("p#element8-trigger").mousedown(function(){
       $("#mud").text('MOUSE CLICKED.');
     });
     $("p#element8-trigger").mouseup(function() {
       $("#mud").text('MOUSE RELEASED.');
     });
   });


});
