var DefaultController = require("../core/DefaultController.js");

const C = require("../core/Constants");
const PS = require("pubsub-js");

class WelcomeSceneController extends DefaultController {
  riotInit() {
    super.riotInit();

    console.log("INIT FROM WelcomeSceneController");

    this.rs.goAdventure = () => {
      PS.publish(C.pubsub.CHANGE_SCENE, {scene: C.scene.COUNTDOWN_SCENE});
    };
  }
}

module.exports = WelcomeSceneController;
