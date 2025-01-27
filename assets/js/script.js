document.querySelectorAll("#link a").forEach(function (element) {
    element.addEventListener("click", function () {
        document.querySelectorAll("#link a").forEach(function (el) {
            el.classList.remove("font-extra-bold");
            let line = el.querySelector("span");
            if (line) {
                line.classList.remove("w-full");
            }
        });

        this.classList.add("font-extra-bold");

        let line = this.querySelector("span");
        if (line) {
            line.classList.add("w-full");
        }
    });
});


// Burger Button
document.getElementById("mobile-menu-button").addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    var openIcon = document.getElementById("open-icon");
    var closeIcon = document.getElementById("close-icon");

    // Toggle the mobile menu visibility
    mobileMenu.classList.toggle("hidden");

    // Toggle icons
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    // Toggle aria-expanded attribute for accessibility
    var isExpanded = mobileMenu.classList.contains("hidden") ? "false" : "true";
    this.setAttribute("aria-expanded", isExpanded);
});
