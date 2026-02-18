class ChiguaVideoSDK {
  constructor(videoElement) {
    this.video = videoElement;
  }

  loadSource(url) {
    this.video.src = url;
    this.video.load();
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }

  switchSource(url) {
    const currentTime = this.video.currentTime;
    this.video.src = url;
    this.video.currentTime = currentTime;
    this.video.play();
  }
}

if (typeof module !== "undefined") {
  module.exports = ChiguaVideoSDK;
}
