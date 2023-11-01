const sidebarCollapse = document.getElementById("sidebarCollapse");

if (sidebarCollapse) {
  sidebarCollapse.addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
  });
}

// JavaScript to control the play button functionality
const playButton = document.getElementById("custom-play-button");
const videoPlayer = document.getElementById("video-player");

if (playButton) {
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
}

//max width exam

const max_w = document.querySelector(".max_w");

max_w.addEventListener("click", function () {
  document.getElementById("div_exam").classList.toggle("col-xl-9");
  document.getElementById("div_content").classList.toggle("col-xl-3");
  document.getElementById("close_svg").classList.toggle("open_svg");
  document.getElementById("open_svg").classList.toggle("close_svg");
});
