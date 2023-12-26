import { gsap } from "gsap";

const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0, yValue = 0;

function update(){

    parallax_el.forEach((el) => {

        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

update();

window.addEventListener("mousemove", (e) => {

    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;

    update();
});

if(window.innerWidth >= 725){

    main.style.maxHeight = `${window.innerWidth * 0.5}px`;
}
else {

    main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}


const cursor = document.getElementById('cursor');

window.addEventListener("mousemove", e  => {

    const xPos = e.clientX;
    const yPos = e.clientY;

    cursor.style.left = `${xPos}px`;
    cursor.style.top = `${yPos}px`;

})


// GSAP Animation

parallax_el.forEach((el) => {

    gsap.from(el,{
        top : `${el.dataset.location}px`,
        duration: el.dataset.duration,
    })

});

gsap.from('.main-text',{
    top : -100,
    duration: 1,
})
