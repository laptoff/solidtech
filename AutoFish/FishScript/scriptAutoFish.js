const navAccueilButton = document.getElementById("navAccueilButton");
const navShopButton = document.getElementById("navShopButton");
const navNosProjetsButton = document.getElementById("navNosProjetsButton");
const navContactButton = document.getElementById("navContactButton");
const navLogo = document.getElementById("logo");

navAccueilButton.addEventListener("click", (event) => {
    document.location.href="/solidtech/AutoFish/AutoFish.html";
});

navShopButton.addEventListener("click", (event) => {
    document.location.href="/solidtech/AutoFish/OtherFishPages/Shop.html";
});

navNosProjetsButton.addEventListener("click", (event) => {
    document.location.href="/solidtech/AutoFish/OtherFishPages/NosProjets.html";
});

navContactButton.addEventListener("click", (event) => {
    document.location.href="/solidtech/AutoFish/OtherFishPages/Contact.html";
});

navLogo.addEventListener("click", (event) => {
    document.location.href="/solidtech/index.html";
});