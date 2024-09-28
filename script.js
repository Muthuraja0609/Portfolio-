function myFunction() {
    document.body.classList.toggle("dark-mode");
    document.querySelector('.header').classList.toggle("dark-mode");
    document.querySelector('nav').classList.toggle("dark-mode");
    document.querySelector('.footer').classList.toggle("dark-mode");

    // Toggle dark mode for about, resume, and projects sections
    document.querySelector('.about').classList.toggle("dark-mode");
    document.querySelector('.resume').classList.toggle("dark-mode");
    document.getElementById('skills').classList.toggle('dark-mode');
    document.querySelector('.projects.grid').classList.toggle('dark-mode');
    document.querySelector('.contact').classList.toggle('dark-mode');

    let buttons = document.querySelectorAll('.button-lrn, .button-resume');
    buttons.forEach(button => button.classList.toggle("dark-mode"));

    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}


function validation(){
const Name = document.querySelector(".form-controls").value;
const email = document.querySelector(".form-controls1").value;
const message = document.querySelector(".form-controls2").value;
const nameerror = document.querySelector(".nameerror");
const emailerror = document.querySelector(".emailerror");
const messageerror = document.querySelector(".messageerror");
let isValid = true;

if(Name.trim() === ""){
    nameerror.textContent = "Invalid Name error";
    isValid=false;
}else{
    nameerror.textContent=""
}
const Emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-z]+\.[a-zA-Z]{2,4}$/;
if(email.trim()===""){
    emailerror.textContent="Enter valid Email";
    isValid=false;
}else{
    emailerror.textContent="";
}
if(message.trim()===""){
    messageerror.textContent="Enter message";
    isValid=false
}else{
    emailerror.textContent="";
}
if(isValid){
    alert("Form Submitted")
}else{
    alert("All Feilds are Manditory")

}
}


document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const checkFade = () => {
        const triggerBottom = window.innerHeight * 0.9;

        fadeElements.forEach((element) => {
            const boxTop = element.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkFade);
    checkFade();
});
