const representativeImages = document.querySelectorAll(".representative-image");
const subImageContainers = document.querySelectorAll(".sub-image-container");

representativeImages.forEach((image) => {
  image.addEventListener("click", toggleSubImage);
});

function toggleSubImage(event) {
  const clickedImage = event.currentTarget;
  const subImageContainer = clickedImage.nextElementSibling;

  subImageContainers.forEach((container) => {
    if (container !== subImageContainer) {
      container.style.display = "none";
    }
  });

  subImageContainer.style.display = (subImageContainer.style.display === "none") ? "block" : "none";

  if (subImageContainer.style.display === "block") {
    const subImage = subImageContainer.querySelector(".sub-image");
    const container = subImageContainer.parentElement;
    container.style.height = container.offsetHeight + subImage.offsetHeight + "px";
    container.classList.add("expanded");

    representativeImages.forEach((img) => {
      if (img !== clickedImage) {
        const otherSubImageContainer = img.nextElementSibling;
        otherSubImageContainer.style.display = "none";
        const otherContainer = otherSubImageContainer.parentElement;
        otherContainer.style.height = "";
        otherContainer.classList.remove("expanded");
      }
    });
  } else {
    const subImage = subImageContainer.querySelector(".sub-image");
    const container = subImageContainer.parentElement;
    container.style.height = "";
    container.classList.remove("expanded");
  }
}
