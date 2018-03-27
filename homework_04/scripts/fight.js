var hunter = new Champion({ name: "Rexxar", attack: 10, hitpoints: 60 });
var beast = new Monster({ name: "King Krush", attack: 8, hitpoints: 80 });

function fight(fighter1, fighter2) {
    while (true) {
        var random = Math.random() >= 0.5;
        var newrandom = Math.random() >= 0.5;
        if (random) {
            if (fighter2.isAlive()) {
                console.log(fighter1.name + " is attacking " + fighter2.name);
                fighter1.fight(fighter2);
                if (fighter1 instanceof Champion) {
                    if (newrandom) {
                        console.log(`${fighter1.name} is healing.`);
                        fighter1.heal();
                    } else {
                        console.log(`${fighter1.name} is defencing.`);
                        fighter1.defence();
                    }
                } else {
                    if (newrandom) {
                        console.log(`${fighter1.name} is enarging.`);
                        fighter1.enrage();
                    } else {
                        console.log(`${fighter1.name} is fury.`);
                        fighter1.fury();
                    }
                }
                console.log(fighter2.name + " HP = " + fighter2.getHitpoints());
            } else {
                console.log(`${fighter1.name} wins this fight.
                ${fighter1.name} hitpoint ${fighter1.getHitpoints()}
                ${fighter1.name} total hitpoint ${fighter1.getTotalHitpoints()}
                ${fighter1.name} attack ${fighter1.getAttack()}`);
                break;
            }
        } else {
            if (fighter1.isAlive()) {
                console.log(fighter2.name + " is attacking " + fighter1.name);
                fighter2.fight(fighter1);
                if (fighter2 instanceof Monster) {
                    if (newrandom) {
                        console.log(`${fighter2.name} is enarging.`);
                        fighter2.enrage();
                    } else {
                        console.log(`${fighter2.name} is fury.`);
                        fighter2.fury();
                    }
                } else {
                    if (newrandom) {
                        console.log(`${fighter2.name} is healing.`);
                        fighter2.heal();
                    } else {
                        console.log(`${fighter2.name} is defencing.`);
                        fighter2.defence();
                    }
                }
                console.log(fighter1.name + " HP = " + fighter1.getHitpoints());
            } else {
                console.log(`${fighter2.name} wins this fight.
                ${fighter2.name} hitpoint ${fighter2.getHitpoints()}
                ${fighter2.name} total hitpoint ${fighter2.getTotalHitpoints()}
                ${fighter2.name} attack ${fighter2.getAttack()}`);
                break;
            }
        }
    }
}