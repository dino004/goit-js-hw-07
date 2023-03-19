import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const listItemsGallery = getGalleryItemImage(galleryItems);

gallery.innerHTML = listItemsGallery;

function getGalleryItemImage(items) {
  return items
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

gallery.addEventListener("click", onModalFullImage);

function onModalFullImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const modal = basicLightbox.create(`<img src="${e.target.dataset.source}"/>`);
  modal.show();

  gallery.addEventListener("keydown", onClosedModal);

  function onClosedModal(e) {
    if (e.code === "Escape") {
      modal.close();
      return;
    }
  }
}
