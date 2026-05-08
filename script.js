
function changeText() {
    document.querySelector('p').innerText = "You clicked the button!";
}
console.log("Portfolio Website Loaded Successfully");


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if(window.scrollY >= sectionTop){
            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
        }

    });

});


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

});

