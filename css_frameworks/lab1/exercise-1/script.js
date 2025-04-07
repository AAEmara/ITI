const video = document.getElementsByTagName("video")[0];
const progressBar = document.getElementById("progressBar");
const playButton = document.getElementById("playBtn");
const stopButton = document.getElementById("stopBtn");
const muteButton = document.getElementById("muteBtn");
const skipBackwardButton = document.getElementById("skipBackwardBtn");
const skipForwardButton = document.getElementById("skipForwardBtn");
const nextVideoButton = document.getElementById("nextVideoBtn");
const previousVideoButton = document.getElementById("previousVideoBtn");
const currentTime = document.getElementById("currentTime");
const videoDuration = document.getElementById("videoDuration");
const volumeBar = document.getElementById("volumeBar");
const speedBar = document.getElementById("speedBar");

function calculateDuration(videoDuration) {
  const minutes = Math.floor(videoDuration / 60).toString();
  const seconds = Math.floor(videoDuration % 60)
    .toString()
    .padStart(2, "0");
  return [minutes, seconds];
}

function initializeVideo() {
  video.addEventListener("loadedmetadata", () => {
    progressBar.max = video.duration;
    progressBar.setAttribute("value", "0");
    const [minutes, seconds] = calculateDuration(video.duration);
    videoDuration.innerHTML = `${minutes}:${seconds}`;
    video.playbackRate = speedBar.value;
    video.volume = volumeBar.value / 100;
  });
}

function playVideo() {
  playButton.addEventListener("click", () => {
    video.play();
  });
}

function stopVideo() {
  stopButton.addEventListener("click", () => {
    video.pause();
  });
}

function muteVideo() {
  muteButton.addEventListener("click", () => {
    video.muted = !video.muted;
  });
}

function skipVideoBackward() {
  skipBackwardButton.addEventListener("click", () => {
    video.currentTime -= 5;
  });
}

function skipVideoForward() {
  skipForwardButton.addEventListener("click", () => {
    video.currentTime += 5;
  });
}

function nextVideo() {
  nextVideoButton.addEventListener("click", () => {
    if (video.src.includes("big_buck_bunny.mp4")) {
      video.src = "./assets/videos/frozen.mp4";
    } else {
      video.src = "./assets/videos/big_buck_bunny.mp4";
    }
  });
}

function previousVideo() {
  previousVideoButton.addEventListener("click", () => {
    if (video.src.includes("big_buck_bunny.mp4")) {
      video.src = "./assets/videos/frozen.mp4";
    } else {
      video.src = "./assets/videos/big_buck_bunny.mp4";
    }
  });
}

function timeUpdate() {
  video.addEventListener("timeupdate", () => {
    progressBar.value = video.currentTime;
    const [minutes, seconds] = calculateDuration(video.currentTime);
    currentTime.innerHTML = `${minutes}:${seconds}`;
  });
}

function volumeUpdate() {
  volumeBar.addEventListener("input", () => {
    video.volume = volumeBar.value / 100;
  });
}

function videoSpeed() {
  speedBar.addEventListener("input", () => {
    video.playbackRate = speedBar.value;
  });
}

initializeVideo();
timeUpdate();
playVideo();
stopVideo();
muteVideo();
skipVideoBackward();
skipVideoForward();
nextVideo();
previousVideo();
volumeUpdate();
videoSpeed();
