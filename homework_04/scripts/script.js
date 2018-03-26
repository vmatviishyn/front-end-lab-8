function assign(obj) {
    var newObj = obj;
    var argsArray = Array.prototype.slice.call(arguments);
    var objectsArray = argsArray.slice(1);

    for (var j = 0; j < objectsArray.length; j++) {
        for (var key in objectsArray[j]) {
            if (!newObj.hasOwnProperty(key)) {
                newObj[key] = objectsArray[j][key];
            } else {
                newObj[key] = objectsArray[j][key];
            }
        }
    }
    return newObj;
}


function Fighter({ name, attack, hitpoints }) {
    this.name = name;
    this.attack = attack;
    this.hitpoints = hitpoints;
    this.curentHitpoints = hitpoints;
}

Fighter.prototype.getHitpoints = function() {
    return this.curentHitpoints;
}

Fighter.prototype.setHitpoints = function(value) {
    this.curentHitpoints = value;
}

Fighter.prototype.getTotalHitpoints = function() {
    return this.hitpoints;
}

Fighter.prototype.setTotalHitpoints = function(value) {
    this.hitpoints = value;
}

Fighter.prototype.getAttack = function() {
    return this.attack;
}

Fighter.prototype.setAttack = function(value) {
    this.attack = value;
}

Fighter.prototype.fight = function(enemy) {
    if (enemy.isAlive()) {
        enemy.setHitpoints(enemy.curentHitpoints - this.attack);
    }
    if (!enemy.isAlive()) {
        console.log(enemy.name + " is dead!");
        return false;
    }
}

Fighter.prototype.isAlive = function() {
    if (this.curentHitpoints > 0) {
        return true;
    } else if (this.curentHitpoints == 0) {
        return false;
    } else {
        this.curentHitpoints = 0;
        return false;
    }
}

function Champion({ name, attack, hitpoints }) {
    this.name = name;
    this.attack = attack;
    this.hitpoints = hitpoints;
    this.curentHitpoints = hitpoints;
    this.block = false;

    this.heal = function() {
        if (this.curentHitpoints < this.hitpoints) {
            this.setHitpoints(this.hitpoints + 5);
        } else {
            return false;
        }
    }

    this.defence = function() {
        this.setTotalHitpoints(this.hitpoints + 1);
        this.block = true;
        return this.block;
    }

    this.update = function(enemy) {
        if (!enemy.isAlive()) {
            this.setAttack(this.attack + 1);
        }
    }

    this.fight = function(enemy) {
        if (!enemy.isAlive()) {
            return;
        } else {
            if (this.block == true) {
                console.log("blocked");
                this.block = false;
            } else {
                Fighter.prototype.fight.apply(this, arguments);
                this.update(enemy);
            }
        }
    }
}

Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Champion;

function Monster({ name, attack, hitpoints }) {
    this.name = name;
    this.attack = attack;
    this.hitpoints = hitpoints;
    this.curentHitpoints = hitpoints;
    this.enrageCount = 2;
    this.dd = this.attack * 2;
    this.normalDamage = this.attack;

    this.fight = function(enemy) {
        if (!enemy.isAlive()) {
            return;
        } else {
            if (this.enrageCount >= 0) {
                if (enemy.block == true) {
                    console.log("Blocked");
                    enemy.block = false;
                } else {
                    Fighter.prototype.fight.apply(this, arguments);
                    this.update(enemy);
                }
                this.enrageCount--;
            }
            if (this.enrageCount <= 0) {
                this.setAttack(this.normalDamage);
                this.enrageCount = 0;
            }
        }
    }

    this.enrage = function() {
        this.enrageCount = 2;
        this.attack = this.dd;
    }

    this.fury = function() {
        if (this.hitpoints <= 5 || this.curentHitpoints <= 5) {
            console.log("Cannot execute FURY. There is not enough hitpoints");
        } else {
            this.setTotalHitpoints(this.hitpoints - 5);
            this.setHitpoints(this.curentHitpoints - 5);
            this.setAttack(this.attack + 2);
        }
    }

    this.update = function(enemy) {
        if (!enemy.isAlive()) {
            var currentHPPerc = Math.floor((25 / 100) * enemy.hitpoints);
            this.setHitpoints(this.curentHitpoints + currentHPPerc);
            var totalHPPerc = Math.floor((10 / 100) * enemy.hitpoints);
            this.setTotalHitpoints(this.hitpoints + totalHPPerc);
        } else {
            return;
        }
    }
}

Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;