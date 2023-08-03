const sidebarCollapse = document.getElementById("sidebarCollapse");

if (sidebarCollapse) {
  sidebarCollapse.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
  });
}

// JavaScript to control the play button functionality
const playButton = document.getElementById("custom-play-button");
const videoPlayer = document.getElementById("video-player");

playButton.addEventListener("click", function () {
  videoPlayer.play();
  playButton.style.display = "none";
  videoPlayer.style.filter = "none";
});

videoPlayer.addEventListener("play", function () {
  playButton.style.display = "none";
  videoPlayer.style.filter = "none";
});

videoPlayer.addEventListener("pause", function () {
  playButton.style.display = "block";
  videoPlayer.style.filter = "brightness(0.5)";
});
