// Fade-in elements
function fadeHomeScreen() {
    var indexFade = document.getElementsByClassName("fadein"), i = 1;
    Object.values(indexFade).forEach(el => {
        setTimeout(() => {
            el.classList.add("visible")
        }, 1000*i)
        i++;
    });
}

window.addEventListener('load', () => { 
    fadeHomeScreen();
}, false);


// Acknowledgement of Country
var letter = 0;
var txt = 'Based on Turrbal and Yuggera land in Meanjin, I acknowledge the sovereignty and custodianship of Elders past, present, and emerging of the many Countries that make up Indigenous Australia.'
var speed = 125;

window.onload=function typeWriter() {
    if (letter < txt.length) {
        document.getElementById("Acknowledgement").innerHTML += txt.charAt(letter);
        letter++;
        setTimeout(typeWriter, speed);
    }
}

// Timeline


// Projects
filterSelection("all") // Execute the function and show all columns

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("card");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
    }
    } 
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var button = document.getElementsById("button-container")
var btns = button.getElementsByClassName("btn")
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}