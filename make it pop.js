
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

const skrllr = new Skrllr('main', {
    // child container
    container: 'section',
    // easing function
    easing: 'ease',
    // transition time in ms
    transitionTime: 1000,
    // shows pagination
    pagination: true,
    // custom menu
    menu: null,
    // auto update url when switching
    updateURL: false,
    // callback functions
    beforeTransition: null,
    afterTransition: null
    
})

// Fade in elements

const callback = function (entries) {

    entries.forEach((entry) => {
      // console.log(entry);
        if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
    }
    });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
});


  // Fade out "scroll down" arrow
const target = document.querySelector('#theTarget');
const arrrow = document.getElementById("scroll-arrow")

document.addEventListener('scroll', () => {
    if (window.scrollY >= target.getBoundingClientRect().top) {
        scroll-arrrow.classList.add("animate-fadeOut");
        scroll-arrrow.classList.add("opacity-0");
    }
})