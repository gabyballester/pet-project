<template>
  <div class="app" >
    <!-- <base-header /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/scss/index.scss";

export default {
  name: "app",
  components: {
  },
  computed: {
    hasMode() {
      return JSON.parse(localStorage.getItem("darkMode"));
    },
  },
  methods: {
    checkModeOnCreated() {
      if (this.hasMode === null) {
        this.resetMode();
      } else {
        this.setMode(this.hasMode);
      }
    }
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
}
</style>
