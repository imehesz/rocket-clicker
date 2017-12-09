var DefaultController = require("../core/DefaultController.js");

const C = require("../core/Constants");
const PS = require("pubsub-js");

class GameController extends DefaultController {
  riotInit() {
    super.riotInit();

    console.log("INIT FROM GameController");
  }

  onMount() {
    super.onMount();

    PS.publish(C.pubsub.CHANGE_SCENE, {scene: C.scene.WELCOME_SCENE});
  }
}

module.exports = GameController;
