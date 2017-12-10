var DefaultController = require("../core/DefaultController.js");

const C = require("../core/Constants");
const PS = require("pubsub-js");

class AdventureSceneController extends DefaultController {
  riotInit() {
    super.riotInit();

    this.rs.distance = 0;
    this.rs.speed = 0;
    this.rs.addons = [];
    this.rs.achievements = [];
    let slowDownCap = C.game.SLOWDOWN_CAP;

    console.log("INIT FROM AdventureSceneController");

    this.rs.speedUp = (e) => {
      this.rs.speed = this.rs.speed + 1;
      slowDownCap = C.game.SLOWDOWN_CAP;

      e.preventDefault();

      PS.publish(C.pubsub.SPEED_UP, {speed: this.rs.speed});
    };

    this.tickDistance = setInterval(() => {
      this.rs.update({distance: Math.round(this.rs.distance + this.rs.speed)});
      slowDownCap--;

      if(slowDownCap <= 0) {
        let tmpSpeed = Math.round(this.rs.speed) <= 0 ? 0 : this.rs.speed / 2;
        this.rs.update({
          speed: tmpSpeed
        });

        // TODO if it's 0, only publish it once!
        PS.publish(C.pubsub.SPEED_DOWN, {speed: this.rs.speed});
      }
    }, 1000);
  }

  onUnmount() {
    clearInterval(this.tickDistance);
  }
}

module.exports = AdventureSceneController;
