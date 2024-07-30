const overviewBtn = document.getElementById("overview-btn");
const requestBtn = document.getElementById("request-btn");
const generateBtn = document.getElementById("generate-btn");
overviewBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/dashboard/index.html";
});
requestBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/inspection/index.html";
});

// Get the modal
const modal = document.getElementById("confirmation-modal");

// Get the button that opens the modal
const generateButtons = document.querySelectorAll(".generate-btn");

// Get the <span> element that closes the modal
const closeModalBtn = document.getElementById("close-modal");

document.addEventListener("DOMContentLoaded", function () {
    // Get the modal
    const modal = document.getElementById("confirmation-modal");
    const successModal = document.getElementById("success-modal");

    // Get the button that opens the modal
    const generateButtons = document.querySelectorAll(".generate-btn");

    // Get the <span> element that closes the modal
    const closeModalBtn = document.getElementById("close-modal");
    const cancelSuccess = document.querySelector(".cancel-success");
    const sendRequestBtn = document.getElementById("send-request-btn");
    const requestLink = document.getElementById("requests-links");
    const createNew = document.getElementById("create-new");

    // When the user clicks the button, open the modal
    generateButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "flex";
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeModalBtn.onclick = function () {
        modal.style.display = "none";
    };
    createNew.onclick = function () {
        successModal.style.display = "none";
        modal.style.display = "none";
        window.location.href = "/create-inspection/index.html";
    };
    requestLink.onclick = function () {
        successModal.style.display = "none";
        modal.style.display = "none";
        window.location.href = "/inspection/index.html";
    };
    cancelSuccess.onclick = function () {
        successModal.style.display = "none";
        modal.style.display = "none";
    };

    // When the user clicks the send request button, show the second modal
    sendRequestBtn.onclick = function () {
        modal.style.display = "none";
        successModal.style.display = "flex";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal || event.target == successModal) {
            modal.style.display = "none";
            successModal.style.display = "none";
        }
    };
});
