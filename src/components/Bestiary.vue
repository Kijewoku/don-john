<template>
    <div class="bestiary">
        <h2>Bestiary</h2>
        <monster-card v-for="(monster, index) in monsters"
            v-bind:monster="monster"
            :key="index"
        ></monster-card>
    </div>
</template>

<script>
import MonsterCard from './MonsterCard.vue';

export default {
  props: ['monsters'],
  components: {
    MonsterCard,
  },
  methods: {
    getMonsterStatCard(monster) {
      this.$emit('get-monster-stat-card', monster);
    },
  },
};
</script>
