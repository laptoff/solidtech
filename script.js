const navHomeButton = document.getElementById("navHomeButton");
const navStoreButton = document.getElementById("navStoreButton");
const navProjectsButton = document.getElementById("navProjectsButton");
const navContactButton = document.getElementById("navContactButton");

navHomeButton.addEventListener("click", (event) => {
    document.location.href="index.html";
});

navStoreButton.addEventListener("click", (event) => {
    document.location.href="otherPages/store.html";
});

navProjectsButton.addEventListener("click", (event) => {
    document.location.href="otherPages/projects.html";
});

navContactButton.addEventListener("click", (event) => {
    document.location.href="otherPages/contact.html";
});