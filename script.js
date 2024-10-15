// let wissel = document.getElementById("kaart1");
// let wissel2 = document.getElementById("kaart2");
// let wissel3 = document.getElementById("kaart3");
// let wissel4 = document.getElementById("kaart4");

// // Hoe kan ik deze code verbeteren; maak een overkoepelende functie
// function kaart1() {
//     wissel.src = "afbeeldingen/geit.jpg";
// }
// function kaart2() {
//     wissel2.src = "afbeeldingen/geit.jpg";
// }
// function kaart3() {
//     wissel3.src = "afbeeldingen/possum.jpg";
// }
// // function kaart4() {
// //     wissel4.src = "afbeeldingen/possum.jpg";
// // }

// function kaart1() {
//     if (wissel.src.includes("achterkant.jpg")) {
//         wissel.src = "afbeeldingen/geit.jpg";
//     } else {
//         wissel.src = "afbeeldingen/achterkant.jpg";
//     }
// }

// function kaart2() {
//     if (wissel2.src.includes("achterkant.jpg")) {
//         wissel2.src = "afbeeldingen/geit.jpg";
//     } else {
//         wissel2.src = "afbeeldingen/achterkant.jpg";
//     }
// }

// function kaart3() {
//     if (wissel3.src.includes("achterkant.jpg")) {
//         wissel3.src = "afbeeldingen/possum.jpg";
//     } else {
//         wissel3.src = "afbeeldingen/achterkant.jpg";
//     }
// }

// function kaart4() {
//     if (wissel4.src.includes("achterkant.jpg")) {
//         wissel4.src = "afbeeldingen/possum.jpg";
//     } else {
//         wissel4.src = "afbeeldingen/achterkant.jpg";
//     }
// }

let kaart = document.querySelectorAll("img");

function wisselAfbeelding(kaartId, dier) {
    let kaart = document.getElementById(kaartId);

    if (kaart.src.includes("achterkant.jpg")) {
        kaart.src = `afbeeldingen/${dier}.jpg`;
    } else {
        kaart.src = "afbeeldingen/achterkant.jpg";
    }
}

let afbeeldingen = [
    "afbeeldingen/geit.jpg",
    "afbeeldingen/geit.jpg",
    "afbeeldingen/possum.jpg",
    "afbeeldingen/possum.jpg",
];

function kenAfbeeldingenToe() {
    for (let i = 0; i < kaart.length; i++) {
        let teller = Math.floor(Math.random() * afbeeldingen.length);
        kaart[i].src = afbeeldingen[teller]; // hier ken de afbeelding toe aan plaatjes
        // afbeeldingen.slice(teller, teller + 1);
        afbeeldingen.splice(teller, 1);
        console.log(afbeeldingen.length);
    }
}

kenAfbeeldingenToe();
