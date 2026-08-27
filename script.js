const mainImage = document.querySelector("#main-product-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {

    thumbnail.addEventListener("click", () => {

        const newImage = thumbnail.dataset.image;
        const newAlt = thumbnail.dataset.alt;

        mainImage.style.opacity = "0";

        setTimeout(() => {

            mainImage.src = newImage;
            mainImage.alt = newAlt;

            mainImage.style.opacity = "1";

        }, 180);


        thumbnails.forEach((item) => {
            item.classList.remove("active");
        });

        thumbnail.classList.add("active");

    });

});
/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isOpen =
            item.classList.contains("active");


        /* CERRAMOS TODAS */

        faqItems.forEach((otherItem) => {

            otherItem.classList.remove("active");

            const otherQuestion =
                otherItem.querySelector(".faq-question");

            otherQuestion.setAttribute(
                "aria-expanded",
                "false"
            );

        });


        /* ABRIMOS LA SELECCIONADA */

        if (!isOpen) {

            item.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});
/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const siteHeader =
    document.querySelector(".header");


if (menuToggle && siteHeader) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            siteHeader.classList.toggle(
                "mobile-menu-open"
            );

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const mobileNavLinks =
        siteHeader.querySelectorAll(".nav a");


    mobileNavLinks.forEach((link) => {

        link.addEventListener("click", () => {

            siteHeader.classList.remove(
                "mobile-menu-open"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}