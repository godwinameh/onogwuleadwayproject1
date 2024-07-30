document.addEventListener("DOMContentLoaded", function () {
    const allRequestsBtn = document.getElementById("all-requests-btn");
    const ongoingBtn = document.getElementById("ongoing-btn");
    const completedBtn = document.getElementById("completed-btn");
    const allRequestsTable = document.getElementById("all-requests-table");
    const ongoingTable = document.getElementById("ongoing-table");
    const completedTable = document.getElementById("completed-table");
    const inspectionBtn = document.getElementById("inspection-btn");
    const overviewBtn = document.getElementById("overview-btn");
    const requestBtn = document.getElementById("request-btn");
    const ongoingTableBtn = document.getElementById("ongoing-table-btn");

    const buttons = [allRequestsBtn, ongoingBtn, completedBtn];

    function showTable(activeBtn, activeTable) {
        // Hide all tables
        allRequestsTable.style.display = "none";
        ongoingTable.style.display = "none";
        completedTable.style.display = "none";

        // Remove active class from all buttons
        buttons.forEach((button) => button.classList.remove("active"));

        // Show the selected table and add active class to the clicked button
        activeTable.style.display = "block";
        activeBtn.classList.add("active");
    }

    // Set default active state for "All Requests"
    showTable(allRequestsBtn, allRequestsTable);

    allRequestsBtn.addEventListener("click", function () {
        showTable(allRequestsBtn, allRequestsTable);
    });

    ongoingBtn.addEventListener("click", function () {
        showTable(ongoingBtn, ongoingTable);
    });

    completedBtn.addEventListener("click", function () {
        showTable(completedBtn, completedTable);
    });

    inspectionBtn.addEventListener("click", function () {
        window.location.href = "/create-inspection/index.html";
    });
    overviewBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/dashboard/index.html";
    });
    requestBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "/inspection/index.html";
    });
    ongoingTableBtn.addEventListener("click", function () {
        window.location.href = "/ongoing/index.html";
    });
});
