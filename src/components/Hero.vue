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
  data() {
    return {
      hero: this.initHero(),
    };
  },
  methods: {
    initHero() {
      const hero = {
        level: 1,
        pv: this.$parent.rollDice(1, 20) + 6,
        atk: this.$parent.rollDice(1, 6) + 4,
        def: this.$parent.rollDice(1, 6) + 3,
        ini: this.$parent.rollDice(1, 6) + 1,
      };

      this.$emit('init-hero', hero);
      return hero;
    },
    getHero() {
      return this.hero;
    },
  },
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
