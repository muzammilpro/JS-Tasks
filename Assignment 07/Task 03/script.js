var imageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg"
];
var currentIndex = 0;
var carouselImage = document.getElementById("carouselImage");

// Function to display the current image
function displayImage() {
    carouselImage.src = imageUrls[currentIndex];
}

// Function to show the previous image
function previousImage() {
    if (currentIndex === 0) {
        currentIndex = imageUrls.length - 1;
    } else {
        currentIndex--;
    }
    displayImage();
}

// Function to show the next image
function nextImage() {
    if (currentIndex === imageUrls.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    displayImage();
}

// Initial display of the first image
displayImage();