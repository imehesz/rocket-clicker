var DefaultController = require("../core/DefaultController.js");

const C = require("../core/Constants");
const PS = require("pubsub-js");

class StarsController extends DefaultController {
  riotInit() {
    super.riotInit();

    this.stars = {
      layer1: 0,
      layer2: 0,
      layer3: 0
    };

    const refreshStars = () => {
      let $layer1 = document.getElementById('stars');
      let $layer2 = document.getElementById("stars2");
      let $layer3 = document.getElementById("stars3");

      $layer1.style.animation = `animStar ${this.stars.layer1}s linear infinite`;
      $layer2.style.animation = `animStar ${this.stars.layer2}s linear infinite`;
      $layer3.style.animation = `animStar ${this.stars.layer3}s linear infinite`;
    };

    const changeStars = (layer1 = 0, layer2 = 0, layer3 = 0) => {
      this.stars = {layer1,layer2,layer3};
      refreshStars();
    };

    // listeners
    PS.subscribe(C.pubsub.CHANGE_SCENE, (action, sceneObj) => {
      switch(sceneObj.scene) {
        case C.scene.ADVENTURE_SCENE:
          changeStars();
          break;
        default:
          changeStars(25, 50, 75);
      }
    });

    [C.pubsub.SPEED_DOWN, C.pubsub.SPEED_UP].map((e) => {
      PS.subscribe(e, (action, speedObj) => {
        let s = speedObj.speed;

        if (s == 0) changeStars();
        if (s > 0 && s < 10) changeStars(100,200,300);
        if (s >= 10 && s < 50) changeStars(75,150,225);
        if (s >= 50 && s < 100) changeStars(50,100,150);
        if (s >= 100 && s < 250) changeStars(25,50,75);
        if (s >= 250 && s < 500) changeStars(12.5,25,37.5);
      });
    });
  }
}

module.exports = StarsController;
