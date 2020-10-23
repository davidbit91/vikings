// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack (){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - 50;
    }
}


// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health, strength);
        this.name = "Harald";
    }

    receiveDamage(damage){
        this.health = this.health - damage;

        if(this.health <= 0){
            return this.name + " has died in act of combat";
        }else{
            return this.name + " has received "+ damage + " points of damage";
        }
    }

    battleCry(){
        return "Odin Owns You All!";
    }

}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health,strength);
    }

    receiveDamage(damage){
        this.health = this.health - damage;

        if(this.health <= 0){
            return "A Saxon has died in combat";
        }else{
            return "A Saxon has received "+damage+ " points of damage";
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [ ];
        this.saxonArmy = [ ];
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        if(this.saxonArmy[0].health <=0 ){
            this.saxonArmy.pop();
            return "A Saxon has died in combat";
        }
    }
    saxonAttack(){
        this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

        if(this.vikingArmy[0].health <=0 ){
            this.vikingArmy.pop();
            return "A Saxon has died in combat";
        }else{
            return this.vikingArmy[0].name + " has received "+this.saxonArmy[0].strength + " points of damage";
        }
    }
    showStatus(){
        if(this.vikingArmy.length > this.saxonArmy){
            return "Vikings have won the war of the century!";
        }else if (this.vikingArmy.length === this.saxonArmy.length){
            return "Vikings and Saxons are still in the thick of battle.";
        }
        else{
            return "Saxons have fought for their lives and survive another day...";
        }
    }
}
