const main = document.querySelector(".main");
const leftBtn = document.querySelector(".leftbutton");
const rightBtn = document.querySelector(".rightbutton");

const images = [
    "images/img1.png",
    "images/img2.png"
];

let currentIndex = 0;

rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    main.style.backgroundImage = `url(${images[currentIndex]})`;
});

leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    main.style.backgroundImage = `url(${images[currentIndex]})`;
});


function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").style.display = "none";
}

// ===== HOME HERO SLIDER (MOBILE + DESKTOP) =====

const images1 = [
  "images/img1.png",
  "images/img2.png"
];

let currentIndex1 = 0;
const hero = document.querySelector(".main");
const prevBtn = document.querySelector(".leftbutton");
const nextBtn = document.querySelector(".rightbutton");

// Safety check
if (hero && prevBtn && nextBtn) {

  nextBtn.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % images.length;
    hero.style.backgroundImage = `url(${images1[currentIndex1]})`;
  });

  prevBtn.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
    hero.style.backgroundImage = `url(${images1[currentIndex1]})`;
  });

}
