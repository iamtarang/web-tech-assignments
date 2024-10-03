const text = "Welcome to the typewriter effect! This is created using DHTML and JavaScript.";
const speed = 50;

let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;