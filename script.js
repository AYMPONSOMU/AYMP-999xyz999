const scenes = [
  {
    img: "images/bg_zodiac_gateway.png",
    title: "TEST",
    text: "Image Test"
  },
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

// 1. முழு திரை மற்றும் லேண்ட்ஸ்கேப் மோடுக்கு மாற்றுவதற்கான புதிய ஃபங்ஷன்
function enableLandscapeFullscreen() {
    let element = document.documentElement;

    // பிரவுசரை முழு திரைக்கு (Full Screen) மாற்றுதல்
    if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari / Chrome Mobile */
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) { /* Firefox */
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) { /* IE/Edge */
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

document.getElementById("nextBtn").addEventListener("click", () => {
    
    // பயனர் "Next" பட்டனை கிளிக் செய்தவுடன் முழு திரை மற்றும் லேண்ட்ஸ்கேப் ஆன் ஆகும்
    enableLandscapeFullscreen();

    current++;

    if (current >= scenes.length) {
        current = 0;
    }

    loadScene();
});
