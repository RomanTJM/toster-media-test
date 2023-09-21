// таймер

let time = 17476;
const countDown = document.getElementById("count-down");

setInterval(updateCount, 1000);

function updateCount() {
    let hours = Math.floor((time / (60 * 60)) % 24);
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = Math.floor((time / 60) % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countDown.innerHTML = `${hours}:${minutes}:${seconds}`;
    time--;
}

// Слайдер

let button = document.getElementsByClassName('slider-btn');
let buttonArea = document.getElementsByClassName('slider-block-btn')[0];
let slider = document.getElementsByClassName('slider-item');
let sliderIndex = 1;

showSlider(sliderIndex);

function showSlider(n) {
    if (n < 1) {
        sliderIndex = slider.length;
    } else if (n > slider.length) {
        sliderIndex = 1
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = 'none';
    }
    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('active');
    }
    slider[sliderIndex - 1].style.display = 'block';
    button[sliderIndex - 1].classList.add('active');
}

function currentSlide(n) {
    showSlider(sliderIndex = n);
}

buttonArea.onclick = function (e) {
    for (let i = 0; i < button.length + 1; i++) {
        if (e.target.classList.contains('slider-btn') && e.target == button[i - 1]) {
            currentSlide(i);
        }
    }
}
