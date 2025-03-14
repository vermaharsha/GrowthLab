document.addEventListener("DOMContentLoaded", function () {
  // ====================================
  // Navigation Menu Toggle
  // ====================================
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const menuItems = document.querySelectorAll(".nav-menu li a");
  const menuIcon = document.getElementById("menuIcon");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    });
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 824 && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      menuIcon.classList.add("fa-bars");
      menuIcon.classList.remove("fa-times");
    }
  });

  // ====================================
  // Hero Section Dynamic Text
  // ====================================
  const words = ["Engage🤩", "Optimize😎", "$$$🤑"];
  let index = 0;
  const dynamicText = document.getElementById("dynamic-text");

  function changeText() {
    dynamicText.style.opacity = 0;
    setTimeout(() => {
      dynamicText.textContent = words[index];
      dynamicText.style.opacity = 1;
      index = (index + 1) % words.length;
    }, 500);
  }
  setInterval(changeText, 1000);
  changeText();

  // ====================================
  // Feature Section Toggle
  // ====================================
  const featureItems = document.querySelectorAll(".feature-item");
  const featureImage = document.getElementById("feature-image");
  const featureImages = [
    "img/feature1.png",
    "img/feature2.png",
    "img/feature3.png",
    "img/feature4.png",
  ];

  // Preload feature images
  featureImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  function handleFeatureClick(item, index) {
    // Close any other open feature
    featureItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
        const otherDetails = otherItem.querySelector(".feature-details");
        otherDetails.style.maxHeight = "0px";
        const otherIcon = otherItem.querySelector(".feature-toggle .icon");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
    // Toggle clicked feature
    const details = item.querySelector(".feature-details");
    const icon = item.querySelector(".feature-toggle .icon");
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      details.style.maxHeight = "0px";
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      item.classList.add("open");
      details.style.maxHeight = details.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      featureImage.src = featureImages[index];
    }
  }

  featureItems.forEach((item, index) => {
    const toggle = item.querySelector(".feature-toggle");
    toggle.addEventListener("click", function () {
      handleFeatureClick(item, index);
    });
  });

  // Open the first feature by default
  if (featureItems.length > 0) {
    const firstItem = featureItems[0];
    const firstDetails = firstItem.querySelector(".feature-details");
    const firstIcon = firstItem.querySelector(".feature-toggle .icon");
    firstItem.classList.add("open");
    firstDetails.style.maxHeight = firstDetails.scrollHeight + "px";
    firstIcon.classList.remove("fa-plus");
    firstIcon.classList.add("fa-minus");
    featureImage.src = featureImages[0];
  }

  // ====================================
  // FAQ Accordion: Only one open at a time
  // ====================================
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((card) => {
    const question = card.querySelector(".ques");
    const symbol = question.querySelector(".toggle-symbol");

    question.addEventListener("click", function () {
      // Close all other FAQ cards
      faqCards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("open");
          const otherSymbol = otherCard.querySelector(".toggle-symbol");
          if (otherSymbol) {
            otherSymbol.textContent = "+";
          }
        }
      });

      // Toggle current FAQ card
      if (card.classList.contains("open")) {
        card.classList.remove("open");
        symbol.textContent = "+";
      } else {
        card.classList.add("open");
        symbol.textContent = "-";
      }
    });
  });

  // ====================================
  // Customer Spotlight Slider Initialization
  // ====================================
  var customerSwiper = new Swiper(".customer-slider", {
    rewind: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".spotlight-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".spotlight-slider .swiper-button-next",
      prevEl: ".spotlight-slider .swiper-button-prev",
    },
  });

  // ====================================
  // Testimonial Slider Initialization
  // ====================================
  var testimonialSwiper = new Swiper(".testimonial-slider", {
    rewind: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonials-section .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-section .swiper-button-next",
      prevEl: ".testimonials-section .swiper-button-prev",
    },
  });
});
