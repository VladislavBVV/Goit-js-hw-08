// Add imports above this line



import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";



import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector(".gallery");

// const images = galleryItems.map(({ description, original, preview }) => {
//   const gallery = document.querySelector(".gallery");
//   const galleryItem = document.createElement("li");
//   galleryItem.classList.add("gallery__item");

//   const galleryLink = document.createElement("a");
//   galleryLink.classList.add("gallery__link");
//   galleryLink.href = original;

//   const img = document.createElement("img");
//   img.classList.add("gallery__image");
//   img.setAttribute("data-source", original);
//   console.log(img.getAttribute);

//   img.src = preview;
//   img.alt = description;

//   galleryLink.append(img);
//   galleryLink.append(img);
//   gallery.append(galleryLink);

//   // return
// });



const img = galleryItems
  .map(function (imgEl) {
    const { preview, original, description } = imgEl;
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source= "${original}"
          alt= "${description}"
        />
      </a>
    </div>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", img);


// console.log(gallery);

let galleryLightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});




























console.log(galleryItems);
