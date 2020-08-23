<template>
    <div class="bestiary">
        <h2>Bestiary</h2>
        <MonsterCard
          v-for="(monster, index) in monsters"
          v-bind:monster="monster"
          :key="index"/>
    </div>
</template>

<script>
import MonsterCard from './MonsterCard.vue';

export default {
  data() {
    return {
      monsters: this.initMonsters(),
    };
  },
  components: {
    MonsterCard,
  },
  methods: {
    initMonsters() {
      const monsters = [];

      monsters.push({
        name: 'Goblin', level: 1, pv: 3, atk: 2, def: 1, ini: 1,
      });
      monsters.push({
        name: 'Orc', level: 1, pv: 5, atk: 3, def: 5, ini: 1,
      });

      this.$emit('init-bestiary', monsters);
      return monsters;
    },
  },
};
</script>
