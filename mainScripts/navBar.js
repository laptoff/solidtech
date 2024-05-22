const navHomeButton = document.getElementById("navHomeButton");
const navStoreButton = document.getElementById("navStoreButton");
const navProjectsButton = document.getElementById("navProjectsButton");
const navContactButton = document.getElementById("navContactButton");
const navLogo = document.getElementById("logo");
const header = document.getElementById("header");
const titleLogo = document.getElementById("title_logo");
const searchLogo = document.getElementById("search_logo");
const searchInput = document.getElementById("search_input");

var scrollPosition = 0;

navHomeButton.addEventListener("click", (event) => {
    document.location.href="../index.html";
});

navStoreButton.addEventListener("click", (event) => {
    document.location.href="../otherPages/store.html";
});

navProjectsButton.addEventListener("click", (event) => {
    document.location.href="../otherPages/projects.html";
});

navContactButton.addEventListener("click", (event) => {
    document.location.href="../otherPages/contact.html";
});

navLogo.addEventListener("click", (event) => {
    document.location.href="../index.html";
});

searchLogo.addEventListener("click", (event) => {
    searchInput.focus();
});

//scroll event
window.addEventListener("scroll", (event) => {
    scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.style.height="50px";
        titleLogo.style.left="-150px"
    } else {
        header.style.height="75px";
        titleLogo.style.left="0px"
    }
});