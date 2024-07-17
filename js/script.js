let profileMenu = document.getElementById("profileMenu");
let businessMenu = document.getElementById("businessMenu");
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

const messagePopupTabs = document.querySelectorAll('[data-tab-target]');
const messagePopupContent = document.querySelectorAll(['data-tab-content']);

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

messagePopupTabs.forEach(messagePopupTab => {
    messagePopupTab.addEventListener('click', () => {
        const target = document.querySelector(messagePopupTab.dataset.tabTarget);
        messagePopupContent.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        target.classList.add('active');
    })
});

// MESSAGE TAB POPUP SECTION FOR TAB SWITCH

function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
};

