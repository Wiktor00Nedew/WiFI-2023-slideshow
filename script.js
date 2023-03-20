let slideIndex = 0;
showSlides();
let changeInterval = setInterval(showSlides, 8000);
let timeoutTime;

let wifiDate = new Date("Thu Mar 23 09:00:00 UTC+1 2023")

updateCounter();
setInterval(updateCounter, 1000);

let interval = window.setInterval(trackClick, 100);
let i = 0;
function trackClick() {
    if(document.activeElement == document.querySelector("#schedule")) {
        clearInterval(changeInterval);

        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        document.getElementById("pageSlide").style.display = "block";

        clearTimeout(timeoutTime);
        timeoutTime = setTimeout(function() {slides[slideIndex-1].style.display = "block"; document.getElementById("pageSlide").style.display = "none"; changeInterval = setInterval(showSlides, 8000);}, 40000);
        window.focus();
    }
}
function showSlides() {
        start = Date.now();

        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}

        slides[slideIndex-1].style.display = "block";
}

function updateCounter() {
    let difference = wifiDate.getTime() - Date.now();

    difference /= 1000;

    var numdays = Math.floor((difference % 31536000) / 86400);
    var numhours = Math.floor(((difference % 31536000) % 86400) / 3600);
    var numminutes = Math.floor((((difference % 31536000) % 86400) % 3600) / 60);
    var numseconds = Math.floor((((difference % 31536000) % 86400) % 3600) % 60);

    if (difference < 0) {
        document.getElementById("text").innerText = "WiFI już trwa, wybierz atrakcję dla siebie!";
    }
    else {
        document.getElementById("text").innerText = numdays + " Dni, " + numhours + " Godzin, " + numminutes + " Minut, " + numseconds + " Sekund";
    }
}

addEventListener("click", (event) => {
    clearInterval(changeInterval);

    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    document.getElementById("pageSlide").style.display = "block";
    document.getElementsByClassName("page")[0].src = "https://wisniowasu.pl/wifi/2023/schedule";

    clearTimeout(timeoutTime);
    timeoutTime = setTimeout(function() {slides[slideIndex-1].style.display = "block"; document.getElementById("pageSlide").style.display = "none"; changeInterval = setInterval(showSlides, 8000);}, 40000);
});