import "./imports";

let transparent = true;
let scroll_distance = 0;

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    scroll_distance = navbar.getAttribute("color-on-scroll") || 500;
    if (navbar.length !== 0) {
        webApp.checkScrollForTransparentNavbar();
        window.addEventListener("scroll", webApp.checkScrollForTransparentNavbar);
    }
    Array.from(document.getElementsByClassName("scroll")).forEach(elem =>
        elem.addEventListener("click", () => {
            const val = document.getElementById(elem.getAttribute("target")).offsetTop;
            window.scroll({top: val - 270, left: 0, behavior: "smooth"});
        }));
});

const webApp = {
    misc: {
        navbar_menu_visible: 0
    },
    checkScrollForTransparentNavbar: debounce(() => {
        if (window.scrollY > scroll_distance) {
            if (transparent) {
                transparent = false;
                document.getElementById("navbar").classList.remove("navbar-transparent");
            }
        } else {
            if (!transparent) {
                transparent = true;
                document.getElementById("navbar").classList.add("navbar-transparent");
            }
        }
    }, 17),

}

function debounce(func, wait, immediate) {
    let timeout;
    return () => {
        let context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}
