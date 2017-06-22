//BUSINESS LOGIC

function windowMove() {
  var myWindow = window.open("", "window position", "left=0, top=0, width=200, height=400");
  var winLeft = myWindow.screenLeft ? myWindow.screenLeft : myWindow.screenX;
  var winTop = myWindow.screenTop ? myWindow.screenTop : myWindow.screenY;

  myWindow.document.write("<p>Window Position");
  myWindow.document.write("<br><strong>Horizontal: </strong>" + winLeft);
  myWindow.document.write("<br><strong>Vertical: </strong>" + winTop + "</p>");
  myWindow.document.write("Drag me around and click the Window Position text again <hr>");
}

function newMap(inputLatitude, inputLongitude) {
var mapProp= {
    center:new google.maps.LatLng(inputLatitude,inputLongitude),
    zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

}

function createRandomNumber() {
  var x = Math.floor((Math.random() * 100) + 1);
  return x;
}

function circle(radius) {
  this.radius = radius;
  return Math.PI * (this.radius * this.radius);
}
function pieArea(inputRadius) {
//  var inputRadius = $("input#diameter").val()/2;
  var pieAreaResult = circle(inputRadius);
  return Math.round(pieAreaResult);
}

var colorWell
var defaultColor = "#ff0000";

window.addEventListener("load", startup, false);
function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
  $("#color-code").text(colorWell.value);
}
function updateFirst(event) {
 var p = document.querySelector("#color-paragraph");

 if (p) {
   p.style.color = event.target.value;
 }
}
function updateAll(event) {
 document.querySelectorAll("#color-paragraph").forEach(function(p) {
   p.style.color = event.target.value;
   //alert(colorWell.value);
  $("#color-code").text(colorWell.value);

 });
}
///////////////////////////QUIZ LOGIC
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";
var answer5 = "";

var question = 0;
var answer = "";
var correct = false;

function findAnswers(questionNumber, answerNumber) {

  if (questionNumber === 1) {
    if(answerNumber === "ob") {
      return true;
    }
    else if(answerNumber === "oa" || answerNumber === "oc") {
      return false;
    }
  }
  if (questionNumber === 2) {
    if(answerNumber === "2b") {
      return true;
    }
    else if(answerNumber === "2a") {
      return false;
    }
  }
  if (questionNumber === 3) {
    if(answerNumber === "3b") {
      return true;
    }
    else if(answerNumber === "3a" || answerNumber === "3c") {
      return false;
    }
  }
  if (questionNumber === 4) {
    if(answerNumber === "4c") {
      return true;
    }
    else if(answerNumber === "4b" || answerNumber === "4a") {
      return false;
    }
  }
  if (questionNumber === 5) {
    if(answerNumber === "5a") {
      return true;
    }
    else if(answerNumber === "5b" || answerNumber === "5c") {
      return false;
    }
  }
}

function resetQuiz() {
  question = 0;
  answer = "";
  correct = false;
}

//USER INTERFACE LOGIC
function resetOutput() {
  $("#element1-clickbutton").hide();
  $(".all-triggers").hide();
  $(".all-element-details").hide();
}


$(document).ready(function() {
//$("#introPage").hide();
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
      $("#element6-trigger").append('<p class="bg-ping-pong"><marquee direction="down" width="210" height="35" behavior="alternate">'+bounce+'</p');
      $("#element6-details").show();
   });

   $("li#element7-id").click(function() {
     resetOutput();
     $("#element7-trigger").show();
     $("#element7-details").show();
   });

  //  $("#element7-trigger").click(function() {
  //    //$("#element7-details").show();
  //   //  $("span#mm").text(event.pageX + ", " + event.pageY);
  //  });

   $(document).mousemove(function(event){
     $("span#mm").text(event.pageX + ", " + event.pageY);
   });

   $("li#element8-id").click(function() {
     resetOutput();
     $("#element8-trigger").show();
   });

   $("#element8-trigger").click(function() {
    //  $("#element8-details").show();
     $("p#element8-trigger").mousedown(function(){
       $("#mud").text('MOUSE CLICKED.');
       $("#element8-details").show();
       $("#element8-img1").show();
       $("#element8-img2").hide();
     });
     $("p#element8-trigger").mouseup(function() {
       $("#mud").text('MOUSE RELEASED.');
       $("#element8-details").hide();
       $("#element8-img2").show();
       $("#element8-img1").hide();
     });
   });

   $("li#element9-id").click(function() {
     resetOutput();
     $("#element9-trigger").show();
   });

   $("#element9-trigger").click(function() {
     $("#element9-details").show();
   });

   $("li#element10-id").click(function() {
     $("input#latitude").val('');
     $("input#longitude").val('');
     resetOutput();
     $("#element10-trigger").show();
     myMap();
     $("#element10-details").show();
   });

   $("#map-button").click(function() {
     var inputLatitude = parseFloat($("input#latitude").val());
     var inputLongitude = parseFloat($("input#longitude").val());
     newMap(inputLatitude, inputLongitude);
   });

   $("li#element11-id").click(function() {
     resetOutput();
     $("#element11-trigger").show();
   });

   $("#random-button").click(function() {
     $("#element11-details").show();
     var randomNumber = createRandomNumber();
     $("#random-number-output").text(randomNumber);
   });

   $("li#element12-id").click(function() {
     resetOutput();
     $("#element12-trigger").show();
     $("#element12-details").show();
   });

   $("#pie-button").click(function() {
      var inputRadius = parseFloat($("input#diameter").val())/2;
     $("#area-output").text(pieArea(inputRadius));
   });

   $("li#element13-id").click(function() {
     resetOutput();
     $("#element13-trigger").show();
     $("#element13-details").show();
     //$("#color-code").text(colorWell.value);
   });

   //////////////////////////////////////////////QUIZ SCRIPTS
   $("#quiz-button").click(function() {
   resetOutput();
   resetQuiz();
$("#whole-quiz").toggle();
$("#introPage").toggle();
// $('input[name=quest1]').attr('checked',false);
// $('input[name=quest2]').attr('checked',false);
// $('input[name=quest3]').attr('checked',false);
// $('input[name=quest4]').attr('checked',false);
// $('input[name=quest5]').attr('checked',false);

   //Get the input from the user
     // var question1 = $("input:radio[name='quest1']:checked").val();
     // var question2 = $("input:radio[name='quest2']:checked").val();
     // var question3 = $("input:radio[name='quest3']:checked").val();

   $("#startButton").click(function() {
     $("#introPage").hide();
     //$("form#questionOneForm").show();
     $("#questionOne").fadeIn(700);

   });

   $("#questionOneForm").submit(function(event) {
     event.preventDefault();
     answer = $("input:radio[name='quest1']:checked").val();
     question = 1;
     correct = findAnswers(question, answer);
      //findAnswers(1, answer1);
     if (correct === true) { alert("Correct!");} else {alert("Wrong!");}
     $("#introPage").hide();
     // var question1 = $("input:radio[name='quest1']:checked").val();
     resetQuiz();

     $("#questionOne").hide( "slide", {direction: "left"}, 200);
     $("#questionTwo").delay(250).show( "slide", {direction: "right"}, 200);


   });

   $("#questionTwoForm").submit(function(event) {
     event.preventDefault();

     answer = $("input:radio[name='quest2']:checked").val();
     question = 2;
     correct = findAnswers(question, answer);
      //findAnswers(1, answer1);
     if (correct === true) { alert("Correct!");} else {alert("Wrong!");}

     resetQuiz();
      $("#introPage").hide();
      $("#questionOne").hide();
      $("#questionTwo").hide( "slide", {direction: "left"}, 200);
     $("#questionThree").delay(250).show( "slide", {direction: "right"}, 200);
   });

   $("#questionThreeForm").submit(function(event) {
     event.preventDefault();

     answer = $("input:radio[name='quest3']:checked").val();
     question = 3;
     correct = findAnswers(question, answer);
      //findAnswers(1, answer1);
     if (correct === true) { alert("Correct!");} else {alert("Wrong!");}
     resetQuiz();
      $("#introPage").hide();
    $("#questionOne").hide();
     $("#questionTwo").hide();
     $("#questionThree").hide( "slide", {direction: "left"}, 200);
     $("#questionFour").delay(250).show( "slide", {direction: "right"}, 200);

 });
 $("#questionFourForm").submit(function(event) {
   event.preventDefault();

   answer = $("input:radio[name='quest4']:checked").val();
   question = 4;
   correct = findAnswers(question, answer);
    //findAnswers(1, answer1);
   if (correct === true) { alert("Correct!");} else {alert("Wrong!");}
   resetQuiz();
   // $("#introPage").hide();
   // $("#questionOne").hide();
   // $("#questionTwo").hide();
   // $("#questionThree").hide();
   // $("#questionTwo").hide();
   $("#questionFour").hide( "slide", {direction: "left"}, 200);
   $("#questionFive").delay(250).show( "slide", {direction: "right"}, 200);

 });
 $("#questionFiveForm").submit(function(event) {
   event.preventDefault();
   answer = $("input:radio[name='quest5']:checked").val();
   question = 5;
   correct = findAnswers(question, answer);
    //findAnswers(1, answer1);
   if (correct === true) { alert("Correct!");} else {alert("Wrong!");}
   resetQuiz();
   // $("#introPage").hide();
   // $("#questionOne").hide();
   // $("#questionTwo").hide();
   // $("#questionThree").hide();
   // $("#questionFour").hide();
   $("#questionFive").hide( "slide", {direction: "left"}, 200);
   $("#thankyou").delay(250).show( "slide", {direction: "right"}, 200);
   // $('#ending').effect( 'bounce', { times: 3 }, 'slow');
 });

 $("#thankyouForm").submit(function(event) {
   event.preventDefault();

   // $('#ending').effect( 'bounce', { times: 3 }, 'slow');
   $('#ending').click(function() {
     // alert('alert!');
     $(this).effect( 'bounce', { times: 3 }, 'slow');

   });
   // $("#introPage").hide();
   // $("#questionOne").hide();
   // $("#questionTwo").hide();
   // $("#questionThree").hide();
   $("#thankyou").hide( "slide", {direction: "left"}, 200);
   $("#answers").delay(250).show( "slide", {direction: "right"}, 200);
 });
 $("#answersForm").submit(function(event) {
   event.preventDefault();
   $("#introPage").delay(250).show( "slide", {direction: "right"}, 200);
   // $("#questionOne").hide();
   // $("#questionTwo").hide();
   // $("#questionThree").hide();
   // $("#thankyou").hide();
   $("#answers").hide( "slide", {direction: "left"}, 200);
 });
 });


 });
