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


// ALLOWING MESSAGE TO AUTOMATICALLY SCROLL TO THE BOTTOM
let scrollToBottom = document.getElementById("scroll-to-bottom");
scrollToBottom.scrollTo(0, scrollToBottom.scrollHeight);
// ALLOWING MESSAGE TO AUTOMATICALLY SCROLL TO THE BOTTOM



// ACTIVATING CHAT FUNCTIONALITY IN THE MESSAGE SECTION
// Gets the first message
function starterMessage() {
    let firstMessage = "How's it going?";
    document.getElementById("starter-message").innerHTML = firstMessage;
  
    let time = getTime();
    document.getElementById("get-time").innerHTML = time;
  }
  
starterMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml =
    `<article class="chats-by-users">` + 
    '<img src="img/user-3.png" alt="User Image">' +
    '<article class="user-chat-time">' +
    '<h4>James Brown . <span id="get-time"></span></h4>' +
    '<p id="starter-message">' + 
    botResponse + "</p></article>";
    $("#chat-box").append(botHtml);
  
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();
  
    if (userText == "") {
      userText = "I love Code Palace!";
    }
  
    let userHtml = 
    '<img src="img/user-1.png" alt="User Image">' +
    '<article class="user-chat-time">' +
    '<h4>Moses Ojo . <span id="get-time"></span></h4>' +
    '<p id="starter-message">' + 
    userText + "</p></article>";
  
    $("#textInput").val("");
    $("#chat-box").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  
    setTimeout(() => {
      getHardResponse(userText);
    }, 1000);
  }

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = 
    '<img src="img/user-1.png" alt="User Image">' +
    '<article class="user-chat-time">' +
    '<h4>Moses Ojo . <span id="get-time"></span></h4>' +
    '<p id="starter-message">' + 
    sampleText + "</p></article>";
  
    $("#textInput").val("");
    $("#chat-box").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  
    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
  }

  function sendButton() {
    getResponse();
  }

  function smileButton() {
    buttonSendText("Smile clicked!");
  }

  // Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
      getResponse();
    }
  });
// ACTIVATING CHAT FUNCTIONALITY IN THE MESSAGE SECTION


function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
};

