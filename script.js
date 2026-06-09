// ==========================================
// AYMP COSMIC KINGDOM - MASTER LOGIC SCRIPT
// ==========================================

// 1. பாயிண்ட்ஸ் மற்றும் வாலட் சேமிப்பு (Local State)
let userWalletAddress = null;
let cosmicPoints = 0;
let currentScene = 0;

// 2. அஸ்ட்ரோ டேட்டாபேஸ் (பலன்கள் & மாற்று நடவடிக்கைகள்)
const astroDatabase = {
    predictions: [
        "A massive alignment in your financial house indicates a breakthrough in high-value asset acquisitions today. Planetary energies support strategic risks.",
        "Cosmic transits urge caution and deep analysis before signing or executing corporate contracts today. Patience will shield your capital.",
        "An auspicious wave brings sudden clarity to pending disputes or obstacles. A perfect cycle to pitch your next big sovereign strategy.",
        "The current lunar position demands absolute confidentiality. Internalize your ideas and prepare background blueprints quietly.",
        "High cosmic vibrations surround your network circle today. Collaborations initiated now will yield multi-fold rewards in the near future."
    ],
    behaviorShifts: [
        "Strategic Shift: Initiate crucial discussions only post 2:00 PM. Wear or keep a dark blue element near you for aura anchoring.",
        "Strategic Shift: Avoid immediate reactions to external workspace pressure. Keep a clean silver element or coin in your wallet today.",
        "Strategic Shift: Dedicate the first 30 minutes of your business hour entirely to long-term digital strategies. Avoid yellow-colored assets.",
        "Strategic Shift: Silence non-essential communications before sunset. Focus on execution rather than debate. Anchor with green tones.",
        "Strategic Shift: Practice 5 minutes of mindful breath control before reviewing financial sheets today. Let your actions remain unseen."
    ]
};

// 3. UI கூறுகள் (பழைய அமைப்பின்படி)
const scene = document.getElementById("scene");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const zodiacPanel = document.getElementById("zodiacPanel");
const destinyBtn = document.getElementById("destinyBtn");
const destinyResult = document.getElementById("destinyResult");
const powerArtImage = document.getElementById("powerArtImage");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// 4. வெப்3 வாலட் இணைப்பு & ரிவார்டு லாஜிக் (Wallet & Rewards)
async function connectWallet() {
    if (window.ethereum) {
        try {
            // MetaMask வாலட்டை இணைத்தல்
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userWalletAddress = accounts[0];
            
            // 1. முதன்முறை நுழைபவர்களுக்கான Welcome Bonus பாயிண்ட்ஸ் (XYZ பாயிண்ட்ஸ்)
            if (localStorage.getItem("isNewUser") === null) {
                cosmicPoints += 500; // XYZ அளவு பாயிண்ட்ஸ்
                localStorage.setItem("isNewUser", "false");
                alert("Wallet Connected! XYZ Welcome Bonus: +500 Cosmic Points Added!");
            } else {
                alert("Wallet Connected Successfully!");
            }
            
            updatePointsDisplay();
        } catch (error) {
            console.error("Wallet connection failed", error);
            alert("Connection rejected.");
        }
    } else {
        alert("Please install MetaMask to connect your wallet!");
    }
}

// டெய்லி ரிவார்டு (Daily Reward Function)
function claimDailyReward() {
    const lastClaim = localStorage.getItem("lastClaimDate");
    const today = new Date().toDateString();

    if (lastClaim === today) {
        alert("You have already claimed today's reward! Come back tomorrow.");
        return;
    }

    cosmicPoints += 50; // டெய்லி ரிவார்டு பாயிண்ட்ஸ்
    localStorage.setItem("lastClaimDate", today);
    updatePointsDisplay();
    alert("Daily Cosmic Reward: +50 Points Added!");
}

// ரெஃபரல் ரிவார்டு (Referral Reward Function)
function claimReferralReward() {
    cosmicPoints += 100; // ரெஃபரல் போனஸ்
    updatePointsDisplay();
    alert("Referral Dynamic Success: +100 Points Added!");
}

// எந்திரங்களை வாங்கி சேவ் செய்யும்போது கிடைக்கும் ரிவார்டு
function rewardYantraSave() {
    cosmicPoints += 200; // எந்திரம் சேவ் செய்வதற்கான ரிவார்டு
    updatePointsDisplay();
    alert("Yantra Locked & Staked in Wallet: +200 Points Added! This backs Token Value.");
}

// பாயிண்டுகளை திரையில் புதுப்பிக்கும் பகுதி
function updatePointsDisplay() {
    const pointsElement = document.getElementById("pointsDisplay");
    if (pointsElement) {
        pointsElement.innerText = `Cosmic Points: ${cosmicPoints}`;
    }
}

// 5. கோடிக்கணக்கான பேருக்கும், நாளுக்கும் தகுந்தாற்போல் பலன்களை மாற்றும் இன்ஜின்
function generateDynamicAstro(name, zodiac, nakshatra, dob, tob) {
    const todayStr = new Date().toDateString();
    
    // பெயர் + ராசி + நட்சத்திரம் + பிறந்த தேதி + பிறந்த நேரம் + நடப்புத் தேதி அனைத்தையும் இணைத்து ரகசிய விதை (Seed) உருவாக்கம்
    const universeSeed = name.trim().toLowerCase() + zodiac + nakshatra + dob + tob + todayStr;
    
    let cryptoHash = 0;
    for (let i = 0; i < universeSeed.length; i++) {
        cryptoHash = universeSeed.charCodeAt(i) + ((cryptoHash << 5) - cryptoHash);
    }
    cryptoHash = Math.abs(cryptoHash);

    // 1. தகுந்தாற்போல் பலன்கள் முதலில்
    const predIndex = cryptoHash % astroDatabase.predictions.length;
    const finalPrediction = astroDatabase.predictions[predIndex];

    // 2. அப்புறம் அதிஷ்ட எண்கள் (3 எண்கள்)
    const n1 = (cryptoHash % 9) + 1;
    const n2 = ((cryptoHash >> 3) % 9) + 1;
    const n3 = ((cryptoHash >> 6) % 9) + 1;
    const finalLuckyNumbers = `Cosmic Lucky Numbers: ${n1} • ${n2} • ${n3}`;

    // 3. அன்றைய நடவடிக்கை மாறுதல்
    const behaviorIndex = (cryptoHash + 4) % astroDatabase.behaviorShifts.length;
    const finalBehavior = astroDatabase.behaviorShifts[behaviorIndex];

    return {
        prediction: finalPrediction,
        luckyNumbers: finalLuckyNumbers,
        behavior: finalBehavior
    };
}

// 6. பழைய சீன் மேனேஜ்மென்ட் அமைப்பு (Scene Control)
function loadScene(index) {
    currentScene = index;
    scene.style.backgroundImage = `url('images/bg${currentScene}.png')`; 
    title.innerText = `AYMP Cosmic Kingdom`;
    subtitle.innerText = `S Somu Astro-Strategic Elite Ecosystem`;

    // மூன்றாவது பிளாட்பார்ம் வரும்போது (Scene 2) சூஸ் ஜோடியாக் பகுதியை காட்டுதல்
    if (currentScene === 2) {
        zodiacPanel.style.display = "block";
        destinyResult.innerHTML = "";
        powerArtImage.style.display = "none";
    } else {
        zodiacPanel.style.display = "none";
    }

    backBtn.style.display = currentScene === 0 ? "none" : "inline-block";
    nextBtn.innerText = currentScene === 3 ? "Finish" : "Next";
}

// ஆரம்ப நிலையை லோடு செய்தல்
loadScene(currentScene);

nextBtn.addEventListener("click", () => {
    currentScene++;
    if (currentScene > 3) {
        alert("Cosmic Alignment Cycle Complete!");
        currentScene = 0;
    }
    loadScene(currentScene);
});

backBtn.addEventListener("click", () => {
    currentScene--;
    loadScene(currentScene);
});

// 7. 'Reveal Destiny' பட்டன் செயல்பாடு (Zodiac & Input Validation)
destinyBtn.addEventListener("click", () => {
    const name = document.getElementById("playerName").value;
    const zodiac = document.getElementById("zodiacSelect").value;
    const nakshatra = document.getElementById("nakshatraSelect").value;
    
    // துல்லியத்திற்காக பிறந்த தேதி மற்றும் நேரம் (HTML-இல் இதற்கான இன்புட்கள் இருக்க வேண்டும்)
    const dob = document.getElementById("playerDOB") ? document.getElementById("playerDOB").value : "00-00";
    const tob = document.getElementById("playerTOB") ? document.getElementById("playerTOB").value : "00:00";

    if (!name.trim() || !zodiac || !nakshatra) {
        destinyResult.innerHTML = "<span style='color:red;'>Please input Name, select Zodiac and Nakshatra!</span>";
        return;
    }

    // அட்வான்ஸ்டு இன்ஜினை இயக்கி முடிவுகளைப் பெறுதல்
    const result = generateDynamicAstro(name, zodiac, nakshatra, dob, tob);

    // நீங்கள் கேட்ட அதே வரிசைப்படி திரையில் அச்சிடுதல் (English Default)
    destinyResult.innerHTML = `
        <div style="background: rgba(255,255,255,0.02); padding: 25px; border-radius: 15px; border: 1px solid rgba(240,165,0,0.3); margin-top: 15px; text-align: left;">
            <h3 style="color: #f0a500; margin-top: 0; border-bottom: 1px solid #222; padding-bottom: 8px;">👑 Sovereign Guidance for ${name}</h3>
            
            <div style="margin-bottom: 18px;">
                <h4 style="color: #007bff; margin: 0 0 5px 0;">🔮 Astro-Strategic Alignment:</h4>
                <p style="color: #eee; font-size: 14px; line-height: 1.6; margin: 0;">${result.prediction}</p>
            </div>
            
            <div style="margin-bottom: 18px; background: rgba(240,165,0,0.05); padding: 10px; border-radius: 8px; border-left: 3px solid #f0a500;">
                <p style="color: #fff; font-size: 15px; font-weight: bold; margin: 0; letter-spacing: 0.5px;">🎰 ${result.luckyNumbers}</p>
            </div>
            
            <div style="background: rgba(40,167,69,0.05); padding: 12px; border-radius: 8px; border-left: 3px solid #28a745; margin-bottom: 15px;">
                <p style="color: #28a745; font-size: 14px; font-weight: bold; margin: 0 0 4px 0;">⚡ Strategic Action Correction:</p>
                <p style="color: #ddd; font-size: 13px; line-height: 1.5; margin: 0;">${result.behavior}</p>
            </div>

            <button onclick="rewardYantraSave()" style="background:#f0a500; color:#000; border:none; padding:8px 12px; border-radius:5px; font-weight:bold; cursor:pointer; width:100%;">
                💾 Save Yantra Asset to Wallet & Claim +200 Points
            </button>
        </div>
    `;

    // எந்திரப் படத்தை அடியில் காட்டுதல்
    powerArtImage.src = "images/sacred_yantras.png"; 
    powerArtImage.style.display = "block";
    powerArtImage.style.margin = "20px auto 0 auto";
    powerArtImage.style.border = "2px solid #f0a500";
    powerArtImage.style.boxShadow = "0 0 20px rgba(240,165,0,0.5)";
});
