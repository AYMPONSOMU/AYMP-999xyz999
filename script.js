const scenes = [
  { img: "images/bg_title_metamask.png", title: "Wallet Gateway", text: "Connect Your Cosmic Identity" },
  { img: "images/bg_cosmic_lobby.png", title: "AYMP Cosmic Kingdom", text: "The Journey Begins..." },
  { img: "images/bg_zodiac_gateway.png", title: "Choose Zodiac", text: "Select Your Destiny" },
  { img: "images/bg_aries_reveal.png", title: "Destiny Revealed", text: "Your Journey Starts" },
  { img: "images/bg_astro_consultation.png", title: "Astro Consultation", text: "Unlock Ancient Wisdom" },
  { img: "images/bg_zodiac_arena.png", title: "Zodiac Arena", text: "Prove Your Power" },
  { img: "images/bg_token_swap.png", title: "Token Realm", text: "XYZ → AYMP Path" }
];

let current = 0;

const scene = document.getElementById("scene");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const zodiacPanel = document.getElementById("zodiacPanel");
const destinyBtn = document.getElementById("destinyBtn");
const destinyResult = document.getElementById("destinyResult");
const powerArtImage = document.getElementById("powerArtImage");
const emblemBtn = document.getElementById("emblemBtn");
const infoModal = document.getElementById("infoModal");
const closeInfoBtn = document.getElementById("closeInfoBtn"); // இப்போது இது சரியாக வேலை செய்யும்
const langSelect = document.getElementById("langSelect");

function enableLandscapeFullscreen() {
    let element = document.documentElement;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (element.requestFullscreen) { element.requestFullscreen(); }
        else if (element.webkitRequestFullscreen) { element.webkitRequestFullscreen(); }
    }
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(err => console.log(err));
    }
}

function checkZodiacScene() {
    if (zodiacPanel) {
        zodiacPanel.style.display = (scenes[current].title === "Choose Zodiac") ? "block" : "none";
    }
}

function loadScene() {
    if (scene) scene.style.backgroundImage = `url('${scenes[current].img}')`;
    if (title) title.innerText = scenes[current].title;
    if (subtitle) subtitle.innerText = scenes[current].text;
    
    // Back பட்டன் லாஜிக் (index.html-ல் இருந்தால்)
    const backBtn = document.getElementById("backBtn");
    if (backBtn) backBtn.style.display = (current === 0) ? "none" : "block";
    
    checkZodiacScene();
}

loadScene();

document.getElementById("nextBtn").addEventListener("click", () => {
    current = (current + 1) % scenes.length;
    loadScene();
});

const backBtn = document.getElementById("backBtn");
if (backBtn) {
    backBtn.addEventListener("click", () => {
        current = (current - 1 + scenes.length) % scenes.length;
        loadScene();
    });
}

document.getElementById("entryBtn").addEventListener("click", () => {
    enableLandscapeFullscreen();
    document.getElementById("startScreen").style.display = "none";
});

if (destinyBtn) {
    destinyBtn.addEventListener("click", () => {
        const zodiac = document.getElementById("zodiacSelect").value;
        const name = document.getElementById("playerName").value;
        if (!zodiac || !name) {
            destinyResult.innerHTML = "Choose Zodiac and Enter Name";
            return;
        }
        destinyResult.innerHTML = `${name}<br>${zodiac}<br>Cosmic Path`;
        if (powerArtImage) { powerArtImage.src = "images/yantra.png"; powerArtImage.style.display = "block"; }
    });
}

// Modal Logic
if (emblemBtn && infoModal && closeInfoBtn) {
    emblemBtn.onclick = () => { infoModal.style.display = "block"; };
    closeInfoBtn.onclick = () => { infoModal.style.display = "none"; };
    window.onclick = (e) => { if (e.target === infoModal) infoModal.style.display = "none"; };
}

// Language Logic remains same...
// (இங்கே உங்கள் translations மற்றும் changeLanguage லாஜிக்கை அப்படியே வைத்துக்கொள்ளுங்கள்)
