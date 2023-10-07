// check name
var userName = prompt("Masukan nama kamu dibawah!");
document.getElementById("username").innerText = userName;

// toggle the mobile menu
document.querySelector('.menu-icon').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});

// modal image
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// close when click
window.onclick = function (event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

// sliders
let slideIndex = 1;
plusSlide(1);
function plusSlide(n) {
    showImg((slideIndex += n));
}

console.log(slideIndex);

function showImg(n) {
    let i;
    let imgList = document.getElementsByClassName("img-content");
    // console.log(imgList.length);
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";

    console.log(slideIndex);
}