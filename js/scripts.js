//USER INTERFACE LOGIC
function resetOutput() {
  $("#element1-clickbutton").hide();
  $("#element1-details").hide();
}

$(document).ready(function() {

  // $(".list-elements").click(function(event) {
    // event.preventDefault();
    // $(".all-element-triggers").hide();
    // $(".all-element-details").hide();
  //   // var $this = $(this).parent().find('span');
  //   // $(".all-element-details p").not($this).hide();
  // });

  // $(".all-element-triggers").click(function() {
  //   $(".all-element-details").hide();
  // });

  $("li#element1-id").click(function() {
    // resetOutput();
    $("#element1-clickbutton").toggle();
  });

  $("button#element1-clickbutton").click(function() {
    $("div#element1-details").toggle();
  });

  $("li#element2-id").click(function() {
    // resetOutput();
    $("#element1-clickbutton").hide();
    $("#element1-details").hide();
    $("#element2-trigger").toggle();
  });

  $("#element2-trigger").click(function() {
    // $("#element1-clickbutton").hide();
    // $("#element1-details").hide();
    $("div#element2-details").toggle();
  });

});
