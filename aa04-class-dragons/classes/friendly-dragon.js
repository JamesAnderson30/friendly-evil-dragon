// Your code here
const Dragon = require('./dragon.js');
console.log(module);
class FriendlyDragon extends Dragon{
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }


    hasLifeGoals(){
        this.lifeGoals.forEach((goal, i) => {
            console.log(`${this.name} likes to ${goal}`);
        });
    }

    helpsPeople(){
        return  `${this.name} helps their friend ${this.friend}`
    }
}

const toothless = new FriendlyDragon(
    "Toothless",
    "black",
    [
      "save the town of Burke",
      "fly with a kid on his back",
      "hang out with Vikings"
    ],
    "Hiccup"
  );
  console.log(toothless); toothless.hasLifeGoals();
  console.log(toothless.helpsPeople());
  console.log(toothless.breathesFire());

module.exports = FriendlyDragon;
