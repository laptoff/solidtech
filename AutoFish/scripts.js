const navAccueilButton = document.getElementById("navAccueilButton");
const navShopButton = document.getElementById("navShopButton");
const navNosProjetsButton = document.getElementById("navNosProjetsButton");
const navContactButton = document.getElementById("navContactButton");

navHomeButton.addEventListener("click", (event) => {
    document.location.href="index.html";
});

navStoreButton.addEventListener("click", (event) => {
    document.location.href="store.html";
});

navProjectsButton.addEventListener("click", (event) => {
    document.location.href="projects.html";
});

navContactButton.addEventListener("click", (event) => {
    document.location.href="contact.html";
});