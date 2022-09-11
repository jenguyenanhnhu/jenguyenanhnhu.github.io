
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

$(document).ready(function() {
    $('#fullpage').fullpage();
});
