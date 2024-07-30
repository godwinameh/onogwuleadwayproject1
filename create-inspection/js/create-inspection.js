document.addEventListener("DOMContentLoaded", function () {
    const requestBtn = document.getElementById("request-btn");
    const overviewBtn = document.getElementById("overview-btn");
    const closeBtn = document.getElementById("close-btn");
    const createRequestBtn = document.getElementById("create-request");

    requestBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/inspection/index.html";
    });

    overviewBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/dashboard/index.html";
    });

    closeBtn.addEventListener("click", function () {
        window.location.href = "/inspection/index.html";
    });

    // Custom select dropdown
    const selected = document.querySelector(".select-selected");
    const itemsContainer = document.querySelector(".select-items");
    const items = document.querySelectorAll(".select-item");

    selected.addEventListener("click", () => {
        itemsContainer.classList.toggle("select-hide");
        selected
            .querySelector(".select-arrow")
            .classList.toggle("select-arrow-active");
    });

    items.forEach((item) => {
        item.addEventListener("click", () => {
            selected.innerHTML =
                item.innerHTML + '<div class="select-arrow"></div>';
            itemsContainer.classList.add("select-hide");
            selected
                .querySelector(".select-arrow")
                .classList.remove("select-arrow-active");
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".custom-select")) {
            itemsContainer.classList.add("select-hide");
            selected
                .querySelector(".select-arrow")
                .classList.remove("select-arrow-active");
        }
    });

    // Button click functionality
    const preLossBtn = document.getElementById("pre-loss-btn");
    const postLossBtn = document.getElementById("post-loss-btn");
    let selectedForm = ""; // Variable to track the selected form

    const buttons = [preLossBtn, postLossBtn];

    function selectButton(selectedBtn, formType) {
        // Remove border color and active class from all buttons
        buttons.forEach((button) => {
            button.style.borderColor = "gray";
            button.classList.remove("active");
        });

        // Add border color and active class to the selected button
        selectedBtn.style.borderColor = "orange";
        selectedBtn.classList.add("active");

        // Enable the create request button
        createRequestBtn.disabled = false;

        // Set the selected form type
        selectedForm = formType;
    }

    preLossBtn.addEventListener("click", function () {
        selectButton(preLossBtn, "pre-loss");
    });

    postLossBtn.addEventListener("click", function () {
        selectButton(postLossBtn, "post-loss");
    });

    // Disable the create request button by default
    createRequestBtn.disabled = true;

    createRequestBtn.addEventListener("click", function () {
        if (selectedForm === "pre-loss") {
            window.location.href = "/create-insp-form-preloss/index.html";
        } else if (selectedForm === "post-loss") {
            window.location.href = "/create-insp-form/index.html";
        }
    });
});
