// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
    }
}

const Rino = new Soldier(1000, 1000000);
console.log(Rino);

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
   }

  receiveDamage(theDamage){
    this.health -= theDamage;
    if (this.health>0){
        return `${this.name} has received ${theDamage} points of damage`;
    }

    else if (this.health===0){
        return `${this.name} has died in act of combat`;
    }
   }
    battleCry(){
    return `Odin Owns You All!`;
    }
   }

// Saxon
class Saxon extends Soldier{
receiveDamage(theDamage){
    this.health -= theDamage;
    if (this.health>0){
        return `A Saxon has received ${theDamage} points of damage`;
    }

    else if (this.health===0){
        return `A Saxon has died in combat`;
    }
}
}
// War

class War {
    constructor (){
      this.vikingArmy = [];
      this.saxonArmy = [];
    }

    addViking(viking) {
      this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
       this.saxonArmy.push(saxon)
    }

        
    vikingAttack(){
      let randomVikingNum = Math.floor(Math.random()*this.vikingArmy.length);
      let randomViking = this.vikingArmy[randomVikingNum];    
      
      let randomSaxonNum = Math.floor(Math.random()*this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonNum];

      let fightResult = randomSaxon.receiveDamage(randomViking.attack());

      if (randomSaxon.health <= 0){
        this.saxonArmy.splice(randomSaxonNum, 1);
      }
      return fightResult;
      }

    saxonAttack(){
      let randomSaxonNum = Math.floor(Math.random()*this.saxonArmy.length);
      let randomSaxon = this.saxonArmy[randomSaxonNum];    
      
      let randomVikingnNum = Math.floor(Math.random()*this.vikingArmy.length);
      let randomViking = this.VikingArmy[randomVikingNum];

      let fightResult = randomViking.receiveDamage(randomSaxon.attack());

      if (randomViking.health <= 0){
        this.vikingArmy.splice(randomVikingNum, 1);
      }
      return fightResult;
    }

}