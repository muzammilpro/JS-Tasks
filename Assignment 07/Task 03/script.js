var imageUrls = [
    "E:\IK\240238142_4253144381389836_2201691313572215174_n.jpg",
    "E:\IK\240450024_348885276930131_2775852026046038318_n.jpg",
    "E:\IK\273358679_407428187824461_3250301610132594279_n.jpg",
    "E:\IK\Annotation 2022-03-14 234515.png"
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