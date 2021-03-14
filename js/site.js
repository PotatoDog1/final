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
   "<h1>ALABAMA</h1>" +"<p>From Alabama State Code Action 16-40A-2:<br><br>“C. course materials and instruction that relate to sexual education or STDs should include:<br><br>8. An emphasis, in a factual manner and from a public health perspective, that homosexuality<br>is not a lifestyle acceptable to the general public and that homosexual conduct is a criminal<br>offense under the laws of the state.” Note that state to state criminalization of homosexuality<br>has been since undone. </p>"










 );
}
$('#AL').hover(alFunction);





function flFunction() {
 $("#spoutput").html(
   "<h1>FLORIDA</h1>"+"<p> Florida is one of many states required to emphasize the “benefits of monogamous, heterosexual marriage”<br>in schools. Florida schools are not required to teach sex education. If they choose to give further instruction<br>on HIV/AIDS, it must emphasize the “benefits of heterosexual marriage.” From the CDC School Health<br>Profiles:<br> <br>“53.4% of Florida secondary schools provided students with curricula or supplementary materials that<br> included HIV, STD, or pregnancy prevention information relevant to LGBTQ youth.”</p>"
);
}
$('#FL').hover(flFunction);



function ilFunction() {
 $("#spoutput").html(
   "<h1>ILLINOIS</h1>"+"<p>The Illinois curriculum isn’t required to be culturally responsive to the needs of young people of<br>color, or include instruction on sexual orientation or consent; it doesn’t have to include instruction<br>on sexual orientation or gender identity. Curriculum is required, however, to teach “honor and <br>respect” for monogamous heterosexual marriage. </p>"


);
}
$('#IL').hover(ilFunction);



function laFunction() {
 $("#spoutput").html(
   "<h1>LOUISIANA</h1>"+"<p>From the CDC School Health Profiles:<br><br> 19.5% of Louisiana secondary schools taught students about sexual <br>orientation in a required course in any of grades 6, 7, or 8. <br><br>31.5% of Louisiana secondary schools taught students about sexual<br>orientation in a required course in any of grades 9, 10, 11, or 12.</p>"


);
}
$('#LA').hover(laFunction);



function msFunction() {
 $("#spoutput").html(
   "<h1>MISSISSIPPI</h1>"+"<p>From Missississippi’s SIECUS state profile:<br><br>“Curriculum must inform students of current state law <br>related to homosexual activity. While Mississippi Code Annotated 97-29-59 outlaws sodomy, stating<br>that “Every person who shall be convicted of the detestable and abominable crime against nature<br>committed with mankind or with a beast, shall be punished by imprisonment in the penitentiary for<br>a term of not more than ten years”,  the United States Supreme Court handed down a decision in<br>Lawrence v. Texas that declared state laws criminalizing homosexual behavior to be unconstitutional<br>in just 2003.” </p>"



);
}
$('#MS').hover(msFunction);



function ncFunction() {
 $("#spoutput").html(
   "<h1>NORTH CAROLINA</h1>"+"<p>North Carolina curriculum doesn’t require instruction on sexual orientation or gender identity.<br>However, curriculum must teach that a “faithful monogamous heterosexual marriage is the<br>best lifelong means of avoiding STDs.”</p>"


);
}
$('#NC').hover(ncFunction);



function okFunction() {
 $("#spoutput").html(
   "<h1>OKLAHOMA</h1>"+"<p>Oklahoma curriculum doesn’t require instruction on sexual orientation or gender identity.<br><br>From Oklahoma Statutes  70-11-103.3:<br><br>“D) AIDS prevention education shall specifically teach students that:<br><br>Engaging in homosexual activity, promiscuous sexual activity, intravenous drug use, or<br>contact with contaminated blood products is now known to be primarily responsible for<br>contact with the AIDS virus;Avoiding the activities specified [above] is the only method<br>of preventing the spread of the virus;”</p>"



);
}
$('#OK').hover(okFunction);


function txFunction() {
 $("#spoutput").html(
   "<h1>TEXAS</h1>"+"<p>From Texas’s SIECUS state profile:<br><br>“If a school chooses to teach sex education and uses curriculum developed by the<br>Texas Department of State Health Services (DSHS), it must state that homosexuality<br>is not an acceptable lifestyle to the general public and that it is a criminal offense<br>under the Texas Penal Code. The United States Supreme Court handed down a<br>decision in Lawrence v. Texas that declared state laws criminalizing homosexual<br>behavior to be unconstitutional in 2003.” </p>"


);
}
$('#TX').hover(txFunction);



//state slots part 2



function gaFunction() {
 $("#spoutput").html(
   "<h1>GEORGIA</h1>"+"<p id=picadilly>From the CDC School Health Profiles:<br><br> “...37.6% of Georgia secondary schools provided students with curricula or <br>supplementary materials that included HIV, STD, or pregnancy prevention <br>information relevant to LGBTQ youth.”</p>"


);
}
$('#GA').hover(gaFunction);



function idFunction() {
 $("#spoutput").html(
   "<h1>INDIANA</h1>"+"<p>Indiana curriculum isn’t required to cover sexual orientation, gender<br> identity, or consent, among other topics. Indiana also doesn’t currently<br>have a standard for medically accurate sex ed instruction.   </p>"


);
}
$('#ID').hover(idFunction);




function kyFunction() {
 $("#spoutput").html(
   "<h1>KENTUCKY</h1>"+"<p> Kentucky, like many states, faces issues generated by of a lack of standards regarding <br>sex ed and adjacent topics due to mandated local control. This makes it easier to implement <br>material discriminatory against students LGBT students, students of color, etc. Instruction on <br>sexual orientation and gender identity is not required. </p>"



);
}
$('#KY').hover(kyFunction);





function miFunction() {
 $("#spoutput").html(
   "<h1>MICHIGAN</h1>"+"<p> Sex ed in Michigan isn't currenly required for high school students to graduate,<br> but is available as an elective. While Michigan notably requires health professionals<br> to supervise such classes, the material isn’t required to cover sexual orientation or<br> gender identity. </p>"



);
}
$('#MI').hover(miFunction);




function moFunction() {
 $("#spoutput").html(
   "<h1>MISSOURI</h1>"+"<p>  Like most of these states, Missouri doesn’t require sex education; it does <br>require health education, which doesn’t cover sexual orientation and gender<br> identity. According to the CDC School Health Profiles, only 44.3% of Missouri<br> secondary schools provided students with curricula or supplementary materials<br> that included HIV, STD, or pregnancy prevention information relevant to LGBTQ<br> youth.</p>"



);
}
$('#MO').hover(moFunction);



function ndFunction() {
 $("#spoutput").html(
   "<h1>NORTH DAKOTA</h1>"+"<p>Instruction on sexual orientation and gender identity is not required in <br>North Dakota. Like many of these states, North Dakota lacks standards<br> due to mandated local control, making it easier to implement material<br> discriminatory against students LGBT students.  </p>"



);
}
$('#ND').hover(ndFunction);





function ohFunction() {
 $("#spoutput").html(
   "<h1>OHIO</h1>"+"<p>According to the CDC State Health Profiles, only 42.4% of Ohio secondary schools <br>provided students with curricula or supplementary materials that included HIV, STD,<br> or pregnancy prevention information relevant to LGBTQ youth. </p>"



);
}
$('#OH').hover(ohFunction);



function scFunction() {
 $("#spoutput").html(
   "<h1>SOUTH CAROLINA</h1>"+"<p>From South Carolina’s SIECUS state profile:<br><br>“In 2020, the U.S. District Court for South Carolina declared S.C. Code <br>§ 59-32-30(A)(5) unconstitutional... [it] had previously prohibited districts<br> from including in their health education any “discussion of alternate sexual <br>lifestyles from heterosexual relationships including, but not limited to,<br> homosexual relationships except in the context of instruction <br>concerning sexually transmitted diseases...” </p>"


);
}
$('#SC').hover(scFunction);




function tnFunction() {
 $("#spoutput").html(
   "<h1>TENNESSEE</h1>"+"<p> As recently as 2021, House Bill 577 proposed prohibiting schools from <br>providing minors with information that promotes any “gateway sexual <br>activity” or “health messages that encourage students to experiment <br>with non-heterosexual sex.”</p>"


);
}
$('#TN').hover(tnFunction);




function utFunction() {
 $("#spoutput").html(
   "<h1>UTAH</h1>"+"<p>From Utah’s SIECUS state profile:<br><br>“Advocates in Utah have made incremental progress in advancing <br>sex education requirements across the state over the past four years.<br> In 2016, legislators successfully passed Senate Bill 196, sponsored by<br> Senator Stuart Adams, which removed sex education requirements that <br>prohibited instructors from discussing homosexuality in a positive manner…”  </p>"



);
}
$('#UT').hover(utFunction);




function wvFunction() {
 $("#spoutput").html(
   "<h1>WEST VIRGINIA</h1>"+"<p>From West Virginia’s SIECUS state profile:<br><br>“West Virginia advocates have taken significant steps to advance sex <br>education in recent years. Despite repeated legislative efforts to limit <br>access to reproductive heath care services, including abortion, and <br>attempts to ban sex education, progress has been made in the state. <br>Most recently, Representative Joe Jefferies introduced House Bill 4153 <br>in an ultimately unsuccessful effort to forbid displays related to sexuality <br>in public schools and, alarmingly, prohibit teaching sex education.”  </p>"



);
}
$('#WV').hover(wvFunction);




function vaFunction() {
 $("#spoutput").html(
   "<h1>VIRGINIA</h1>"+"<p>Virginia’s state standards are relatively comprehensive and thorough,<br> but still neglect a large part of their students in regards to including <br>instruction on sexual orientation and gender identity as a part of their <br>teaching standard.  </p>"


);
}
$('#VA').hover(vaFunction);


//end spoutput functions

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
