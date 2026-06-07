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

const scene = document.getElementById("scene");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

// முழு திரை மற்றும் லேண்ட்ஸ்கேப் மோடுக்கு மாற்றுவதற்கான ஃபங்ஷன்
function enableLandscapeFullscreen() {
    let element = document.documentElement;

    // பிரவுசரை முழு திரைக்கு (Full Screen) மாற்றுதல்
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

    // திரையை படுக்கை வசமாக (Landscape) லாக் செய்தல்
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape').catch(function(error) {
            console.log("Orientation Lock செய்ய முடியவில்லை: ", error);
        });
    }
}

function loadScene() {
    scene.style.backgroundImage = `url('${scenes[current].img}')`;
    title.innerText = scenes[current].title;
    subtitle.innerText = scenes[current].text;
}

// கேம் தொடங்கும் போது முதல் சீன் லோடாகும்
loadScene();

// அடுத்தடுத்த சீன்களுக்குச் செல்ல "Next" பட்டன் வேலை செய்யும் விதம்
document.getElementById("nextBtn").addEventListener("click", () => {
    current++;
    if (current >= scenes.length) {
        current = 0;
    }
    loadScene();
});

// முதல் திரையில் இருக்கும் "Enter Realm" பட்டனை கிளிக் செய்யும் போது நடப்பவை
document.getElementById("entryBtn").addEventListener("click", () => {
    // 1. முழு திரை மற்றும் லேண்ட்ஸ்கேப்பை ஆன் செய்யும்
    enableLandscapeFullscreen();
    
    // 2. கறுப்பு நிற தொடக்கத் திரையை மறைத்து கேமிற்குள் அழைத்துச் செல்லும்
    document.getElementById("startScreen").style.display = "none";
});
