<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TopNav
      v-bind:game-started="gameStarted"
      v-on:start-game="start"
    />
    <section v-if="gameStarted">
    <Hero
      v-on:init-hero="Object.assign(hero, $event)"
    />
    <Bestiary
      v-on:init-bestiary="monsters = $event"
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
      hero: {},
      monsters: [],
      enemies: [],
    };
  },
  methods: {
    start() {
      this.gameStarted = true;
    },
    openTheDoor() {
      for (let i = 0; i < this.hero.level; i += 1) {
        const index = Math.floor((Math.random() * this.monsters.length));
        const monster = this.monsters[index];
        this.enemies.push({ ...monster });
      }
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
