<template>
  <div class="hero">
    <h2>Hero</h2>
    <div>
      <h3>{{hero.name}} - Level:{{hero.level}} ({{hero.exp}}/{{hero.nextLevel}} exp)</h3>
      <div v-html="getHeroStatsDescription"></div>
    </div>
  </div>
</template>

<script>
import bus from '../main';

export default {
  data() {
    return {
      hero: this.initHero(),
    };
  },
  created() {
    bus.$on('hero-gain-exp', (pts) => {
      this.hero.exp += pts;
      if (this.hero.exp >= this.hero.nextLevel) {
        this.hero.level += 1;
        this.hero.exp -= this.hero.nextLevel;
        this.hero.nextLevel = Math.round((4 * (this.hero.level ** 3)) / 5);
      }
    });
  },
  methods: {
    initHero() {
      const hero = {
        name: 'Don John',
        level: 1,
        nextLevel: 1,
        exp: 0,
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
