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
                    <li><a href="index.html" class="active-link"><i class='bx bxs-home'></i> <span>Home</span></a></li>
                    <li><a href="network.html"><i class='bx bxs-user-plus'></i> <span>My Network</span></a></li>
                    <li><a href="jobs.html"><i class='bx bxs-shopping-bag'></i> <span>Jobs</span></a></li>
                    <li><a href="message.html"><i class='bx bxs-message-rounded-dots'></i> <span>Messaging</span></a></li>
                    <li><a href="notifications.html"><i class='bx bxs-bell'></i> <span>Notifications</span></a></li>
                </ul>
            </section>

            <section class="navbar-right">
                <article class="online" onclick="toggleMenu()"> 
                    <img src="img/user-1.png" alt="User Image" class="nav-profile-img">
                    <p>Me <i class='bx bxs-down-arrow'></i></p>
                </article>

                <article class="for-business-nav" onclick="businessToggleMenu()">
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
            <article class="profile-menu-wrap" id="profileMenu">
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
            <article class="business-menu-wrap" id="businessMenu">
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