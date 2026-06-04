const scenes = [

{
img:"images/bg_cosmic_lobby.png",
title:"AYMP Cosmic Kingdom",
text:"The Journey Begins..."
},

{
img:"images/bg_title_metamask.png",
title:"Wallet Gateway",
text:"Connect Your Cosmic Identity"
},

{
img:"images/panel_zodiac_selection.png",
title:"Choose Zodiac",
text:"Select Your Destiny"
},

{
img:"images/bg_aries_reveal.png",
title:"Destiny Revealed",
text:"Your Journey Starts"
},

{
img:"images/bg_astro_consultation.png",
title:"Astro Consultation",
text:"Unlock Ancient Wisdom"
},

{
img:"images/bg_zodiac_arena.png",
title:"Zodiac Arena",
text:"Prove Your Power"
},

{
img:"images/bg_token_swap.png",
title:"Token Realm",
text:"XYZ → AYMP Path"
}

];

let current = 0;

const scene =
document.getElementById("scene");

const title =
document.getElementById("title");

const subtitle =
document.getElementById("subtitle");

function loadScene(){

scene.style.backgroundImage =
`url('${scenes[current].img}')`;

title.innerText =
scenes[current].title;

subtitle.innerText =
scenes[current].text;

}

loadScene();

document
.getElementById("nextBtn")
.addEventListener("click",()=>{

current++;

if(current>=scenes.length){

current=0;

}

loadScene();

});
