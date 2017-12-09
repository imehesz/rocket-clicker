var DefaultController = require("../core/DefaultController.js");

const C = require("../core/Constants");
const PS = require("pubsub-js");

class StageController extends DefaultController {
  riotInit() {
    super.riotInit();

    this.rs.scene = C.scene.DEFAULT_SCENE;

    // listeners
    PS.subscribe(C.pubsub.CHANGE_SCENE, (action, data) => {
      if (data && data.scene) {
        this.rs.scene = data.scene;
        riot.mount("div#scene-holder", data.scene);
      }
    });
  }
}

module.exports = StageController;
