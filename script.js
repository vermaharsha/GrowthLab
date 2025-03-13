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
  // FAQ Accordion
  // ====================================
  const faqs = [
    {
      question: "1. How is Media+ beneficial for Marketers?",
      answer:
        "Media+ helps marketers repurpose content, automate SEO, generate video recommendations, and easily manage thumbnails, URLs, and event listings for better lead generation.",
    },
    {
      question:
        "2. How does Media+ improve user retention, engagement & help in generating more leads?",
      answer:
        "Media+ optimizes your content for search engines, curates relevant videos and events for viewers, and allows for lead capture through gated content. It tracks user engagement, providing insights to help you refine your marketing strategies.",
    },
    {
      question: "3. How does Media+ result in better brand visibility?",
      answer:
        "Media+ improves brand visibility by allowing you to fully customize your media site. You can select the theme, colors, logo placement, and content layout, and host it on your custom domain to ensure your brand is clearly represented.",
    },
    {
      question: "4. How does Media+ simplify video content management?",
      answer:
        "Media+ automates the process of uploading, formatting, and embedding videos. It handles metadata creation, SEO optimization, and content preparation, eliminating the need for multiple teams to coordinate these tasks.",
    },
    {
      question: "5. How does Media+ use AI to improve content discovery?",
      answer:
        "Media+ leverages AI to auto-generate titles, descriptions, and tags for your content, helping your audience discover the most relevant videos and enhancing engagement that leads to conversions.",
    },
    {
      question: "6. What kind of analytics does Media+ provide?",
      answer:
        "Media+ provides comprehensive analytics on video performance, audience engagement, and content effectiveness. These insights help you understand which content resonates with viewers and inform your future content strategies.",
    },
    {
      question:
        "7. Can Media+ integrate with my existing MAP tools like HubSpot?",
      answer:
        "Yes! Media+ integrates seamlessly with MAP tools like HubSpot, ensuring smooth synchronization with your existing systems.",
    },
    {
      question: "8. How many videos can I host in one Media+ site?",
      answer:
        "Our base plan allows you to host up to 25 videos on one Media+ site. If you need more capacity, add-ons are available for additional media sites and videos.",
    },
  ];

  const faqContainer = document.querySelector(".faq-con");
  faqs.forEach((faq, index) => {
    const faqCard = document.createElement("div");
    faqCard.classList.add("faq-card");
    faqCard.innerHTML = `
      <h2 class="ques">
        ${faq.question}
        <span class="toggle-symbol">+</span>
      </h2>
      <p class="ans">${faq.answer}</p>
    `;
    faqCard.querySelector(".ques").addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const symbol = this.querySelector(".toggle-symbol");
      if (answer.style.display === "block") {
        answer.style.display = "none";
        symbol.textContent = "+";
      } else {
        answer.style.display = "block";
        symbol.textContent = "-";
      }
    });
    faqContainer.appendChild(faqCard);
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
