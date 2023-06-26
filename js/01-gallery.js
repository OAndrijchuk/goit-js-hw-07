import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector(".gallery");

galleryContainerRef.addEventListener("click", showOriginalImg);

createGalleryElements();

function showOriginalImg(event) {
  const { nodeName, dataset } = event.target;
  event.preventDefault();
  if (nodeName !== "IMG") {
    return;
  }

  const modalShowImg = basicLightbox.create(`<img src=${dataset.source}>`);
  modalShowImg.show();
  galleryContainerRef.addEventListener("keydown", escapeBtnClose);

  function escapeBtnClose(eve) {
    if (eve.code === "Escape") {
      modalShowImg.close();
      galleryContainerRef.removeEventListener("keydown", escapeBtnClose);
      //console.log('removeEventListener("keydown", escapeBtnClose)');
      //Цікаво запитати в Руслана!!!!!
    }
  }
}
function createGalleryElements() {
  const galleryElements = galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
    )
    .join("");
  galleryContainerRef.insertAdjacentHTML("beforeend", galleryElements);
}
