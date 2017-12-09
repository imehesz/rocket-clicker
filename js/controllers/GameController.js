var DefaultController = require("../core/DefaultController.js");

class GameController extends DefaultController {
  riotInit() {
    super.riotInit();

    console.log("INIT FROM GameController");
  }
}

module.exports = GameController;
