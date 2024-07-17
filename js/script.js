let profileMenu = document.getElementById("profileMenu");
let businessMenu = document.getElementById("businessMenu");
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

let messageTabFocused = document.getElementById("message-tab-focused");
let messageTabOther = document.getElementById("message-tab-other");
let tabFocusedContent = document.getElementById("tab-focused-content");
let tabOtherContent = document.getElementById("tab-other-content");

// NAVBAR ICON ACTIVE INDICATOR

document.querySelectorAll('.navbar-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'active-link');
    }
});

// NAVBAR ICON ACTIVE INDICATOR

// PROFILE ICON MENU DROPDOWN

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
};

// PROFILE ICON MENU DROPDOWN

// BUSINESS ICON MENU DROPDOWN

function businessToggleMenu() {
    businessMenu.classList.toggle("open-business-menu");
};

// BUSINESS ICON MENU DROPDOWN

// MESSAGE TAB POPUP SECTION FOR TAB SWITCH



// MESSAGE TAB POPUP SECTION FOR TAB SWITCH

function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
};

