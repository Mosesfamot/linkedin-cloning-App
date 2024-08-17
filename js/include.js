class pageNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <section class="navbar-left">
                <a href="index.html" class="logo"><img src="img/logo.png" alt="LinkedIn Logo"></a>

                <article class="search-box">
                    <i class='bx bx-search' ></i>
                    <input type="text" placeholder="Search">
                </article>

            </section>
            <section class="navbar-center">
                <ul>
                    <li><a href="index.html" class="navbar-link"><i class='bx bxs-home'></i> <span>Home</span></a></li>
                    <li><a href="network.html" class="navbar-link"><i class='bx bxs-user-plus'></i> <span>My Network</span></a></li>
                    <li><a href="jobs.html" class="navbar-link"><i class='bx bxs-shopping-bag'></i> <span>Jobs</span></a></li>
                    <li><a href="message.html" class="navbar-link"><i class='bx bxs-message-rounded-dots'></i> <span>Messaging</span></a></li>
                    <li><a href="notifications.html" class="navbar-link"><i class='bx bxs-bell'></i> <span>Notifications</span></a></li>
                </ul>
            </section>

            <section class="navbar-right">
                <article class="online toggle-menu"> 
                    <img src="img/user-1.png" alt="User Image" class="nav-profile-img">
                    <p>Me <i class='bx bxs-down-arrow'></i></p>
                </article>

                <article class="for-business-nav business-toggle-menu">
                    <i class='bx bx-dots-horizontal'></i>
                    <i class='bx bx-dots-horizontal'></i>
                    <i class='bx bx-dots-horizontal'></i>
                    <p>For Business <i class='bx bxs-down-arrow'></i></p>
                </article>

                <article class="try-premium-link">
                    <h6><i class='bx bxs-checkbox' style='color: goldenrod'></i> PREMIUM</h6>
                    <p>Try Premium for USD0</p>
                </article>
            </section>

            <!-- PROFILE DROP-DOWN MENU  -->
            <article class="profile-menu-wrap">
                <article class="profile-menu">

                    <article class="user-info">
                        <img src="img/user-1.png" alt="User Image">
                        <article>
                            <a href="profile.html">
                                <h3>Moses Ojo</h3>
                                <p class="dropdown-menu-user-desc">Full Stack Web Developer</p>
                            </a>
                        </article>
                    </article>
                    <a href="profile.html" class="dropdown-menu-profilelink">
                        <p>View Profile</p>
                    </a>

                    <hr>

                    <article class="dropdown-menu-list">
                        <h3>Account</h3>
                        <a href="#" class="profile-menu-link-premium">
                            <p class="">
                                <i class='bx bxs-checkbox' style='color: goldenrod'></i>
                                Try 1 month of Premium for USD0
                            </p>
                        </a>
                        <a href="#" class="profile-menu-link">
                            <p>Settings & Privacy</p>
                        </a>
                        <a href="#" class="profile-menu-link">
                            <p>Help</p>
                        </a>
                        <a href="#" class="profile-menu-link">
                            <p>Language</p>
                        </a>
                    </article>

                    <hr>

                    <article class="dropdown-menu-list">
                        <h3>Manage</h3>
                        <a href="#" class="profile-menu-link">
                            <p>Posts & Activity</p>
                        </a>
                        <a href="#" class="profile-menu-link">
                            <p>Job Posting Account</p>
                        </a>
                    </article>
                        
                    <hr>

                    <article class="dropdown-menu-list">
                        <a href="#" class="profile-menu-link">
                            <p>Sign Out</p>
                        </a>
                    </article>
                    
                </article>
            </article>
            <!-- PROFILE DROP-DOWN MENU  -->


            <!-- BUSINESS DROP-DOWN MENU  -->
            <article class="business-menu-wrap">
                <article class="business-menu">

                    <article class="dropdown-menu-list-left">
                        <h3>Visit More LinkedIn Products</h3>
                        <a href="#" class="business-menu-link">
                            <p class="">
                                <i class='bx bxs-compass' ></i>
                                <span>Find Leads</span>
                            </p>
                        </a>
                        <a href="#" class="business-menu-link">
                            <p class="">
                                <i class='bx bxs-group' ></i>
                                <span>Groups</span>
                            </p>
                        </a>

                        <h4>Talent</h4>
                        <a href="#" class="business-menu-link">
                            <p class="">
                                <i class='bx bxs-bar-chart-square' ></i>
                                <span>Talent Insights</span>
                            </p>
                        </a>
                        <a href="#" class="business-menu-link">
                            <p class="">
                                <i class='bx bxs-notepad'></i>
                                <span>Post a job</span>
                            </p>
                        </a>

                        <h4>Sales</h4>
                        <a href="#" class="business-menu-link">
                            <p class="">
                                <i class='bx bxs-user-check'></i>
                                <span>Services Marketplace</span>
                            </p>
                        </a>

                        <h4>Marketing</h4>
                        <a href="#" class="business-menu-link">
                            <p class="">
                                <i class='bx bx-podcast'></i>
                                <span>Advertise</span>
                            </p>
                        </a>

                        <h4>Learning</h4>
                        <a href="#" class="business-menu-link">
                            <p class="">
                                <i class='bx bxl-youtube'></i>
                                <span>Learning</span>
                            </p>
                        </a>
                    </article>

                    <hr>

                    <article class="dropdown-menu-list-right">
                        <h3>Explore more for business</h3>

                        <h4>Hire on LinkedIn</h4>
                        <a href="#" class="business-menu-link">
                            <p>Find attract and recruit talent</p>
                        </a>

                        <h4>Sell with LinkedIn</h4>
                        <a href="#" class="business-menu-link">
                            <p>Unlock sales opportunities</p>
                        </a>

                        <h4>Post a job for free</h4>
                        <a href="#" class="business-menu-link">
                            <p>Get qualified applicants quickly</p>
                        </a>

                        <h4>Advertise on LinkedIn</h4>
                        <a href="#" class="business-menu-link">
                            <p>Acquire customers and grow your business</p>
                        </a>

                        <h4>Learn with LinkedIn</h4>
                        <a href="#" class="business-menu-link">
                            <p>Courses to develop your employees</p>
                        </a>

                        <h4>Admin Center</h4>
                        <a href="#" class="business-menu-link">
                            <p>Manage billing and account details</p>
                        </a>

                        <h4>Create a Company Page <i class='bx bx-plus' ></i></h4>
                    </article>
                    
                </article>
            </article>
            <!-- BUSINESS DROP-DOWN MENU  -->

        </nav>
        `
    }
};

customElements.define('include-navbar', pageNavbar);


class messagetabPop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="message-tab-pop">
            
            <article class="message-tab-pop-icon">
                <article class="popup-profile">
                    <img src="img/user-1.png" alt="User-image">
                    <span>Messaging</span>
                    <i class='bx bx-dots-horizontal-rounded'></i>
                    <i class='bx bxs-edit'></i>
                    <i class='bx bx-chevron-down'></i>
                </article>
            </article>

            <article class="message-tab-pop-bg">

                <article class="message-tab-pop-container">

                    <article class="search-box-container">
                        <article class="search-box">
                            <i class='bx bx-search' ></i>
                            <input type="text" placeholder="Search messages">
                            <i class='bx bx-slider'></i>
                        </article>
                    </article>
        
                    <article class="message-popup-tabs">
                        <ul class="message-tab-pop-list">
                            <li class="message-tab-focused">Focused</li>
                            <li class="message-tab-other">Other</li>
                        </ul>
                    </article>
    
                    <article class="message-popup-focused-content tab-focused-content active">
                        <img src="img/user-2.png" alt="User-Image">
                        <article class="message-content-highlight">
                            <h4>Blessing Gabriel <span>Jun 31, 2024</span></h4>
                            <p>Blessing: Okay</p>
                        </article>
                    </article>
                    
                    <article class="message-popup-focused-content tab-focused-content active">
                        <img src="img/user-3.png" alt="User-Image">
                        <article class="message-content-highlight">
                            <h4>Johnson Brown <span>Jul 15, 2024</span></h4>
                            <p>Johnson: You qualify for...</p>
                        </article>
                    </article>

                    <article class="message-popup-other-content tab-other-content">
                        <img src="img/message-image.svg" alt="Message-Image">
                        <h3>No messages yet</h3>
                        <p>Reach out and start a conversation to advance your career</p>
                        <a href="#">Send a message</a>
                    </article>

                </article>    

            </article>
        </section>
        `
    }
};

customElements.define('messagetab-pop', messagetabPop);


class messagetabChatPop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="message-tab-chatpop">

            <article class="message-tab-chatpop-icon">
                <article class="message-tab-chatpop-profile">
                    <article class="chatpopup-profile">
                        <img src="img/user-2.png" alt="User-image">
                        <span>Blessing Gabriel</span>
                    </article>
                    <article class="chatpop-icon">
                        <i class='bx bx-dots-horizontal-rounded'></i>
                        <i class='bx bxs-video-plus'></i>
                        <i class='bx bx-collapse'></i>
                        <i class='bx bx-x'></i>
                    </article>
                    <!-- <hr> -->
                </article>
            </article>

            <article class="message-tab-chatpop-bg">
                
                <article class="chatpop-box-container">

                    <article class="message-tab-full-chat">
    
                        <article id="scroll-to-bottom" class="full-message-chat" style="height: 50vh;">
                            <article class="full-message-chat-profile">
                                <img src="img/user-2.png" alt="Image">
                                <h4>Blessing Gabriel . <span>1st</span></h4>
                                <p>Team Lead at Quest Co</p>
                            </article>
                            
                            <article id="chat-box" class="full-chats-section">
                                <article class="full-chat-date">
                                    <hr>
                                    <p>JUN 20, 2024</p>
                                    <hr>
                                </article>
                                
                                <article class="chats-by-users">
                                    <img src="img/user-2.png" alt="User Image">
                                    <article class="user-chat-time">
                                        <h4>Blessing Gabriel . <span>02:20 PM</span></h4>
                                        <p>Thanks for connecting! How are you?</p>
                                    </article>
                                </article>

                                <article class="chats-by-users">
                                    <img src="img/user-1.png" alt="User Image">
                                    <article class="user-chat-time">
                                        <h4>Moses Ojo . <span>02:25 PM</span></h4>
                                        <p>It's my pleasure. I'm fine thank you. And you?</p>
                                    </article>
                                </article>

                                <article class="chats-by-users">
                                    <img src="img/user-2.png" alt="User Image">
                                    <article class="user-chat-time">
                                        <h4>Blessing Gabriel . <span>02:28 PM</span></h4>
                                        <p>
                                            I'm good. 
                                            <br>
                                            I think AR has so much potential, especially with how immersive it's getting.
                                            <br>
                                            Did you hear anything about the rumored Apple car?
                                        </p>
                                    </article>
                                </article>

                                <article class="chats-by-users">
                                    <img src="img/user-1.png" alt="User Image">
                                    <article class="user-chat-time">
                                        <h4>Moses Ojo . <span>02:30 PM</span></h4>
                                        <p>
                                            A little bit, but it's still pretty hush-hush. 
                                            <br>
                                            I'm guessing it's going to be autonomou with some crazy AI integration.                                            
                                        </p>
                                    </article>
                                </article>

                                <article class="chats-by-users">
                                    <img src="img/user-2.png" alt="User Image">
                                    <article class="user-chat-time">
                                        <h4>Blessing Gabriel . <span>02:32 PM</span></h4>
                                        <p>
                                            Couldn't agree more. Here's to more innovations and awesome tech!
                                        </p>
                                    </article>
                                </article>

                                <article class="chats-by-users">
                                    <img src="img/user-1.png" alt="User Image">
                                    <article class="user-chat-time">
                                        <h4>Moses Ojo . <span>02:33 PM</span></h4>
                                        <p>&#x1F44D;</p>
                                    </article>
                                </article>

                                <article class="full-chat-date">
                                    <hr>
                                    <p class="chat-full-date"></p>
                                    <hr>
                                </article>

                                <article class="chats-by-users">
                                    <img src="img/user-2.png" alt="User Image">
                                    <article class="user-chat-time">
                                        <h4>Blessing Gabriel . <span id="get-time"></span></h4>
                                        <p id="starter-message"></p>
                                    </article>
                                </article>

                                <article class="chatbox incoming">
                                    <!-- <article class="chats-by-users">
                                        <img src="img/user-3.png" alt="User Image">
                                        <article class="user-chat-time">
                                            <h4>James Brown . <span id="get-time"></span></h4>
                                            <p id="starter-message"></p>
                                        </article>
                                    </article> -->
                                </article>

                            </article>
                        </article>
                    </article>

                    <article class="message-chat-input">

                        <article class="chat-input-area">
                            <input id="textInput" class="input-box" type="text" placeholder="Write a message...">
                            <i class='bx bx-chevron-up'></i>
                        </article>
                        <hr>
                        

                        <article class="message-chat-footer">
                            
                            <article class="chat-footer-icon">
                                <i class='bx bx-image bx-flip-horizontal'></i>
                                <i class='bx bx-paperclip'></i>
                                <i class='bx bxs-file-gif'></i>
                                <i class='bx bx-smile' onclick="smileButton()"></i>

                                <!-- <article class="chat-footer-icon chat-footer-action"> -->
                                    <a href="#">Send</a>
                                    <i class='bx bx-dots-horizontal-rounded message-option-icon'></i>
                                <!-- </article> -->
                            </article>
                            
                        </article>
                    </article>

                </article>

            </article>

        </section>
        `
    }
};

customElements.define('messagetab-chatpop', messagetabChatPop);


class messagetabChatPop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="message-tab-newmessage">

            <article class="message-tab-newmessage-icon">
                <article class="chatpopup-profile">
                    <span>New message</span>
                </article>
                <article class="chatpop-icon">
                    <i class='bx bx-collapse'></i>
                    <i class='bx bx-x'></i>
                </article>
            </article>

            <article class="message-tab-newmessage-bg">
                
                <article class="newmessage-box-container">
                    <article class="namesearch">
                        <input type="text" placeholder="Type a name or multiple names">
                    </article>
                    <hr>
                    <p>Suggested</p>

                    <article class="namesuggestcontainer">

                        <article class="namesuggestions">
                            <article class="suggestedname">
                                <article class="suggestedimage">
                                    <img src="img/user-2.png" alt="User Image">
                                </article>
                                <article class="suggesteddetails">
                                    <p class="suggesteddetailsname">Blessing Gabriel</p>
                                    <p class="suggesteddetailsdesc">Student at The Polytechnic Ibadan</p>
                                    <hr>
                                </article>
                            </article>
                        </article>
    
                        <article class="namesuggestions">
                            <article class="suggestedname">
                                <article class="suggestedimage">
                                    <img src="img/user-3.png" alt="User Image">
                                </article>
                                <article class="suggesteddetails">
                                    <p class="suggesteddetailsname">Jacob Williams</p>
                                    <p class="suggesteddetailsdesc">Backend Engineer at Microsoft</p>
                                    <hr>
                                </article>
                            </article>
                        </article>
    
                        <article class="namesuggestions">
                            <article class="suggestedname">
                                <article class="suggestedimage">
                                    <img src="img/user-4.png" alt="User Image">
                                </article>
                                <article class="suggesteddetails">
                                    <p class="suggesteddetailsname">Lara Gorge</p>
                                    <p class="suggesteddetailsdesc">Forester and Cinematographer</p>
                                    <hr>
                                </article>
                            </article>
                        </article>
    
                        <article class="namesuggestions">
                            <article class="suggestedname">
                                <article class="suggestedimage">
                                    <img src="img/user-1.png" alt="User Image">
                                </article>
                                <article class="suggesteddetails">
                                    <p class="suggesteddetailsname">Gabriel Lazarus</p>
                                    <p class="suggesteddetailsdesc">Brand Storyteller</p>
                                    <hr>
                                </article>
                            </article>
                        </article>
                        
                    </article>

                </article>

            </article>
        </section>
        `
    }
};

customElements.define('messagetab-chatpop', messagetabChatPop);