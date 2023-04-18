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
    attack(index, otherPokemon) {
        if (this.skills[index].requiredMagic > this.magic) {
            return `${Pokemon} doesn't have enough magic to use this skill!`
        }
        else {
            return `The attack was successful : Your pokemon has now ${this.magic - this.skills[index].requiredMagic} magic left and ${otherPokemon.name} has ${otherPokemon.health - this.skills[index].damage} health!`
        }
    }
    getMagic(moreMagic) {
        return `Your pokemon now has ${this.magic + moreMagic} magic`
    }
}

class AttackSkill {
    constructor(attackName, damage, requiredMagic) {
        this.attackName = attackName,
            this.damage = damage,
            this.requiredMagic = requiredMagic
    }
}

const pikatchu = new Pokemon("pikatchu", 100, 100);
const bulbasaur = new Pokemon("bulbasaur", 100, 100)

const lightning = new AttackSkill("lightning", 90, 10)
const fire = new AttackSkill("fire", 99, 20)
pikatchu.learnAttackSkill(lightning)
pikatchu.learnAttackSkill(fire)


console.log(pikatchu);
console.log(pikatchu.showStatus());
console.log(lightning);
console.log(pikatchu.attack(1, bulbasaur));
console.log(bulbasaur.getMagic(50));