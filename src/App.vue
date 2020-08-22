<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TopNav
      v-bind:game-started="gameStarted"
      v-on:start-game="start"
    />
    <section v-if="gameStarted">
      <Hero
      v-bind:hero="hero"
    />
    <Bestiary
      v-bind:monsters="monsters"
    />
    <Room
      v-bind:enemies="enemies"
      v-on:open-the-door="openTheDoor"
      v-on:player-attack="playerAttack"
    />
    </section>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue';
import Hero from './components/Hero.vue';
import Bestiary from './components/Bestiary.vue';
import Room from './components/Room.vue';

export default {
  name: 'DonJohn',
  components: {
    TopNav,
    Hero,
    Bestiary,
    Room,
  },
  data() {
    return {
      title: 'Don John',
      gameStarted: false,
      hero: {
        name: 'Don John',
        level: 1,
        pv: 0,
        atk: 0,
        def: 0,
        ini: 0,
      },
      monsters: [],
      enemies: [],
    };
  },
  methods: {
    start() {
      this.initHero();
      this.initBestiary();
      this.gameStarted = true;
    },
    openTheDoor() {
      for (let i = 0; i < this.hero.level; i += 1) {
        const index = Math.floor((Math.random() * this.monsters.length));
        const monster = this.monsters[index];
        this.enemies.push({ ...monster });
      }
    },
    addMonster(name, level, pv, atk, def, ini) {
      this.monsters.push({
        name, level, pv, atk, def, ini,
      });
    },
    initBestiary() {
      this.monsters = [];
      // name, level, pv, atk, def, ini
      this.addMonster('Goblin', 1, 3, 2, 1, 1);
      this.addMonster('Orc', 1, 5, 3, 5, 1);
    },
    initHero() {
      this.hero.pv = this.rollDice(1, 20) + 6;
      this.hero.atk = this.rollDice(1, 6) + 4;
      this.hero.def = this.rollDice(1, 6) + 3;
      this.hero.ini = this.rollDice(1, 6) + 1;
    },
    rollDice(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
    },
    playerAttack(enemyIndex) {
      const dmg = this.hero.atk - this.enemies[enemyIndex].def;
      this.enemies[enemyIndex].pv -= dmg;
      if (this.enemies[enemyIndex].pv <= 0) {
        this.enemies.splice(enemyIndex, 1);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2, h3 {
    margin: 0;
}

section {
    display: flex;
}

section > div {
    margin: 10px;
    padding: 20px;
    outline: 1px solid;
}

.enemy {
    margin: 5px;
    padding: 5px;
    outline: 1px solid red;
}
</style>
