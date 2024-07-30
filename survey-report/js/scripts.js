const overviewBtn = document.getElementById("overview-btn");
const requestBtn = document.getElementById("request-btn");

overviewBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "/dashboard/index.html";
});
requestBtn.addEventListener("click", function () {
    window.location.href = "/inspection/index.html";
});

function openPropertyTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Get all tab content elements and hide them
    tabcontent = document.getElementsByClassName("survey-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Get all tab links and remove the active class
    tablinks = document.getElementsByClassName("survey-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab and add the active class to the clicked tab link
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Set the default tab to be open when the page loads
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".survey-tab.active").click();
});
