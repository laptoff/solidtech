const cross = document.getElementById("cross_icon");
const connectionPopup = document.getElementById("connection_popup");
const connectionButton = document.getElementById("connection_icon");

cross.addEventListener("click", (event) => {
    connectionPopup.classList.remove("connection_popup_active");
});

connectionButton.addEventListener("click", (event) => {
    connectionPopup.classList.add("connection_popup_active");
})