var hunter = new Champion({ name: "Rexxar", attack: 10, hitpoints: 60 });
var beast = new Monster({ name: "King Krush", attack: 8, hitpoints: 80 });

function fight(champion, monster) {
    while (true) {
        var random = Math.random() >= 0.5;
        var newrandom = Math.random() >= 0.5;
        if (random) {
            if (monster.isAlive()) {
                console.log(champion.name + " is attacking " + monster.name);
                champion.fight(monster);
                if (newrandom) {
                    console.log(`${champion.name} is healing.`);
                    champion.heal();
                } else {
                    console.log(`${champion.name} is defencing.`);
                    champion.defence();
                }
                console.log(monster.name + " HP = " + monster.getHitpoints());
            } else {
                console.log(`${champion.name} wins this fight.\n
                ${champion.name} hitpoint ${champion.getHitpoints()}\n
                ${champion.name} total hitpoint ${champion.getTotalHitpoints()}\n
                ${champion.name} attack ${champion.getAttack()}`);
                break;
            }
        } else {
            if (champion.isAlive()) {
                console.log(monster.name + " is attacking " + champion.name);
                monster.fight(champion);
                if (newrandom) {
                    console.log(`${monster.name} is enarging.`);
                    monster.enrage();
                } else {
                    console.log(`${champion.name} is fury.`);
                    monster.fury();
                }
                console.log(champion.name + " HP = " + champion.getHitpoints());
            } else {
                console.log(`${monster.name} wins this fight.\n
                ${monster.name} hitpoint ${monster.getHitpoints()}\n
                ${monster.name} total hitpoint ${monster.getTotalHitpoints()}\n
                ${monster.name} attack ${monster.getAttack()}`);
                break;
            }
        }
    }
}