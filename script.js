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
const closeInfoBtn = document.getElementById("closeInfoBtn");
const langSelect = document.getElementById("langSelect");

// மொழி தரவுகள் (புதிய வருமான விவரங்களுடன்)
const translations = {
    en: {
        mainTitle: "🪐 AYMP WHITEPAPER",
        sec1Title: "🎯 Core Purpose",
        sec1Text: "AYMP Cosmic Kingdom bridges Vedic Astrology with Web3.",
        sec2Title: "🎮 Play & Rewards",
        sec2List: "<li>Connect Wallet</li><li>Choose Zodiac</li><li>Generate Yantra</li><li>Daily Bonus & Referral (10% extra)</li>",
        sec3Title: "💰 Income & Tokens",
        sec3Text: "Holding 999xyz999 & AYMP ensures long-term growth and passive income. Start now to secure your future.",
        sec4Title: "📋 Contracts: 0x6D85...4EA1 (AYMP) | 0xDF09...4AA7 (XYZ)"
    },
    ta: {
        mainTitle: "🪐 AYMP ஒயிட்பேப்பர்",
        sec1Title: "🎯 முதன்மை நோக்கம்",
        sec1Text: "வேத ஜோதிடத்தையும் Web3 தொழில்நுட்பத்தையும் இணைக்கும் தளம்.",
        sec2Title: "🎮 விளையாட்டு மற்றும் ரிவார்டுகள்",
        sec2List: "<li>வாலட் இணையுங்கள்</li><li>ராசியைத் தேர்ந்தெடுங்கள்</li><li>யந்திரம் உருவாக்குங்கள்</li><li>தினசரி போனஸ் மற்றும் ரெஃபரல் மூலம் 10% லாபம்</li>",
        sec3Title: "💰 வருமானம் மற்றும் எதிர்காலம்",
        sec3Text: "999xyz999 மற்றும் AYMP டோக்கன்களை வைத்திருப்பது நீண்டகால வளர்ச்சியைத் தரும். இப்போதே இணைந்து வருமானத்தை உறுதி செய்யுங்கள்.",
        sec4Title: "📋 ஒப்பந்தங்கள்: 0x6D85...4EA1 (AYMP) | 0xDF09...4AA7 (XYZ)"
    }
    // இதே பாணியில் மற்ற மொழிகளையும் இங்கே சேர்க்கவும்...
};

function enableLandscapeFullscreen() {
    let element = document.documentElement;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (element.requestFullscreen) element.requestFullscreen();
        else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    }
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(err => console.log(err));
}

function loadScene() {
    if (scene) scene.style.backgroundImage = `url('${scenes[current].img}')`;
    if (title) title.innerText = scenes[current].title;
    if (subtitle) subtitle.innerText = scenes[current].text;
    const backBtn = document.getElementById("backBtn");
    if (backBtn) backBtn.style.display = (current === 0) ? "none" : "block";
    if (zodiacPanel) zodiacPanel.style.display = (scenes[current].title === "Choose Zodiac") ? "block" : "none";
}

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

// Modal & Language Logic
if (emblemBtn && infoModal && closeInfoBtn) {
    emblemBtn.onclick = () => { infoModal.style.display = "block"; };
    closeInfoBtn.onclick = () => { infoModal.style.display = "none"; };
    window.onclick = (e) => { if (e.target === infoModal) infoModal.style.display = "none"; };
}

langSelect.onchange = function() {
    const lang = langSelect.value;
    const t = translations[lang];
    document.getElementById("modalMainTitle").innerText = t.mainTitle;
    document.getElementById("sec1Title").innerText = t.sec1Title;
    document.getElementById("sec1Text").innerText = t.sec1Text;
    document.getElementById("sec2Title").innerText = t.sec2Title;
    document.getElementById("sec2List").innerHTML = t.sec2List;
    document.getElementById("sec3Title").innerText = t.sec3Title;
    document.getElementById("sec3Text").innerText = t.sec3Text;
    document.getElementById("sec4Title").innerText = t.sec4Title;
};

loadScene();
