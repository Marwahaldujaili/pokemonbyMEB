class Pokemon {
    constructor(name, health, magic, skills) {
        this.name = name,
            this.health = health,
            this.magic = magic,
            this.skills = []
    }
    learnAttackSkill(attackSkill) {
        return this.skills.push(attackSkill)
    }
    showStatus() {
        return `Your pokemon has ${this.health} health and ${this.magic} magic left`
    }
}

class AttackSkill {
    constructor(attackName, damage, requiredMagic) {
        this.attackName = attackName,
            this.damage = damage,
            this.requiredMagic = requiredMagic
    }
}

const pikatchu = new Pokemon("pikatchu", 100, 50);

const lightning = new AttackSkill("lightning", 90, 10)
const fire = new AttackSkill("fire", 99, 20)
pikatchu.learnAttackSkill(lightning)
pikatchu.learnAttackSkill(fire)


console.log(pikatchu);
console.log(pikatchu.showStatus());
console.log(lightning);
