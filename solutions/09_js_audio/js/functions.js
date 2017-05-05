
var i = 0;


function loadNextAudio() {

  stim = stims[i];

  $("#audio-container").html(' \
  <audio controls> \
    <source src="audio/'+ stim.audio + '.ogg" type="audio/ogg"> \
    <source src="audio/'+ stim.audio + '.mp3" type="audio/mpeg"> \
  Your browser does not support the audio element. \
  </audio> \
  ');

  $("#title").text(stim.title);

  i = (i + 1) % stims.length;
}



$(document).ready(function() {
  loadNextAudio();
});
