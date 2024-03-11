var titles = [
    "Unlucky Ducky 45%= 45",
    "Common 21.95%= 21.95",
    "Good 15%= 15",
    "Nice 10%= 10",
    "Amazing 5%= 5",
    "poop 1%= 1",
    "chicken 0.5%= 0.5",
    "mastermind 0.5%= 0.5",
    "toiletman 0.25%= 0.25",
    "ohiogyatt 0.25%= 0.25",
    "chickensoup 0.15%= 0.15",
    "friedchicken 0.15%= 0.15",
    "W 0.2% = 0.2",
    "Bobson's Legend 0.05% = 0.05",
];

var titlesUnlocked = ["T0", "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14"]

function getRandomTitle() {
    const totalRarity = titles.reduce((sum, title) => {
        const rarity = parseFloat(title.split('=')[1].trim());
        return sum + rarity;
    }, 0);

    const randomIndex = Math.floor(Math.random() * totalRarity);
    const receivedTitle = document.querySelector(".RolledTitle");

    let currentSum = 0;
    for (const title of titles) {
        const rarity = parseFloat(title.split('=')[1].trim());
        currentSum += rarity;
        if (randomIndex < currentSum) {
            const generatedTitle = title.split('=')[0].trim();
            receivedTitle.innerHTML = `Generated Title: ${generatedTitle}`;

            if (generatedTitle === "Unlucky Ducky 45%") {
                document.getElementById("inventory-slot1").innerHTML = "1. Unlucky Ducky 45%";

                titlesUnlocked[1] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "Common 21.95%") {
                document.getElementById("inventory-slot2").innerHTML = "2. Common 21.95%";

                titlesUnlocked[2] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "Good 15%") {
                document.getElementById("inventory-slot3").innerHTML = "3. Good 15%";

                titlesUnlocked[3] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "Nice 10%") {
                document.getElementById("inventory-slot4").innerHTML = "4. Nice 10%";

                titlesUnlocked[4] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "Amazing 5%") {
                document.getElementById("inventory-slot5").innerHTML = "5. Amazing 5%";

                titlesUnlocked[5] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "poop 1%") {
                document.getElementById("inventory-slot6").innerHTML = "6. poop 1%";

                titlesUnlocked[6] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "chicken 0.5%") {
                document.getElementById("inventory-slot7").innerHTML = "7. chicken 0.5%";

                titlesUnlocked[7] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "mastermind 0.5%") {
                document.getElementById("inventory-slot8").innerHTML = "8. mastermind 0.5%";

                titlesUnlocked[8] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "toiletman 0.25%") {
                document.getElementById("inventory-slot9").innerHTML = "9. toiletman 0.25%";

                titlesUnlocked[9] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "ohiogyatt 0.25%") {
                document.getElementById("inventory-slot10").innerHTML = "10. ohiogyatt 0.25%";

                titlesUnlocked[10] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "chickensoup 0.15%") {
                document.getElementById("inventory-slot11").innerHTML = "11. chickensoup 0.15%";

                titlesUnlocked[11] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "friedchicken 0.15%") {
                document.getElementById("inventory-slot12").innerHTML = "12. friedchicken 0.15%";

                titlesUnlocked[12] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "W 0.2") {
                document.getElementById("inventory-slot13").innerHTML = "13. W 0.2";

                titlesUnlocked[13] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }
            else if (generatedTitle == "Bobson's Legend 0.05%") {
                document.getElementById("inventory-slot14").innerHTML = "14. Bobson's Legend 0.05%";

                titlesUnlocked[14] = true
                localStorage.setItem('titlesUnlocked', JSON.stringify(titlesUnlocked));
            }

            break;
        }
    }

    // Fallback: Return an "Unknown Title"
    return "Unknown Title";
}

function loadSaves() {
    const savedTitlesUnlocked = localStorage.getItem('titlesUnlocked');
    const loadedTitlesUnlocked = JSON.parse(savedTitlesUnlocked);

    for (let i = 1; i < 14; i++) {
        if (loadedTitlesUnlocked[i] == true) {
            const elementId = "inventory-slot" + i;
            const element = document.getElementById(elementId);
            titlesUnlocked[i] = true

            if (element) {
                switch (i) {
                    case 1:
                        element.innerHTML = "1. Unlucky Ducky 45%";
                        break;
                    case 2:
                        element.innerHTML = "2. Common 21.95%";
                        break;
                    case 3:
                        element.innerHTML = "3. Good 15%";
                        break;
                    case 4:
                        element.innerHTML = "4. Nice 10%";
                        break;
                    case 5:
                        element.innerHTML = "5. Amazing 5%";
                        break;
                    case 6:
                        element.innerHTML = "6. poop 1%";
                        break;
                    case 7:
                        element.innerHTML = "7. chicken 0.5";
                        break;
                    case 8:
                        element.innerHTML = "8. mastermind 0.5%";
                        break;
                    case 9:
                        element.innerHTML = "9. toiletman";
                        break;
                    case 10:
                        element.innerHTML = "10. ohiogyatt 0.25%";
                        break;
                    case 11:
                        element.innerHTML = "11. chickensoup 0.15%";
                        break;
                    case 12:
                        element.innerHTML = "12. friedchicken 0.15%";
                        break;
                    case 13:
                        element.innerHTML = "13. W 0.2%";
                        break;
                    case 14:
                        element.innerHTML = "14. Bobson's Legend 0.05%";
                        break;
                    default:
                        element.innerHTML = "Unlocked! (no title found)";
                }
            } else {
                console.error(`Element with ID ${elementId} not found.`);
            }
        }
    }
}

window.onload = function func() {
    loadSaves();
}
