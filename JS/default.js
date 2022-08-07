//Toggles Dark mode light mode by setting color styles,background color styles, boostrap class for some
function dark_light() {
    var element = document.body
    var toggle = document.getElementsByClassName("toggle")
    var special = document.getElementsByClassName("special")
    var icon = document.getElementById("dl-logo")
    var nav = document.getElementById("mainNav")
    var table = document.querySelector("#timetable")
    element.classList.toggle("dark-mode")
    if (icon.innerHTML == "<img src=\"./Icons/dark.svg\" width=\"35px\" height=\"35px\">") {
        icon.innerHTML = "<img src = \"./Icons/brightness.png\" width = \"35px\" height = \"35px\">"
        changeColor(toggle, "white")
        changeBGColor(special, "rgb(35,35,35)")
        nav.style.backgroundColor = "black"
        if (table != null){
            table.classList.remove("table-light")
            table.classList.add("table-dark")
        }
        
    }
    else {
        icon.innerHTML = "<img src = \"./Icons/dark.svg\" width = \"35px\" height = \"35px\">"
        changeColor(toggle, "black")
        changeBGColor(special, "white")
        nav.style.backgroundColor = "white"
        if (table != null){
            table.classList.remove("table-dark")
            table.classList.add("table-light")
        }
        
    }

}
// Change all color of elements under the class 
function changeColor(coll, color) {
    for (var i = 0; i < coll.length; i++) {
        coll[i].style.color = color
    }
}
// Change all background color of elements under class
function changeBGColor(coll, color) {
    for (var i = 0; i < coll.length; i++) {
        coll[i].style["background-color"] = color
    }
}
// Animation if users viewbox intersects element
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.style.animationDuration = '1.5s';
            entry.target.style.animationName = 'fadeInUp';
        }
    });
});

for (var i of document.querySelectorAll('#Page-1,#Page-2,#Page-3,#Page-4,#Page-5,#Page-6')) {
    observer.observe(i)
}


// Clock
setInterval(function () {
    var hours = new Date().getHours();
    document.getElementById("hours").innerHTML = ((hours < 10 ? "0" : "") + hours);
}, 1000);

setInterval(function () {
    var minutes = new Date().getMinutes();
    document.getElementById("min").innerHTML = ((minutes < 10 ? "0" : "") + minutes);
}, 1000);

setInterval(function () {
    var seconds = new Date().getSeconds();
    document.getElementById("sec").innerHTML = ((seconds < 10 ? "0" : "") + seconds);
}, 1000);

