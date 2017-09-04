//RIP BIN

//JS by KibiiTV lol stop looking at the source looser
//Uses Jquery and JqueryUI
document.addEventListener('DOMContentLoaded', function () {
  var $about =  document.getElementById("about")
  var $contact = document.getElementById("contact")
  var $text = document.getElementById("text")
  var toggleT = false
  var toggleC = false
  var $contactinfo = document.getElementById("contactinfo")
  $(contactinfo).hide()
  $(text).hide()
  $about.addEventListener('click', function() {
      if($(contactinfo).css("display") == "block") {$(contactinfo).toggle("fold")}
    $(text).toggle("fold");

  })
  $contact.addEventListener('click', function() {
    if($(text).css("display") == "block") {$(text).toggle("fold")}
    $(contactinfo).toggle("fold")
  })})
