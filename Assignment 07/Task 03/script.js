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


function changeimage() {
  var img = document.getElementById("carouselImage").scr
  var imgtest = URL("E:\programming\JS Tasks\Assignment 07\Task 03\Assets\Capture 2.png")
  document.getElementById("carouselImage").scr = imgtest
}

