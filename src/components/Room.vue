<template>
    <div id="room" class="room">
        <h2>Room</h2>
        <button v-if="enemies.length === 0" v-on:click="openTheDoor">
          Open the door !!!
        </button>
        <div v-for="(enemy, index) in enemies" v-bind:key="index" class="enemy">
            <MonsterCard v-bind:monster="enemy"/>
            <button v-on:click="playerAttack(index)">
              Attack this {{enemy.name}}
            </button>
        </div>
    </div>
</template>

<script>
import bus from '../main';
import MonsterCard from './MonsterCard.vue';

export default {
  data() {
    return {
      enemies: this.initEnemies(),
    };
  },
  components: {
    MonsterCard,
  },
  methods: {
    initEnemies() {
      return [];
    },
    openTheDoor() {
      for (let i = 0; i < this.$parent.hero.level; i += 1) {
        const index = Math.floor((Math.random() * this.$parent.monsters.length));
        const monster = this.$parent.monsters[index];
        this.enemies.push({ ...monster });
      }
    },
    playerAttack(enemyIndex) {
      const dmg = this.$parent.hero.atk - this.enemies[enemyIndex].def;
      this.enemies[enemyIndex].pv -= dmg;
      if (this.enemies[enemyIndex].pv <= 0) {
        bus.$emit('hero-gain-exp', this.enemies[enemyIndex].pts);
        this.enemies.splice(enemyIndex, 1);
      }
    },
  },
};
</script>
