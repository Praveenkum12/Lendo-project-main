"use strict";

const copyrightYearEl = document.querySelector(".copyright-year");
const menuBtnEl = document.querySelector(".menu-btn");
const hiddenListEl = document.querySelector(".hidden-list");

menuBtnEl.addEventListener("click", function () {
  if (hiddenListEl.classList.contains("active")) {
    hiddenListEl.classList.remove("active");
    setTimeout(function () {
      hiddenListEl.style.display = "none";
    }, 500);
  } else {
    hiddenListEl.style.display = "block";
    setTimeout(function () {
      hiddenListEl.classList.add("active");
    }, 100);
  }
});

copyrightYearEl.textContent = new Date().getFullYear();

const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
const hs = document.querySelector(".hero-section");
const emptyEl = document.querySelector(".empty");
const navHeight = nav.getBoundingClientRect().height;

// document.addEventListener("scroll", () => {
//   console.log(scrollY);
//   if (scrollY > 400) {
//     hs.style.marginTop = navHeight + "px";
//     nav.classList.add("sticky");
//   } else {
//     hs.style.marginTop = 0 + "px";
//     nav.classList.remove("sticky");
//   }
// });
// console.log(navHeight);

const infoBoxEl = document.querySelector(".info-box");

const headerFun = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    emptyEl.style.height = navHeight + "px";
  } else {
    nav.classList.remove("sticky");
  }
};

const headerOpt = {
  root: null,
  threshold: 0.45,
};

const headerObserver = new IntersectionObserver(headerFun, headerOpt);
headerObserver.observe(header);

// REASON-BOX INTERSECTION AREA

function increament(el, len, interval) {
  let count = 0;
  let timer = setInterval(() => {
    if (len > count) {
      count++;
      el.innerText = count;
    } else {
      clearInterval(timer);
    }
  }, interval);
}

const reasonEl = document.querySelector(".reason-box");

const reasonFun = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  const increseNumEl1 = entry.target.querySelector(".increase-num");
  const increseNumEl2 = entry.target.querySelector(".highlighter.increase-num");
  increament(increseNumEl1, 450, 10);
  increament(increseNumEl2, 860, 5);
  observer.unobserve(reasonEl);
};

const reasonOpt = {
  root: null,
  threshold: 0.55,
};

const reasonBoxObserver = new IntersectionObserver(reasonFun, reasonOpt);
reasonBoxObserver.observe(reasonEl);

// done
