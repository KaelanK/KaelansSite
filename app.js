'use strict';

const switcher = document.querySelector('.btn')
/* switcher references the button for the javascript file */
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

const drtbtn = document.getElementById("drtbtn");
const cudabtn = document.getElementById("cudabtn");
const Hbtn = document.getElementById("Hbtn");

if (drtbtn) {
    drtbtn.addEventListener('click', function() {
        window.location.href = "dartgame.html"
        console.log('click recieved for dart game button');
    })
}

if (cudabtn) {
    cudabtn.addEventListener('click', function() {
        window.location.href = "cudaED.html"
        console.log('click recieved for cuda button');
    })    
}

if (Hbtn) {
    Hbtn.addEventListener('click', function() {
        window.location.href = "index.html"
        console.log('click recieved for home button');
    })
}
