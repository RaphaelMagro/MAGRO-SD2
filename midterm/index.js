// ─────────────────────────────────────────────────────────────
//  ELEMENT CLASH  —  2 Player Turn Based


//  TYPE COUNTERS:
//    Damage   beats Speed
//    Speed    beats Accuracy
//    Accuracy beats Evasion
//    Evasion  beats Damage
// ─────────────────────────────────────────────────────────────

// ── Type counter map ──────────────────────────────────────────
const TYPE_BEATS = {
  Damage:   "Speed",
  Speed:    "Accuracy",
  Accuracy: "Evasion",
  Evasion:  "Damage",
};

function getTypeMessage(attackerType, defenderType) {
  if (TYPE_BEATS[attackerType] === defenderType) return "It's super effective! (x1.5 damage)";
  if (TYPE_BEATS[defenderType] === attackerType) return "It's not very effective... (x0.5 damage)";
  return null;
}

function getTypeMultiplier(attackerType, defenderType) {
  if (TYPE_BEATS[attackerType] === defenderType) return 1.5;
  if (TYPE_BEATS[defenderType] === attackerType) return 0.5;
  return 1;
}

const HP_STYLE = "color: #16a34a; font-weight: 700;";
const MP_STYLE = "color: #2563eb; font-weight: 700;";
const RESET_STYLE = "color: inherit; font-weight: normal;";
const ERROR_STYLE = "color: #dc2626; font-weight: 800; font-size: 14px;";
const WIN_STYLE = "color: #eab308; font-weight: 900; font-size: 16px;";
const TYPE_STYLES = {
  Damage: "color: #dc2626; font-weight: 800;",
  Accuracy: "color: #16a34a; font-weight: 800;",
  Speed: "color: #f97316; font-weight: 800;",
  Evasion: "color: #7c3aed; font-weight: 800;",
};

function getTypeStyle(type) {
  return TYPE_STYLES[type] || RESET_STYLE;
}

function logActionError(message) {
  console.log(`%c${message}`, ERROR_STYLE);
}

function logAttackResourceUpdate(attacker, defender) {
  console.log(
    `${attacker.name} has %cMP: ${attacker.mana}/${attacker.maxMana}%c left! ${defender.name} has %cHP: ${defender.health}/${defender.maxHealth}%c left!`,
    MP_STYLE,
    RESET_STYLE,
    HP_STYLE,
    RESET_STYLE
  );
}

function logStatusLine(fighter) {
  console.log(
    `  ${fighter.name} (%c${fighter.type}%c)  %cHP: ${fighter.health}/${fighter.maxHealth}%c  %cMP: ${fighter.mana}/${fighter.maxMana}%c`,
    getTypeStyle(fighter.type),
    RESET_STYLE,
    HP_STYLE,
    RESET_STYLE,
    MP_STYLE,
    RESET_STYLE
  );
}

// ── Fighter Class ─────────────────────────────────────────────
class Fighter {
  constructor(name, type, level, health, mana) {
    this.name      = name;
    this.type      = type;
    this.level     = level;
    this.health    = health * level;
    this.maxHealth = health * level;
    this.mana      = mana;
    this.maxMana   = mana;
    this.hpPotionsUsed = 0;
    this.manaPotionsUsed = 0;

    // ── Basic Attack (always available, restores 20 mana) ────
    this.basicAttack = function (target) {
      let damage = Math.floor(10 * this.level * getTypeMultiplier(this.type, target.type));
      let typeMsg = getTypeMessage(this.type, target.type);

      console.log(`${this.name} used Basic Attack!`);
      if (typeMsg) console.log(typeMsg);

      target.health -= damage;
      if (target.health < 0) target.health = 0;
      console.log(`${target.name} took ${damage} damage!`);

      // Restore 20 mana, capped at maxMana
      if (this.mana < this.maxMana) {
        if (this.mana + 20 >= this.maxMana) {
          this.mana = this.maxMana;
        } else {
          this.mana += 20;
        }
      }

      logAttackResourceUpdate(this, target);
    };

    // ── Skill 1 (costs 50 mana, deals 20 * level damage) ────
    this.skill1 = function (target) {
      if (this.mana < 50) {
        logActionError(
          `${this.name} does not have enough mana to use ${this.skill1Name}! Current mana: ${this.mana}`
        );
        return false;
      }

      let damage = Math.floor(20 * this.level * getTypeMultiplier(this.type, target.type));
      let typeMsg = getTypeMessage(this.type, target.type);

      console.log(`${this.name} used ${this.skill1Name}!`);
      if (typeMsg) console.log(typeMsg);

      target.health -= damage;
      if (target.health < 0) target.health = 0;
      this.mana -= 50;

      console.log(`${target.name} took ${damage} damage!`);
      logAttackResourceUpdate(this, target);
      return true;
    };

    // ── Skill 2 (costs 70 mana, deals 30 * level damage) ────
    this.skill2 = function (target) {
      if (this.mana < 70) {
        logActionError(
          `${this.name} does not have enough mana to use ${this.skill2Name}! Current mana: ${this.mana}`
        );
        return false;
      }

      let damage = Math.floor(30 * this.level * getTypeMultiplier(this.type, target.type));
      let typeMsg = getTypeMessage(this.type, target.type);

      console.log(`${this.name} used ${this.skill2Name}!`);
      if (typeMsg) console.log(typeMsg);

      target.health -= damage;
      if (target.health < 0) target.health = 0;
      this.mana -= 70;

      console.log(`${target.name} took ${damage} damage!`);
      logAttackResourceUpdate(this, target);
      return true;
    };

    // ── Heal Potion (restores 150 HP, capped at maxHealth) ──
    this.healPotion = function () {
      if (this.hpPotionsUsed >= 1) {
        logActionError(`${this.name} has already used the maximum HP potions!`);
        return false;
      }
      if (this.health >= this.maxHealth) {
        logActionError(
          `${this.name} is already at full health! Current health: ${this.health}`
        );
        return false;
      } else if (this.health + 150 >= this.maxHealth) {
        this.health = this.maxHealth;
        console.log(
          `${this.name} used Heal Potion! ${this.name} is now fully healed! Current health: ${this.health}/${this.maxHealth}`
        );
      } else {
        this.health += 150;
        console.log(
          `${this.name} used Heal Potion! ${this.name} healed 150 health points! Current health: ${this.health}/${this.maxHealth}`
        );
      }
      this.hpPotionsUsed++;
      return true;
    };

    // ── Mana Potion (restores 50 mana, capped at maxMana) ───
    this.manaPotion = function () {
      if (this.manaPotionsUsed >= 2) {
        logActionError(`${this.name} has already used the maximum mana potions!`);
        return false;
      }
      if (this.mana >= this.maxMana) {
        logActionError(
          `${this.name} already has full mana! Current mana: ${this.mana}`
        );
        return false;
      } else if (this.mana + 50 >= this.maxMana) {
        this.mana = this.maxMana;
        console.log(
          `${this.name} used %cMana Potion%c! Mana fully restored! Current %cMP: ${this.mana}/${this.maxMana}%c`,
          MP_STYLE,
          RESET_STYLE,
          MP_STYLE,
          RESET_STYLE
        );
      } else {
        this.mana += 50;
        console.log(
          `${this.name} used %cMana Potion%c! ${this.name} restored 50 mana! Current %cMP: ${this.mana}/${this.maxMana}%c`,
          MP_STYLE,
          RESET_STYLE,
          MP_STYLE,
          RESET_STYLE
        );
      }
      this.manaPotionsUsed++;
      return true;
    };

    this.isAlive = function () {
      return this.health > 0;
    };
  }
}

// ── Character Roster ─────────────────────────────────────────val
const CHARACTERS = [
  {
    id: 1,
    name:       "Striker",
    type:       "Damage",
    flavor:     "A powerhouse who hits like a freight train.",
    skill1Name: "Titan Smash",
    skill2Name: "Iron Avalanche",
    health:     120,
    mana:       80,
  },
  {
    id: 2,
    name:       "Phantom",
    type:       "Evasion",
    flavor:     "An elusive spectre — attacks slip right through.",
    skill1Name: "Void Step",
    skill2Name: "Soul Drain",
    health:     92,
    mana:       100,
  },
  {
    id: 3,
    name:       "Marksman",
    type:       "Accuracy",
    flavor:     "Unerring aim — every shot finds its mark.",
    skill1Name: "Bullseye",
    skill2Name: "Rapid Volley",
    health:     102,
    mana:       90,
  },
  {
    id: 4,
    name:       "Blur",
    type:       "Speed",
    flavor:     "Blink and you'll miss it — lightning made flesh.",
    skill1Name: "Sonic Fang",
    skill2Name: "Afterimage Rush",
    health:     96,
    mana:       90,
  },
];

// ── Helpers ───────────────────────────────────────────────────
function showRoster() {
  console.log("\nChoose your character:");
  console.log("────────────────────────────────────────────");
  CHARACTERS.forEach(c => {
    console.log(
      `[${c.id}] ${c.name} (%c${c.type}%c)`,
      getTypeStyle(c.type),
      RESET_STYLE
    );
    console.log(`    ${c.flavor}`);
    console.log(`    HP: ${c.health * 5}  Mana: ${c.mana}`);
    console.log(`    Skills: Basic Attack | ${c.skill1Name} (50mp) | ${c.skill2Name} (70mp)`);
    console.log("");
  });
  console.log("────────────────────────────────────────────\n");
}

function pickCharacter(playerLabel) {
  showRoster();
  while (true) {
    let input = prompt(`${playerLabel} — Enter character number (1-4):`);
    let choice = parseInt(input);
    let template = CHARACTERS.find(c => c.id === choice);
    if (template) {
      let fighter = new Fighter(
        template.name,
        template.type,
        5,                  // level 5, same as activity.js
        template.health,
        template.mana
      );
      fighter.skill1Name = template.skill1Name;
      fighter.skill2Name = template.skill2Name;
      return fighter;
    }
    console.log("Invalid choice. Please enter 1, 2, 3, or 4.");
  }
}

function showStatus(p1, p2) {
  console.log("\n════════════════════════════════════════════");
  logStatusLine(p1);
  logStatusLine(p2);
  console.log("════════════════════════════════════════════\n");
}

function showMenu(attacker) {
  console.log(`${attacker.name}'s turn! Choose an action:`);
  console.log(`  [1] Basic Attack          (free, restores 20 mana)`);
  console.log(`  [2] ${attacker.skill1Name.padEnd(24)}(costs 50 mana)`);
  console.log(`  [3] ${attacker.skill2Name.padEnd(24)}(costs 70 mana)`);
  console.log(`  [4] Heal Potion           (restores 150 HP)`);
  console.log(`  [5] Mana Potion           (restores 50 mana)`);
}

function doTurn(attacker, defender) {
  showMenu(attacker);

  while (true) {
    let input = prompt(`${attacker.name} — Enter action (1-5):`);
    let choice = parseInt(input);
    let success = false;

    if (choice === 1) {
      attacker.basicAttack(defender);
      success = true;
    } else if (choice === 2) {
      success = attacker.skill1(defender);
    } else if (choice === 3) {
      success = attacker.skill2(defender);
    } else if (choice === 4) {
      success = attacker.healPotion();
    } else if (choice === 5) {
      success = attacker.manaPotion();
    } else {
      console.log("Invalid input. Please enter 1, 2, 3, 4, or 5.");
      continue;
    }

    // If the move failed (not enough mana / already full), re-ask
    if (success === false) {
      showMenu(attacker);
      continue;
    }

    break;
  }
}

// ── Main Game ─────────────────────────────────────────────────
function startGame() {
  console.log("\n════════════════════════════════════════════");
  console.log("        ⚔️  ELEMENT CLASH  ⚔️  2 Player");
  console.log("  Type Counters:");
  console.log("  Damage → Speed → Accuracy → Evasion → Damage");
  console.log("════════════════════════════════════════════");

  console.log("\nPlayer 1, pick your fighter!");
  let player1 = pickCharacter("Player 1");
  console.log(`Player 1 chose ${player1.name}!`);

  console.log("\nPlayer 2, pick your fighter!");
  let player2 = pickCharacter("Player 2");
  console.log(`Player 2 chose ${player2.name}!`);

  // Type advantage heads-up before battle
  let p1vsP2 = getTypeMessage(player1.type, player2.type);
  let p2vsP1 = getTypeMessage(player2.type, player1.type);
  if (p1vsP2) console.log(`\nMatchup note — Player 1 attacking: ${p1vsP2}`);
  if (p2vsP1) console.log(`Matchup note — Player 2 attacking: ${p2vsP1}`);

  console.log("\nBattle start!");

  let turn = 1;

  while (player1.isAlive() && player2.isAlive()) {
    console.log(`\n──────── Turn ${turn} ────────`);
    showStatus(player1, player2);

    // Player 1 acts
    console.log("--- Player 1's turn ---");
    doTurn(player1, player2);
    if (!player2.isAlive()) break;

    // Player 2 acts
    console.log("\n--- Player 2's turn ---");
    doTurn(player2, player1);
    if (!player1.isAlive()) break;

    turn++;
  }

  // Result
  console.log("\n════════════════════════════════════════════");
  if (!player1.isAlive() && !player2.isAlive()) {
    console.log("It's a draw! Both fighters fell!");
  } else if (!player2.isAlive()) {
    console.log(`%c🏆 Player 1's ${player1.name} wins!`, WIN_STYLE);
  } else {
    console.log(`%c🏆 Player 2's ${player2.name} wins!`, WIN_STYLE);
  }
  console.log(`Final HP — ${player1.name}: ${player1.health}/${player1.maxHealth}  |  ${player2.name}: ${player2.health}/${player2.maxHealth}`);
  console.log("════════════════════════════════════════════");
  console.log("\nType startGame() to play again!");
}
