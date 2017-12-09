var DefaultController = require("../core/DefaultController.js");

class AdventureSceneController extends DefaultController {
  riotInit() {
    super.riotInit();

    console.log("INIT FROM AdventureSceneController");
  }
}

module.exports = AdventureSceneController;
