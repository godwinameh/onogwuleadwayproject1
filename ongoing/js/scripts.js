const overviewBtn = document.getElementById("overview-btn");
const requestBtn = document.getElementById("request-btn");
const viewRequestBtn = document.getElementById("view-request");

overviewBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/dashboard/index.html";
});
requestBtn.addEventListener("click", function () {
    window.location.href = "/inspection/index.html";
});
viewRequestBtn.addEventListener("click", function () {
    window.location.href = "/survey-report/index.html";
});


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
});
