var Constants = {
  game: {
    SLOWDOWN_CAP: 6 // in seconds
  },
  timer: {
    SECOND: 1000
  },
  scene: {
    DEFAULT_SCENE: "welcome-scene",
    WELCOME_SCENE: "welcome-scene",
    ADVENTURE_SCENE: "adventure-scene",
    COUNTDOWN_SCENE: "countdown-scene"
  },

  pubsub: {
    CHANGE_SCENE: "changeScene",
    SPEED_UP: "speedUp",
    SPEED_DOWN: "speedDown"
  }
};

module.exports = Constants;
