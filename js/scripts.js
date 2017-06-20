//USER INTERFACE LOGIC
function resetOutput() {
  $("#element1-clickbutton").hide();
  $("#element1-details").hide();
  $("#element2-trigger").hide();
  $("#element2b-trigger").hide();
  $("#element2-details").hide();
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

});
