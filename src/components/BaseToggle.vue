<template>
  <div class="icon-container" :class="{ dark: isDark }" @click="changeMode">
    <icon class="icon" icon="moon" v-if="isDark" />
    <icon class="icon" icon="sun" v-else />
    <span> Modo {{ showMode }} </span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("darkModeModule", ["changeMode"]),
  },
  computed: {
    ...mapGetters("darkModeModule", ["isDark"]),
    showMode() {
      return this.isDark ? "Oscuro" : "Claro";
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  // border: 3px solid #2e508d;
  cursor: pointer;
  color: #0938af;
  font-weight: 900;
}

.dark {
  // border: 2px solid yellow;
  background: unset;
  color: yellow;
}

span {
  text-transform: capitalize;
}

</style>
