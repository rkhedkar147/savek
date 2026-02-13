// 1. LOGIN LOGIC
function verifyUser() {
    const name = document.getElementById('name-input').value.trim();
    const error = document.getElementById('error-msg');
    
    if (name.toLowerCase() === "vivek") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-app').style.display = 'block';
    } else if (name.toLowerCase() === "shah rukh khan" || name.toLowerCase() === "srk") {
        error.innerText = "Nice try 😄 but this system knows its developer.";
    } else if (name === "") {
        error.innerText = "Nothing entered! Even the system needs *something* 😊";
    } else {
        error.innerText = "Hmm… that doesn’t look right, but nice guess 🙂";
    }
}


// 2. MOOD CHECK LOGIC (replaces slider entirely)
const moods = [
    "Radiance that lights up the room ✨",
    "Eyes that hold a thousand stories 🌟",
    "A smile more beautiful than sunrise 🌅",
    "Grace in every gesture 💃",
    "Beauty that inspires poetry 📝"
];

let moodIndex = 0;

function checkMood() {
    const label = document.getElementById("mood-label");
    label.innerText = moods[moodIndex];
    moodIndex = (moodIndex + 1) % moods.length;
}

const noBtn = document.getElementById('no-btn');

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveButton();
});


// 4. CELEBRATION
function celebrate() {
    document.getElementById('celebration').style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('celebration').style.display = 'none';
}
