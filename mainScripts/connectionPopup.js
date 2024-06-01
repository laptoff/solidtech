const connectionPopup = document.getElementById("connection_popup");
const connectionButton = document.getElementById("connection_icon");
const closeIcon = document.getElementById("close_icon");
const registerLink = document.getElementById("register_link");
const connectionLink = document.getElementById("connection_link");
const registerForm = document.getElementById("register_form");
const connectionForm = document.getElementById("connection_form");
const closeIconRegister = document.getElementById("close_icon_register");

window.addEventListener("keydown", function(e) {
    if (e.key == "Escape") {
        connectionPopup.classList.remove("connection_popup_active");
    }
});

connectionButton.addEventListener("click", (event) => {
    connectionPopup.classList.add("connection_popup_active");
});

closeIcon.addEventListener("click", (event) => {
    connectionPopup.classList.remove("connection_popup_active");
});

closeIconRegister.addEventListener("click", (event) => {
    connectionPopup.classList.remove("connection_popup_active");
});

connectionLink.addEventListener("click", (event) => {
    registerForm.classList.remove("register_form_active");
    connectionForm.classList.remove("connection_form_unactive");
});

registerLink.addEventListener("click", (event) => {
    registerForm.classList.add("register_form_active");
    connectionForm.classList.remove("connection_form_unactive")
});