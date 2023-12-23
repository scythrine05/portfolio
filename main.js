import {gsap} from "gsap";

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

// let timeline = gsap.timeline();

// parallax_el.forEach(el => {

//     timeline.from(
//         el,
//         {
//             top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
//             duration: 1,
//         },
//         "1"
//     );
// })
