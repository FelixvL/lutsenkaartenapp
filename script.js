let aantalkeergeklikt = 0;
let vorigeindex = -1;

// Houdt bij welke kaarten zijn omgedraaid
let omgedraaid = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // mask array
let kaarten = [
    "afbeeldingen/geit.jpg",
    "afbeeldingen/geit.jpg",
    "afbeeldingen/possum.jpg",
    "afbeeldingen/possum.jpg",
    "afbeeldingen/capybara.jpg",
    "afbeeldingen/capybara.jpg",
    "afbeeldingen/kraai.jpg",
    "afbeeldingen/kraai.jpg",
    "afbeeldingen/lama.jpg",
    "afbeeldingen/lama.jpg",
    "afbeeldingen/neushoorn.jpg",
    "afbeeldingen/neushoorn.jpg",
    "afbeeldingen/stinkdier.jpg",
    "afbeeldingen/stinkdier.jpg",
    "afbeeldingen/tucan.jpg",
    "afbeeldingen/tucan.jpg",
];

// Schud de kaarten
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Schud de kaarten bij het begin van het spel
function startfunctie() {
    shuffle(kaarten);
}

// de geluidsfragmenten
playAudio("gewonnen");
playAudio("retrogame-winnen.mp3");
playAudio("retrogame-veriezen.wav");
// functie met parameter voor geluidfragmenten
function playAudio(fragment) {
    let audio = new Audio("geluiden/" + fragment);
    audio.play();
}

// function playAudio2() {
//     let audio = new Audio("geluiden/");
//     audio.play();
// }

// function playAudio3() {
//     let audio = new Audio("geluiden/gewonnen.wav");
//     audio.play();
// }

// Verander de afbeelding van de omgedraaide kaart
function draaikaartom(kaartnr, plaatje) {
    plaatje.src = kaarten[kaartnr];
    aantalkeergeklikt++;
    // Onthoud de index van de eerste kaart
    if (aantalkeergeklikt == 1) {
        vorigeindex = kaartnr;
    } else if (aantalkeergeklikt == 2) {
        if (kaarten[vorigeindex] == kaarten[kaartnr]) {
            // Als de kaarten overeenkomen
            omgedraaid[vorigeindex] = 1;
            omgedraaid[kaartnr] = 1;
            document.getElementById("klikOnthouden").innerHTML = klik;
            playAudio("retrogame-winnen.mp3"); // hier geluidseffect afspelen
        } else {
            // Als de kaarten niet overeenkomen, draai ze terug
            setTimeout(function () {
                document.getElementById(`kaart${vorigeindex + 1}`).src =
                    "afbeeldingen/achterkant.jpg";
                document.getElementById(`kaart${kaartnr + 1}`).src =
                    "afbeeldingen/achterkant.jpg";
                playAudio("retrogame-verliezen.wav"); // hier geluidsfragment afspelen
                // hier klik bijhouden
                document.getElementById("klikOnthouden").innerHTML = klik;
            }, 1500);
        }
        aantalkeergeklikt = 0;
        allesOmgedraaid();
    }
}

function allesOmgedraaid() {
    // Controleer of alle elementen in de 'omgedraaid'-array gelijk zijn aan 1
    if (
        omgedraaid.every(function (waarde) {
            return waarde === 1;
        })
    ) {
        playAudio("gewonnen.wav"); // hier geluidseffect afspelen
    }
}

let klik = 0;
function klikOnthouden() {
    klik += 1 / 2;
}

// Sla het spel op in localStorage - alle variabelen bij elkaar, zijn de gamestate
function saveGameState() {
    localStorage.setItem("saveKliks", aantalkeergeklikt);
    localStorage.setItem("kaartgedraait", JSON.stringify(omgedraaid));
    localStorage.setItem("kaartVorigeIndex", vorigeindex);
    localStorage.setItem("kaartNr", JSON.stringify(kaarten));
    localStorage.setItem("klikTeller", klik);
}

// // het spel laden uit localStorage - ik kom er niet uit!
function loadGameState() {
    aantalkeergeklikt = parseInt(localStorage.getItem("saveKliks"));
    omgedraaid = JSON.parse(localStorage.getItem("kaartgedraait"));
    vorigeindex = localStorage.getItem("kaartVorigeIndex");
    kaarten = JSON.parse(localStorage.getItem("kaartNr"));
    klik = parseInt(localStorage.getItem("klikTeller"));
}

window.onload = startfunctie;
