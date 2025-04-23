/* eslint-disable no-unused-vars, no-throw-literal*/
//constructor function

function Pokemon(name, health, attackBonus) {
  this.name = name;
  this.health = health;
  this.attackBonus = attackBonus;
}

Pokemon.prototype.biteAttack = function () {
  return this.attackBonus + 2;
};

Pokemon.prototype.isDefeated = function () {
  return this.health <= 0;
};

pikachu = new Pokemon("Pikachu", 250, 4);
charizard = new Pokemon("Charizard", 300, 5);

console.log(pikachu.name);
console.log(pikachu.health);
console.log(pikachu.attackBonus);
console.log(pikachu.biteAttack());
console.log(pikachu.isDefeated());

function simulateBattle(pokemon1, pokemon2, firstAttacker) {
  let attacker, defender;

  //Determine initial attacker and defender
  if (pokemon1.name === firstAttacker) {
    attacker = pokemon1;
    defender = pokemon2;
  } else if (pokemon2.name === firstAttacker) {
    attacker = pokemon2;
    defender = pokemon1;
  }

  //Battle loop
  while (true) {
    defender.health -= attacker.biteAttack();
    if (defender.isDefeated()) {
      return `${attacker.name} Wins!`;
    }
    [attacker, defender] = [defender, attacker];
  }
}
