
// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// CLOSE MENU WHEN LINK CLICKED (MOBILE FIX)
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


const links = document.querySelectorAll(".menu a");
const views = document.querySelectorAll(".view");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = link.getAttribute("data-target");

        views.forEach(view => {
            view.classList.remove("active");
        });

        document.getElementById(target).classList.add("active");
    });
});
