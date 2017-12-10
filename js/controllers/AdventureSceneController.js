var DefaultController = require("../core/DefaultController.js");

class AdventureSceneController extends DefaultController {
  riotInit() {
    super.riotInit();

    this.rs.distance = 0;
    this.rs.speed = 0;
    this.rs.addons = [];
    this.rs.achievements = [];
    const SLOWDOWN_CAP = 7;
    let slowDownCap = SLOWDOWN_CAP;

    console.log("INIT FROM AdventureSceneController");

    this.rs.speedUp = (e) => {
      this.rs.speed = this.rs.speed + 1;
      slowDownCap = SLOWDOWN_CAP;
      e.preventDefault();
    };

    this.tickDistance = setInterval(() => {
      this.rs.update({distance: Math.round(this.rs.distance + this.rs.speed)});
      slowDownCap--;

      if(slowDownCap <= 0) {
        let tmpSpeed = Math.round(this.rs.speed) <= 0 ? 0 : this.rs.speed / 2;
        this.rs.update({
          speed: tmpSpeed
        });
      }
    }, 1000);
  }

  onUnmount() {
    clearInterval(this.tickDistance);
  }
}

module.exports = AdventureSceneController;
