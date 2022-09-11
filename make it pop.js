
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