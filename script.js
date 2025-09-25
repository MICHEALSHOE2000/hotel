// ====================
// MAC G HOTEL WEBSITE JS
// ====================

// Pre-filled WhatsApp booking link
const whatsappNumber = "2348033709138";
const bookingMessage = "Hello, I’d like to book a room at Mac G Hotel, Ikeja.";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`;

// Update all "Book Now" buttons
document.querySelectorAll(".btn, .cta").forEach(button => {
  button.addEventListener("click", function (e) {
    if (this.textContent.includes("Book")) {
      e.preventDefault();
      window.open(whatsappLink, "_blank");
    }
  });
});

// Floating WhatsApp Button with text
const whatsappBtn = document.createElement("a");
whatsappBtn.href = whatsappLink;
whatsappBtn.className = "whatsapp-btn";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬 Chat with Customer Care";
document.body.appendChild(whatsappBtn);


// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Highlight Active Nav Link on Scroll
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY + 100;
  document.querySelectorAll("section").forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
