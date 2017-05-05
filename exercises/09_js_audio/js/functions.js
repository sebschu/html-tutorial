
var i = 0;


function loadNextAudio() {

  stim = stims[i];
  
  //your code goes here

  i = (i + 1) % stims.length;
}



$(document).ready(function() {
  loadNextAudio();
});
