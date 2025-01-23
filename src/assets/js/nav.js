document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".toggle-menu .menu-btn")
    const cancelBtn = document.querySelector(".toggle-menu .cancel-btn")
    const nav = document.querySelector("nav")
    const navItems = document.querySelectorAll(".nav-item")

    // toggleMenuCheckbox.addEventListener("change", () => {
    //     if (toggleMenuCheckbox.checked) {
    //         nav.classList.add("show")
    //     } else {
    //         nav.classList.remove("show")
    //     }
    // })

    menuBtn.addEventListener("click", () => {
        nav.classList.add("show")
        cancelBtn.classList.add("show")
        menuBtn.classList.remove("show")
        // menuBtn.style.display = "none"
        // cancelBtn.style.display = "block"
    })
    
    cancelBtn.addEventListener("click", () => {
        nav.classList.remove("show")
        cancelBtn.classList.remove("show")
        menuBtn.classList.add("show")
    })

    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("show");
            cancelBtn.classList.remove("show")
            menuBtn.classList.add("show")
        });
    });
})