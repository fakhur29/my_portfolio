// Mouse Glow

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav ul a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Scroll Animation

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

// Run immediately when page loads
window.addEventListener("load", revealSections);



// Typing Animation

const words = [
    "AI/ML Developer",
    "Python Developer",
    "Data Science Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.querySelector(".typing");

function type(){

    if(charIndex < words[wordIndex].length){

        typing.textContent +=
        words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,48); 

    }
    else{

        setTimeout(erase,1500); 

    }
}

function erase(){

    if(charIndex > 0){

        typing.textContent =
        words[wordIndex].substring(
            0,
            charIndex-1
        );

        charIndex--;

        setTimeout(erase,40); 

    }
    else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(type,200); 
    }
}

type();


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const sendBtn = document.getElementById("send-btn");

    sendBtn.innerHTML = "Sending...";
    sendBtn.disabled = true;

    emailjs.send(
        "service_d6fexgn",
        "template_nvrietj",
        {
            from_name: this.name.value,
            from_email: this.email.value,
            subject: this.subject.value,
            message: this.message.value
        }
    )
    .then(() => {

        alert("✅ Message sent successfully!");

        contactForm.reset();

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    })
    .catch(() => {

        alert("❌ Failed to send message.");

        sendBtn.innerHTML = "Send Message";
        sendBtn.disabled = false;

    });

});