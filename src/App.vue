<template>
  <div class="app" :class="{ dark: isDark }">
    <!-- <base-header /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import "./assets/scss/index.scss"


export default {
  name: "app",
  components: {
    // BaseHeader,

  },
  created() {
    if (this.hasMode === null) {
      this.resetMode();
    } else {
      this.setMode(this.hasMode);
    }
  },
  computed: {
    ...mapGetters("darkModeModule", ["isDark"]),
    hasMode() {
      return JSON.parse(localStorage.getItem("darkMode"));
    },
  },
  methods: {
    ...mapActions("darkModeModule", ["setMode", "resetMode"]),
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  transition: background 0.3s ease-in-out;
}

.dark {
  background-color: #192734;
  color: #f3f3f3;
}
</style>
