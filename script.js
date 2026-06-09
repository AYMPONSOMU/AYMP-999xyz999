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

function enableLandscapeFullscreen() {
    let element = document.documentElement;
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) { element.requestFullscreen(); }
        else if (element.webkitRequestFullscreen) { element.webkitRequestFullscreen(); }
    }
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(err => console.log(err));
    }
}

function checkZodiacScene() {
    if (scenes[current].title === "Choose Zodiac") {
        if (zodiacPanel) zodiacPanel.style.display = "block";
    } else {
        if (zodiacPanel) zodiacPanel.style.display = "none";
    }
}

function loadScene() {
    if (scene) scene.style.backgroundImage = `url('${scenes[current].img}')`;
    if (title) title.innerText = scenes[current].title;
    if (subtitle) subtitle.innerText = scenes[current].text;
    checkZodiacScene();
}

loadScene();

document.getElementById("nextBtn").addEventListener("click", () => {
    current++;
    if (current >= scenes.length) current = 0;
    loadScene();
});

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
        let destiny = "Cosmic Path"; let image = "images/yantra.png";
        destinyResult.innerHTML = `${name}<br>${zodiac}<br>${destiny}`;
        if (powerArtImage) { powerArtImage.src = image; powerArtImage.style.display = "block"; }
    });
}

// ==========================================================================
// பாதுகாப்பான பாப்-அப் ஓபன், குளோஸ் மற்றும் நேரடி மொழிபெயர்ப்பு லாஜிக்
// ==========================================================================
const emblemBtn = document.getElementById("emblemBtn");
const infoModal = document.getElementById("infoModal");
const closeInfoBtn = document.getElementById("closeInfoBtn");
const langSelect = document.getElementById("langSelect");

// தமிழ் மற்றும் ஆங்கில தரவுகள் (Native Data)
const translations = {
    en: {
        mainTitle: "🪐 AYMP WHITEPAPER",
        sec1Title: "🎯 Core Purpose & Vision",
        sec1Text: "AYMP Cosmic Kingdom bridges the sacred, ancient science of Vedic Astrology with modern Web3 technologies. The ultimate purpose of this platform is to empower global users to discover their unique energetic blueprint, receive precise cosmic guidance, and systematically elevate both their spiritual consciousness and financial well-being.",
        sec2Title: "🎮 How to Play & Platform Mechanics",
        sec2List: "<li style='margin-bottom:8px;'><strong>Cosmic Gateway:</strong> Connect your wallet to establish your identity.</li><li style='margin-bottom:8px;'><strong>Destiny Alignment:</strong> Input your custom profile and select your Zodiac Sign.</li><li style='margin-bottom:8px;'><strong>Yantra Manifestation:</strong> System generates powerful targeted geometric spiritual art and Yantras.</li>",
        sec3Title: "🪙 The Dual-Token Economic Model",
        sec3Text: "To cultivate continuous trading volume and network health, we deploy a robust, sustainable two-token system: 1. 999xyz999 Token (Utility) and 2. AYMP Token (Store of value backed by liquidity pools).",
        sec4Title: "📋 Smart Contract Addresses (BSC Network)",
        sec5Title: "🚀 Extended Multi-Year Roadmap",
        roadmap: "<p><strong>Phase 1: Genesis Base</strong> – Framework deployment. (Completed) ✅</p><p><strong>Phase 2: Global Expansion</strong> – Wallet pairing activation. 🌐</p><p><strong>Phase 3: Cosmic Financials</strong> – Launching staking pools. 🪐</p><p><strong>Phase 4: Sovereign Dominion</strong> – Autonomous consulting mechanics. 👑</p>"
    },
    ta: {
        mainTitle: "🪐 AYMP ஒயிட்பேப்பர் (Whitepaper)",
        sec1Title: "🎯 முதன்மை நோக்கம் மற்றும் பார்வை",
        sec1Text: "AYMP காஸ்மிக் கிங்டம் என்பது பழமையான வேத ஜோதிட அறிவியலையும் நவீன Web3 தொழில்நுட்பங்களையும் இணைக்கும் ஒரு தளமாகும். உலகளாவிய பயனர்கள் தங்களின் தனித்துவமான ஆற்றலை அறிந்து, துல்லியமான பிரபஞ்ச வழிகாட்டுதலைப் பெற்று, ஆன்மீக விழிப்புணர்வையும் நிதி நிலமையையும் ஒரே நேரத்தில் உயர்த்துவதே இதன் இறுதி நோக்கமாகும்.",
        sec2Title: "🎮 விளையாடுவது எப்படி? (Platform Mechanics)",
        sec2List: "<li style='margin-bottom:8px;'><strong>பிரபஞ்ச நுழைவாயில்:</strong> உங்கள் பாதுகாப்பான அடையாளத்தை உருவாக்க மெட்டாமஸ்க் வாலட்டை இணைக்கவும்.</li><li style='margin-bottom:8px;'><strong>விதிப்பயன் கணக்கீடு:</strong> உங்கள் பெயரை உள்ளிட்டு ராசியைத் தேர்வு செய்யவும். சிஸ்டம் உங்கள் கிரக நிலைகளை ஆராயும்.</li><li style='margin-bottom:8px;'><strong>யந்திர வடிவம்:</strong> உங்கள் ராசிக்குரிய தனிப்பயனாக்கப்பட்ட சக்திவாய்ந்த ஆன்மீக வடிவியல் கலைகள் மற்றும் யந்திரங்கள் உங்களுக்காக உருவாக்கப்படும்.</li>",
        sec3Title: "🪙 இரட்டை டோக்கன் பொருளாதார முறை",
        sec3Text: "தொடர்ச்சியான வர்த்தகம் மற்றும் நெட்வொர்க் பாதுகாப்பிற்காக, நாங்கள் இரண்டு டோக்கன் முறையைச் செயல்படுத்தியுள்ளோம்: 1. 999xyz999 டோக்கன் (பயன்பாட்டிற்கு) மற்றும் 2. AYMP டோக்கன் (முதலீடு மற்றும் லிக்விடிட்டி பூல் பாதுகாப்பு கொண்டது).",
        sec4Title: "📋 ஸ்மார்ட் காண்ட்ராக்ட் முகவரிகள் (BSC Network)",
        sec5Title: "🚀 விரிவான பல வருட ரோடுமேப் (Roadmap)",
        roadmap: "<p><strong>கட்டம் 1: தொடக்கம்</strong> – கேம் கட்டமைப்பு உருவாக்கம் மற்றும் டோக்கன் வெளியீடு. (முடிவடைந்தது) ✅</p><p><strong>கட்டம் 2: உலகளாவிய விரிவாக்கம்</strong> – வாலட் இணைப்பு மற்றும் எக்ஸ்சேஞ்ச் வர்த்தகம் தொடங்குதல். 🌐</p><p><strong>கட்டம் 3: ஆன்மீக நிதி</strong> – டோக்கன்களை ஸ்டேக்கிங் (Staking) செய்து லாபம் ஈட்டும் வசதி. 🪐</p><p><strong>கட்டம் 4: முழு ஆதிக்கம்</strong> – பரவலாக்கப்பட்ட தன்னாட்சி ஆலோசனை முறைகளை அறிமுகப்படுத்துதல். 👑</p>"
    }
};

// பட்டன் கிளிக்குகளுக்கான நேரடி செயல்பாடுகள்
if (emblemBtn && infoModal && closeInfoBtn) {
    emblemBtn.onclick = function(e) {
        e.stopPropagation();
        infoModal.style.display = "block";
    };

    closeInfoBtn.onclick = function(e) {
        e.stopPropagation();
        infoModal.style.display = "none";
    };

    window.onclick = function(e) {
        if (e.target === infoModal) {
            infoModal.style.display = "none";
        }
    };
}

// மொழி மாறும் போது டெக்ஸ்ட்களை மாற்றும் லாஜிக்
if (langSelect) {
    langSelect.onchange = function() {
        const lang = langSelect.value;
        document.getElementById("modalMainTitle").innerHTML = translations[lang].mainTitle;
        document.getElementById("sec1Title").innerHTML = translations[lang].sec1Title;
        document.getElementById("sec1Text").innerHTML = translations[lang].sec1Text;
        document.getElementById("sec2Title").innerHTML = translations[lang].sec2Title;
        document.getElementById("sec2List").innerHTML = translations[lang].sec2List;
        document.getElementById("sec3Title").innerHTML = translations[lang].sec3Title;
        document.getElementById("sec3Text").innerHTML = translations[lang].sec3Text;
        document.getElementById("sec4Title").innerHTML = translations[lang].sec4Title;
        document.getElementById("sec5Title").innerHTML = translations[lang].sec5Title;
        document.getElementById("roadmapText").innerHTML = translations[lang].roadmap;
    };
      }
