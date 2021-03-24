<template>
  <div class="icon-container" :class="{ dark: isDark }" @click="changeMode">
    <span> {{ $t("dark-mode.mode") }}: </span>
    <icon class="icon" icon="moon" v-if="isDark" />
    <icon class="icon" icon="sun" v-else />
    <span> {{ $t(showMode) }} </span>
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
      return this.isDark ? "dark-mode.dark" : "dark-mode.light";
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  cursor: pointer;
  color: #0938af;
  font-weight: 900;
  .icon {
    margin: 0 4px;
  }
}

.dark {
  background: unset;
  color: yellow;
}

span {
  text-transform: capitalize;
}
</style>
