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
const chatInput = document.querySelector(".chat-input-area input");
const sendChatBtn = document.querySelector(".chat-footer-action a");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = "";
const inputInitHeight = chatInput.scrollHeight;

// Gets the first message
function starterMessage() {
  let firstMessage = "How's it going?";
  document.getElementById("starter-message").innerHTML = firstMessage;

  let time = getTime();
  document.getElementById("get-time").innerHTML = time;
}

starterMessage();

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("article");
  chatLi.classList.add("chats-by-users", className);
  let chatContent = className === "chats-by-users" ? 
  `<p id="starter-message"></p>` : 
  `<article class="chats-by-users">
    <img src="img/user-3.png" alt="User Image">
    <article class="user-chat-time">
      <h4>James Brown . <span id="get-time"></span></h4>
      <p id="starter-message"></p>
    </article>
  </article>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (incomingChatLi) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageELement = incomingChatLi.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }]
    })
  }

  // Send POST request to API, get response
  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageELement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        messageELement.classList.add("error");
        messageELement.textContent = "Opps! I'm currently busy. Drop your messages if it's very urgent.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;
  chatInput.value = "";
  //Resets textarea height to its default height once message is sent
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "chats-by-users"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Playing..." message while waiting for the response
    const incomingChatLi = createChatLi("Typing...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  //Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window width
  // is greater than 800px, handle the chat
  if(e.key === "Enter" && !e.shiftkey && window.innerWidth > 800) {
      e.preventDefault();
      handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);

// ACTIVATING CHAT FUNCTIONALITY IN THE MESSAGE SECTION




function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
};

