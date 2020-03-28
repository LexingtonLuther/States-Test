console.clear();
console.log("Hello world");
$("input").change(onChange);
let niceJob = document.getElementById("niceJob"),
    goodTry = document.getElementById("goodTry"),
    states = document.getElementById("states");

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  if (correct == response) {
    $(this)
      .removeClass("incorrect")
      .addClass("correct");
    niceJob.play();
    
  } else if (response=="") {
    $(this)
      .removeClass("incorrect")
      .removeClass("correct");
  } else {
    //goodTry.currentTime = 0;
    //goodTry.play();
    let start = $(this).data("start"),
        duration = $(this).data("duration");
    states.currentTime = start;
    states.play();
    setTimeout(function() {states.pause()},duration);
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
  }
}
function cheat() {
  var answer = document.getElementsByClassName("center");
  var box = document.getElementsByClassName("box");
  if (box[0].style.display != "none") {
    for (var i=0; i < answer.length; i++) {
      answer[i].style.display = "inline";
      answer[i].style.textAlign = "center";
      box[i].style.display = "none";
    }
  } else {
    for (var i=0; i < answer.length; i++) {
      answer[i].style.display = "none";
      box[i].style.display = "inline";
    }
  }
}