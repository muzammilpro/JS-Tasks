// var imageUrls = [
//     "",
//     "",
//     "",
//     ""
// ];
// var currentIndex = 0;
// var carouselImage = document.getElementById("carouselImage");

// // Function to display the current image
// function displayImage() {
//     carouselImage.src = imageUrls[currentIndex];
// }

// // Function to show the previous image
// function previousImage() {
//     if (currentIndex === 0) {
//         currentIndex = imageUrls.length - 1;
//     } else {
//         currentIndex--;
//     }
//     displayImage();
// }

// // Function to show the next image
// function nextImage() {
//     if (currentIndex === imageUrls.length - 1) {
//         currentIndex = 0;
//     } else {
//         currentIndex++;
//     }
//     displayImage();
// }

// // Initial display of the first image
// displayImage();


// function previousImage() {
//     var imagesSource = "E:\programming\JS Tasks\Assignment 07\Task 03\Assets\Capture 2.png" ;
 

//       var imageource =   document.getElementById("carouselImage").scr
//       imageource.scr = imagesSource[0]
//       document.getElementById("carouselImage").scr = 'E:\programming\JS Tasks\Assignment 07\Task 03\Assets\Capture 2.png'
// } 


var images = [
  "./Assets/Capture132.PNG",
  "./Assets/Capture 1234.PNG",
  "./Assets/Capture 2.png",
  "./Assets/240238142_4253144381389836_2201691313572215174_n.jpg",
  "./Assets/271350850_437527347912567_2744612372497160643_n.jpg",
  "./Assets/273358679_407428187824461_3250301610132594279_n.jpg",
  "./Assets/Annotation 2022-03-14 234515 - Copy.png",
  "./Assets/Capturefff.PNG",
  "./Assets/Picsart_23-03-23_22-27-07-413.jpg"
];
var currentIndex = 0;

var carouselImage = document.getElementById("carousel-image");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

// Function to update the image source
function updateImage() {
  carouselImage.src = images[currentIndex];
}

// Function to go to the previous image
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateImage();
}

// Function to go to the next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateImage();
}

// Add event listeners to the buttons
prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

// Initialize the carousel with the first image
updateImage();
