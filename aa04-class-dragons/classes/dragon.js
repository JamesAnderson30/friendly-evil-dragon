// Your code here

class Dragon {
  constructor(name, color){
    this.name = name;
    this.color = color;
  }

  static getDragons(...Dragon){
    return Dragon.map((dragon) => dragon.name);
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
}

exports.modules = {
  Dragon
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
