<template>
    <button v-if="!gameStarted" v-on:click="startGame">start</button>
</template>

<script>
export default {
  props: ['game-started'],
  methods: {
    startGame() {
      this.$emit('start-game');
    },
  },
};
</script>
