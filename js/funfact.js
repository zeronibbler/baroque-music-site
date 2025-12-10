// this file is used in instruments.html to show a fun fact
/* jshint esversion: 6 */
// show random fun fact from a list
const funFacts = [
    "Harpsichord strings are plucked by quills and cannot change volume by touch.",
    "The Baroque violin had gut strings and a convex bow for expressive phrasing.",
    "Baroque trumpets had no valves, so players used natural harmonics to change notes."
];

// define a function called "showFunFact"
function showFunFact() {

    // find element on the page with id="funFactContainer"
    const container = document.getElementById('funFactContainer');

    if (container) {

        // pick a random fun fact from the array
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        const randomFact = funFacts[randomIndex];  // <-- THIS is the variable you must use

        // show it on the page
        container.textContent = randomFact;

        // --- NEW: store it in localStorage so it stays for the user ---
        localStorage.setItem("lastFunFact", randomFact);

        // optional: log for confirmation
        console.log("Stored fun fact:", localStorage.getItem("lastFunFact"));

        // show popup
        const popup = document.getElementById('savePopup');
        popup.classList.add("show");

        // hide after 2 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 2000);
    }
}
