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

                        <div id="switchBar" onclick="switchLight(true)">
                            <div id="switchBtn"></div>
                        </div>

                        <i class="fa-solid fa-moon"></i>
                    </div>
                    
                    <div>
                        <div id="languageBar">
                            <p id="languageBar_currentLanguage"></p>
                            <div id="languageBar_options">
                                <p id="languageBar_options__lang_en" onclick="changeLanguage(this)"> English </p>
                                <p id="languageBar_options__lang_az" onclick="changeLanguage(this)"> Azerbaijani </p>
                                <p id="languageBar_options__lang_tr" onclick="changeLanguage(this)"> Turkish </p>
                            </div>
                        </div>
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
