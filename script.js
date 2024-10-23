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

// autdo functie - werkt (plaats deze in de bestaandeb if statement)
function playAudio1() {
    let audio1 = new Audio("geluiden/retrogame-winnen.mp3");
    audio1.play();
}

function playAudio2() {
    let audio = new Audio("geluiden/retrogame-verliezen.wav");
    audio.play();
}

function playAudio3() {
    let audio = new Audio("geluiden/gewonnen.wav");
    audio.play();
}

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
            // geluidseffect afspelen
            playAudio1();
        } else {
            // Als de kaarten niet overeenkomen, draai ze terug
            setTimeout(function () {
                document.getElementById(`kaart${vorigeindex + 1}`).src =
                    "afbeeldingen/achterkant.jpg";
                document.getElementById(`kaart${kaartnr + 1}`).src =
                    "afbeeldingen/achterkant.jpg";
                playAudio2();
                // hier onthoudt ik de klik!
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
        playAudio3(); // Roep de functie aan om het geluid af te spelen
    }
}

let klik = 0;
function klikOnthouden() {
    klik += 1 / 2;
}

// Start het spel wanneer de pagina wordt geladen
window.onload = startfunctie;
