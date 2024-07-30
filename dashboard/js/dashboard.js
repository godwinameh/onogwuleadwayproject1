document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".inspection-btn");
    const requestBtn = document.getElementById("request-btn");
    const overviewBtn = document.getElementById("overview-btn");
    requestBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/inspection/index.html";
    });
    button.addEventListener("click", function (e) {
        e.preventDefault();

        window.location.href = "/create-inspection/index.html";
    });
    overviewBtn.addEventListener("click", function (e) {
        e.preventDefault();

        window.location.href = "/dashboard/index.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("active");
    });
});



