// Get elements

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelector("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// Build functions
function togglePlay() {
  if (video.paused) {
    toggle.textContent = "❚❚";
    video.play();
    console.log("play");
  } else {
    video.pause();
    toggle.textContent = "►";
    console.log("pause");
  }
}

toggle.addEventListener("click", () => togglePlay());

//
