const text = document.querySelector(".text-animate");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Graphic Designer";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Canva Designer";
  }, 12000);
};

textLoad();
setInterval(textLoad, 16000);

//******************************/ About Me Section Create
const aboutMe = document.getElementById("about-me");
const footer = document.querySelector("footer");
const footerLogo = document.querySelector(".footer-logo-pic");
const socialIcons = document.querySelector(".social");
const footerLinks = document.querySelector("footer ul");
const aboutBox = document.querySelector(".about-box");
const closeIcon = document.querySelector(".fa-xmark");

aboutMe.addEventListener("click", () => {
  footerLogo.style.position = "absolute";
  socialIcons.style.marginBottom = "100px";
  socialIcons.style.flexDirection = "column";
  socialIcons.style.gap = "15px";
  socialIcons.style.position = "absolute";
  footerLinks.style.marginTop = "390px";
  aboutBox.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  aboutBox.style.display = "none";
  footerLogo.style.top = "0px";
  footerLogo.style.left = "50%";
  footerLogo.style.transform = "translateX(-50%)";
  footerLogo.style.marginTop = "40px";
  footerLogo.style.marginBottom = "5rem";
  socialIcons.style.flexDirection = "row";
  socialIcons.style.gap = "0px";
  socialIcons.style.position = "absolute";
  socialIcons.style.right = "50%";
  socialIcons.style.transform = "translateX(50%)";
  socialIcons.style.top = "200px";
  footerLinks.style.marginTop = "230px";
});

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll(".navbar a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document.querySelector(".navbar a [href*=" + id + "]").classList.add("active");
//       });
//     }
//   });
// };

AOS.init();

// Function to animate skill bars
function animateSkills() {
  var skills = document.querySelectorAll('.loading-bar');

  skills.forEach(function(skill) {
      skill.style.width = '0'; // Reset width pehle
      setTimeout(function() {
          var targetWidth = skill.getAttribute('data-width');
          skill.style.width = targetWidth; // Set width to the value in data-width
      }, 4000); // Small delay for smooth animation
  });
}

// Pehli dafa page load par animate ho
window.addEventListener('load', function() {
  animateSkills();
});

// Jab "Skills" link par click karein to dobara animate ho
document.querySelector('a[href="#skills"]').addEventListener('click', function() {
  animateSkills();
});
