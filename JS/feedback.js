var sliderInfor = document.getElementById("informative");
var outputInfor = document.getElementById("informativeOut");
outputInfor.innerHTML = sliderInfor.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderInfor.oninput = function() {
  outputInfor.innerHTML = this.value;
}


var sliderEasy = document.getElementById("easy")
var outputEasy = document.getElementById("easyOut");
outputEasy.innerHTML = sliderEasy.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderEasy.oninput = function() {
  outputEasy.innerHTML = this.value;
}