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

// Initialize an empty object to store unlocked titles
const unlockedTitles = {};

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
                    inventory[i] = generatedTitle;
                    document.getElementById(`inventory-slot${i + 1}`).innerHTML = generatedTitle;
                    unlockedTitles[generatedTitle] = true;

                    saveUnlockedTitles();
                }
            }

            break;
        }
    }
}

function loadUnlockedTitles() {
    const savedUnlockedTitles = localStorage.getItem('unlockedTitles');
    if (savedUnlockedTitles) {
        Object.assign(unlockedTitles, JSON.parse(savedUnlockedTitles));
    }
}

function saveUnlockedTitles() {
    localStorage.setItem('unlockedTitles', JSON.stringify(unlockedTitles));
}

// Example usage:
getRandomTitle(); // Generate a title initially
loadUnlockedTitles(); // Load saved unlocked titles on page load
