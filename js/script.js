let profileMenu = document.getElementById("profileMenu");
let businessMenu = document.getElementById("businessMenu");
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

// CODE TO ALWAYS GENERATE THE UPDATED DATE
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()].toUpperCase();
let year = new Date().getFullYear();
document.getElementById("full-date").innerHTML = month + ", " + year;

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
  
    if (hours < 10) {
      hours = "0" + hours;
    }
  
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    let time = hours + ":" + minutes;
    return time;
}
// CODE TO ALWAYS GENERATE THE UPDATED DATE


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
let messageTabFocused = document.getElementById("message-tab-focused");
let messageTabOther = document.getElementById("message-tab-other");
let tabFocusedContent = document.getElementById("tab-focused-content");
let tabOtherContent = document.getElementById("tab-other-content");

function openFocused() {
    messageTabFocused.style.color = "#0f9f6f";
    messageTabOther.style.color = "#333";
    tabFocusedContent.style.transform = "translateX(0)";
    tabOtherContent.style.transform = "translateX(100%)";
    messageTabFocused.style.borderBottom = "2px solid #01754f";
    messageTabOther.style.border = "none";
}

function openOther() {
    messageTabFocused.style.color = "#333";
    messageTabOther.style.color = "#0f9f6f";
    tabFocusedContent.style.transform = "translateX(110%)";
    tabOtherContent.style.transform = "translateX(0)";
    messageTabFocused.style.borderBottom = "none";
    messageTabOther.style.borderBottom = "2px solid #01754f";
}
// MESSAGE TAB POPUP SECTION FOR TAB SWITCH



// MESSAGE TAB FOR CHAT SWITCH SECTION
let userMessage1 = document.getElementById("user-message-1");
let userMessage2 = document.getElementById("user-message-2");
let userChat1 = document.getElementById("user-chat-1");
let userChat2 = document.getElementById("user-chat-2");

function openUser1() {
    userChat1.style.transform = "translateX(0)";
    userChat2.style.transform = "translateX(130%)";
    userMessage1.classList.add('message-tab-highlight');
    userMessage1.classList.remove('message-tab-no-highlight');
    userMessage2.classList.add('message-tab-no-highlight');
    userMessage2.classList.remove('message-tab-highlight');
}

function openUser2() {
    userChat1.style.transform = "translateX(130%)";
    userChat2.style.transform = "translateX(0)";
    userMessage2.classList.add('message-tab-highlight');
    userMessage2.classList.remove('message-tab-no-highlight');
    userMessage1.classList.add('message-tab-no-highlight');
    userMessage1.classList.remove('message-tab-highlight');
}
// MESSAGE TAB FOR CHAT SWITCH SECTION


// ACTIVATING CHAT FUNCTIONALITY IN THE MESSAGE SECTION
// Gets the first message
function starterMessage() {
  let firstMessage = "How's it going?";
  document.getElementById("starter-message").innerHTML = firstMessage;

  let time = getTime();
  document.getElementById("get-time").innerHTML = time;
}

starterMessage();

// ACTIVATING CHAT FUNCTIONALITY IN THE MESSAGE SECTION




function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
};

