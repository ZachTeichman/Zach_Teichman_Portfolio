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
      siteNav.querySelectorAll(".nav-group.is-open").forEach((group) => {
        group.classList.remove("is-open");
        const button = group.querySelector(".nav-subtoggle");
        if (button) button.setAttribute("aria-expanded", "false");
      });
    });
  });

  siteNav.querySelectorAll(".nav-subtoggle").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const group = button.closest(".nav-group");
      if (!group) return;
      const isOpen = group.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

const page = document.body.dataset.page;
if (page && siteNav) {
  const isAboutSectionPage =
    page === "about" ||
    page === "sports" ||
    page === "tennis" ||
    page === "coaching" ||
    page === "buffalo-chicken";

  siteNav.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (
      (page === "home" && href === "index.html") ||
      (page === "experience" && href === "experience.html") ||
      (page === "investment-work" && href === "investment-work.html") ||
      (isAboutSectionPage && href === "about.html") ||
      (page === "sports" && href === "sports.html") ||
      (page === "tennis" && href === "tennis.html") ||
      (page === "coaching" && href === "coaching.html") ||
      (page === "buffalo-chicken" && href === "buffalo-chicken.html") ||
      (page === "contact" && href === "contact.html")
    ) {
      link.classList.add("is-active");
      if (href === "about.html" || href === "index.html" || href === "experience.html" || href === "investment-work.html" || href === "contact.html") {
        link.setAttribute("aria-current", "page");
      }
    }
  });

  if (isAboutSectionPage) {
    const aboutGroup = siteNav.querySelector(".nav-group");
    if (aboutGroup) {
      aboutGroup.classList.add("is-open");
      const button = aboutGroup.querySelector(".nav-subtoggle");
      if (button) button.setAttribute("aria-expanded", "true");
    }
  }
}

const headshotImage = document.querySelector(".headshot-image");
const headshotPlaceholder = document.querySelector(".headshot-placeholder");

if (headshotImage && headshotPlaceholder) {
  const showHeadshot = () => {
    headshotImage.style.display = "block";
    headshotPlaceholder.style.display = "none";
  };

  const hideHeadshot = () => {
    headshotImage.style.display = "none";
    headshotPlaceholder.style.display = "flex";
  };

  if (headshotImage.complete && headshotImage.naturalWidth > 0) {
    showHeadshot();
  } else if (headshotImage.complete) {
    hideHeadshot();
  }

  headshotImage.addEventListener("load", showHeadshot);
  headshotImage.addEventListener("error", hideHeadshot);
}

const familyPhotoImage = document.querySelector(".family-photo-image");
const familyPhotoPlaceholder = document.querySelector(".family-photo-placeholder");

if (familyPhotoImage && familyPhotoPlaceholder) {
  const showFamilyPhoto = () => {
    familyPhotoImage.style.display = "block";
    familyPhotoPlaceholder.style.display = "none";
  };

  const hideFamilyPhoto = () => {
    familyPhotoImage.style.display = "none";
    familyPhotoPlaceholder.style.display = "flex";
  };

  if (familyPhotoImage.complete && familyPhotoImage.naturalWidth > 0) {
    showFamilyPhoto();
  } else if (familyPhotoImage.complete) {
    hideFamilyPhoto();
  }

  familyPhotoImage.addEventListener("load", showFamilyPhoto);
  familyPhotoImage.addEventListener("error", hideFamilyPhoto);
}
