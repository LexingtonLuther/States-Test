console.clear();
var time = 0;
$("input").change(onChange);
let niceJob = document.getElementById("niceJob"),
    goodTry = document.getElementById("goodTry"),
    states = document.getElementById("states");

function onChange(evt) {
  let correct = $(this).data("correct");
  let response = $(this).val();
  let state = this;
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
    $(this)
      .removeClass("correct")
      .addClass("incorrect");
    goodTry.load();
    goodTry.play();
    time = 0;
    var timer = setInterval(function(){
      time += 1;
      if(time == 3) {
        let start = $(state).data("start"),
            duration = $(state).data("duration");
        //states.load();
        states.currentTime = start;
        states.play();
        setTimeout(function() {states.pause()},duration);
        clearInterval(timer);
      }
    }, 1000);
  }
}

function cheat() {
  var answer = document.getElementsByClassName("center");
  var box = document.getElementsByClassName("box");
  if (box[0].style.display != "none") {
    for (var i=0; i < answer.length; i++) {
      answer[i].style.display = "inline";
      answer[i].style.textAlign = "center";
      console.log(answer[i]);
      box[i].style.display = "none";
    }
  } else {
    for (var i=0; i < answer.length; i++) {
      answer[i].style.display = "none";
      box[i].style.display = "inline";
    }
  }
}