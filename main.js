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

// Initialize an empty inventory with 14 slots
const inventory = Array(14).fill(null);

// Function to get a random title from the titles array
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

            // Update the inventory slots
            for (let i = 0; i < inventory.length; i++) {
                if (generatedTitle === titles[i].split('=')[0].trim()) {
                    document.getElementById(`inventory-slot${i + 1}`).innerHTML = generatedTitle;
                    // Save to local storage
                    localStorage.setItem(`inventory-slot${i + 1}`, generatedTitle);
                }
            }

            break;
        }
    }
}

// Load saved titles from local storage
for (let i = 0; i < inventory.length; i++) {
    const savedTitle = localStorage.getItem(`inventory-slot${i + 1}`);
    if (savedTitle) {
        document.getElementById(`inventory-slot${i + 1}`).innerHTML = savedTitle;
    }
}

// Example usage:
getRandomTitle(); // Generate a title initially

function saveInventory() {
    for (let i = 0; i < inventory.length; i++) {
        const title = document.getElementById(`inventory-slot${i + 1}`).innerHTML;
        localStorage.setItem(`inventory-slot${i + 1}`, title);
    }
}

window.onload = function(){
    saveInventory();
}