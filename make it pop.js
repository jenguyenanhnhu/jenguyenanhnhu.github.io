
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
var i = 0;
var txt = 'Based on Turrbal and Yuggera land in Meanjin, I acknowledge the sovereignty and custodianship of Elders past, present, and emerging of the many Countries that make up Indigenous Australia.'
var speed = 125;

window.onload=function typeWriter() {
    if (i < txt.length) {
        document.getElementById("Acknowledgement").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
// // Nav Bar
// const header = document.querySelector('nav')
// fetch('/nav.html')
// .then(res=>res.text())
// .then(data=>{
//     nav.innerHTML=data
// })

// // Footer
// const footer = document.querySelector('footer')
// fetch('/footer.html')
// .then(res=>res.text())
// .then(data=>{
//     footer.innerHTML=data
// })


// // Fade in elements

// const callback = function (entries) {

//     entries.forEach((entry) => {
//       // console.log(entry);
//         if (entry.isIntersecting) {
//         entry.target.classList.add("animate-fadeIn");
//     }
//     });
// };

// const observer = new IntersectionObserver(callback);

// const targets = document.querySelectorAll(".js-show-on-scroll");
// targets.forEach(function (target) {
//     target.classList.add("opacity-0");
//     observer.observe(target);
// })