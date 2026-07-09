window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.75)";
        nav.style.backdropFilter = "blur(18px)";
        nav.style.boxShadow = "0 12px 30px rgba(0,0,0,.35)";

    } else {

        nav.style.background = "rgba(0,0,0,.15)";
        nav.style.boxShadow = "none";

    }

});



const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 14;
        const rotateX = ((y / rect.height) - 0.5) * -14;

        card.style.transform =
            `translateY(-12px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) rotateX(0deg) rotateY(0deg)";

    });

});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});



document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s ease";

    observer.observe(card);

});



const buttons = document.querySelectorAll(".btn1, .btn2, .bottom button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});



const heroImage = document.querySelector(".right img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

const modal=document.getElementById("orderModal");

document.getElementById("openModal").onclick=function(e){

    e.preventDefault();

    modal.style.display="flex";

}

document.querySelector(".close").onclick=function(){

    modal.style.display="none";

}

window.onclick=function(e){

    if(e.target==modal){

        modal.style.display="none";

    }

}

let count=1;

const countText=document.getElementById("count");

document.getElementById("plus").onclick=function(){

    count++;

    countText.innerText=count;

}

document.getElementById("minus").onclick=function(){

    if(count>1){

        count--;

        countText.innerText=count;

    }

}