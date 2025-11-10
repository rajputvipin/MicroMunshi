// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Update active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = location.pathname.split("/").pop() || "index.html"
  const menuItems = document.querySelectorAll(".nav-link")

  menuItems.forEach((item) => {
    const href = item.getAttribute("href")
    if (href === currentLocation || (currentLocation === "" && href === "index.html")) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
})
