// CODE TO ALWAYS GENERATE THE UPDATED DATE
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()].toUpperCase();
let year = new Date().getFullYear();
let fullDate = document.querySelector(".chat-full-date");
fullDate.innerHTML = month + ", " + year;

function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
  
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


// MESSAGE TAB FOR CHAT SWITCH SECTION
// window.onload=function() {

let userMessage1 = document.querySelector(".user-message-1");
let userMessage2 = document.querySelector(".user-message-2");
let userChat1 = document.querySelector(".user-chat-1");
let userChat2 = document.querySelector(".user-chat-2");

userMessage1.addEventListener("click", () => 
    userChat1.style.transform = "translateX(0)",
    userChat2.style.transform = "translateX(130%)",
    userMessage1 = document.body.classList.add('message-tab-highlight'),
    userMessage1 = document.body.classList.remove('message-tab-no-highlight'),
    userMessage2 = document.body.classList.add('message-tab-no-highlight'),
    userMessage2 = document.body.classList.remove('message-tab-highlight')
);

// userMessage2.addEventListener("click", () => 
//     userChat1.style.transform = "translateX(130%)",
//     userChat2.style.transform = "translateX(0)",
//     userMessage1 = document.body.classList.add('message-tab-no-highlight'),
//     userMessage1 = document.body.classList.remove('message-tab-highlight'),
//     userMessage2 = document.body.classList.add('message-tab-highlight'),
//     userMessage2 = document.body.classList.remove('message-tab-no-highlight')
// );

// };

// MESSAGE TAB FOR CHAT SWITCH SECTION


// ACTIVATING CHAT FUNCTIONALITY IN THE MESSAGE SECTION
import {chatApiKey} from './apikey.js'; 
const chatInput = document.querySelector(".chat-input-area input");
const sendChatBtn = document.querySelector(".chat-footer-action a");
const chatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY = chatApiKey();
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
  // Create a chat <article> element with passed message and className
  const chatLi = document.createElement("article");
  chatLi.classList.add("chatbox", className);
  let chatContent = className === "outgoing" ? 
  `<article class="chats-by-users">
    <img src="img/user-1.png" alt="User Image">
    <article class="user-chat-time">
      <h4>Moses Ojo . <span id="get-time"></span></h4>
      <p id="starter-message"></p>
    </article>
  </article>` : 
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
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Typing..." message while waiting for the response
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