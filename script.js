const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var slidd = function(manual){
    btns.forEach((btn)=>{
        btn.classList.remove("active");
    });
    slides.forEach((sliders)=>{
        slides.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides.classList.add("active");
};