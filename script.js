"use strict";

// const showModal = document.querySelector('.show-modal');

const overlay = document.querySelector(".overlay");

const modal = document.querySelector(".modal");

const btnOpenModal = document.querySelectorAll(".show-modal");

const btnCloseModal = document.querySelector(".close-modal");

//function to open modal on btn click
const modalContent = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", modalContent);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

//if we press anywhere but modal, modal closes

//if we press excape modal modal closes
document.addEventListener("keydown", function (event) {
  //   console.log(event.key, typeof 'event');
  if (event.key === "Escape") {
    closeModal();
  }
});
