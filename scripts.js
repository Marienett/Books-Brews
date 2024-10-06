// Get the modal elements
var blogModal = document.getElementById("blogModal");
var bannerModal = document.getElementById("bannerModal");
var aboutUsModal = document.getElementById("aboutUsModal");
var locationModal = document.getElementById("locationModal");

// Get the buttons that open the modals
var openBlog = document.getElementById("openBlog");
var openBanner = document.getElementById("openBanner");
var openAboutUs = document.getElementById("openAboutUs");
var openLocation = document.getElementById("openLocation");

// Get the close buttons
var closeBlog = document.getElementById("closeBlog");
var closeBanner = document.getElementById("closeBanner");
var closeAboutUs = document.getElementById("closeAboutUs");
var closeLocation = document.getElementById("closeLocation");

// Open modals
openBlog.onclick = function() {
    blogModal.style.display = "block";
}

openBanner.onclick = function() {
    bannerModal.style.display = "block";
}

openAboutUs.onclick = function() {
    aboutUsModal.style.display = "block";
}

openLocation.onclick = function() {
    locationModal.style.display = "block";
}

// Close modals
closeBlog.onclick = function() {
    blogModal.style.display = "none";
}

closeBanner.onclick = function() {
    bannerModal.style.display = "none";
}

closeAboutUs.onclick = function() {
    aboutUsModal.style.display = "none";
}

closeLocation.onclick = function() {
    locationModal.style.display = "none";
}

// Close modals if clicked outside
window.onclick = function(event) {
    if (event.target == blogModal) {
        blogModal.style.display = "none";
    } else if (event.target == bannerModal) {
        bannerModal.style.display = "none";
    } else if (event.target == aboutUsModal) {
        aboutUsModal.style.display = "none";
    } else if (event.target == locationModal) {
        locationModal.style.display = "none";
    }
}
