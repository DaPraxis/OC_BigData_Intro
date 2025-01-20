document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    let scrollSpeed = 1; // Pixels per interval
    let isScrolling = false;
  
    // Auto-scroll function
    function autoScroll() {
      if (!isScrolling) {
        gallery.scrollLeft += scrollSpeed;
        // Loop back to the start if the scroll reaches the end
        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
          gallery.scrollLeft = 0;
        }
      }
    }
  
    // Detect if the user is scrolling manually
    gallery.addEventListener("scroll", () => {
      isScrolling = true;
      clearTimeout(autoScrollTimeout);
      autoScrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 2000); // Pause for 2 seconds after user interaction
    });
  
    // Start auto-scroll
    let autoScrollTimeout = setInterval(autoScroll, 50); // Adjust interval for smoother scrolling
  });
  