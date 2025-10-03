// FOOTER COMPONENT
const Footer = (directory) => {
    let footerInnerHTML = `
        <!-- TOP SIDE -->
        <section class="footerTop section">
            <div>
                <div>
                    <img src="${directory}/assets/common/logo.png" alt="logo">
                </div>
                <p>
                    <i class="fa-solid fa-phone"></i>
                    +994501234567
                </p>
                <p>
                    <i class="fa-solid fa-envelope"></i>
                    loremipsumsitdolor@gmail.com
                </p>
                <p>
                    <i class="fa-solid fa-location-dot"></i>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Gallery </a></li>
                <li><a href="#"> About </a></li>
                <li><a href="#"> Contact </a></li>
            </ul>

            <ul>
                <li><a href="#"> Lorem </a></li>
                <li><a href="#"> Ipsum </a></li>
                <li><a href="#"> Sit </a></li>
                <li><a href="#"> Dolor </a></li>
                <li><a href="#"> Amet </a></li>
            </ul>

            <div>
                <h3>
                    Untitled
                </h3>

                <div>
                    <a href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                    <a href="#">
                        <i class="fa-brands fa-artstation"></i>
                    </a>
                </div>

                <div>
                    <form>
                        <input type="email" placeholder="Your email">
                        <button> Subscribe </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- BOTTOM SIDE -->
        <section class="footerBottom section">
            <p>
                © 2025 LOGO. All Rights Reserved.
            </p>
        </section>
    `

    document.querySelector('#footer').innerHTML = footerInnerHTML
}
