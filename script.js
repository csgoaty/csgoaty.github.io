//music functions - event handler
function playMusic1() {
    let audio = document.querySelector(".audio1");
    audio.play();
}
function pauseMusic1() {
    let audio = document.querySelector(".audio1");
    audio.pause();
}
//conditional
function resetMusic1() {
    let audio = document.querySelector(".audio1");
    audio.pause();
    if (audio.currentTime != 0) {
        audio.currentTime = 0
    }
}
document.querySelector(".btn1").addEventListener("click", playMusic1);
document.querySelector(".btn2").addEventListener("click", pauseMusic1);
document.querySelector(".btn3").addEventListener("click", resetMusic1);

//colour changer
function changeColour1() {
    let a = document.getElementById("main");
    let b = document.getElementById("h1");
    let c = document.getElementById("html");
    c.classList.add("html2");
    a.classList.add('main2');
    b.classList.add('h1-2');
}
function changeColour2() {
    let a = document.getElementById("main");
    let b = document.getElementById("h1");
    let c = document.getElementById("html");
    c.classList.add("html3");
    a.classList.add('main3');
    b.classList.add('h1-3');
}
function resetColour() {
    let a = document.getElementById("main");
    let b = document.getElementById("h1");
    let c = document.getElementById("html");
    a.classList.remove('main2');
    b.classList.remove('h1-2');
    c.classList.remove("html2");
    a.classList.remove('main3');
    b.classList.remove('h1-3');
    c.classList.remove("html3");
}
document.querySelector(".btn5").addEventListener("click", changeColour1);
document.querySelector(".btn6").addEventListener("click", changeColour2);
document.querySelector(".btn7").addEventListener("click", resetColour);


//notification

function notification1() {
    alert("Hello, Welcome to Faisal's Animal Showcase!\nThis is my Home page");
}
function notification2() {
    alert("Hello, Welcome to Faisal's Animal Showcase!\nThis is my Profile page");
}
function notification3() {
    alert("Hello, Welcome to Faisal's Animal Showcase!\nThis is my About Me page");
}

//improvement with js
let img1 = document.getElementById("assets/buddy_2.jpg");
function unfocusImg1() {
    let imagePet = document.getElementById("img1");
    imagePet.style.filter = 'blur(5px)';
}

img1.addEventListener("mouseout", unfocusImg1);
img1.addEventListener("load", unfocusImg1);

function focusImg1() {
    let imagePet = document.getElementById("img1");
    imagePet.style.filter = null;
}
img1.addEventListener("mouseover", focusImg1);


let img2 = document.getElementById("img2");
function unfocusImg2() {
    let imagePet = document.getElementById("img2");
    imagePet.style.filter = 'blur(5px)';
}

img2.addEventListener("mouseout", unfocusImg2);
img2.addEventListener("load", unfocusImg2);

function focusImg2() {
    let imagePet = document.getElementById("img2");
    imagePet.style.filter = null;
}
img2.addEventListener("mouseover", focusImg2);

let img3 = document.getElementById("img3");
function unfocusImg3() {
    let imagePet = document.getElementById("img3");
    imagePet.style.filter = 'blur(5px)';
}

img3.addEventListener("mouseout", unfocusImg3);
img3.addEventListener("load", unfocusImg3);

function focusImg3() {
    let imagePet = document.getElementById("img3");
    imagePet.style.filter = null;
}
img3.addEventListener("mouseover", focusImg3);

let img4 = document.getElementById("img4");
function unfocusImg4() {
    let imagePet = document.getElementById("img4");
    imagePet.style.filter = 'blur(5px)';
}

img4.addEventListener("mouseout", unfocusImg4);
img4.addEventListener("load", unfocusImg4);

function focusImg4() {
    let imagePet = document.getElementById("img4");
    imagePet.style.filter = null;
}
img4.addEventListener("mouseover", focusImg4);

