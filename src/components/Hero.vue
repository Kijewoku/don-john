<template>
    <div class="hero">
        <h2>Hero</h2>
        <div>
            <h3>{{hero.name}}</h3>
            <div v-html="getHeroStatsDescription"></div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['hero'],
  computed: {
    getHeroStatsDescription() {
      return `
                <p>
                    <b>PV:</b> ${this.hero.pv}
                </p>
                <p>
                    <b>Atk:</b> ${this.hero.atk} - 
                    <b>Def:</b> ${this.hero.def} - 
                    <b>Ini:</b> ${this.hero.ini}
                </p>
            `;
    },
  },
};
</script>
