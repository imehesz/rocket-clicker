var DefaultController = require("../core/DefaultController.js");

const C = require("../core/Constants");
const PS = require("pubsub-js");

class CountdownSceneController extends DefaultController {
  riotInit() {
    super.riotInit();

    let timer = 6 * C.timer.SECOND;

    this.rs.timerStr = `00:0${timer/C.timer.SECOND}`;

    let countDown = setInterval(() => {
      timer = timer - C.timer.SECOND;

      this.rs.update({
        timerStr: `00:0${timer/C.timer.SECOND}`
      });

      let audio;

      // meh
      if (timer > C.timer.SECOND) audio = new Audio("../snd/censor-beep-01.mp3");
      if (timer == C.timer.SECOND) audio = new Audio("../snd/censor-beep-4.mp3");
      if (audio) audio.play();

      if (timer <= 0) {
        clearInterval(countDown);
        PS.publish(C.pubsub.CHANGE_SCENE, {scene: C.scene.ADVENTURE_SCENE});
      }

    }, C.timer.SECOND);
  }
}

module.exports = CountdownSceneController;
