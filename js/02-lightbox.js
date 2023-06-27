import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

function createGalleryElements() {
  const galleryElements = galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>
</li>`
    )
    .join("");
  galleryContainerRef.insertAdjacentHTML("beforeend", galleryElements);
}
createGalleryElements();

let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  //   ===========
});
