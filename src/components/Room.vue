<template>
    <div id="room" class="room">
        <h2>Room</h2>
        <button v-if="enemies.length === 0" v-on:click="openTheDoor">Open the door !!!</button>
        <div v-for="(enemy, index) in enemies" v-bind:key="index" class="enemy">
            <monster-card
                v-bind:monster="enemy"
            ></monster-card>
            <button v-on:click="playerAttack(index)">Attack this {{enemy.name}}</button>
        </div>
    </div>
</template>

<script>
import MonsterCard from './MonsterCard.vue';

export default {
  props: ['enemies'],
  components: {
    MonsterCard,
  },
  methods: {
    openTheDoor() {
      this.$emit('open-the-door');
    },
    playerAttack(enemyIndex) {
      this.$emit('player-attack', enemyIndex);
    },
  },
};
</script>
