// to display dropdown menu when navbar tab is clicked
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return 

    // to open a dropdown menu
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    // to close all dropdown menu not in use
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})


// to display menu when hamburger is clicked
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navLinks = document.querySelector(".nav-links")
    navLinks.classList.toggle("active");
}