
// Nav Bar
const nav = document.querySelector('nav')
fetch('/nav.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

// Footer
const footer = document.querySelector('footer')
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})

// Slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slideshow-image");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("", "");
}
x[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += "";
}
