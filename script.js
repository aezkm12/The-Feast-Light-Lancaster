document.body.addEventListener("click", function (event) {
  var clickedElement = event.target;
  // Check if the clicked element is not a gallery-item or its child
  if (!clickedElement.closest(".gallery-item")) {
    resetWidth();
  }
});

function toggleWidth(element) {
  // Check if the clicked item is already expanded
  var isExpanded = element.classList.contains("expanded");
  // Reset width of all gallery-items
  resetWidth();
  // If the clicked item was not expanded, expand it
  if (!isExpanded) {
    element.classList.add("expanded");
  }
}

function resetWidth() {
  var galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach(function (item) {
    item.classList.remove("expanded");
  });
}
