const scenes = [
  {
    img: "images/bg_title_metamask.png",
    title: "Wallet Gateway",
    text: "Connect Your Cosmic Identity"
  },
  {
    img: "images/bg_cosmic_lobby.png",
    title: "AYMP Cosmic Kingdom",
    text: "The Journey Begins..."
  },
  {
    img: "images/bg_zodiac_gateway.png",
    title: "Choose Zodiac",
    text: "Select Your Destiny"
  },
  {
    img: "images/bg_aries_reveal.png",
    title: "Destiny Revealed",
    text: "Your Journey Starts"
  },
  {
    img: "images/bg_astro_consultation.png",
    title: "Astro Consultation",
    text: "Unlock Ancient Wisdom"
  },
  {
    img: "images/bg_zodiac_arena.png",
    title: "Zodiac Arena",
    text: "Prove Your Power"
  },
  {
    img: "images/bg_token_swap.png",
    title: "Token Realm",
    text: "XYZ → AYMP Path"
  }
];

let current = 0;

// HTML எலிமெண்டுகள்
const scene = document.getElementById("scene");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const zodiacPanel = document.getElementById("zodiacPanel");
const destinyBtn = document.getElementById("destinyBtn");
const destinyResult = document.getElementById("destinyResult");
const powerArtImage = document.getElementById("powerArtImage");

// முழு திரை மற்றும் லேண்ட்ஸ்கேப் மோடுக்கு மாற்றுவதற்கான ஃபங்ஷன்
function enableLandscapeFullscreen() {
    let element = document.documentElement;

    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { 
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) { 
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) { 
            element.msRequestFullscreen();
        }
    }

    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(function(error) {
            console.log("Orientation Lock செய்ய முடியவில்லை: ", error);
        });
    }
}

// "Choose Zodiac" சீன் வரும்போது பேனலைக் காட்டும் ஃபங்ஷன்
function checkZodiacScene() {
    if (scenes[current].title === "Choose Zodiac") {
        if (zodiacPanel) zodiacPanel.style.display = "block";
    } else {
        if (zodiacPanel) zodiacPanel.style.display = "none";
    }
}

// சீன்களை லோடு செய்யும் முதன்மை ஃபங்ஷன்
function loadScene() {
    if (scene) scene.style.backgroundImage = `url('${scenes[current].img}')`;
    if (title) title.innerText = scenes[current].title;
    if (subtitle) subtitle.innerText = scenes[current].text;
    
    // ராசி தேர்ந்தெடுக்கும் பேனலைச் சரிபார்க்கிறது
    checkZodiacScene();
}

// கேம் தொடங்கும்போது முதல் சீன் லோடாகும்
loadScene();

// அடுத்தடுத்த சீன்களுக்குச் செல்ல "Next" பட்டன்
const nextBtn = document.getElementById("nextBtn");
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        current++;
        if (current >= scenes.length) {
            current = 0;
        }
        loadScene();
    });
}

// முதல் திரையில் இருக்கும் "Enter Realm" பட்டன்
const entryBtn = document.getElementById("entryBtn");
if (entryBtn) {
    entryBtn.addEventListener("click", () => {
        enableLandscapeFullscreen();
        const startScreen = document.getElementById("startScreen");
        if (startScreen) startScreen.style.display = "none";
    });
}

// ராசி மற்றும் பெயர் மூலம் விதிப்பயனைக் கணக்கிடுதல்
if (destinyBtn) {
    destinyBtn.addEventListener("click", () => {
        const zodiacSelect = document.getElementById("zodiacSelect");
        const playerName = document.getElementById("playerName");

        const zodiac = zodiacSelect ? zodiacSelect.value : "";
        const name = playerName ? playerName.value : "";

        if (!zodiac || !name) {
            if (destinyResult) destinyResult.innerHTML = "Choose Zodiac and Enter Name";
            return;
        }

        let destiny = "";
        let image = "";

        switch (zodiac) {
            case "Aries":
                destiny = "Cosmic Leader";
                image = "images/yantra.png";
                break;
            case "Taurus":
                destiny = "Prosperity Path";
                image = "images/lakshmi.png";
                break;
            case "Gemini":
                destiny = "Destiny Seeker";
                image = "images/yantra1.png";
                break;
            case "Cancer":
                destiny = "Shakti Awakening";
                image = "images/shakti.png";
                break;
            case "Leo":
                destiny = "Royal Destiny";
                image = "images/yantra2.png";
                break;
            case "Virgo":
                destiny = "Navagraha Wisdom";
                image = "images/navagraha.png";
                break;
            default:
                destiny = "Power Art Journey";
                image = "images/powerart1.jpg";
        }

        if (destinyResult) destinyResult.innerHTML = `${name}<br>${zodiac}<br>${destiny}`;

        if (powerArtImage) {
            powerArtImage.src = image;
            powerArtImage.style.display = "block";
        }
    });
}

// HTML முழுமையாக லோடு ஆன பின் எம்பளம் பட்டன் மற்றும் பாப்-அப் விண்டோவை இணைக்கும் பகுதி
window.addEventListener("DOMContentLoaded", () => {
    const emblemBtn = document.getElementById("emblemBtn");
    const infoModal = document.getElementById("infoModal");
    const closeInfoBtn = document.getElementById("closeInfoBtn");

    if (emblemBtn && infoModal && closeInfoBtn) {
        // எம்பளத்தை தொட்டவுடன் விண்டோ ஓபன் ஆகும்
        emblemBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // கேமின் மற்ற பேக்ரவுண்ட் கிளிக்குகளைத் தடுக்க
            infoModal.style.display = "block";
        });

        // க்ளோஸ் பட்டனை தொட்டவுடன் விண்டோ மூடிக்கொள்ளும்
        closeInfoBtn.addEventListener("click", () => {
            infoModal.style.display = "none";
        });

        // விண்டோவிற்கு வெளியே எங்கு தொட்டாலும் மூடிக்கொள்ளும் கூடுதல் வசதி
        window.addEventListener("click", (e) => {
            if (e.target === infoModal) {
                infoModal.style.display = "none";
            }
        });
    }
});
