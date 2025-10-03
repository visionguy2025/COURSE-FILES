// HEADER COMPONENT
const Header = (directory) => {
    let headerInnerHTML = `
        <section class="headerContainer section">
            <!-- MOBILE NAV BUTTON -->
            <button id="mobileBtn" onclick="enableMobileNav()"><i class="fa-solid fa-bars"></i></button>

            <!-- LOGO -->
            <div class="headerContainer__logo">
                <img src="${directory}/assets/common/logo.png" alt="logo">

                <div id="header_dropdown">
                    <div>
                        <i class="fa-solid fa-sun"></i>

                        <div id="switchBar" onclick="switchLight()">
                            <div id="switchBtn"></div>
                        </div>

                        <i class="fa-solid fa-moon"></i>
                    </div>
                    
                    <div>
                        <select name="language" id="language">
                            <option value="en" selected> English </option>
                            <option value="az"> Azerbaijani </option>
                            <option value="tr"> Turkish </option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- NAVBAR -->
            <nav class="headerContainer__navbar navDiplay1">
                <button id="mobileBtnClose" onclick="enableMobileNav()">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <li><a href="${directory}/index.html"> Home </a></li>
                <li><a href="${directory}/pages/gallery.html"> Gallery </a></li>
                <li><a href="${directory}/pages/about.html"> About </a></li>
                <li><a href="${directory}/pages/contact.html"> Contact </a></li>
            </nav>
        </section>
    `

    document.querySelector('#header').innerHTML = headerInnerHTML
}
