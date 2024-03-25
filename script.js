const navHomeButton = document.getElementById("navHomeButton");
const navStoreButton = document.getElementById("navStoreButton");
const navProjectsButton = document.getElementById("navProjectsButton");
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