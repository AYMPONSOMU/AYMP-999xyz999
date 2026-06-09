// ==========================================
// AYMP COSMIC KINGDOM - MASTER LOGIC SCRIPT
// ==========================================

let userWalletAddress = null;
let cosmicPoints = 0;
let currentScene = 0;

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

// UI கூறுகளை இணைத்தல்
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const introPanel = document.getElementById("introPanel");
const zodiacPanel = document.getElementById("zodiacPanel");
const destinyBtn = document.getElementById("destinyBtn");
const destinyResult = document.getElementById("destinyResult");
const powerArtImage = document.getElementById("powerArtImage");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// வாலட் மற்றும் ரிவார்டு சிஸ்டம்
async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userWalletAddress = accounts[0];
            if (localStorage.getItem("isNewUser") === null) {
                cosmicPoints += 500; // XYZ Welcome Reward
                localStorage.setItem("isNewUser", "false");
                alert("Wallet Connected! XYZ Welcome Bonus: +500 Cosmic Points Added!");
            } else {
                alert("Wallet Connected Successfully!");
            }
            updatePointsDisplay();
        } catch (error) {
            alert("Wallet Connection Rejected.");
        }
    } else {
        alert("Please install MetaMask / மொபைலில் MetaMask ஆப் மூலம் திறக்கவும்!");
    }
}

function claimDailyReward() {
    const lastClaim = localStorage.getItem("lastClaimDate");
    const today = new Date().toDateString();
    if (lastClaim === today) {
        alert("You already claimed today's reward!");
        return;
    }
    cosmicPoints += 50;
    localStorage.setItem("lastClaimDate", today);
    updatePointsDisplay();
    alert("Daily Cosmic Reward: +50 Points Added!");
}

function claimReferralReward() {
    cosmicPoints += 100;
    updatePointsDisplay();
    alert("Referral Dynamic Success: +100 Points Added!");
}

function rewardYantraSave() {
    cosmicPoints += 200;
    updatePointsDisplay();
    alert("Yantra Locked & Staked: +200 Points Added! This drives token value.");
}

function updatePointsDisplay() {
    document.getElementById("pointsDisplay").innerText = `Cosmic Points: ${cosmicPoints}`;
}

// டைனமிக் அஸ்ட்ரோ லாஜிக் (கோடிக்கணக்கான மனிதர்களுக்கும் நாளுக்கும் தகுந்தாற்போல் மாறும்)
function generateDynamicAstro(name, zodiac, nakshatra, dob, tob) {
    const todayStr = new Date().toDateString();
    const universeSeed = name.trim().toLowerCase() + zodiac + nakshatra + dob + tob + todayStr;
    
    let cryptoHash = 0;
    for (let i = 0; i < universeSeed.length; i++) {
        cryptoHash = universeSeed.charCodeAt(i) + ((cryptoHash << 5) - cryptoHash);
    }
    cryptoHash = Math.abs(cryptoHash);

    const predIndex = cryptoHash % astroDatabase.predictions.length;
    const finalPrediction = astroDatabase.predictions[predIndex];

    const n1 = (cryptoHash % 9) + 1;
    const n2 = ((cryptoHash >> 3) % 9) + 1;
    const n3 = ((cryptoHash >> 6) % 9) + 1;
    const finalLuckyNumbers = `Cosmic Lucky Numbers: ${n1} • ${n2} • ${n3}`;

    const behaviorIndex = (cryptoHash + 4) % astroDatabase.behaviorShifts.length;
    const finalBehavior = astroDatabase.behaviorShifts[behaviorIndex];

    return { prediction: finalPrediction, luckyNumbers: finalLuckyNumbers, behavior: finalBehavior };
}

// சீன் மேனேஜ்மென்ட் லாஜிக் (பழைய அமைப்பு மாறாது)
function loadScene(index) {
    currentScene = index;
    title.innerText = `AYMP Cosmic Kingdom - Scene ${currentScene}`;
    
    if (currentScene === 2) {
        zodiacPanel.style.display = "block";
        introPanel.style.display = "none";
        destinyResult.innerHTML = "";
        powerArtImage.style.display = "none";
    } else {
        zodiacPanel.style.display = "none";
        introPanel.style.display = "block";
    }

    backBtn.style.display = currentScene === 0 ? "none" : "inline-block";
    nextBtn.innerText = currentScene === 3 ? "Finish" : "Next ▶";
}

loadScene(currentScene);

nextBtn.addEventListener("click", () => {
    currentScene++;
    if (currentScene > 3) { currentScene = 0; }
    loadScene(currentScene);
});

backBtn.addEventListener("click", () => {
    currentScene--;
    loadScene(currentScene);
});

// Reveal Destiny பட்டன் அழுத்தும் போது வரிசைப்படி தோன்றுவது
destinyBtn.addEventListener("click", () => {
    const name = document.getElementById("playerName").value;
    const zodiac = document.getElementById("zodiacSelect").value;
    const nakshatra = document.getElementById("nakshatraSelect").value;
    const dob = document.getElementById("playerDOB").value;
    const tob = document.getElementById("playerTOB").value;

    if (!name.trim() || !zodiac || !nakshatra) {
        alert("Please enter Name, select Zodiac and Nakshatra!");
        return;
    }

    const result = generateDynamicAstro(name, zodiac, nakshatra, dob, tob);

    // நீங்கள் கேட்ட அதே வரிசை (Prediction -> Lucky Numbers -> Action Change)
    destinyResult.innerHTML = `
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border: 1px solid #f0a500; text-align: left;">
            <h3 style="color: #f0a500; margin-top: 0;">👑 Sovereign Results for ${name}</h3>
            
            <p style="color: #eee; font-size: 14px; line-height: 1.5;"><strong>🔮 Astro-Strategic Alignment:</strong><br>${result.prediction}</p>
            
            <div class="numbers-box">${result.luckyNumbers}</div>
            
            <div class="remedy-box">
                <p style="margin:0; color:#28a745;"><strong>⚡ Strategic Action Correction:</strong></p>
                <p style="margin:5px 0 0 0; color:#ddd; font-size:13px;">${result.behavior}</p>
            </div>

            <button onclick="rewardYantraSave()" style="margin-top:15px; background:#28a745; color:#fff;">💾 Save Yantra Asset & Claim +200 Points</button>
        </div>
    `;

    // எந்திரப் படம் கீழே தோன்றும் (பழைய படம்)
    powerArtImage.src = "AYMPONSOMU astro-strategic Global Council.jpg"; 
    powerArtImage.style.display = "block";
});
