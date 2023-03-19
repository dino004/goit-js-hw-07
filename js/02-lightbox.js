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
      <a class="gallery__link" href="${original}" data-caption="${description}">
        <img
          class="gallery__image"
          src="${preview}"
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
  let lightbox = new SimpleLightbox(".gallery a");
  lightbox.on("show.simplelightbox");
}
