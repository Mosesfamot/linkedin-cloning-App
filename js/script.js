let profileMenu = document.querySelector(".toggle-menu");
let businessMenu = document.querySelector(".business-toggle-menu");
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

// PROFILE ICON MENU DROPDOWN
profileMenu.addEventListener("click", () => 
  document.body.classList.toggle("open-menu")
);
// PROFILE ICON MENU DROPDOWN


// BUSINESS ICON MENU DROPDOWN
businessMenu.addEventListener("click", () => 
  document.body.classList.toggle("open-business-menu")
);
// BUSINESS ICON MENU DROPDOWN


// NAVBAR ICON ACTIVE INDICATOR
document.querySelectorAll('.navbar-link').forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'active-link');
    }
});
// NAVBAR ICON ACTIVE INDICATOR


// MESSAGE TAB POPUP SECTION FOR TAB SWITCH

// window.onload=function() {

// let messageTabFocused = document.querySelector(".message-tab-focused");
// let messageTabOther = document.querySelector(".message-tab-other");
// let tabFocusedContent = document.querySelector(".tab-focused-content");
// let tabOtherContent = document.querySelector(".tab-other-content");

// messageTabFocused.addEventListener("click", () => 
//     messageTabFocused.style.color = "#0f9f6f",
//     messageTabOther.style.color = "#333",
//     tabFocusedContent.style.transform = "translateX(0)",
//     tabOtherContent.style.transform = "translateX(100%)",
//     messageTabFocused.style.borderBottom = "2px solid #01754f",
//     messageTabOther.style.border = "none"
// );

// messageTabOther.addEventListener("click", () =>
//     messageTabFocused.style.color = "#333",
//     messageTabOther.style.color = "#0f9f6f",
//     tabFocusedContent.style.transform = "translateX(110%)",
//     tabOtherContent.style.transform = "translateX(0)",
//     messageTabFocused.style.borderBottom = "none",
//     messageTabOther.style.borderBottom = "2px solid #01754f"
// );

// };

// MESSAGE TAB POPUP SECTION FOR TAB SWITCH


// MESSAGE TAB POPUP SECTION COLLAPSIBLE

var coll = document.getElementsByClassName("message-tab-pop-icon");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// MESSAGE TAB POPUP SECTION COLLAPSIBLE




function toggleActivity() {
    sideActivity.classList.toggle("open-activity");
    
    if(sideActivity.classList.contains("open-activity")) {
        moreLink.innerHTML = "Show less <b>-</b>";
    } else {
        moreLink.innerHTML = "Show more <b>+</b>";
    }
};