const navAccueilButton = document.getElementById("navAccueilButton");
const navShopButton = document.getElementById("navShopButton");
const navNosProjetsButton = document.getElementById("navNosProjetsButton");
const navContactButton = document.getElementById("navContactButton");

navAccueilButton.addEventListener("click", (event) => {
    document.location.href="./Autofish.html";
});

navShopButton.addEventListener("click", (event) => {
    document.location.href="./OtherFishPages/Shop.html";
});

navNosProjetsButton.addEventListener("click", (event) => {
    document.location.href="./OtherFishPages/NosProjets.html";
});

navContactButton.addEventListener("click", (event) => {
    document.location.href="./OtherFishPages/Contact.html";
});