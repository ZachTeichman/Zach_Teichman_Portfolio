const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const page = document.body.dataset.page;
if (page && siteNav) {
  siteNav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (
      (page === "home" && href === "index.html") ||
      (page === "experience" && href === "experience.html") ||
      (page === "investment-work" && href === "investment-work.html") ||
      (page === "about" && href === "about.html") ||
      (page === "contact" && href === "contact.html")
    ) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
}

const headshotImage = document.querySelector(".headshot-image");
const headshotPlaceholder = document.querySelector(".headshot-placeholder");

if (headshotImage && headshotPlaceholder) {
  headshotImage.addEventListener("load", () => {
    headshotImage.style.display = "block";
    headshotPlaceholder.style.display = "none";
  });

  headshotImage.addEventListener("error", () => {
    headshotImage.style.display = "none";
    headshotPlaceholder.style.display = "flex";
  });
}

const familyPhotoImage = document.querySelector(".family-photo-image");
const familyPhotoPlaceholder = document.querySelector(".family-photo-placeholder");

if (familyPhotoImage && familyPhotoPlaceholder) {
  familyPhotoImage.addEventListener("load", () => {
    familyPhotoImage.style.display = "block";
    familyPhotoPlaceholder.style.display = "none";
  });

  familyPhotoImage.addEventListener("error", () => {
    familyPhotoImage.style.display = "none";
    familyPhotoPlaceholder.style.display = "flex";
  });
}
