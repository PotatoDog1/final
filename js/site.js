/**
 * Author:
 * Created:
 *
 * (c) Copyright
 **/

 //Topic 1: clickable flags
   //click on flag images to make text appear
   $(".popuptext").on('click', function () {
       $(this).children(".hidden").toggle();
   });



//Topic 2: these functions trigger the variable html within #spoutput

function alFunction() {
 $("#spoutput").html(
   "<h1>ALABAMA</h1>");
}
$('#AL').hover(alFunction);





function flFunction() {
  $("#FL").style.color= "red";
 $("#spoutput").html(
   "<h1>FLORIDA</h1>"


);
}
$('#FL').hover(flFunction);



function ilFunction() {
 $("#spoutput").html(
   "<h1>ILLINOIS</h1>"


);
}
$('#IL').hover(ilFunction);



function laFunction() {
 $("#spoutput").html(
   "<h1>LOUISIANA</h1>"


);
}
$('#LA').hover(laFunction);



function msFunction() {
 $("#spoutput").html(
   "<h1>MISSISSIPPI</h1>"


);
}
$('#MS').hover(msFunction);



function ncFunction() {
 $("#spoutput").html(
   "<h1>NORTH CAROLINA</h1>"


);
}
$('#NC').hover(ncFunction);



function okFunction() {
 $("#spoutput").html(
   "<h1>OKLAHOMA</h1>"


);
}
$('#OK').hover(okFunction);


function txFunction() {
 $("#spoutput").html(
   "<h1>TEXAS</h1>"


);
}
$('#TX').hover(txFunction);



//state slots part 2



function gaFunction() {
 $("#spoutput").html(
   "<h1>GEORGIA</h1>"


);
}
$('#GA').hover(gaFunction);



function idFunction() {
 $("#spoutput").html(
   "<h1>INDIANA</h1>"


);
}
$('#ID').hover(idFunction);




function kyFunction() {
 $("#spoutput").html(
   "<h1>KENTUCKY</h1>"


);
}
$('#KY').hover(kyFunction);





function miFunction() {
 $("#spoutput").html(
   "<h1>MICHIGAN</h1>"


);
}
$('#MI').hover(miFunction);




function moFunction() {
 $("#spoutput").html(
   "<h1>MISSOURI</h1>"


);
}
$('#MO').hover(moFunction);



function ndFunction() {
 $("#spoutput").html(
   "<h1>NORTH DAKOTA</h1>"


);
}
$('#ND').hover(ndFunction);





function ohFunction() {
 $("#spoutput").html(
   "<h1>OHIO</h1>"


);
}
$('#OH').hover(ohFunction);



function scFunction() {
 $("#spoutput").html(
   "<h1>SOUTH CAROLINA</h1>"


);
}
$('#SC').hover(scFunction);




function tnFunction() {
 $("#spoutput").html(
   "<h1>TENNESSEE</h1>"


);
}
$('#TN').hover(tnFunction);




function utFunction() {
 $("#spoutput").html(
   "<h1>UTAH</h1>"


);
}
$('#UT').hover(utFunction);

function wvFunction() {
 $("#spoutput").html(
   "<h1>WEST VIRGINIA</h1>"


);
}
$('#WV').hover(wvFunction);




function vaFunction() {
 $("#spoutput").html(
   "<h1>VIRGINIA</h1>"


);
}
$('#VA').hover(vaFunction);

//end state slots

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//toggling visibility of panels 1-6 for topic 3
$("#flip1").click(function() {
  $("#panel1").toggle();
})

$("#flip2").click(function() {
  $("#panel2").toggle();
})

$("#flip3").click(function() {
  $("#panel3").toggle();
})

$("#flip4").click(function() {
  $("#panel4").toggle();
})

$("#flip5").click(function() {
  $("#panel5").toggle();
})
$("#flip6").click(function() {
  $("#panel6").toggle();
})
