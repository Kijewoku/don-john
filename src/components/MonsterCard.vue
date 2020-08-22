<template>
    <div class="monster-card">
        <h3>{{monster.name}}</h3>
        <p>
            <b>PV:</b> {{monster.pv}}
        </p>
        <p>
            <b>Atk:</b> {{monster.atk}} - <b>Def:</b> {{monster.def}} - <b>Ini:</b> {{monster.ini}}
        </p>
    </div>
</template>

<script>
export default {
  props: ['monster'],
};
</script>
