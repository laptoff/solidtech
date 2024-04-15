const connectionPopup = document.getElementById("connection_popup");
const connectionButton = document.getElementById("connection_icon");
const connectionTitle = document.getElementById("connection_title_wrap");
const inputsMail = document.getElementById("connection_mail_inputs");
const inputsPassword = document.getElementById("connection_password_inputs");
const registerWrap = document.getElementById("register_wrap");
const confirmButton = document.getElementById("confirm_button_warp");

window.addEventListener("keydown", function(e) {
    if (e.key == "Escape") {
        connectionPopup.classList.remove("connection_popup_active");
        connectionTitle.classList.remove("connection_title_wrap_active");
        inputsMail.classList.remove("inputs_active");
        inputsPassword.classList.remove("inputs_active");
        registerWrap.classList.remove("register_wrap_active");
        confirmButton.classList.remove("confirm_button_warp_active");
    }
});

connectionButton.addEventListener("click", (event) => {
    connectionPopup.classList.add("connection_popup_active");
    connectionTitle.classList.add("connection_title_wrap_active");
    inputsMail.classList.add("inputs_active");
    inputsPassword.classList.add("inputs_active");
    registerWrap.classList.add("register_wrap_active");
    confirmButton.classList.add("confirm_button_warp_active");
});