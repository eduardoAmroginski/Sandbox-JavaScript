window.onload = () => {
  const players = document.querySelectorAll(".container-video");

  players.forEach((player) => {
    new VideoPlayer(player);
  });
};

function VideoPlayer(player) {
  let video = player.querySelector(".video");
  let juice = player.querySelector(".orange-juice");
  let btn = player.querySelector("#play-pause");

  const togglePlayPause = () => {
    if (video.paused) {
      btn.className = "pause";
      video.play();
    } else {
      btn.className = "play";
      video.pause();
    }
  };

  btn.onclick = () => {
    togglePlayPause();
  };

  video.addEventListener("timeupdate", () => {
    let juicePosition = video.currentTime / video.duration;
    juice.style.width = juicePosition * 100 + "%";
    video.ended ? (btn.className = "play") : "";
  });
}
