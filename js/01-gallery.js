import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");

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

createGalleryElements();

galleryContainerRef.addEventListener("click", showOriginalImg);

function showOriginalImg(event) {
  const { nodeName, dataset } = event.target;
  const { currentTarget } = event;
  event.preventDefault();
  if (nodeName !== "IMG") {
    return;
  }

  const modalShowImg = basicLightbox.create(`<img src=${dataset.source}>`, {
    onShow: () => currentTarget.addEventListener("keydown", escapeBtnClose),
    onClose: () => currentTarget.removeEventListener("keydown", escapeBtnClose),
  });

  modalShowImg.show();

  function escapeBtnClose(eve) {
    if (eve.code === "Escape") {
      modalShowImg.close();
    }
  }
}
