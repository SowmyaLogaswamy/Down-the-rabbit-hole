//USER INTERFACE LOGIC
function resetOutput() {
  $("#element1-clickbutton").hide();
  $(".all-triggers").hide();
  $(".all-element-details").hide();
}

function windowMove() {
  var myWindow = window.open("", "window position", "left=0, top=0, width=200, height=400");
  var winLeft = myWindow.screenLeft ? myWindow.screenLeft : myWindow.screenX;
  var winTop = myWindow.screenTop ? myWindow.screenTop : myWindow.screenY;

  myWindow.document.write("<p>Window Position");
  myWindow.document.write("<br><strong>Horizontal: </strong>" + winLeft);
  myWindow.document.write("<br><strong>Vertical: </strong>" + winTop + "</p>");
  myWindow.document.write("Drag me around and click the Window Position text again <hr>");
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

   $("li#element9-id").click(function() {
     resetOutput();
     $("#element9-trigger").show();
   });

   $("#element9-trigger").click(function() {
     $("#element9-details").show();
    //  function xy() {
    //    var myWindow = window.open("", "window position", "left=0, top=0, width=200, height=400");
    //    var winLeft = myWindow.screenLeft ? myWindow.screenLeft : myWindow.screenX;
    //    var winTop = myWindow.screenTop ? myWindow.screenTop : myWindow.screenY;
     //
    //    myWindow.document.write("<p>Window Position");
    //    myWindow.document.write("<br><strong>Horizontal: </strong>" + winLeft);
    //    myWindow.document.write("<br><strong>Vertical: </strong>" + winTop + "</p>");
    //    myWindow.document.write("Drag me around and click the Window Position text again <hr>");
    //  }
   });


});
