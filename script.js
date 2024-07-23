"use strict";
const aboutSection = document.querySelector(".about-section");
const aboutContainer = document.querySelector(".about-container");
const sections = document.querySelectorAll(".sections");
const sectionHidden = document.querySelector(".section-hidden");
const voicesContainer = document.querySelector(".voices-container");
const photosContainer = document.querySelector(".photos-container");
const contactContainer = document.querySelector(".contact-container");

aboutContainer.classList.add("section-hidden");

const options = {
  root: null,
  threshold: 0.2,
};

const sectionObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      entry.target.classList.add("section-animation");
      console.log(entry);
      observer.unobserve(entry.target);
    }
  });
}, options);

sectionObserver.observe(aboutContainer);

const sectionObserver2 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      entry.target.classList.add("section-animation");
      console.log(entry);
      observer.unobserve(entry.target);
    }
  });
}, options);

sectionObserver2.observe(voicesContainer);

const sectionObserver3 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      entry.target.classList.add("section-animation");
      console.log(entry);
      observer.unobserve(entry.target);
    }
  });
}, options);

sectionObserver3.observe(photosContainer);

const sectionObserver4 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      entry.target.classList.add("section-animation");
      console.log(entry);
      observer.unobserve(entry.target);
    }
  });
}, options);

sectionObserver4.observe(contactContainer);
