const cross = document.getElementById("cross_icon");
const connectionPopup = document.getElementById("connection_popup");
const connectionButton = document.getElementById("connection_icon");
const connectionTitle = document.getElementById("connection_title_wrap");
const inputsMail = document.getElementById("connection_mail_inputs");
const inputsPassword = document.getElementById("connection_password_inputs");
const registerWrap = document.getElementById("register_wrap");
const confirmButton = document.getElementById("confirm_button_warp");

cross.addEventListener("click", (event) => {
    connectionPopup.classList.remove("connection_popup_active");
    cross.classList.remove("active");
    connectionTitle.classList.remove("active");
    inputsMail.classList.remove("active");
    inputsPassword.classList.remove("active");
    registerWrap.classList.remove("active");
    confirmButton.classList.remove("active");
});

connectionButton.addEventListener("click", (event) => {
    connectionPopup.classList.add("connection_popup_active");
    cross.classList.add("active");
    connectionTitle.classList.add("active");
    inputsMail.classList.add("active");
    inputsPassword.classList.add("active");
    registerWrap.classList.add("active");
    confirmButton.classList.add("active");
});