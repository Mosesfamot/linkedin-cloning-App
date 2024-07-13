let profileMenu = document.getElementById("profileMenu");
let businessMenu = document.getElementById("businessMenu");
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
};

function businessToggleMenu() {
    businessMenu.classList.toggle("open-business-menu");
};

function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
};

